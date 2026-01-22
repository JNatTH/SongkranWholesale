import React from 'react';
import { MessageCircle, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="site-footer">
            {/* Wave top */}
            <div className="footer-wave">
                <svg viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path fill="currentColor" d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
                </svg>
            </div>

            <div className="footer-content">
                <div className="container">
                    <div className="footer-grid">
                        {/* Brand */}
                        <div className="footer-brand">
                            <h3 className="brand-name">
                                Songkran <span>Wholesale</span>
                            </h3>
                            <p className="brand-desc">
                                ศูนย์รวมสินค้าสงกรานต์ราคาส่ง รับตรงจากโรงงาน
                                ไม่ผ่านคนกลาง การันตีราคาดีที่สุด
                            </p>
                            <div className="social-links">
                                <a href="https://lin.ee/tIMVPn1" target="_blank" rel="noopener noreferrer" className="social-btn line">
                                    <MessageCircle size={20} />
                                </a>
                                <a href="#" className="social-btn facebook">
                                    <span>f</span>
                                </a>
                                <a href="#" className="social-btn instagram">
                                    <span>📷</span>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="footer-links">
                            <h4>ลิงก์ด่วน</h4>
                            <ul>
                                <li><a href="#products">สินค้าทั้งหมด</a></li>
                                <li><a href="#benefits">ทำไมต้องเรา</a></li>
                                <li><a href="#contact">ติดต่อสั่งซื้อ</a></li>
                            </ul>
                        </div>

                        {/* Categories */}
                        <div className="footer-links">
                            <h4>หมวดหมู่สินค้า</h4>
                            <ul>
                                <li><a href="#products">ปืนฉีดน้ำ</a></li>
                                <li><a href="#products">เสื้อลายดอก</a></li>
                                <li><a href="#products">ซองกันน้ำ</a></li>
                                <li><a href="#products">อุปกรณ์เสริม</a></li>
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="footer-contact">
                            <h4>ติดต่อเรา</h4>
                            <div className="contact-item">
                                <MessageCircle size={18} />
                                <span>LINE: @666ehpui</span>
                            </div>
                            <div className="contact-item">
                                <Phone size={18} />
                                <span>02-XXX-XXXX</span>
                            </div>
                            <div className="contact-item">
                                <MapPin size={18} />
                                <span>สำเพ็ง ซอย 2 กรุงเทพฯ</span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="footer-divider"></div>

                    {/* Bottom */}
                    <div className="footer-bottom">
                        <p className="copyright">
                            © {new Date().getFullYear()} SongkranWholesale - ศูนย์รวมสินค้าสงกรานต์ราคาส่ง
                        </p>
                        <p className="made-with">
                            Made with <Heart size={14} className="heart-icon" /> in Thailand 🇹🇭
                        </p>
                    </div>
                </div>

                {/* Scroll to top */}
                <button className="scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                    <ArrowUp size={20} />
                </button>

                {/* Decorative elements */}
                <div className="footer-decoration">
                    <span className="deco-emoji d1">💧</span>
                    <span className="deco-emoji d2">🌊</span>
                    <span className="deco-emoji d3">💦</span>
                </div>
            </div>

            <style>{`
                .site-footer {
                    position: relative;
                    margin-top: 0;
                }

                .footer-wave {
                    color: #1a1a2e;
                    line-height: 0;
                    margin-bottom: -2px;
                }

                .footer-wave svg {
                    width: 100%;
                    height: 80px;
                }

                .footer-content {
                    background: linear-gradient(180deg, #1a1a2e 0%, #0d0d1a 100%);
                    color: white;
                    padding: 4rem 0 2rem 0;
                    position: relative;
                    overflow: hidden;
                }

                .footer-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr 1fr 1.5fr;
                    gap: 3rem;
                }

                .footer-brand {
                    padding-right: 2rem;
                }

                .brand-name {
                    font-size: 1.75rem;
                    margin-bottom: 1rem;
                }

                .brand-name span {
                    background: linear-gradient(135deg, #00BFFF, #0099CC);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .brand-desc {
                    color: rgba(255,255,255,0.7);
                    line-height: 1.8;
                    margin-bottom: 1.5rem;
                }

                .social-links {
                    display: flex;
                    gap: 0.75rem;
                }

                .social-btn {
                    width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    transition: all 0.3s;
                    text-decoration: none;
                    color: white;
                }

                .social-btn.line {
                    background: #06C755;
                }

                .social-btn.facebook {
                    background: #1877F2;
                    font-weight: bold;
                    font-size: 1.25rem;
                }

                .social-btn.instagram {
                    background: linear-gradient(135deg, #833AB4, #FD1D1D, #F77737);
                }

                .social-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                }

                .footer-links h4,
                .footer-contact h4 {
                    font-size: 1.1rem;
                    margin-bottom: 1.25rem;
                    position: relative;
                    padding-bottom: 0.75rem;
                }

                .footer-links h4::after,
                .footer-contact h4::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 30px;
                    height: 2px;
                    background: linear-gradient(90deg, #00BFFF, transparent);
                }

                .footer-links ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .footer-links li {
                    margin-bottom: 0.75rem;
                }

                .footer-links a {
                    color: rgba(255,255,255,0.7);
                    text-decoration: none;
                    transition: all 0.3s;
                    display: inline-block;
                }

                .footer-links a:hover {
                    color: #00BFFF;
                    transform: translateX(5px);
                }

                .contact-item {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    color: rgba(255,255,255,0.7);
                    margin-bottom: 1rem;
                }

                .contact-item svg {
                    color: #00BFFF;
                }

                .footer-divider {
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
                    margin: 3rem 0 2rem 0;
                }

                .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    gap: 1rem;
                }

                .copyright {
                    color: rgba(255,255,255,0.5);
                    font-size: 0.9rem;
                }

                .made-with {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: rgba(255,255,255,0.5);
                    font-size: 0.9rem;
                }

                .heart-icon {
                    color: #FF6B9D;
                    animation: heartbeat 1.5s ease infinite;
                }

                @keyframes heartbeat {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.2); }
                }

                .scroll-top {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    width: 50px;
                    height: 50px;
                    background: linear-gradient(135deg, #00BFFF, #0099CC);
                    color: white;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 20px rgba(0, 191, 255, 0.4);
                    transition: all 0.3s;
                    z-index: 100;
                }

                .scroll-top:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 30px rgba(0, 191, 255, 0.5);
                }

                .footer-decoration {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    pointer-events: none;
                    overflow: hidden;
                }

                .deco-emoji {
                    position: absolute;
                    font-size: 3rem;
                    opacity: 0.05;
                }

                .d1 { top: 20%; left: 5%; }
                .d2 { top: 60%; right: 10%; }
                .d3 { bottom: 20%; left: 50%; }

                @media (max-width: 900px) {
                    .footer-grid {
                        grid-template-columns: 1fr 1fr;
                        gap: 2rem;
                    }

                    .footer-brand {
                        grid-column: span 2;
                        padding-right: 0;
                    }
                }

                @media (max-width: 600px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }

                    .footer-brand {
                        grid-column: span 1;
                    }

                    .footer-bottom {
                        flex-direction: column;
                        text-align: center;
                    }

                    .scroll-top {
                        bottom: 1.5rem;
                        right: 1.5rem;
                        width: 45px;
                        height: 45px;
                    }
                }
            `}</style>
        </footer>
    );
}
