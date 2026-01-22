import React, { useState } from 'react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('ขอบคุณสำหรับข้อมูล เราจะติดต่อกลับโดยเร็วที่สุดครับ (Demo)');
    };

    return (
        <section id="contact" className="py-16">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title">ติดต่อสั่งซื้อ / สอบถาม <br />ราคาส่ง</h2>
                    <p className="mb-8">
                        สนใจสินค้าจำนวนมาก หรือต้องการผลิตแบรนด์ตัวเอง <br />
                        ทักไลน์หาเราได้เลยครับ
                    </p>

                    <ul className="contact-list">
                        <li>
                            <strong>LINE ID:</strong> <a href="https://lin.ee/tIMVPn1" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>@666ehpui</a> (คลิกแอดเลย)
                        </li>
                        <li>
                            <strong>ที่อยู่หน้าร้าน:</strong> สำเพ็ง ซอย 2 กรุงเทพฯ
                        </li>
                    </ul>
                </div>

                <div className="contact-form-box">
                    <h3 className="text-xl font-bold mb-4">ฝากข้อมูลให้ติดต่อกลับ</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>ชื่อผู้ติดต่อ</label>
                            <input
                                type="text"
                                required
                                className="form-control"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>เบอร์โทรศัพท์</label>
                            <input
                                type="tel"
                                required
                                className="form-control"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>ข้อความเพิ่มเติม</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-full">ส่งข้อมูล</button>
                    </form>
                </div>
            </div>

            <style>{`
        .contact-container {
          display: flex;
          flex-wrap: wrap;
          gap: 4rem;
          align-items: center;
        }

        .contact-info { flex: 1; min-width: 300px; }
        .contact-form-box { 
          flex: 1; 
          min-width: 300px;
          background: white;
          padding: 2rem;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
        }

        .contact-list li {
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }

        .form-group { margin-bottom: 1rem; }
        
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        .form-control {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: var(--radius-sm);
          font-family: inherit;
        }

        .form-control:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .text-xl { font-size: 1.25rem; }
        .font-bold { font-weight: bold; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-8 { margin-bottom: 2rem; }
      `}</style>
        </section>
    );
}
