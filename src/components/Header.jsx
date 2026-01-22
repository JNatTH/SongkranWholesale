import React, { useState } from 'react';
import { Menu, X, MessageCircle, ShoppingCart } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <div className="container flex justify-between items-center">
                <div className="logo">
                    <a href="#">
                        <h1>Songkran <span className="text-primary">Wholesale</span></h1>
                    </a>
                </div>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    <ul className="flex gap-4 items-center">
                        <li><a href="#products">สินค้าทั้งหมด</a></li>
                        <li><a href="#benefits">จุดเด่น</a></li>
                        <li><a href="#contact">ติดต่อเรา</a></li>
                        <li>
                            <a href="https://lin.ee/tIMVPn1" target="_blank" rel="noopener noreferrer" className="btn btn-line btn-sm flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
                                <MessageCircle size={18} />
                                <span>Add LINE</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <nav className="mobile-nav">
                    <ul>
                        <li><a href="#products" onClick={() => setIsMenuOpen(false)}>สินค้าทั้งหมด</a></li>
                        <li><a href="#benefits" onClick={() => setIsMenuOpen(false)}>จุดเด่น</a></li>
                        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>ติดต่อเรา</a></li>
                    </ul>
                </nav>
            )}

            <style>{`
        .site-header {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 1000;
          padding: 1rem 0;
          box-shadow: var(--shadow-sm);
        }
        
        .logo h1 {
          font-size: 1.5rem;
          color: var(--color-text);
        }
        
        .text-primary { color: var(--color-primary); }

        .desktop-nav { display: none; }
        .mobile-toggle { 
          background: none; 
          border: none; 
          cursor: pointer;
          color: var(--color-text);
        }

        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          padding: 1rem;
          box-shadow: var(--shadow-md);
        }

        .mobile-nav li { margin-bottom: 1rem; }

        @media (min-width: 768px) {
          .desktop-nav { display: block; }
          .mobile-toggle { display: none; }
          .mobile-nav { display: none; }
        }
      `}</style>
        </header>
    );
}
