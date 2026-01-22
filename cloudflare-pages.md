# คู่มือ Deploy บน Cloudflare Pages

## ขั้นตอนการ Deploy

### 1. เตรียม Repository
```bash
# ถ้ายังไม่ได้ push ขึ้น Git
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### 2. Deploy บน Cloudflare Pages

#### วิธีที่ 1: ผ่าน Dashboard (แนะนำ)
1. ไปที่ [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. เลือก **Pages** จากเมนูด้านซ้าย
3. คลิก **Create a project**
4. เลือก **Connect to Git** (GitHub/GitLab)
5. เลือก repository ของคุณ
6. ตั้งค่า Build:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (root)
7. คลิก **Save and Deploy**

#### วิธีที่ 2: ผ่าน Wrangler CLI
```bash
npm install -g wrangler
wrangler login
wrangler pages deploy dist
```

### 3. ตั้งค่า Custom Domain

หลังจาก deploy สำเร็จ:

1. ไปที่ **Pages** → **Your Project** → **Custom domains**
2. คลิก **Set up a custom domain**
3. ใส่ domain ของคุณ (เช่น `songkranwholesale.com`)
4. Cloudflare จะสร้าง DNS records อัตโนมัติ
5. ไปที่ **DNS** ใน Cloudflare Dashboard
6. ตรวจสอบว่า records ถูกสร้างแล้ว:
   - `CNAME` record ชี้ไปที่ `your-project.pages.dev`
7. รอ DNS propagate (5-30 นาที)

### 4. ตั้งค่า SSL/TLS

Cloudflare จะตั้งค่า SSL อัตโนมัติ (Full SSL mode)
- ไปที่ **SSL/TLS** → **Overview**
- ตรวจสอบว่าเป็น **Full (strict)** mode

### 5. อัพเดท URL ในโค้ด

หลังจากได้ domain จริงแล้ว:

1. เปลี่ยน URL ในไฟล์ต่อไปนี้:
   - `index.html`
   - `src/components/SEOHead.jsx`
   - `public/sitemap.xml`
   - `src/components/ProductGrid.jsx` (schema)

2. Commit และ push:
```bash
git add .
git commit -m "Update domain URLs"
git push
```

3. Cloudflare จะ rebuild อัตโนมัติ

### 6. ตรวจสอบไฟล์ SEO

ตรวจสอบว่าไฟล์เหล่านี้เข้าถึงได้:
- `https://yourdomain.com/sitemap.xml`
- `https://yourdomain.com/robots.txt`
- `https://yourdomain.com/` (หน้าแรก)

### 7. ตั้งค่า Google Search Console

1. ไปที่ [Google Search Console](https://search.google.com/search-console)
2. เพิ่ม Property → ใส่ domain ของคุณ
3. Verify ownership (แนะนำใช้ HTML tag)
4. Submit sitemap: `https://yourdomain.com/sitemap.xml`

## Environment Variables (ถ้าต้องการ)

ถ้าต้องการใช้ environment variables:

1. ไปที่ **Pages** → **Your Project** → **Settings** → **Environment variables**
2. เพิ่ม variables:
   - `VITE_SITE_URL`: `https://yourdomain.com`
   - อื่นๆ ตามต้องการ

## Build Settings

- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Node version**: 18.x หรือสูงกว่า (Cloudflare จะเลือกให้อัตโนมัติ)

## หมายเหตุ

- Cloudflare Pages ฟรีสำหรับ:
  - 500 builds/เดือน
  - Unlimited bandwidth
  - Unlimited requests
- Auto-deploy เมื่อ push ไปที่ main branch
- Preview deployments สำหรับทุก pull request

## Troubleshooting

### Build ล้มเหลว
- ตรวจสอบ `package.json` ว่ามี dependencies ครบ
- ตรวจสอบ build logs ใน Cloudflare Dashboard

### 404 Error เมื่อ refresh หน้า
- ตรวจสอบว่าไฟล์ `_redirects` อยู่ใน `public/` folder
- ตรวจสอบว่าไฟล์ถูก copy ไปที่ `dist/` หลัง build

### Domain ไม่ทำงาน
- ตรวจสอบ DNS records ใน Cloudflare
- รอ DNS propagate (อาจใช้เวลา 48 ชั่วโมง)
- ตรวจสอบ SSL certificate status
