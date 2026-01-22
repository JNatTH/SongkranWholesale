import React, { useEffect, useRef, useState } from 'react';
import { Truck, ShieldCheck, BadgePercent, ThumbsUp, Sparkles } from 'lucide-react';

export default function Benefits() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    const benefits = [
        {
            icon: <BadgePercent size={36} />,
            title: 'ราคาส่งโรงงาน',
            desc: 'รับตรงจากโรงงาน ไม่ผ่านคนกลาง การันตีราคาดีที่สุดสำหรับการนำไปขายต่อ',
            color: '#FF6B9D',
            bgColor: 'rgba(255, 107, 157, 0.1)'
        },
        {
            icon: <Truck size={36} />,
            title: 'จัดส่งรวดเร็ว',
            desc: 'พร้อมส่งทั่วประเทศ แพ็คแน่นหนา ของไม่เสียหาย ส่งด่วน 1-2 วันได้รับของ',
            color: '#00BFFF',
            bgColor: 'rgba(0, 191, 255, 0.1)'
        },
        {
            icon: <ShieldCheck size={36} />,
            title: 'มีประกันสินค้า',
            desc: 'สินค้ามีปัญหา เคลมได้ 100% เราตรวจสอบคุณภาพก่อนส่งทุกชิ้น',
            color: '#06C755',
            bgColor: 'rgba(6, 199, 85, 0.1)'
        },
        {
            icon: <ThumbsUp size={36} />,
            title: 'ประสบการณ์ 10 ปี',
            desc: 'เชี่ยวชาญสินค้าเทศกาล ให้คำปรึกษาพ่อค้าแม่ค้ามือใหม่ได้ฟรี',
            color: '#FFD700',
            bgColor: 'rgba(255, 215, 0, 0.1)'
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="benefits" className="benefits-section" ref={sectionRef}>
            {/* Background decorations */}
            <div className="benefits-bg">
                <div className="floating-shape shape-1">💧</div>
                <div className="floating-shape shape-2">✨</div>
                <div className="floating-shape shape-3">🌊</div>
            </div>

            <div className="container">
                <div className="benefits-header">
                    <span className="benefits-badge">
                        <Sparkles size={16} />
                        ทำไมต้องเรา
                    </span>
                    <h2 className="benefits-title">ทำไมต้องซื้อกับเรา?</h2>
                    <p className="benefits-subtitle">เราคือผู้เชี่ยวชาญสินค้าสงกรานต์ที่คุณไว้วางใจได้</p>
                </div>

                <div className={`benefits-grid ${isVisible ? 'visible' : ''}`}>
                    {benefits.map((item, index) => (
                        <div 
                            key={index} 
                            className="benefit-card"
                            style={{ 
                                '--delay': `${index * 0.15}s`,
                                '--accent-color': item.color,
                                '--bg-color': item.bgColor
                            }}
                        >
                            <div className="icon-wrapper">
                                <div className="icon-bg"></div>
                                <div className="icon-box" style={{ color: item.color }}>
                                    {item.icon}
                                </div>
                                <div className="icon-ring"></div>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                            
                            {/* Decorative corner */}
                            <div className="card-corner"></div>
                        </div>
                    ))}
                </div>

                {/* Trust indicators */}
                <div className={`trust-section ${isVisible ? 'visible' : ''}`}>
                    <div className="trust-item">
                        <span className="trust-icon">⭐</span>
                        <span className="trust-text">4.9/5 คะแนนความพึงพอใจ</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-item">
                        <span className="trust-icon">🏆</span>
                        <span className="trust-text">Best Seller สินค้าสงกรานต์</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-item">
                        <span className="trust-icon">✅</span>
                        <span className="trust-text">ร้านค้ายืนยันตัวตนแล้ว</span>
                    </div>
                </div>
            </div>

            <style>{`
                .benefits-section {
                    padding: 6rem 0;
                    background: linear-gradient(180deg, #ffffff 0%, #f8fbff 50%, #ffffff 100%);
                    position: relative;
                    overflow: hidden;
                }

                .benefits-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                }

                .floating-shape {
                    position: absolute;
                    font-size: 4rem;
                    opacity: 0.08;
                    animation: floatShape 8s ease-in-out infinite;
                }

                .shape-1 { top: 10%; left: 5%; animation-delay: 0s; }
                .shape-2 { top: 60%; right: 10%; animation-delay: 2s; }
                .shape-3 { bottom: 20%; left: 15%; animation-delay: 4s; }

                @keyframes floatShape {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(10deg); }
                }

                .benefits-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }

                .benefits-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: linear-gradient(135deg, #00BFFF, #0099CC);
                    color: white;
                    padding: 0.5rem 1.25rem;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .benefits-title {
                    font-size: 2.5rem;
                    color: #1a1a2e;
                    margin-bottom: 1rem;
                }

                .benefits-subtitle {
                    color: #666;
                    font-size: 1.1rem;
                }

                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 2rem;
                }

                .benefit-card {
                    text-align: center;
                    padding: 2.5rem 2rem;
                    background: white;
                    border-radius: 24px;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    position: relative;
                    overflow: hidden;
                    border: 1px solid rgba(0,0,0,0.05);
                    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
                    opacity: 0;
                    transform: translateY(30px);
                }

                .benefits-grid.visible .benefit-card {
                    opacity: 1;
                    transform: translateY(0);
                    transition-delay: var(--delay);
                }

                .benefit-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0, 191, 255, 0.15);
                }

                .benefit-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    height: 4px;
                    background: linear-gradient(90deg, var(--accent-color), transparent);
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                .benefit-card:hover::before {
                    opacity: 1;
                }

                .card-corner {
                    position: absolute;
                    bottom: -30px;
                    right: -30px;
                    width: 80px;
                    height: 80px;
                    background: var(--bg-color);
                    border-radius: 50%;
                    opacity: 0;
                    transition: all 0.4s;
                }

                .benefit-card:hover .card-corner {
                    opacity: 1;
                    transform: scale(1.5);
                }

                .icon-wrapper {
                    position: relative;
                    display: inline-block;
                    margin-bottom: 1.5rem;
                }

                .icon-bg {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 80px;
                    height: 80px;
                    background: var(--bg-color);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    transition: all 0.3s;
                }

                .benefit-card:hover .icon-bg {
                    transform: translate(-50%, -50%) scale(1.1);
                }

                .icon-box {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 80px;
                    height: 80px;
                    background: white;
                    border-radius: 50%;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    transition: all 0.3s;
                }

                .benefit-card:hover .icon-box {
                    transform: scale(1.1) rotate(5deg);
                }

                .icon-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 100px;
                    height: 100px;
                    border: 2px dashed var(--accent-color);
                    border-radius: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0;
                    transition: all 0.4s;
                }

                .benefit-card:hover .icon-ring {
                    opacity: 0.3;
                    animation: spin 10s linear infinite;
                }

                @keyframes spin {
                    from { transform: translate(-50%, -50%) rotate(0deg); }
                    to { transform: translate(-50%, -50%) rotate(360deg); }
                }

                .benefit-card h3 {
                    font-size: 1.3rem;
                    margin-bottom: 0.75rem;
                    color: #1a1a2e;
                }

                .benefit-card p {
                    color: #666;
                    font-size: 0.95rem;
                    line-height: 1.7;
                }

                .trust-section {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-wrap: wrap;
                    gap: 2rem;
                    margin-top: 4rem;
                    padding: 2rem;
                    background: linear-gradient(135deg, rgba(0, 191, 255, 0.05), rgba(255, 20, 147, 0.05));
                    border-radius: 20px;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: all 0.6s ease-out 0.6s;
                }

                .trust-section.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .trust-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                }

                .trust-icon {
                    font-size: 1.5rem;
                }

                .trust-text {
                    font-weight: 600;
                    color: #333;
                }

                .trust-divider {
                    width: 1px;
                    height: 30px;
                    background: rgba(0,0,0,0.1);
                }

                @media (max-width: 768px) {
                    .benefits-section { padding: 4rem 0; }
                    .benefits-title { font-size: 2rem; }
                    .benefits-grid { gap: 1.5rem; }
                    .benefit-card { padding: 2rem 1.5rem; }
                    .trust-section { 
                        flex-direction: column; 
                        gap: 1rem; 
                    }
                    .trust-divider { 
                        width: 60px; 
                        height: 1px; 
                    }
                }
            `}</style>
        </section>
    );
}
