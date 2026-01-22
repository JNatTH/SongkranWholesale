import React from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container flex flex-col items-center text-center justify-center h-full" style={{ position: 'relative', zIndex: 10 }}>
        <span className="badge">💦 รับประกันราคาถูกที่สุดในไทย</span>
        <h1 className="hero-title">
          ศูนย์รวมสินค้า<span className="text-stroke">สงกรานต์</span> <br />
          <span className="text-secondary">ราคาส่ง</span> โรงงานมาเอง
        </h1>
        <p className="hero-subtitle">
          ปืนฉีดน้ำ เสื้อลายดอก ซองกันน้ำ แว่นตา และอุปกรณ์เล่นน้ำครบวงจร <br />
          สต็อกแน่นพร้อมส่งทั่วประเทศ สั่งเยอะลดเยอะ
        </p>
        <div className="flex gap-4 mt-8">
          <a href="#products" className="btn btn-primary btn-lg flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
            <ShoppingBag /> ดูแคตตาล็อกสินค้า
          </a>
          <a href="#contact" className="btn btn-secondary btn-lg flex items-center gap-2" style={{ whiteSpace: 'nowrap' }}>
            ติดต่อสั่งผลิต <ArrowRight />
          </a>
        </div>
      </div>

      <div className="wave-bottom">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <style>{`
        .hero-section {
          background: linear-gradient(135deg, #00BFFF 0%, #009ACD 100%);
          color: white;
          padding: 6rem 0 10rem 0;
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(255,255,255,0.2) 0%, transparent 10%),
            radial-gradient(circle at 80% 70%, rgba(255,255,255,0.2) 0%, transparent 15%);
          pointer-events: none;
        }

        .badge {
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          margin-bottom: 1.5rem;
          font-weight: bold;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255,255,255,0.3);
          display: inline-block;
        }

        .hero-title {
          font-size: 3rem;
          line-height: 1.2;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .text-stroke {
          -webkit-text-stroke: 2px white;
          color: transparent;
        }

        .text-secondary {
          color: var(--color-accent);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          max-width: 600px;
          opacity: 0.9;
          margin-bottom: 2rem;
        }

        .btn-lg {
          padding: 1rem 2rem;
          font-size: 1.1rem;
        }

        .wave-bottom {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          line-height: 0;
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .hero-section { padding: 4rem 0 8rem 0; }
        }
      `}</style>
    </section>
  );
}
