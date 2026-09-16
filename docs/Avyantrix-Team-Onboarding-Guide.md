# Avyantrix Team Onboarding Guide

**Version:** March 2026  
**Audience:** Avyantrix administrators  
**CONFIDENTIAL** — contains admin credentials. Store securely.

---

## Contents

- [Part A — Admin reference](#part-a--admin-reference)
  - [1. Platform URLs](#1-platform-urls)
  - [2. Administrator credentials](#2-administrator-credentials)
  - [3. Mail server settings](#3-mail-server-settings-all-users)
  - [4. Existing accounts](#4-existing-accounts)
- [Part B — Onboarding (UI only)](#part-b--onboarding-ui-only)
  - [5. Overview](#5-overview)
  - [6. Step 1 — Create email mailbox](#6-step-1--create-email-mailbox)
  - [7. Step 2 — Create workspace user](#7-step-2--create-workspace-user)
  - [8. Step 3 — Connect mail in workspace](#8-step-3--connect-mail-in-workspace)
  - [9. Share credentials & checklist](#9-share-credentials--checklist)
  - [10. Offboarding & naming rules](#10-offboarding--naming-rules)

---

# Part A — Admin reference

## 1. Platform URLs

| Service | URL | Purpose |
|---------|-----|---------|
| **Workspace** | https://workspace.avyantrix.com | Files, Mail app, Calendar, Dashboard |
| **Webmail** | https://mail.avyantrix.com/login | Browser email for any `@avyantrix.com` user |
| **Mail admin** | https://mail.avyantrix.com/login | Log in as `admin` to create mailboxes |
| **Status** | https://status.avyantrix.com | Service health (Uptime Kuma) |
| **Website** | https://avyantrix.com | Public site (Vercel) |
| **Server IP** | `200.234.46.146` | Hostinger VPS (SSH only) |
| **Email domain** | `@avyantrix.com` | e.g. `priya@avyantrix.com` |

---

## 2. Administrator credentials

> **CONFIDENTIAL** — Do not email this document or publish publicly.

### Workspace admin (Nextcloud)

| Field | Value |
|-------|-------|
| URL | https://workspace.avyantrix.com |
| Username | `avyadmin` |
| Password | `v6Oi4WL4Av9QnJwuN1!` |
| Used for | Add users, groups, apps, theming |

**Login steps:**

1. Open https://workspace.avyantrix.com
2. Username: `avyadmin`
3. Password: `v6Oi4WL4Av9QnJwuN1!`
4. Top-right profile icon → **Administration settings**

---

### Mail admin (Stalwart)

| Field | Value |
|-------|-------|
| URL | https://mail.avyantrix.com/login |
| Username | `admin` |
| Password | `8dUpcFFSmBZBZUquB2!` |
| Used for | Create and manage mailboxes |

**Login steps:**

1. Open https://mail.avyantrix.com/login
2. Username: `admin`
3. Password: `8dUpcFFSmBZBZUquB2!`
4. Open **Administration** / **Management** → **Accounts**

---

### Mail recovery admin (emergency only)

| Field | Value |
|-------|-------|
| Username | `admin` |
| Password | `vk2auVLOKTz67BIpR1!` |
| Used for | Server/API recovery — not needed for normal UI work |

---

## 3. Mail server settings (all users)

Use when connecting any mailbox in Mail app, phone, or Outlook:

| Setting | Value |
|---------|-------|
| IMAP host | `mail.avyantrix.com` |
| IMAP port | `993` (SSL/TLS) |
| SMTP host | `mail.avyantrix.com` |
| SMTP port | `465` (SSL/TLS) — preferred |
| SMTP alt port | `587` (STARTTLS) — if 465 is blocked |
| Username | **Full email** e.g. `priya@avyantrix.com` (not just `priya`) |

---

## 4. Existing accounts

| Type | Account |
|------|---------|
| Workspace admin | `avyadmin` |
| Workspace user | `debsmit` |
| Workspace user | `hr` (admin group) |
| Mailbox | `hello@avyantrix.com` |
| Mailbox | `team@avyantrix.com` |
| Mailbox | `hr@avyantrix.com` |

- **hr@ password:** `Debsmit@16112003`
- **hello@ and team@ passwords:** on server at `/opt/avyantrix/backups/.mailbox_credentials`

---

# Part B — Onboarding (UI only)

## 5. Overview

**Workspace login and email are separate.** Creating a Nextcloud user does **not** create an email address.

For each new hire, complete **all 3 steps in order:**

| Step | Where | Result |
|------|-------|--------|
| **1** | mail.avyantrix.com (admin) | Mailbox `name@avyantrix.com` |
| **2** | workspace.avyantrix.com (admin) | Workspace login |
| **3** | workspace Mail app (user) | Email inside workspace |

---

## 6. Step 1 — Create email mailbox

Do this **first** in Stalwart mail admin.

1. Open https://mail.avyantrix.com/login
2. Log in: `admin` / `8dUpcFFSmBZBZUquB2!`
3. Go to **Administration** → **Accounts**
4. Click **Create account**
5. Fill in:
   - **Username:** `priya` → becomes `priya@avyantrix.com`
   - **Domain:** `avyantrix.com`
   - **Password:** strong password
   - **Display name:** `Priya Sharma` (or `Avyantrix - Priya`)
6. **Save**

Mailbox is now live. User can use webmail or any mail app.

---

## 7. Step 2 — Create workspace user

Do this **second** in Nextcloud admin.

1. Open https://workspace.avyantrix.com
2. Log in: `avyadmin` / `v6Oi4WL4Av9QnJwuN1!`
3. Profile icon → **Administration settings** → **Users**
4. Click **+ Add new user**
5. Fill in:
   - **Username:** `priya` (lowercase, no spaces — hard to change later)
   - **Display name:** `Priya Sharma`
   - **Password:** set password
   - **Group:** `staff` (use `admin` only if they need full admin access)
6. **Save**

User can log in to workspace. Avyantrix branding applies automatically. **Mail is not connected yet.**

---

## 8. Step 3 — Connect mail in workspace

Do this **third**. One-time setup per user.

1. Log in to https://workspace.avyantrix.com **as the new user**
2. Open **Mail** app (envelope icon in top bar)
3. **Add mail account** → **Manual setup**

| Setting | Value |
|---------|-------|
| Account name | `Priya Sharma` |
| Email address | `priya@avyantrix.com` |
| IMAP host | `mail.avyantrix.com` |
| IMAP port | `993` |
| IMAP security | SSL / TLS |
| IMAP username | `priya@avyantrix.com` |
| SMTP host | `mail.avyantrix.com` |
| SMTP port | `465` |
| SMTP security | SSL / TLS |
| SMTP username | `priya@avyantrix.com` |
| Password | Mailbox password from Step 1 |

4. Click **Connect**
5. Send a test email to confirm

**If it fails:** username must be the **full email**, not just `priya`.

---

## 9. Share credentials & checklist

### What to send the new hire (use a password manager or encrypted channel — never plain email)

| Service | Details |
|---------|---------|
| Workspace | URL: https://workspace.avyantrix.com — User: `priya` — Password |
| Email | `priya@avyantrix.com` — Password |
| Webmail | https://mail.avyantrix.com/login (optional) |

Ask them to:

- Log in and confirm Mail app works
- Send a test email
- Change password after first login (Settings → Personal → Security)

### Checklist (per new hire)

- [ ] Mailbox created in Stalwart
- [ ] Workspace user created in Nextcloud
- [ ] User added to correct group (`staff` or `admin`)
- [ ] Mail connected in workspace Mail app
- [ ] Credentials shared securely
- [ ] User sent test email
- [ ] (Optional) Gravatar set for email profile photo

---

## 10. Offboarding & naming rules

### Removing a team member

1. **Workspace:** Administration → Users → disable or delete user
2. **Email:** https://mail.avyantrix.com/login as `admin` → disable or delete mailbox
3. Back up mailbox data first if required

### Naming conventions

| Field | Rule | Example |
|-------|------|---------|
| Email | `firstname@avyantrix.com` or `firstname.lastname@` | `priya@avyantrix.com` |
| Workspace username | Same as email prefix | `priya` |
| Display name | Full name | `Priya Sharma` |
| Mail sender name | `Avyantrix - Firstname` | Set in Mail app account name |

### What is automatic vs manual

| Feature | Automatic? |
|---------|------------|
| Avyantrix logo and theme | Yes — all users |
| Files, calendar, contacts | Yes — empty until used |
| `@avyantrix.com` mailbox | **No** — Step 1 |
| Mail in workspace | **No** — Step 3 |
| Profile photo in Gmail | **No** — Gravatar (gravatar.com) |

---

*End of guide. For technical issues contact your Avyantrix system administrator.*
