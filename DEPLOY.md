# 🚀 คู่มือ Deploy บน Cloudflare Pages

## ✅ สิ่งที่ต้องมีก่อนเริ่ม

- [x] Git repository (มีแล้ว)
- [ ] Cloudflare account (ฟรี) - [สมัครที่นี่](https://dash.cloudflare.com/sign-up)
- [ ] Domain ที่เพิ่มใน Cloudflare แล้ว (มีแล้วตามที่บอก)

---

## 📋 ขั้นตอนที่ 1: Commit และ Push Code

### 1.1 ตรวจสอบไฟล์ที่เปลี่ยนแปลง
```bash
git status
```

### 1.2 เพิ่มไฟล์ทั้งหมด
```bash
git add .
```

### 1.3 Commit
```bash
git commit -m "Prepare for Cloudflare Pages deployment - Add SEO, products, and config files"
```

### 1.4 Push ขึ้น GitHub/GitLab
```bash
git push origin main
```

**หมายเหตุ:** ถ้า remote ยังไม่ได้ตั้งค่า:
```bash
# ตรวจสอบ remote
git remote -v

# ถ้ายังไม่มี ให้เพิ่ม
git remote add origin <your-repo-url>
git push -u origin main
```

---

## 📋 ขั้นตอนที่ 2: Deploy บน Cloudflare Pages

### 2.1 เข้าสู่ Cloudflare Dashboard
1. ไปที่ [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
2. ลงชื่อเข้าใช้

### 2.2 สร้าง Pages Project
1. คลิก **Pages** จากเมนูด้านซ้าย
2. คลิก **Create a project**
3. เลือก **Connect to Git**
4. เลือก Git provider (GitHub/GitLab/Bitbucket)
5. อนุญาต Cloudflare เข้าถึง repository
6. เลือก repository: `songkran` (หรือชื่อ repo ของคุณ)

### 2.3 ตั้งค่า Build Configuration
ตั้งค่าดังนี้:

- **Project name**: `songkran-wholesale` (หรือชื่อที่ต้องการ)
- **Production branch**: `main`
- **Framework preset**: `Vite` (หรือ `None` แล้วตั้งเอง)
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (root)

### 2.4 Environment Variables (Optional)
ถ้าต้องการตั้งค่า URL:
- คลิก **Add environment variable**
- **Variable name**: `VITE_SITE_URL`
- **Value**: `https://yourdomain.com` (ใส่ domain จริงของคุณ)

### 2.5 Deploy!
1. คลิก **Save and Deploy**
2. รอ build เสร็จ (ประมาณ 2-5 นาที)
3. ได้ URL: `https://your-project.pages.dev`

---

## 📋 ขั้นตอนที่ 3: ตั้งค่า Custom Domain

### 3.1 เพิ่ม Custom Domain
1. ไปที่ **Pages** → **your-project** → **Custom domains**
2. คลิก **Set up a custom domain**
3. ใส่ domain ของคุณ: `yourdomain.com` (และ `www.yourdomain.com` ถ้าต้องการ)
4. Cloudflare จะสร้าง DNS records อัตโนมัติ

### 3.2 ตรวจสอบ DNS Records
1. ไปที่ **DNS** ใน Cloudflare Dashboard
2. ตรวจสอบว่า records ถูกสร้างแล้ว:
   - `CNAME` record: `@` → `your-project.pages.dev`
   - `CNAME` record: `www` → `your-project.pages.dev` (ถ้าเพิ่ม www)

### 3.3 รอ DNS Propagate
- ใช้เวลา: **5-30 นาที** (บางครั้งอาจถึง 48 ชั่วโมง)
- ตรวจสอบได้ที่: [https://dnschecker.org/](https://dnschecker.org/)

### 3.4 ตรวจสอบ SSL
1. ไปที่ **SSL/TLS** → **Overview**
2. ตรวจสอบว่าเป็น **Full (strict)** mode
3. SSL certificate จะถูกสร้างอัตโนมัติ (ใช้เวลา 5-10 นาที)

---

## 📋 ขั้นตอนที่ 4: อัพเดท URL ในโค้ด

หลังจาก domain ทำงานได้แล้ว ต้องอัพเดท URL ในโค้ด:

### 4.1 ไฟล์ที่ต้องแก้ไข

#### `index.html`
```html
<!-- เปลี่ยนจาก -->
<meta property="og:url" content="https://songkranwholesale.com/" />
<!-- เป็น -->
<meta property="og:url" content="https://yourdomain.com/" />
```

#### `src/components/SEOHead.jsx`
```javascript
// เปลี่ยนจาก
const siteUrl = url || 'https://songkranwholesale.com';
// เป็น
const siteUrl = url || 'https://yourdomain.com';
```

#### `public/sitemap.xml`
```xml
<!-- เปลี่ยนทุก URL จาก -->
https://songkranwholesale.com/
<!-- เป็น -->
https://yourdomain.com/
```

#### `public/robots.txt`
```
# เปลี่ยนจาก
Sitemap: https://songkranwholesale.com/sitemap.xml
# เป็น
Sitemap: https://yourdomain.com/sitemap.xml
```

#### `src/components/ProductGrid.jsx`
```javascript
// ใน productSchema เปลี่ยน URL
"url": `https://yourdomain.com/#products`
```

### 4.2 Commit และ Push
```bash
git add .
git commit -m "Update domain URLs to production domain"
git push origin main
```

### 4.3 Cloudflare จะ Rebuild อัตโนมัติ
- Cloudflare จะ detect การ push และ rebuild อัตโนมัติ
- ตรวจสอบได้ที่ **Pages** → **Deployments**

---

## 📋 ขั้นตอนที่ 5: ตรวจสอบไฟล์ SEO

ตรวจสอบว่าไฟล์เหล่านี้เข้าถึงได้:

- ✅ `https://yourdomain.com/` (หน้าแรก)
- ✅ `https://yourdomain.com/sitemap.xml`
- ✅ `https://yourdomain.com/robots.txt`
- ✅ `https://yourdomain.com/#products`
- ✅ `https://yourdomain.com/#contact`

---

## 📋 ขั้นตอนที่ 6: ตั้งค่า Google Search Console

### 6.1 เพิ่ม Property
1. ไปที่ [Google Search Console](https://search.google.com/search-console)
2. คลิก **Add Property**
3. เลือก **URL prefix**
4. ใส่: `https://yourdomain.com`

### 6.2 Verify Ownership
เลือกวิธีใดวิธีหนึ่ง:

**วิธีที่ 1: HTML tag (แนะนำ)**
1. คลิก **HTML tag**
2. Copy meta tag ที่ได้
3. เพิ่มใน `index.html` ใน `<head>`
4. Commit และ push
5. คลิก **Verify** ใน Search Console

**วิธีที่ 2: HTML file**
1. Download HTML file
2. Upload ไปที่ `public/` folder
3. Commit และ push
4. คลิก **Verify**

### 6.3 Submit Sitemap
1. ไปที่ **Sitemaps** ใน Search Console
2. ใส่: `sitemap.xml`
3. คลิก **Submit**

---

## ✅ Checklist สรุป

### ก่อน Deploy
- [ ] Commit และ push code ทั้งหมด
- [ ] มี Cloudflare account
- [ ] Domain เพิ่มใน Cloudflare แล้ว

### หลัง Deploy
- [ ] Deploy สำเร็จบน Cloudflare Pages
- [ ] ตั้งค่า Custom Domain แล้ว
- [ ] DNS records ถูกสร้างแล้ว
- [ ] SSL certificate ทำงานได้ (HTTPS)
- [ ] อัพเดท URL ในโค้ดแล้ว
- [ ] ตรวจสอบไฟล์ SEO ทำงานได้
- [ ] ตั้งค่า Google Search Console แล้ว
- [ ] Submit sitemap แล้ว

---

## 🆘 Troubleshooting

### Build ล้มเหลว
- ตรวจสอบ build logs ใน Cloudflare Dashboard
- ตรวจสอบว่า `package.json` มี dependencies ครบ
- ลอง build local: `npm run build`

### Domain ไม่ทำงาน
- ตรวจสอบ DNS records ใน Cloudflare
- รอ DNS propagate (อาจใช้เวลา 48 ชั่วโมง)
- ตรวจสอบ SSL certificate status

### 404 Error เมื่อ Refresh หน้า
- ตรวจสอบว่าไฟล์ `public/_redirects` มีอยู่
- ตรวจสอบว่าไฟล์ถูก copy ไปที่ `dist/` หลัง build

### SSL Certificate ไม่ทำงาน
- ตรวจสอบ DNS records ถูกต้อง
- รอ 5-10 นาที (Cloudflare ต้องสร้าง certificate)
- ตรวจสอบ SSL/TLS mode เป็น **Full (strict)**

---

## 📞 ต้องการความช่วยเหลือ?

ถ้ามีปัญหาหรือคำถาม:
1. ตรวจสอบ logs ใน Cloudflare Dashboard
2. ดู documentation: [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
3. ตรวจสอบ build logs สำหรับ error messages

---

**พร้อม Deploy แล้ว! 🚀**
