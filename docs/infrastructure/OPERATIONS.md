# Avyantrix Operations Guide

## Routine Maintenance

### Weekly
- Check `https://status.avyantrix.com` for service health
- Review disk usage: `df -h /`
- Check container status: `docker compose ps`

### Monthly
- Review and apply Docker image updates
- Verify backup integrity (run restore test on PostgreSQL)
- Review Uptime Kuma alert history
- Check mail deliverability (send test to mail-tester.com)

### Quarterly
- Rotate non-SSH secrets if policy requires
- Review UFW rules: `ufw status verbose`
- Prune unused Docker images: `docker image prune -a --filter "until=720h"`

## Backups

| Schedule | Time | Retention |
|----------|------|-----------|
| Daily | 03:00 UTC | 7 days |
| Weekly | Sunday (copy) | 4 weeks |
| Monthly | 1st (copy) | 3 months |

### What is backed up
- PostgreSQL database (Nextcloud)
- Nextcloud configuration and user data
- Stalwart configuration and mailbox data
- Docker Compose + Caddyfile
- `.env` secrets (stored separately with chmod 600)

### External backup (required for DR)
Local backups on the VPS disk are **not** disaster recovery. Configure one of:
- `rclone` to S3/Backblaze/Google Drive
- Hostinger VPS snapshot (weekly)
- Off-site rsync to another server

## Security

### SSH
- Key-only authentication (password auth disabled)
- Root login: prohibit-password (keys only)
- Config: `/etc/ssh/sshd_config.d/99-avyantrix.conf`

### Firewall (UFW)
- Default deny incoming
- Allowed: 22, 80, 443, 25, 465, 587, 993, 4190
- Check: `ufw status verbose`

### Secrets
- All secrets in `/opt/avyantrix/.env` (chmod 600)
- Never commit `.env` to git
- Mailbox passwords in `/opt/avyantrix/backups/.mailbox_credentials` (chmod 600)

### Automatic updates
- `unattended-upgrades` enabled for security patches

### Mail security
- SPF: `v=spf1 ip4:200.234.46.146 ~all`
- DKIM: selector `s1`, key in Stalwart config
- DMARC: `p=quarantine`
- PTR: `mail.avyantrix.com`
- No open relay (authentication required for submission)

## Monitoring

Uptime Kuma at `https://status.avyantrix.com`

Recommended monitors to configure:
- HTTPS: workspace.avyantrix.com, mail.avyantrix.com
- TCP: mail ports 25, 465, 587, 993
- Docker container health (via HTTP checks)
- Disk usage alert (>80%)

## Disaster Recovery

### Recovery order
1. Provision new VPS (or restore Hostinger snapshot)
2. Install Docker
3. Restore `/opt/avyantrix/` from backup
4. Restore `.env` from secure backup
5. `docker compose up -d`
6. Restore PostgreSQL: `./backups/scripts/restore.sh <dump>`
7. Restore Nextcloud/Stalwart data from tar archives
8. Verify DNS still points to correct IP
9. Test HTTPS, mail send/receive, Nextcloud login

### RTO/RPO targets (without external backup)
- RPO: up to 24 hours (daily backup)
- RTO: 2-4 hours manual restore

With external backup: RPO can be reduced to backup frequency.

## Upgrade Strategy

### Nextcloud
1. Backup first
2. Update image tag in docker-compose.yml
3. `docker compose pull && docker compose up -d`
4. `docker exec -u 33 avy-nextcloud-app php occ upgrade`
5. `docker exec -u 33 avy-nextcloud-app php occ app:update --all`

### Stalwart
1. Backup first
2. Update image tag (pin specific version, not `latest`)
3. `docker compose pull && docker compose up -d`
4. Check `docker logs avy-stalwart-mail`

### PostgreSQL
- Major version upgrades require `pg_dump` / `pg_restore` migration
- Do not change major version in-place

### General rule
- Always backup before upgrading
- Upgrade one service at a time
- Test in maintenance window
- Keep image versions pinned in docker-compose.yml

## Log Management

Docker log rotation configured:
- Max size: 20 MB per container
- Max files: 3

Caddy access log: `/var/log/caddy/access.log` (50 MB rotation, 3 files)

Backup log: `/var/log/avyantrix-backup.log`

## Resource Limits

| Service | Memory Limit |
|---------|-------------|
| Caddy | 300 MB |
| PostgreSQL | 1024 MB |
| Redis | 384 MB |
| Nextcloud app | 2048 MB |
| Nextcloud cron | 512 MB |
| Stalwart | 1024 MB |
| Uptime Kuma | 256 MB |

Total capped: ~5.5 GB of 8 GB RAM. Leaves headroom for OS and spikes.
