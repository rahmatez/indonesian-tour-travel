# Indonesian Tour Travel — Project Plan

Website tour operator Indonesia (fullstack), terinspirasi dari [javaroutes.com](https://javaroutes.com/).

---

## Identitas Project

| Item | Nilai |
|------|-------|
| **Nama Aplikasi** | Indonesian Tour Travel |
| **Nama Singkat** | ITT |
| **Package Name** | `indonesian-tour-travel` |
| **Repo GitHub** | `indonesian-tour-travel` |
| **Database Name** | `indonesian_tour_travel` |
| **Domain (saran)** | `indonesiantourtravel.com` atau `.id` |

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| **Frontend** | Next.js + TypeScript + Tailwind |
| **Backend** | Next.js API / NestJS + Prisma |
| **Database** | PostgreSQL + Redis |
| **CMS/Admin** | Payload CMS atau custom |
| **Payment** | Stripe + Midtrans |
| **Chatbot** | OpenAI + Vercel AI SDK |
| **WhatsApp** | WhatsApp Business API |
| **Media** | Cloudflare R2 / Cloudinary |
| **Deploy** | Vercel + GitHub Actions |

---

## Arsitektur

```
┌─────────────────────────────────────────────────────────┐
│                      FRONTEND                           │
│  Next.js (Website Publik + Admin Dashboard)             │
└─────────────────────┬───────────────────────────────────┘
                      │
┌─────────────────────▼───────────────────────────────────┐
│                      BACKEND                            │
│  Next.js API Routes / NestJS                            │
│  ├── Auth & RBAC                                        │
│  ├── Booking Engine                                     │
│  └── Chatbot Service                                    │
└──────┬──────────────┬──────────────┬────────────────────┘
       │              │              │
┌──────▼──────┐ ┌─────▼─────┐ ┌─────▼─────────────────────┐
│ PostgreSQL  │ │   Redis   │ │  Cloudflare R2 / Cloudinary│
└─────────────┘ └───────────┘ └───────────────────────────┘

External Services:
  WhatsApp Business API · Stripe · Midtrans · OpenAI · Resend
```

### Keputusan Arsitektur

| Keputusan | Pilihan MVP | Catatan |
|-----------|-------------|---------|
| Struktur app | Single Next.js app | NestJS ditambahkan nanti jika API kompleks |
| CMS | Payload CMS (konten) + custom logic (booking) | Konten tour di Payload, booking di custom |
| Auth admin | NextAuth.js + RBAC | Role: admin, guide, operator |
| Auth customer | Guest checkout dulu | Login customer di Fase 3 |

### Struktur Folder (Target)

```
Tour/
├── app/
│   ├── (public)/          # Homepage, tours, about, contact
│   ├── admin/             # Dashboard admin
│   └── api/               # API routes & webhooks
├── components/
├── lib/                   # Utils, prisma client, validators
├── prisma/
│   └── schema.prisma
├── public/
├── .env.example
└── plan.md
```

---

## Akun & Layanan yang Perlu Didaftarkan

| Layanan | Untuk Apa | Prioritas | Biaya Awal |
|---------|-----------|-----------|------------|
| **GitHub** | Repo + GitHub Actions CI/CD | Wajib | Gratis |
| **Vercel** | Deploy Next.js | Wajib | Gratis (Pro ~$20/bln) |
| **Neon** atau **Supabase** | PostgreSQL managed | Wajib | Gratis tier ada |
| **Upstash** | Redis serverless | Wajib | Gratis tier ada |
| **Cloudflare** | DNS, R2 storage, CDN | Wajib | R2 ~$0.015/GB |
| **Stripe** | Pembayaran kartu internasional | Fase 2 | Gratis + fee transaksi |
| **Midtrans** | Transfer/e-wallet Indonesia | Fase 2 | Gratis + fee transaksi |
| **OpenAI** | Chatbot Maya | Fase 3 | Pay-per-use |
| **WhatsApp Business API** | Notifikasi & chat | Fase 2–3 | ~$20–50/bln |
| **Resend** atau **SendGrid** | Email transaksional | Fase 2 | Gratis tier ada |
| **Cloudinary** | Transformasi gambar (opsional) | Opsional | Gratis tier ada |
| **Sentry** | Error monitoring | Opsional | Gratis tier ada |
| **Domain** | Brand website | Wajib | ~$10–15/tahun |

> **MVP Fase 1:** GitHub, Vercel, Neon, Cloudflare, domain sudah cukup.

---

## Tools Development Lokal

```bash
# Wajib
Node.js 20 LTS atau 22
pnpm atau npm (disarankan pnpm)
Git
VS Code / Cursor

# Database lokal (opsional)
Docker Desktop  → PostgreSQL + Redis lokal
# atau pakai Neon/Upstash langsung tanpa Docker

# CLI tools (opsional)
vercel CLI
stripe CLI        → testing webhook payment
```

**Extension Cursor/VS Code:**
- ESLint, Prettier
- Tailwind CSS IntelliSense
- Prisma
- GitLens

---

## Environment Variables

Buat `.env` (jangan commit) dan `.env.example` (commit ke repo).

```env
# ─── App ───────────────────────────────────────
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Indonesian Tour Travel

# ─── Database ───────────────────────────────────
DATABASE_URL=postgresql://user:pass@host:5432/indonesian_tour_travel
DIRECT_URL=postgresql://...          # untuk Prisma migrate (Neon)

# ─── Redis ──────────────────────────────────────
REDIS_URL=redis://...

# ─── Auth ────────────────────────────────────────
NEXTAUTH_SECRET=random-32-char-string
NEXTAUTH_URL=http://localhost:3000

# ─── Cloudflare R2 ───────────────────────────────
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET_NAME=indonesian-tour-travel-media
R2_PUBLIC_URL=https://media.indonesiantourtravel.com

# ─── Cloudinary (opsional) ───────────────────────
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# ─── Stripe ─────────────────────────────────────
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...

# ─── Midtrans ───────────────────────────────────
MIDTRANS_SERVER_KEY=
MIDTRANS_CLIENT_KEY=
MIDTRANS_IS_PRODUCTION=false

# ─── OpenAI (Chatbot) ──────────────────────────
OPENAI_API_KEY=sk-...

# ─── WhatsApp Business API ───────────────────────
WHATSAPP_API_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_BUSINESS_ACCOUNT_ID=

# ─── Email (Resend) ────────────────────────────
RESEND_API_KEY=
EMAIL_FROM=hello@indonesiantourtravel.com

# ─── Payload CMS (jika dipakai) ────────────────
PAYLOAD_SECRET=random-secret
```

---

## Skema Database

### Core

| Model | Field Penting |
|-------|---------------|
| `User` | email, name, role (admin/guide/operator) |
| `Destination` | name, slug, description, image |
| `Tour` | slug, title, description, duration_days, price_from, max_group_size, group_discount_pct, is_featured, is_active, seo_title, seo_description |
| `TourInclusion` | tour_id, description, sort_order |
| `TourMedia` | tour_id, url, type (image/video), alt_text |
| `TourPricing` | tour_id, min_pax, max_pax, price_per_person |
| `Category` | name, slug (Volcano, Diving, Cultural, dll) |

### Booking

| Model | Field Penting |
|-------|---------------|
| `Customer` | name, email, phone, country |
| `Booking` | status, travel_date, num_adults, num_children, total_amount, discount_amount, payment_method, payment_status |
| `BookingItem` | booking_id, tour_id, quantity, unit_price |
| `Payment` | booking_id, amount, gateway (stripe/midtrans), transaction_id, status |
| `Invoice` | booking_id, invoice_number, issued_at |

### Content

| Model | Field Penting |
|-------|---------------|
| `Review` | author, country, content, tour_id, rating, is_published |
| `FAQ` | question, answer, sort_order |
| `TeamMember` | name, role, bio, photo, years_experience |
| `BlogPost` | slug, title, content (opsional) |

### System

| Model | Field Penting |
|-------|---------------|
| `ChatSession` | session_id, customer_info |
| `ChatMessage` | session_id, role (user/assistant), content |
| `NotificationLog` | type (email/whatsapp), recipient, status, sent_at |

### Relasi Utama

```
Destination 1──N Tour
Tour        1──N TourInclusion
Tour        1──N TourMedia
Tour        N──N Category
Tour        1──N Review
Customer    1──N Booking
Booking     1──N BookingItem ──N Tour
Booking     1──N Payment
```

---

## Konten & Asset yang Perlu Disiapkan

| Asset | Jumlah Estimasi | Format |
|-------|-----------------|--------|
| Foto tour | 5–15 per tour | WebP/JPG, min 1200px |
| Video tour | 1 per tour premium | MP4 atau embed YouTube |
| Logo & brand | 1 set | SVG + PNG |
| Foto tim | 4–6 orang | JPG 400×400 |
| Copy tour | Mulai 10–15 tour (bukan langsung 111) | Markdown/HTML |
| Testimoni | 10–20 review | Teks + nama + negara |
| FAQ | 10–15 pertanyaan | Teks |
| Info bisnis | Alamat, jam operasional, nomor WA | Teks |

---

## Domain & DNS

| Subdomain | Tujuan |
|-----------|--------|
| `indonesiantourtravel.com` | Website utama (Vercel) |
| `media.indonesiantourtravel.com` | Cloudflare R2 CDN |
| `api.indonesiantourtravel.com` | API (opsional) |
| `admin.indonesiantourtravel.com` | Admin panel (opsional) |

Setup Cloudflare:
- A/CNAME record → Vercel
- SSL/TLS Full (strict)
- R2 custom domain untuk media

---

## Persiapan Payment

### Stripe
- Akun bisnis terverifikasi
- Dokumen: KTP/SIUP, rekening bank
- Webhook endpoint: `/api/webhooks/stripe`

### Midtrans
- Daftar merchant di [midtrans.com](https://midtrans.com)
- Dokumen: NIB, NPWP, rekening bank
- Sandbox key untuk dev, production key untuk live

### Kebijakan Legal (wajib ditulis)
- Kebijakan refund & pembatalan
- Syarat & ketentuan booking
- Kebijakan privasi (GDPR-aware untuk wisatawan Eropa)

---

## Persiapan WhatsApp Business API

1. WhatsApp Business Account — verifikasi Meta Business Manager
2. Pilih provider BSP:
   - **360dialog** — populer, harga transparan
   - **Twilio** — mudah integrasi
   - **Fonnte** — lokal Indonesia, lebih murah (bukan official API)
3. Template pesan yang perlu disetujui Meta:
   - Konfirmasi booking
   - Reminder H-1 perjalanan
   - Follow-up setelah tour
4. Nomor WhatsApp khusus bisnis (bukan nomor pribadi)

---

## Persiapan Chatbot (Maya)

1. Export data tour ke JSON/Markdown
2. System prompt dengan persona Maya (travel advisor ramah)
3. Knowledge base: FAQ, detail tour, kebijakan booking
4. (Opsional) Vector DB `pgvector` di PostgreSQL untuk RAG

Estimasi biaya OpenAI: ~$0.01–0.05 per sesi chat (GPT-4o-mini lebih hemat).

---

## GitHub Actions CI/CD

Secrets yang perlu dikonfigurasi di GitHub:

```
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
DATABASE_URL
# ... semua env production
```

Pipeline:

```
Push ke main → Lint + Type check → Prisma migrate → Deploy Vercel
```

---

## Roadmap Development

### Fase 1 — MVP (Minggu 1–3)

**Minggu 1 — Fondasi**
- [ ] Buat repo GitHub
- [ ] Init Next.js + TypeScript + Tailwind + ESLint
- [ ] Setup Prisma + PostgreSQL (Neon)
- [ ] Design & migrate schema database
- [ ] Setup Cloudflare R2 untuk upload
- [ ] Deploy skeleton ke Vercel
- [ ] Buat `.env.example`

**Minggu 2 — Konten & Admin**
- [ ] Setup Payload CMS atau custom admin
- [ ] CRUD: Destinations, Tours, FAQ, Team
- [ ] Upload & manage media
- [ ] Seed 10–15 tour sample

**Minggu 3 — Website Publik**
- [ ] Homepage (hero, stats, featured tours, testimonials)
- [ ] Halaman About & Contact
- [ ] Katalog tour + filter (destinasi, durasi, harga)
- [ ] Halaman detail tour
- [ ] SEO (metadata, sitemap, robots.txt)
- [ ] Form kontak + integrasi email (Resend)

**Deliverable Fase 1:** Website publik live dengan 10–15 tour, admin bisa kelola konten.

---

### Fase 2 — Booking & Payment (Minggu 4–5)

- [ ] Booking flow (pilih tanggal, jumlah orang, hitung harga)
- [ ] Kalkulasi diskon grup otomatis (hingga 15%)
- [ ] Integrasi Stripe (test mode)
- [ ] Integrasi Midtrans (sandbox)
- [ ] Webhook handler (stripe + midtrans)
- [ ] Email konfirmasi booking
- [ ] WhatsApp notifikasi booking
- [ ] Admin dashboard: lihat & kelola booking
- [ ] Halaman kebijakan refund & syarat ketentuan

**Deliverable Fase 2:** Customer bisa booking & bayar online.

---

### Fase 3 — Advanced (Minggu 6–8)

- [ ] Chatbot Maya (OpenAI + Vercel AI SDK)
- [ ] RAG dengan pgvector (chatbot tahu detail tour)
- [ ] WhatsApp template messages (konfirmasi, reminder)
- [ ] Search tour (Meilisearch atau full-text PostgreSQL)
- [ ] Review/testimoni dinamis dari database
- [ ] Analytics (GA4 / Plausible)
- [ ] Multi-bahasa EN/ID (opsional)
- [ ] Customer login & riwayat booking (opsional)

**Deliverable Fase 3:** Website setara javaroutes.com secara fitur.

---

### Fase 4 — Scale (Opsional)

- [ ] CRM integrasi
- [ ] Blog / content marketing
- [ ] Mobile app (React Native / Expo)
- [ ] A/B testing landing page
- [ ] NestJS microservice jika traffic tinggi

---

## Checklist — Mulai Coding Hari Ini

**Minimum untuk mulai:**

- [ ] Akun GitHub dibuat
- [ ] Akun Vercel + connect GitHub
- [ ] Database Neon dibuat → copy `DATABASE_URL`
- [ ] Cloudflare account + R2 bucket dibuat
- [ ] Domain dibeli (atau pakai subdomain Vercel dulu)
- [ ] Node.js 20+ terinstall
- [ ] Keputusan: Payload CMS atau custom admin
- [ ] Skema database di-sketsa
- [ ] 5–10 tour sample dengan foto & deskripsi
- [ ] Logo & warna brand ditentukan

**Ditunda ke Fase 2+:**

- [ ] Stripe, Midtrans
- [ ] WhatsApp Business API
- [ ] OpenAI API key

---

## Estimasi Biaya Bulanan (Setelah Launch)

| Layanan | Estimasi |
|---------|----------|
| Vercel Pro | $20 |
| Neon PostgreSQL | $0–19 |
| Upstash Redis | $0–10 |
| Cloudflare R2 | $5–15 |
| Resend Email | $0–20 |
| OpenAI API | $10–50 |
| WhatsApp API | $20–50 |
| Domain | ~$1/bulan |
| **Total** | **~$55–185/bulan** |

> Belum termasuk fee transaksi: Stripe ~2.9%, Midtrans ~2%.

---

## Referensi

- Website inspirasi: [javaroutes.com](https://javaroutes.com/)
- Next.js docs: https://nextjs.org/docs
- Prisma docs: https://www.prisma.io/docs
- Payload CMS: https://payloadcms.com/docs
- Vercel AI SDK: https://sdk.vercel.ai/docs
- Midtrans docs: https://docs.midtrans.com
- Stripe docs: https://stripe.com/docs
