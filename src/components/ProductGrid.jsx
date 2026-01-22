import React, { useEffect, useRef, useState } from 'react';
import { ShoppingCart, Sparkles, TrendingDown, Filter } from 'lucide-react';

// Import images directly
import backpackGunImg from '../assets/products/backpack-gun.svg';
import highPressureGunImg from '../assets/products/high-pressure-gun.svg';
import waterproofBagImg from '../assets/products/waterproof-bag.svg';
import gogglesImg from '../assets/products/goggles.svg';
import floralShirtImg from '../assets/products/floral-shirt.svg';
// Product images by SKU
import wgBp001Img from '../assets/products/WG-BP-001.jpg';
import wgBp002Img from '../assets/products/WG-BP-002.jpg';
import wgEl001Img from '../assets/products/WG-EL-001.jpg';
import wgHp030Img from '../assets/products/WG-HP-030.jpg';
import wgHp060Img from '../assets/products/WG-HP-060.jpg';
import wgSm001Img from '../assets/products/WG-SM-001.jpg';
// Waterproof equipment images
import acWp001Img from '../assets/products/AC-WP-001.jpg';
import acWp002Img from '../assets/products/AC-WP-002.jpg';
import acBg001Img from '../assets/products/AC-BG-001.webp';
import acBg002Img from '../assets/products/AC-BG-002.webp';
import acGl001Img from '../assets/products/AC-GL-001.jpg';
import acGl002Img from '../assets/products/AC-GL-002.jpg';
import acVs001Img from '../assets/products/AC-VS-001.webp';
// Clothing images
import clSh001Img from '../assets/products/CL-SH-001.webp';
import clSh002Img from '../assets/products/CL-SH-002.jpg';

// Categories
const categories = [
  { id: 'all', name: 'ทั้งหมด', icon: '🎯' },
  { id: 'water-play', name: 'อุปกรณ์เล่นน้ำ', icon: '💦' },
  { id: 'waterproof', name: 'อุปกรณ์กันน้ำ', icon: '🛡️' },
  { id: 'clothing', name: 'เสื้อผ้า', icon: '👕' },
  { id: 'worship', name: 'ของไหว้', icon: '🙏' },
  { id: 'misc', name: 'เบ็ดเตล็ด', icon: '🎁' }
];

// All 22 products organized by category
const products = [
  // === อุปกรณ์เล่นน้ำ (Water Play Equipment) ===
  {
    id: 1,
    sku: 'WG-BP-001',
    name: 'ปืนฉีดน้ำเป้สะพายหลัง',
    price: '110',
    retailPrice: '199',
    unit: 'ชิ้น',
    minOrder: '6 ชิ้น',
    category: 'water-play',
    categoryName: 'อุปกรณ์เล่นน้ำ',
    image: wgBp001Img,
    hot: true
  },
  {
    id: 2,
    sku: 'WG-BP-002',
    name: 'ปืนฉีดน้ำเป้สะพายหลัง',
    price: '120',
    retailPrice: '199',
    unit: 'ชิ้น',
    minOrder: '6 ชิ้น',
    category: 'water-play',
    categoryName: 'อุปกรณ์เล่นน้ำ',
    image: wgBp002Img,
    hot: true
  },
  {
    id: 3,
    sku: 'WG-HP-030',
    name: 'ปืนฉีดน้ำแรงดันสูง 30 ซม.',
    price: '55',
    retailPrice: '229',
    unit: 'ชิ้น',
    minOrder: '12 ชิ้น',
    category: 'water-play',
    categoryName: 'อุปกรณ์เล่นน้ำ',
    image: wgHp030Img,
    hot: true
  },
  {
    id: 4,
    sku: 'WG-HP-060',
    name: 'ปืนฉีดน้ำแรงดันสูง 60 ซม.',
    price: '115',
    retailPrice: '329',
    unit: 'ชิ้น',
    minOrder: '12 ชิ้น',
    category: 'water-play',
    categoryName: 'อุปกรณ์เล่นน้ำ',
    image: wgHp060Img,
    hot: true
  },
  {
    id: 5,
    sku: 'WG-SM-001',
    name: 'ปืนฉีดน้ำพกพา จิ๋ว',
    price: '12',
    retailPrice: '69',
    unit: 'ชิ้น',
    minOrder: '50 ชิ้น',
    category: 'water-play',
    categoryName: 'อุปกรณ์เล่นน้ำ',
    image: wgSm001Img
  },
  {
    id: 6,
    sku: 'WG-EL-001',
    name: 'ปืนฉีดน้ำไฟฟ้า อัตโนมัติ',
    price: '220',
    retailPrice: '399',
    unit: 'กล่อง',
    minOrder: '6 กล่อง',
    category: 'water-play',
    categoryName: 'อุปกรณ์เล่นน้ำ',
    image: wgEl001Img,
    hot: true
  },

  // === อุปกรณ์กันน้ำ (Waterproof Equipment) ===
  {
    id: 7,
    sku: 'AC-WP-001',
    name: 'ซองกันน้ำโทรศัพท์ (เกรด A)',
    price: '12',
    retailPrice: '59',
    unit: 'ชิ้น',
    minOrder: '100 ชิ้น',
    category: 'waterproof',
    categoryName: 'อุปกรณ์กันน้ำ',
    image: acWp001Img,
    hot: true
  },
  {
    id: 8,
    sku: 'AC-WP-002',
    name: 'ซองกันน้ำโทรศัพท์ (เรืองแสง)',
    price: '18',
    retailPrice: '79',
    unit: 'ชิ้น',
    minOrder: '50 ชิ้น',
    category: 'waterproof',
    categoryName: 'อุปกรณ์กันน้ำ',
    image: acWp002Img
  },
  {
    id: 9,
    sku: 'AC-BG-001',
    name: 'กระเป๋าคาดเอวกันน้ำ',
    price: '28',
    retailPrice: '99',
    unit: 'ชิ้น',
    minOrder: '24 ชิ้น',
    category: 'waterproof',
    categoryName: 'อุปกรณ์กันน้ำ',
    image: acBg001Img
  },
  {
    id: 10,
    sku: 'AC-BG-002',
    name: 'กระเป๋าคาดเอวกันน้ำ',
    price: '28',
    retailPrice: '99',
    unit: 'ชิ้น',
    minOrder: '24 ชิ้น',
    category: 'waterproof',
    categoryName: 'อุปกรณ์กันน้ำ',
    image: acBg002Img
  },
  {
    id: 11,
    sku: 'AC-GL-001',
    name: 'แว่นตากันน้ำ (Goggles)',
    price: '18',
    retailPrice: '79',
    unit: 'อัน',
    minOrder: '36 อัน',
    category: 'waterproof',
    categoryName: 'อุปกรณ์กันน้ำ',
    image: acGl001Img
  },
  {
    id: 12,
    sku: 'AC-GL-002',
    name: 'แว่นตากันน้ำ แฟชั่น',
    price: '45',
    retailPrice: '89',
    unit: 'อัน',
    minOrder: '12 อัน',
    category: 'waterproof',
    categoryName: 'อุปกรณ์กันน้ำ',
    image: acGl002Img
  },
  {
    id: 13,
    sku: 'AC-VS-001',
    name: 'หมวก Visor เปิดหัว',
    price: '35',
    retailPrice: '79',
    unit: 'ใบ',
    minOrder: '24 ใบ',
    category: 'waterproof',
    categoryName: 'อุปกรณ์กันน้ำ',
    image: acVs001Img
  },

  // === เสื้อผ้า (Clothing) ===
  {
    id: 14,
    sku: 'CL-SH-001',
    name: 'เสื้อฮาวายลายดอก',
    price: '85',
    retailPrice: '150',
    unit: 'ตัว',
    minOrder: '12 ตัว',
    category: 'clothing',
    categoryName: 'เสื้อผ้า',
    image: clSh001Img,
    hot: true
  },
  {
    id: 15,
    sku: 'CL-SH-002',
    name: 'เสื้อฮาวายลายดอก',
    price: '95',
    retailPrice: '150',
    unit: 'ตัว',
    minOrder: '12 ตัว',
    category: 'clothing',
    categoryName: 'เสื้อผ้า',
    image: clSh002Img
  },
  {
    id: 16,
    sku: 'CL-TS-001',
    name: 'เสื้อยืดมัดย้อม',
    price: '75',
    retailPrice: '150',
    unit: 'ตัว',
    minOrder: '12 ตัว',
    category: 'clothing',
    categoryName: 'เสื้อผ้า',
    image: floralShirtImg
  },
  {
    id: 17,
    sku: 'CL-PA-001',
    name: 'กางเกงช้าง ขาสั้น',
    price: '55',
    retailPrice: '129',
    unit: 'ตัว',
    minOrder: '24 ตัว',
    category: 'clothing',
    categoryName: 'เสื้อผ้า',
    image: floralShirtImg
  },
  {
    id: 18,
    sku: 'CL-PA-002',
    name: 'กางเกงช้าง ขายาว',
    price: '80',
    retailPrice: '150',
    unit: 'ตัว',
    minOrder: '24 ตัว',
    category: 'clothing',
    categoryName: 'เสื้อผ้า',
    image: floralShirtImg
  },

  // === ของไหว้ (Worship Items) ===
  {
    id: 19,
    sku: 'TR-DP-001',
    name: 'ดินสอพอง',
    price: '18',
    retailPrice: '50',
    unit: 'ถุง',
    minOrder: '20 ถุง',
    category: 'worship',
    categoryName: 'ของไหว้',
    image: waterproofBagImg
  },
  {
    id: 20,
    sku: 'TR-NO-001',
    name: 'น้ำอบไทย ขวดกลาง',
    price: '25',
    retailPrice: '79',
    unit: 'ขวด',
    minOrder: '24 ขวด',
    category: 'worship',
    categoryName: 'ของไหว้',
    image: waterproofBagImg
  },
  {
    id: 21,
    sku: 'TR-FL-001',
    name: 'พวงมาลัยพลาสติก',
    price: '8',
    retailPrice: '29',
    unit: 'เส้น',
    minOrder: '50 เส้น',
    category: 'worship',
    categoryName: 'ของไหว้',
    image: waterproofBagImg
  },

  // === เบ็ดเตล็ด (Miscellaneous) ===
  {
    id: 22,
    sku: 'MS-BW-001',
    name: 'ขันน้ำพลาสติก 14 ซม.',
    price: '7',
    retailPrice: '25',
    unit: 'ใบ',
    minOrder: '60 ใบ',
    category: 'misc',
    categoryName: 'เบ็ดเตล็ด',
    image: backpackGunImg
  }
];

// Calculate discount percentage
const calcDiscount = (retail, wholesale) => {
  return Math.round((1 - parseInt(wholesale) / parseInt(retail)) * 100);
};

export default function ProductGrid() {
  const [visibleCards, setVisibleCards] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const sectionRef = useRef(null);

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  useEffect(() => {
    // Reset visible cards when category changes
    setVisibleCards([]);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Stagger the animation of cards
            filteredProducts.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 80);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [selectedCategory, filteredProducts.length]);

  // Trigger animation when category changes
  useEffect(() => {
    setVisibleCards([]);
    filteredProducts.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 80);
    });
  }, [selectedCategory]);

  // Generate Product Schema for SEO
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.name,
      "sku": product.sku,
      "description": `${product.name} - ${product.categoryName} ราคาส่ง ${product.price} บาท`,
      "category": product.categoryName,
      "brand": {
        "@type": "Brand",
        "name": "Songkran Wholesale"
      },
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "THB",
        "availability": "https://schema.org/InStock",
        "priceValidUntil": "2026-12-31",
        "url": `https://songkranwholesale.com/#products`
      },
      "image": product.image
    }))
  };

  return (
    <section id="products" className="products-section" ref={sectionRef} itemScope itemType="https://schema.org/ItemList">
      {/* Structured Data for Products */}
      <script type="application/ld+json">
        {JSON.stringify(productSchema)}
      </script>
      
      {/* Background decoration */}
      <div className="section-bg-pattern"></div>
      
      <div className="container">
        <div className="section-header">
          <span className="section-badge">
            <Sparkles size={16} />
            สินค้าสงกรานต์ 2569
          </span>
          <h2 className="section-title">สินค้าขายส่ง {products.length} รายการ</h2>
          <p className="section-subtitle">คัดสรรสินค้าคุณภาพดี ขายง่าย กำไรดี สำหรับพ่อค้าแม่ค้า</p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          <div className="filter-label">
            <Filter size={18} />
            <span>หมวดหมู่:</span>
          </div>
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                <span className="filter-icon">{cat.icon}</span>
                <span className="filter-name">{cat.name}</span>
                {cat.id !== 'all' && (
                  <span className="filter-count">
                    {products.filter(p => p.category === cat.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Product count indicator */}
        <div className="product-count">
          แสดง <strong>{filteredProducts.length}</strong> สินค้า
          {selectedCategory !== 'all' && (
            <span> ในหมวด {categories.find(c => c.id === selectedCategory)?.name}</span>
          )}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className={`product-card ${visibleCards.includes(index) ? 'visible' : ''}`}
              style={{ '--delay': `${index * 0.08}s` }}
            >
              {/* Discount badge */}
              <div className="discount-badge">
                <TrendingDown size={14} />
                <span>-{calcDiscount(product.retailPrice, product.price)}%</span>
              </div>

              {/* Hot badge */}
              {product.hot && (
                <div className="hot-badge">
                  🔥 ขายดี
                </div>
              )}

              <div className="product-image">
                <div className="image-glow"></div>
                <img 
                  src={product.image} 
                  alt={`${product.name} - ${product.categoryName} ราคาส่ง ${product.price} บาท SKU: ${product.sku}`}
                  loading="lazy"
                  width="300"
                  height="300"
                />
                <span className="category-tag">{product.categoryName}</span>
              </div>
              
              <div className="product-info">
                <div className="product-sku">SKU: {product.sku}</div>
                <h3>{product.name}</h3>
                
                <div className="price-box">
                  <div className="wholesale">
                    <span className="label">ราคาส่ง</span>
                    <div className="price-row">
                      <span className="price">฿{product.price}</span>
                      <span className="unit">/{product.unit}</span>
                    </div>
                  </div>
                  <div className="retail">
                    <span>ปกติ ฿{product.retailPrice}</span>
                  </div>
                </div>
                
                <div className="min-order">
                  <span className="min-icon">📦</span>
                  ขั้นต่ำ: {product.minOrder}
                </div>
                
                <button className="btn-order">
                  <ShoppingCart size={18} />
                  <span>สนใจสั่งซื้อ</span>
                </button>
              </div>

              {/* Hover shine effect */}
              <div className="card-shine"></div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="view-more">
          <a href="#contact" className="btn-view-all">
            ติดต่อสั่งซื้อสินค้า
            <span className="arrow">→</span>
          </a>
        </div>
      </div>

      <style>{`
        .products-section {
          padding: 6rem 0;
          position: relative;
          background: linear-gradient(180deg, #ffffff 0%, #f0f8ff 100%);
          overflow: hidden;
        }

        .section-bg-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 20% 80%, rgba(0, 191, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 20, 147, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #FF6B9D, #FF1493);
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
          animation: pulse-badge 2s ease-in-out infinite;
        }

        @keyframes pulse-badge {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .section-title {
          font-size: 2.5rem;
          color: #1a1a2e;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #0099CC, #FF1493);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: #666;
          font-size: 1.1rem;
          max-width: 500px;
          margin: 0 auto;
        }

        /* Category Filter Styles */
        .category-filter {
          margin-bottom: 2rem;
          padding: 1.5rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }

        .filter-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #666;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .filter-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1rem;
          background: #f5f5f5;
          border: 2px solid transparent;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
          font-weight: 500;
          color: #555;
        }

        .filter-btn:hover {
          background: #e8f4fd;
          border-color: #00BFFF;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #00BFFF, #0099CC);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(0, 191, 255, 0.3);
        }

        .filter-icon {
          font-size: 1.1rem;
        }

        .filter-count {
          background: rgba(0,0,0,0.1);
          padding: 0.15rem 0.5rem;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .filter-btn.active .filter-count {
          background: rgba(255,255,255,0.3);
        }

        .product-count {
          text-align: center;
          color: #666;
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .product-count strong {
          color: #0099CC;
          font-size: 1.1rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .product-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 1.25rem;
          }
        }

        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(0,0,0,0.05);
          position: relative;
          opacity: 0;
          transform: translateY(40px);
        }

        .product-card.visible {
          opacity: 1;
          transform: translateY(0);
          transition-delay: var(--delay);
        }

        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 191, 255, 0.2);
        }

        .card-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.4),
            transparent
          );
          transition: left 0.6s;
          pointer-events: none;
        }

        .product-card:hover .card-shine {
          left: 150%;
        }

        .discount-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: linear-gradient(135deg, #FF6B6B, #FF1493);
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.8rem;
          font-weight: 700;
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          box-shadow: 0 2px 10px rgba(255, 20, 147, 0.3);
        }

        .hot-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          color: #333;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          z-index: 10;
          animation: shake 2s ease-in-out infinite;
        }

        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-3deg); }
          75% { transform: rotate(3deg); }
        }

        .product-image {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .image-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(0, 191, 255, 0.2), transparent 70%);
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .product-card:hover .image-glow {
          opacity: 1;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 1.5rem;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .product-card:hover .product-image img {
          transform: scale(1.1) rotate(2deg);
        }

        .category-tag {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          background: white;
          padding: 0.3rem 0.7rem;
          border-radius: 50px;
          font-size: 0.7rem;
          color: #0099CC;
          font-weight: 600;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .product-info {
          padding: 1.25rem;
        }

        .product-sku {
          font-size: 0.7rem;
          color: #999;
          font-family: monospace;
          margin-bottom: 0.5rem;
        }

        .product-info h3 {
          font-size: 0.95rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          height: 2.5em;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: #1a1a2e;
        }

        .price-box {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 0.75rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px dashed #eee;
        }

        .wholesale .label {
          display: block;
          font-size: 0.7rem;
          color: #FF1493;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.15rem;
        }

        .price-row {
          display: flex;
          align-items: baseline;
        }

        .wholesale .price {
          font-size: 1.5rem;
          font-weight: 800;
          background: linear-gradient(135deg, #FF1493, #FF6B9D);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .wholesale .unit {
          font-size: 0.85rem;
          color: #666;
          margin-left: 2px;
        }

        .retail {
          font-size: 0.8rem;
          color: #999;
          text-decoration: line-through;
        }

        .min-order {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #e3f2fd, #bbdefb);
          color: #0277bd;
          padding: 0.6rem 0.85rem;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 500;
          margin-bottom: 0.75rem;
        }

        .min-icon {
          font-size: 1rem;
        }

        .btn-order {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #00BFFF, #0099CC);
          color: white;
          border: none;
          padding: 0.75rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .btn-order::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .btn-order:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 15px rgba(0, 191, 255, 0.4);
        }

        .btn-order:hover::before {
          left: 100%;
        }

        .view-more {
          text-align: center;
          margin-top: 4rem;
        }

        .btn-view-all {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem 2.5rem;
          background: white;
          color: #0099CC;
          border: 2px solid #0099CC;
          border-radius: 50px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s;
          text-decoration: none;
        }

        .btn-view-all .arrow {
          transition: transform 0.3s;
        }

        .btn-view-all:hover {
          background: linear-gradient(135deg, #00BFFF, #0099CC);
          color: white;
          border-color: transparent;
          transform: translateY(-2px);
          box-shadow: 0 4px 20px rgba(0, 191, 255, 0.3);
        }

        .btn-view-all:hover .arrow {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .products-section { 
            padding: 3rem 0; 
          }
          .section-header {
            margin-bottom: 1.5rem;
          }
          .section-title { 
            font-size: 1.75rem; 
            margin-bottom: 0.75rem;
          }
          .section-subtitle {
            font-size: 0.95rem;
            padding: 0 1rem;
          }
          .category-filter {
            padding: 1rem;
            margin-bottom: 1.5rem;
          }
          .filter-label {
            font-size: 0.9rem;
            margin-bottom: 0.75rem;
          }
          .filter-buttons { 
            gap: 0.5rem; 
            overflow-x: auto;
            padding-bottom: 0.5rem;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: thin;
          }
          .filter-buttons::-webkit-scrollbar {
            height: 4px;
          }
          .filter-buttons::-webkit-scrollbar-thumb {
            background: #ccc;
            border-radius: 2px;
          }
          .filter-btn { 
            padding: 0.5rem 0.85rem; 
            font-size: 0.85rem;
            white-space: nowrap;
            flex-shrink: 0;
          }
          .filter-icon {
            font-size: 1rem;
          }
          .product-grid { 
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem; 
          }
          .product-count {
            font-size: 0.9rem;
            margin-bottom: 1.5rem;
          }
          .product-image {
            height: 180px;
          }
          .product-info {
            padding: 1rem;
          }
          .product-info h3 {
            font-size: 0.9rem;
            height: 2.2em;
          }
          .wholesale .price {
            font-size: 1.4rem;
          }
          .btn-order {
            padding: 0.7rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 480px) {
          .products-section { 
            padding: 2.5rem 0; 
          }
          .section-title { 
            font-size: 1.5rem; 
          }
          .section-subtitle {
            font-size: 0.85rem;
          }
          .category-filter {
            padding: 0.75rem;
            margin-bottom: 1rem;
          }
          .filter-label {
            font-size: 0.85rem;
            margin-bottom: 0.5rem;
          }
          .filter-btn { 
            padding: 0.45rem 0.7rem; 
            font-size: 0.8rem;
          }
          .filter-icon {
            font-size: 0.95rem;
          }
          .filter-count {
            font-size: 0.7rem;
            padding: 0.1rem 0.4rem;
          }
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }
          .product-image {
            height: 140px;
          }
          .product-image img {
            padding: 1rem;
          }
          .product-info {
            padding: 0.75rem;
          }
          .product-sku {
            font-size: 0.65rem;
            margin-bottom: 0.35rem;
          }
          .product-info h3 {
            font-size: 0.8rem;
            height: 2em;
            margin-bottom: 0.5rem;
          }
          .price-box {
            margin-bottom: 0.5rem;
            padding-bottom: 0.5rem;
          }
          .wholesale .label {
            font-size: 0.65rem;
          }
          .wholesale .price {
            font-size: 1.2rem;
          }
          .wholesale .unit {
            font-size: 0.75rem;
          }
          .retail {
            font-size: 0.75rem;
          }
          .min-order {
            padding: 0.5rem 0.65rem;
            font-size: 0.75rem;
            margin-bottom: 0.5rem;
          }
          .min-icon {
            font-size: 0.9rem;
          }
          .btn-order {
            padding: 0.65rem;
            font-size: 0.8rem;
          }
          .discount-badge {
            padding: 0.3rem 0.6rem;
            font-size: 0.7rem;
            top: 0.75rem;
            left: 0.75rem;
          }
          .hot-badge {
            padding: 0.3rem 0.6rem;
            font-size: 0.7rem;
            top: 0.75rem;
            right: 0.75rem;
          }
          .category-tag {
            padding: 0.25rem 0.6rem;
            font-size: 0.65rem;
            bottom: 0.5rem;
            right: 0.5rem;
          }
          .product-count {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }
          .product-count strong {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
