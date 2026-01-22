# 🚀 Deploy ด้วย Wrangler CLI (แก้ปัญหา Browser)

## ขั้นตอน

### 1. ติดตั้ง Wrangler
```bash
npm install -g wrangler
```

### 2. Login
```bash
wrangler login
```
- จะเปิด browser ให้เลือก Chrome เอง
- หรือ copy URL ไปเปิดใน Chrome

### 3. Build Project
```bash
npm run build
```

### 4. Deploy
```bash
wrangler pages deploy dist --project-name=songkran-wholesale
```

### 5. ตั้งค่า Custom Domain (ผ่าน Dashboard)
- ไปที่ Cloudflare Dashboard → Pages
- เลือก project ที่สร้าง
- ไปที่ Custom domains → เพิ่ม domain

---

## ข้อดี
- ✅ ควบคุม browser ที่ใช้ได้
- ✅ ใช้ Chrome ได้โดยตรง
- ✅ ไม่ต้องเปลี่ยน default browser
