import React, { useEffect, useState } from 'react';
import { ShoppingBag, ArrowRight, Droplets } from 'lucide-react';

// Water droplet component
const WaterDrop = ({ style, delay }) => (
  <div 
    className="water-drop" 
    style={{ 
      ...style, 
      animationDelay: `${delay}s`,
    }}
  >
    💧
  </div>
);

// Floating bubble component
const Bubble = ({ size, left, delay }) => (
  <div 
    className="bubble" 
    style={{ 
      width: size, 
      height: size, 
      left: `${left}%`,
      animationDelay: `${delay}s`
    }}
  />
);

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate random water drops
  const waterDrops = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      fontSize: `${Math.random() * 20 + 15}px`,
      opacity: Math.random() * 0.5 + 0.3,
    },
    delay: Math.random() * 5,
  }));

  // Generate bubbles
  const bubbles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 30 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 8,
  }));

  return (
    <section className="hero-section">
      {/* Animated background elements */}
      <div className="hero-bg-elements">
        {waterDrops.map(drop => (
          <WaterDrop key={drop.id} style={drop.style} delay={drop.delay} />
        ))}
        {bubbles.map(bubble => (
          <Bubble key={bubble.id} size={bubble.size} left={bubble.left} delay={bubble.delay} />
        ))}
      </div>

      {/* Animated water splash decorations */}
      <div className="splash-left">💦</div>
      <div className="splash-right">🌊</div>

      <div className={`container hero-content ${mounted ? 'animate-in' : ''}`}>
        <span className="badge animate-bounce-in">
          <Droplets size={18} className="badge-icon" />
          รับประกันราคาถูกที่สุดในไทย
        </span>
        
        <h1 className="hero-title">
          <span className="title-line-1">ศูนย์รวมสินค้า</span>
          <span className="text-stroke glow-text">สงกรานต์</span>
          <br />
          <span className="text-gradient">ราคาส่ง</span>
          <span className="title-sub"> โรงงานมาเอง</span>
        </h1>
        
        <p className="hero-subtitle">
          ปืนฉีดน้ำ เสื้อลายดอก ซองกันน้ำ แว่นตา และอุปกรณ์เล่นน้ำครบวงจร <br />
          <strong>สต็อกแน่นพร้อมส่งทั่วประเทศ</strong> สั่งเยอะลดเยอะ
        </p>
        
        <div className="hero-buttons">
          <a href="#products" className="btn-hero-primary">
            <ShoppingBag size={22} />
            <span>ดูแคตตาล็อกสินค้า</span>
          </a>
          <a href="#contact" className="btn-hero-secondary">
            <span>ติดต่อสั่งผลิต</span>
            <ArrowRight size={22} />
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">ปีประสบการณ์</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">ลูกค้าประจำ</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">1M+</span>
            <span className="stat-label">สินค้าขายไปแล้ว</span>
          </div>
        </div>
      </div>

      {/* Multiple wave layers */}
      <div className="wave-container">
        <svg className="wave wave-1" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="rgba(255,255,255,0.3)" d="M0,160L48,176C96,192,192,224,288,229.3C384,235,480,213,576,181.3C672,149,768,107,864,112C960,117,1056,171,1152,181.3C1248,192,1344,160,1392,144L1440,128L1440,320L0,320Z"></path>
        </svg>
        <svg className="wave wave-2" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="rgba(255,255,255,0.5)" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L0,320Z"></path>
        </svg>
        <svg className="wave wave-3" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L0,320Z"></path>
        </svg>
      </div>

      <style>{`
        .hero-section {
          background: linear-gradient(135deg, #00D4FF 0%, #0099CC 30%, #FF6B9D 70%, #FF1493 100%);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          color: white;
          padding: 8rem 0 12rem 0;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-bg-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .water-drop {
          position: absolute;
          animation: float 6s ease-in-out infinite;
          filter: drop-shadow(0 0 10px rgba(255,255,255,0.5));
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(10deg); }
        }

        .bubble {
          position: absolute;
          bottom: -50px;
          background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), rgba(255,255,255,0.2));
          border-radius: 50%;
          animation: rise 8s ease-in infinite;
        }

        @keyframes rise {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }

        .splash-left, .splash-right {
          position: absolute;
          font-size: 8rem;
          opacity: 0.15;
          animation: pulse 3s ease-in-out infinite;
          filter: blur(2px);
        }

        .splash-left {
          left: 5%;
          top: 20%;
          transform: rotate(-15deg);
        }

        .splash-right {
          right: 5%;
          bottom: 30%;
          transform: rotate(15deg);
          animation-delay: 1.5s;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1) rotate(-15deg); }
          50% { transform: scale(1.1) rotate(-10deg); }
        }

        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-content.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.6rem 1.5rem;
          border-radius: 50px;
          margin-bottom: 2rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          animation: bounceIn 0.8s ease-out 0.3s both;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .badge-icon {
          animation: wiggle 2s ease-in-out infinite;
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }

        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3); }
          50% { transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }

        .hero-title {
          font-size: 3.5rem;
          line-height: 1.3;
          font-weight: 800;
          margin-bottom: 1.5rem;
          text-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }

        .title-line-1 {
          display: inline;
        }

        .text-stroke {
          -webkit-text-stroke: 3px white;
          color: transparent;
          position: relative;
          margin-left: 0.5rem;
        }

        .glow-text {
          animation: textGlow 2s ease-in-out infinite alternate;
        }

        @keyframes textGlow {
          from { filter: drop-shadow(0 0 5px rgba(255,255,255,0.5)); }
          to { filter: drop-shadow(0 0 20px rgba(255,255,255,0.8)); }
        }

        .text-gradient {
          background: linear-gradient(90deg, #FFD700, #FFA500, #FFD700);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }

        .title-sub {
          font-weight: 400;
          opacity: 0.95;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          max-width: 650px;
          opacity: 0.95;
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }

        .hero-buttons {
          display: flex;
          gap: 1.25rem;
          margin-bottom: 3rem;
        }

        .btn-hero-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-size: 1.05rem;
          font-weight: 600;
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: none;
          cursor: pointer;
          text-decoration: none;
          background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
          color: #1a1a2e;
          box-shadow: 0 4px 20px rgba(255, 165, 0, 0.4);
        }

        .btn-hero-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 8px 30px rgba(255, 165, 0, 0.5);
        }

        .btn-hero-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          font-size: 1.05rem;
          font-weight: 600;
          border-radius: 16px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          text-decoration: none;
          background: white;
          color: #0099CC;
          border: none;
          box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }

        .btn-hero-secondary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 8px 30px rgba(255,255,255,0.4);
          background: #f8f8f8;
        }

        .hero-stats {
          display: flex;
          align-items: center;
          gap: 2rem;
          background: rgba(255,255,255,0.15);
          padding: 1.5rem 3rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          animation: slideUp 0.8s ease-out 0.6s both;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(180deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.85rem;
          opacity: 0.9;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.3);
        }

        .wave-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 150px;
          pointer-events: none;
        }

        .wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .wave-1 {
          animation: wave 8s ease-in-out infinite;
        }

        .wave-2 {
          animation: wave 6s ease-in-out infinite reverse;
          animation-delay: -2s;
        }

        .wave-3 {
          animation: wave 10s ease-in-out infinite;
          animation-delay: -4s;
        }

        @keyframes wave {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(-25px); }
        }

        @media (max-width: 768px) {
          .hero-section { padding: 6rem 0 10rem 0; min-height: auto; }
          .hero-title { font-size: 2.2rem; }
          .hero-subtitle { font-size: 1rem; padding: 0 1rem; }
          .hero-buttons { flex-direction: column; width: 100%; padding: 0 2rem; gap: 1rem; }
          .btn-hero-primary, .btn-hero-secondary { 
            width: 100%; 
            justify-content: center;
            padding: 1.1rem 1.5rem;
          }
          .hero-stats { 
            flex-direction: column; 
            gap: 1rem; 
            padding: 1.5rem 2rem;
          }
          .stat-divider { width: 60px; height: 1px; }
          .splash-left, .splash-right { font-size: 4rem; }
        }
      `}</style>
    </section>
  );
}
