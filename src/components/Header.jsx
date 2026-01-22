import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Droplets } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '#products', label: 'สินค้าทั้งหมด' },
        { href: '#benefits', label: 'จุดเด่น' },
        { href: '#contact', label: 'ติดต่อเรา' },
    ];

    return (
        <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-inner">
                <a href="#" className="logo">
                    <div className="logo-icon">
                        <Droplets size={28} />
                    </div>
                    <div className="logo-text">
                        <span className="logo-main">Songkran</span>
                        <span className="logo-sub">Wholesale</span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} style={{ '--delay': `${index * 0.1}s` }}>
                                <a href={item.href} className="nav-link">
                                    {item.label}
                                    <span className="nav-underline"></span>
                                </a>
                            </li>
                        ))}
                        <li className="nav-cta">
                            <a 
                                href="https://lin.ee/tIMVPn1" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-line"
                            >
                                <MessageCircle size={18} />
                                <span>Add LINE</span>
                                <span className="btn-shine"></span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>

            {/* Mobile Nav */}
            <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index} style={{ '--delay': `${index * 0.1}s` }}>
                            <a 
                                href={item.href} 
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <li className="mobile-cta">
                        <a 
                            href="https://lin.ee/tIMVPn1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn-line-mobile"
                        >
                            <MessageCircle size={20} />
                            <span>แอด LINE เลย</span>
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Overlay */}
            {isMenuOpen && (
                <div 
                    className="nav-overlay" 
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}

            <style>{`
                .site-header {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    padding: 1rem 0;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .site-header.scrolled {
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    padding: 0.75rem 0;
                }

                .header-inner {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    text-decoration: none;
                    transition: transform 0.3s;
                }

                .logo:hover {
                    transform: scale(1.02);
                }

                .logo-icon {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: linear-gradient(135deg, #00BFFF, #0099CC);
                    border-radius: 12px;
                    color: white;
                    box-shadow: 0 4px 15px rgba(0, 191, 255, 0.3);
                }

                .site-header:not(.scrolled) .logo-icon {
                    background: rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(10px);
                }

                .logo-text {
                    display: flex;
                    flex-direction: column;
                    line-height: 1.2;
                }

                .logo-main {
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: #1a1a2e;
                }

                .site-header:not(.scrolled) .logo-main {
                    color: white;
                }

                .logo-sub {
                    font-size: 0.85rem;
                    font-weight: 500;
                    background: linear-gradient(135deg, #00BFFF, #FF6B9D);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .desktop-nav {
                    display: none;
                }

                .desktop-nav ul {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .nav-link {
                    position: relative;
                    padding: 0.75rem 1.25rem;
                    color: #1a1a2e;
                    font-weight: 500;
                    text-decoration: none;
                    transition: color 0.3s;
                }

                .site-header:not(.scrolled) .nav-link {
                    color: white;
                }

                .nav-link:hover {
                    color: #00BFFF;
                }

                .site-header:not(.scrolled) .nav-link:hover {
                    color: #FFD700;
                }

                .nav-underline {
                    position: absolute;
                    bottom: 0.5rem;
                    left: 1.25rem;
                    right: 1.25rem;
                    height: 2px;
                    background: linear-gradient(90deg, #00BFFF, #FF6B9D);
                    transform: scaleX(0);
                    transition: transform 0.3s;
                    border-radius: 2px;
                }

                .nav-link:hover .nav-underline {
                    transform: scaleX(1);
                }

                .btn-line {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.75rem 1.5rem;
                    background: #06C755;
                    color: white;
                    border-radius: 50px;
                    font-weight: 600;
                    text-decoration: none;
                    transition: all 0.3s;
                    position: relative;
                    overflow: hidden;
                }

                .btn-line:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 4px 20px rgba(6, 199, 85, 0.4);
                }

                .btn-shine {
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                    transition: left 0.5s;
                }

                .btn-line:hover .btn-shine {
                    left: 100%;
                }

                .mobile-toggle {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 44px;
                    height: 44px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                }

                .hamburger {
                    width: 24px;
                    height: 20px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .hamburger span {
                    width: 100%;
                    height: 2px;
                    background: #1a1a2e;
                    border-radius: 2px;
                    transition: all 0.3s;
                }

                .site-header:not(.scrolled) .hamburger span {
                    background: white;
                }

                .hamburger.open span:nth-child(1) {
                    transform: translateY(9px) rotate(45deg);
                }

                .hamburger.open span:nth-child(2) {
                    opacity: 0;
                }

                .hamburger.open span:nth-child(3) {
                    transform: translateY(-9px) rotate(-45deg);
                }

                .mobile-nav {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 80%;
                    max-width: 320px;
                    height: 100vh;
                    background: white;
                    padding: 6rem 2rem 2rem 2rem;
                    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    box-shadow: -10px 0 40px rgba(0,0,0,0.1);
                    z-index: 999;
                }

                .mobile-nav.open {
                    right: 0;
                }

                .mobile-nav ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                }

                .mobile-nav li {
                    opacity: 0;
                    transform: translateX(20px);
                    transition: all 0.3s ease-out;
                    transition-delay: var(--delay);
                }

                .mobile-nav.open li {
                    opacity: 1;
                    transform: translateX(0);
                }

                .mobile-nav a {
                    display: block;
                    padding: 1rem 0;
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: #1a1a2e;
                    text-decoration: none;
                    border-bottom: 1px solid #eee;
                    transition: color 0.3s;
                }

                .mobile-nav a:hover {
                    color: #00BFFF;
                }

                .mobile-cta {
                    margin-top: 2rem;
                }

                .btn-line-mobile {
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                    gap: 0.75rem;
                    padding: 1rem !important;
                    background: #06C755 !important;
                    color: white !important;
                    border-radius: 12px !important;
                    font-weight: 600;
                    border: none !important;
                }

                .nav-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(5px);
                    z-index: 998;
                    animation: fadeIn 0.3s ease-out;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @media (min-width: 768px) {
                    .desktop-nav { display: block; }
                    .mobile-toggle { display: none; }
                    .mobile-nav { display: none; }
                }
            `}</style>
        </header>
    );
}
