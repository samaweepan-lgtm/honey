# Golden Hive – Honey Landing Page

## โครงสร้าง
- index.html  หน้าแลนดิ้งเพจ + ฟอร์มสั่งซื้อ
- admin.html  ใบหยิบ / ใบแพ็ค / ใบจ่าหน้า (เปิดแล้วใส่ URL + รหัส)
- Code.gs     สคริปต์ Google Apps Script
- images/     โฟลเดอร์รูปสินค้า (แยกต่างหาก) – เปลี่ยนเป็นรูปจริง .jpg แล้วแก้ path ใน PRODUCTS

## ขั้นตอน
1. สร้าง Google Sheet ตั้งชื่อแท็บ `Orders` แถวแรก: order_id, time, name, phone, address, sku, product, qty, total, status
2. ส่วนขยาย > Apps Script วางโค้ด Code.gs แก้ KEY > Deploy > Web app (Execute as: Me, Access: Anyone) คัดลอก URL
3. วาง URL ใน `API_URL` ของ index.html
4. อัปโหลดทั้งโฟลเดอร์ขึ้น GitHub repo
5. vercel.com > Add New Project > Import repo > Deploy (ไม่ต้องตั้งค่า build)
6. ส่งสถานะ: หลังแพ็คเสร็จ เปลี่ยนคอลัมน์ status ในชีตจาก new เป็น packed
