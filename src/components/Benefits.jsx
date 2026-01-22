import React from 'react';
import { Truck, ShieldCheck, BadgePercent, ThumbsUp } from 'lucide-react';

export default function Benefits() {
    const benefits = [
        {
            icon: <BadgePercent size={48} />,
            title: 'ราคาส่งโรงงาน',
            desc: 'รับตรงจากโรงงาน ไม่ผ่านคนกลาง การันตีราคาดีที่สุดสำหรับการนำไปขายต่อ'
        },
        {
            icon: <Truck size={48} />,
            title: 'จัดส่งรวดเร็ว',
            desc: 'พร้อมส่งทั่วประเทศ แพ็คแน่นหนา ของไม่เสียหาย ส่งด่วน 1-2 วันได้รับของ'
        },
        {
            icon: <ShieldCheck size={48} />,
            title: 'มีประกันสินค้า',
            desc: 'สินค้ามีปัญหา เคลมได้ 100% เราตรวจสอบคุณภาพก่อนส่งทุกชิ้น'
        },
        {
            icon: <ThumbsUp size={48} />,
            title: 'ประสบการณ์ 10 ปี',
            desc: 'เชี่ยวชาญสินค้าเทศกาล ให้คำปรึกษาพ่อค้าแม่ค้ามือใหม่ได้ฟรี'
        }
    ];

    return (
        <section id="benefits" className="py-16 bg-white">
            <div className="container">
                <h2 className="section-title text-center">ทำไมต้องซื้อกับเรา?</h2>
                <div className="benefits-grid">
                    {benefits.map((item, index) => (
                        <div key={index} className="benefit-card">
                            <div className="icon-box">
                                {item.icon}
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .bg-white { background-color: var(--color-white); }
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .benefit-card {
          text-align: center;
          padding: 2rem;
          background: var(--color-bg);
          border-radius: var(--radius-md);
          transition: transform 0.3s;
        }

        .benefit-card:hover {
          transform: translateY(-5px);
        }

        .icon-box {
          color: var(--color-primary);
          margin-bottom: 1.5rem;
          display: inline-block;
          padding: 1rem;
          background: white;
          border-radius: 50%;
          box-shadow: var(--shadow-sm);
        }

        .benefit-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--color-text);
        }

        .benefit-card p {
          color: #666;
          font-size: 0.95rem;
        }
      `}</style>
        </section>
    );
}
