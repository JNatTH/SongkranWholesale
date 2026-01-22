import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, MapPin, Phone, Send, Sparkles } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const sectionRef = useRef(null);

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubmitting(false);
        setSubmitted(true);
        
        // Reset after showing success
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', message: '' });
        }, 3000);
    };

    return (
        <section id="contact" className="contact-section" ref={sectionRef}>
            {/* Background decorations */}
            <div className="contact-bg">
                <div className="water-blob blob-1"></div>
                <div className="water-blob blob-2"></div>
                <div className="floating-emoji e1">💬</div>
                <div className="floating-emoji e2">📞</div>
                <div className="floating-emoji e3">💧</div>
            </div>

            <div className="container">
                <div className={`contact-wrapper ${isVisible ? 'visible' : ''}`}>
                    {/* Left side - Info */}
                    <div className="contact-info">
                        <span className="contact-badge">
                            <Sparkles size={16} />
                            ติดต่อเรา
                        </span>
                        <h2 className="contact-title">
                            ติดต่อสั่งซื้อ<br />
                            <span className="highlight">สอบถามราคาส่ง</span>
                        </h2>
                        <p className="contact-desc">
                            สนใจสินค้าจำนวนมาก หรือต้องการผลิตแบรนด์ตัวเอง<br />
                            ทักไลน์หาเราได้เลยครับ ตอบไวมาก! 💬
                        </p>

                        <div className="contact-methods">
                            <a href="https://lin.ee/tIMVPn1" target="_blank" rel="noopener noreferrer" className="contact-method line-method">
                                <div className="method-icon">
                                    <MessageCircle size={24} />
                                </div>
                                <div className="method-info">
                                    <span className="method-label">LINE Official</span>
                                    <span className="method-value">@666ehpui</span>
                                </div>
                                <span className="method-badge">แอดเลย!</span>
                            </a>

                            <div className="contact-method">
                                <div className="method-icon phone-icon">
                                    <Phone size={24} />
                                </div>
                                <div className="method-info">
                                    <span className="method-label">โทรศัพท์</span>
                                    <span className="method-value">02-XXX-XXXX</span>
                                </div>
                            </div>

                            <div className="contact-method">
                                <div className="method-icon location-icon">
                                    <MapPin size={24} />
                                </div>
                                <div className="method-info">
                                    <span className="method-label">หน้าร้าน</span>
                                    <span className="method-value">สำเพ็ง ซอย 2 กรุงเทพฯ</span>
                                </div>
                            </div>
                        </div>

                        {/* Operating hours */}
                        <div className="operating-hours">
                            <span className="hours-icon">🕐</span>
                            <span>เปิดทุกวัน 08:00 - 18:00 น.</span>
                        </div>
                    </div>

                    {/* Right side - Form */}
                    <div className="contact-form-box">
                        <div className="form-header">
                            <h3>ฝากข้อมูลให้ติดต่อกลับ</h3>
                            <p>เราจะติดต่อกลับภายใน 30 นาที!</p>
                        </div>

                        {submitted ? (
                            <div className="success-message">
                                <div className="success-icon">✅</div>
                                <h4>ส่งข้อมูลสำเร็จ!</h4>
                                <p>เราจะติดต่อกลับโดยเร็วที่สุดครับ</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>
                                        <span className="label-icon">👤</span>
                                        ชื่อผู้ติดต่อ
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="ชื่อ-นามสกุล หรือชื่อร้าน"
                                        className="form-control"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>
                                        <span className="label-icon">📱</span>
                                        เบอร์โทรศัพท์
                                    </label>
                                    <input
                                        type="tel"
                                        required
                                        placeholder="0XX-XXX-XXXX"
                                        className="form-control"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                                
                                <div className="form-group">
                                    <label>
                                        <span className="label-icon">💬</span>
                                        สินค้าที่สนใจ / ข้อความ
                                    </label>
                                    <textarea
                                        className="form-control"
                                        rows="4"
                                        placeholder="เช่น ต้องการปืนฉีดน้ำ 100 ชิ้น, เสื้อลายดอก 50 ตัว..."
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    ></textarea>
                                </div>
                                
                                <button 
                                    type="submit" 
                                    className={`btn-submit ${isSubmitting ? 'submitting' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner"></span>
                                            กำลังส่ง...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            ส่งข้อมูล
                                        </>
                                    )}
                                </button>
                            </form>
                        )}

                        {/* Form decoration */}
                        <div className="form-decoration">
                            <span>💦</span>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .contact-section {
                    padding: 6rem 0;
                    background: linear-gradient(180deg, #f8fbff 0%, #e8f4fc 100%);
                    position: relative;
                    overflow: hidden;
                }

                .contact-bg {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                }

                .water-blob {
                    position: absolute;
                    border-radius: 50%;
                    filter: blur(60px);
                    opacity: 0.4;
                }

                .blob-1 {
                    width: 400px;
                    height: 400px;
                    background: linear-gradient(135deg, #00BFFF, #87CEEB);
                    top: -100px;
                    right: -100px;
                    animation: blob1 15s ease-in-out infinite;
                }

                .blob-2 {
                    width: 300px;
                    height: 300px;
                    background: linear-gradient(135deg, #FF6B9D, #FFB6C1);
                    bottom: -50px;
                    left: -50px;
                    animation: blob2 12s ease-in-out infinite;
                }

                @keyframes blob1 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(-30px, 30px) scale(1.1); }
                }

                @keyframes blob2 {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    50% { transform: translate(30px, -30px) scale(1.05); }
                }

                .floating-emoji {
                    position: absolute;
                    font-size: 2rem;
                    opacity: 0.15;
                    animation: floatEmoji 6s ease-in-out infinite;
                }

                .e1 { top: 20%; left: 10%; animation-delay: 0s; }
                .e2 { top: 40%; right: 5%; animation-delay: 2s; }
                .e3 { bottom: 30%; left: 5%; animation-delay: 4s; }

                @keyframes floatEmoji {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(10deg); }
                }

                .contact-wrapper {
                    display: flex;
                    gap: 4rem;
                    align-items: stretch;
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .contact-wrapper.visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .contact-info {
                    flex: 1;
                    min-width: 300px;
                }

                .contact-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: linear-gradient(135deg, #FF6B9D, #FF1493);
                    color: white;
                    padding: 0.5rem 1.25rem;
                    border-radius: 50px;
                    font-size: 0.9rem;
                    font-weight: 600;
                    margin-bottom: 1.5rem;
                }

                .contact-title {
                    font-size: 2.5rem;
                    color: #1a1a2e;
                    line-height: 1.3;
                    margin-bottom: 1.5rem;
                }

                .contact-title .highlight {
                    background: linear-gradient(135deg, #00BFFF, #0099CC);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .contact-desc {
                    color: #666;
                    font-size: 1.1rem;
                    line-height: 1.8;
                    margin-bottom: 2rem;
                }

                .contact-methods {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    margin-bottom: 2rem;
                }

                .contact-method {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1rem 1.5rem;
                    background: white;
                    border-radius: 16px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                    transition: all 0.3s;
                    text-decoration: none;
                    color: inherit;
                }

                .contact-method:hover {
                    transform: translateX(5px);
                    box-shadow: 0 6px 20px rgba(0,0,0,0.1);
                }

                .line-method {
                    background: linear-gradient(135deg, #06C755, #05a847);
                    color: white;
                    position: relative;
                }

                .line-method:hover {
                    transform: translateX(5px) scale(1.02);
                }

                .method-icon {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: rgba(255,255,255,0.2);
                    border-radius: 12px;
                }

                .line-method .method-icon {
                    background: rgba(255,255,255,0.2);
                }

                .phone-icon { background: rgba(0, 191, 255, 0.1); color: #0099CC; }
                .location-icon { background: rgba(255, 107, 157, 0.1); color: #FF6B9D; }

                .method-info {
                    display: flex;
                    flex-direction: column;
                    flex: 1;
                }

                .method-label {
                    font-size: 0.85rem;
                    opacity: 0.8;
                }

                .method-value {
                    font-size: 1.1rem;
                    font-weight: 600;
                }

                .method-badge {
                    background: white;
                    color: #06C755;
                    padding: 0.4rem 0.8rem;
                    border-radius: 20px;
                    font-size: 0.8rem;
                    font-weight: 700;
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                .operating-hours {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1.5rem;
                    background: rgba(0, 191, 255, 0.1);
                    border-radius: 50px;
                    color: #0099CC;
                    font-weight: 500;
                }

                .hours-icon {
                    font-size: 1.25rem;
                }

                .contact-form-box {
                    flex: 1;
                    min-width: 350px;
                    background: white;
                    padding: 2.5rem;
                    border-radius: 24px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.1);
                    position: relative;
                    overflow: hidden;
                }

                .form-header {
                    margin-bottom: 2rem;
                }

                .form-header h3 {
                    font-size: 1.5rem;
                    color: #1a1a2e;
                    margin-bottom: 0.5rem;
                }

                .form-header p {
                    color: #666;
                    font-size: 0.95rem;
                }

                .form-group {
                    margin-bottom: 1.25rem;
                }

                .form-group label {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-bottom: 0.5rem;
                    font-weight: 500;
                    color: #333;
                }

                .label-icon {
                    font-size: 1rem;
                }

                .form-control {
                    width: 100%;
                    padding: 1rem 1.25rem;
                    border: 2px solid #eee;
                    border-radius: 12px;
                    font-family: inherit;
                    font-size: 1rem;
                    transition: all 0.3s;
                    background: #fafafa;
                }

                .form-control:focus {
                    outline: none;
                    border-color: #00BFFF;
                    background: white;
                    box-shadow: 0 0 0 4px rgba(0, 191, 255, 0.1);
                }

                .form-control::placeholder {
                    color: #aaa;
                }

                textarea.form-control {
                    resize: none;
                }

                .btn-submit {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    padding: 1.1rem;
                    background: linear-gradient(135deg, #00BFFF, #0099CC);
                    color: white;
                    border: none;
                    border-radius: 12px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                    position: relative;
                    overflow: hidden;
                }

                .btn-submit::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s;
                }

                .btn-submit:hover:not(:disabled) {
                    transform: translateY(-2px);
                    box-shadow: 0 8px 25px rgba(0, 191, 255, 0.4);
                }

                .btn-submit:hover::before {
                    left: 100%;
                }

                .btn-submit:disabled {
                    cursor: not-allowed;
                    opacity: 0.8;
                }

                .btn-submit.submitting {
                    background: linear-gradient(135deg, #66d4ff, #33b5e5);
                }

                .spinner {
                    width: 20px;
                    height: 20px;
                    border: 2px solid rgba(255,255,255,0.3);
                    border-top-color: white;
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }

                @keyframes spin {
                    to { transform: rotate(360deg); }
                }

                .success-message {
                    text-align: center;
                    padding: 3rem 1rem;
                    animation: fadeIn 0.5s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }

                .success-icon {
                    font-size: 4rem;
                    margin-bottom: 1rem;
                }

                .success-message h4 {
                    font-size: 1.5rem;
                    color: #06C755;
                    margin-bottom: 0.5rem;
                }

                .success-message p {
                    color: #666;
                }

                .form-decoration {
                    position: absolute;
                    bottom: -20px;
                    right: -20px;
                    font-size: 6rem;
                    opacity: 0.08;
                    transform: rotate(-15deg);
                }

                @media (max-width: 900px) {
                    .contact-wrapper {
                        flex-direction: column;
                        gap: 3rem;
                    }

                    .contact-info, .contact-form-box {
                        min-width: 100%;
                    }

                    .contact-title { font-size: 2rem; }
                }
            `}</style>
        </section>
    );
}
