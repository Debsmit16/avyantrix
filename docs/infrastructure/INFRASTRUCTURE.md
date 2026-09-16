# Avyantrix Infrastructure

Self-hosted production stack on Hostinger KVM 2 VPS.

## Architecture

```
Internet
  ├── workspace.avyantrix.com → Caddy → Nextcloud (Apache + PHP)
  ├── mail.avyantrix.com     → Caddy → Stalwart Mail (webmail/JMAP)
  ├── autoconfig.avyantrix.com → Caddy → Stalwart (client autoconfig)
  ├── status.avyantrix.com   → Caddy → Uptime Kuma
  └── Mail ports (direct)    → Stalwart: 25, 465, 587, 993, 4190

Internal (avy-internal network, not exposed):
  ├── PostgreSQL 16 (Nextcloud database)
  └── Redis 7.2 (Nextcloud cache + file locking)
```

## Services

| Container | Image | Purpose |
|-----------|-------|---------|
| avy-caddy | caddy:2.8.4-alpine | Reverse proxy, automatic HTTPS |
| avy-nextcloud-app | nextcloud:29.0.7-apache | Company workspace |
| avy-nextcloud-cron | nextcloud:29.0.7-apache | Background jobs (cron) |
| avy-postgres | postgres:16-alpine | Database |
| avy-redis | redis:7.2-alpine | Cache and locking |
| avy-stalwart-mail | stalwartlabs/stalwart:v0.16.21 | Mail server |
| avy-uptime-kuma | louislam/uptime-kuma:1.23.16-alpine | Monitoring |

## Domains

| Domain | Service |
|--------|---------|
| workspace.avyantrix.com | Nextcloud Hub |
| mail.avyantrix.com | Stalwart webmail / admin |
| autoconfig.avyantrix.com | Mail client autoconfig |
| status.avyantrix.com | Uptime Kuma monitoring |
| avyantrix.com | Vercel (separate, not on this VPS) |

## Ports (public)

| Port | Protocol | Service |
|------|----------|---------|
| 22 | TCP | SSH |
| 80 | TCP | HTTP (Caddy redirect) |
| 443 | TCP/UDP | HTTPS (Caddy) |
| 25 | TCP | SMTP |
| 465 | TCP | SMTPS |
| 587 | TCP | SMTP submission |
| 993 | TCP | IMAPS |
| 4190 | TCP | ManageSieve |

Ports **not** exposed: 5432 (PostgreSQL), 6379 (Redis).

## Docker Commands

```bash
cd /opt/avyantrix

# View status
docker compose ps

# View logs
docker compose logs -f [service]

# Restart a service
docker compose restart [service]

# Restart entire stack
docker compose down && docker compose up -d

# Pull updates and redeploy
docker compose pull && docker compose up -d
```

## Restart Procedures

1. Single service: `docker compose restart <service>`
2. Full stack: `docker compose down && docker compose up -d`
3. After config change: edit file, then `docker compose up -d`
4. VPS reboot: all containers use `restart: unless-stopped` and will auto-start

## Update Procedures

1. Review release notes for the target image version
2. `cd /opt/avyantrix && docker compose pull`
3. `docker compose up -d`
4. For Nextcloud: `docker exec -u 33 avy-nextcloud-app php occ upgrade`
5. Verify services via `docker compose ps` and HTTPS endpoints

## Backup Procedures

Automated daily at 03:00 UTC via cron.

```bash
# Manual backup
/opt/avyantrix/backups/scripts/backup.sh

# Backup location
/opt/avyantrix/backups/archives/daily/    # 7-day retention
/opt/avyantrix/backups/archives/weekly/   # 4-week retention
/opt/avyantrix/backups/archives/monthly/  # 3-month retention
```

Backups include: PostgreSQL dump, Nextcloud config + data, Stalwart config + data, infrastructure config, `.env` secrets.

**Important:** Local backups are not disaster recovery. Add an external backup target (S3, Backblaze, etc.).

## Restore Procedures

### PostgreSQL

```bash
/opt/avyantrix/backups/scripts/restore.sh /opt/avyantrix/backups/archives/daily/nextcloud_db_YYYYMMDD_HHMMSS.dump
```

### Nextcloud config

```bash
docker run --rm -v avyantrix_nextcloud_html:/nc_html -v /path/to/backup:/backup alpine \
  tar -xzf /backup/nextcloud_config_YYYYMMDD.tar.gz -C /nc_html
```

## User Creation

### Nextcloud

```bash
docker exec -u 33 avy-nextcloud-app php occ user:add <username>
docker exec -u 33 avy-nextcloud-app php occ user:add <username> --group admin  # for admin
```

### Mail (Stalwart)

Use the Stalwart admin panel at https://mail.avyantrix.com or the API:

```bash
# Via admin API (use credentials from /opt/avyantrix/.env)
curl -X POST -H "Content-Type: application/json" \
  -u "admin:<STALWART_ADMIN_PASSWORD>" \
  -d '{"type":"individual","name":"user","secrets":["password"],"emails":["user@avyantrix.com"],"roles":["user"]}' \
  http://localhost:8080/api/principal
```

### Nextcloud Mail client setup

Users configure Nextcloud Mail app with:
- IMAP: mail.avyantrix.com:993 (SSL)
- SMTP: mail.avyantrix.com:465 (SSL) or 587 (STARTTLS)

## Troubleshooting

| Issue | Check |
|-------|-------|
| HTTPS not working | `docker logs avy-caddy`, check DNS A record |
| Nextcloud slow | `docker exec -u 33 avy-nextcloud-app php occ status` |
| Mail not sending | Check port 25, SPF/DKIM/DMARC DNS, `docker logs avy-stalwart-mail` |
| Database connection | `docker exec avy-postgres pg_isready` |
| Redis connection | `docker exec avy-redis redis-cli -a $REDIS_PASSWORD ping` |
| Disk full | `df -h`, clean old backups, `docker system prune` |

## File Locations

```
/opt/avyantrix/
├── docker-compose.yml
├── .env                    # Secrets (chmod 600)
├── caddy/Caddyfile
├── backups/scripts/
│   ├── backup.sh
│   └── restore.sh
└── backups/archives/
```
