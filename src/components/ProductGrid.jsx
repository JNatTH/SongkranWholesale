import React from 'react';

// Import images directly
import backpackGunImg from '../assets/products/backpack-gun.svg';
import highPressureGunImg from '../assets/products/high-pressure-gun.svg';
import waterproofBagImg from '../assets/products/waterproof-bag.svg';
import gogglesImg from '../assets/products/goggles.svg';
import floralShirtImg from '../assets/products/floral-shirt.svg';

// ซองกันน้ำคอดอก - ใช้รูปจริงที่อัพโหลด
const waterproofChestPouchImg = '/src/assets/products/waterproof-pouch.jpg';

const products = [
  {
    id: 1,
    name: 'ปืนฉีดน้ำเป้สะพายหลัง (คละลายการ์ตูน)',
    price: '85',
    retailPrice: '199',
    unit: 'ชิ้น',
    minOrder: '12 ชิ้น',
    category: 'ปืนฉีดน้ำ',
    image: backpackGunImg
  },
  {
    id: 2,
    name: 'ปืนฉีดน้ำแรงดันสูง 55cm',
    price: '120',
    retailPrice: '299',
    unit: 'ชิ้น',
    minOrder: '6 ชิ้น',
    category: 'ปืนฉีดน้ำ',
    image: highPressureGunImg
  },
  {
    id: 3,
    name: 'ซองกันน้ำเกรด A ทางทัชสกรีนได้',
    price: '15',
    retailPrice: '59',
    unit: 'ซอง',
    minOrder: '100 ซอง',
    category: 'อุปกรณ์เสริม',
    image: waterproofBagImg
  },
  {
    id: 4,
    name: 'แว่นตากันน้ำ สงกรานต์ (คละสี)',
    price: '18',
    retailPrice: '69',
    unit: 'อัน',
    minOrder: '50 อัน',
    category: 'อุปกรณ์เสริม',
    image: gogglesImg
  },
  {
    id: 5,
    name: 'เสื้อลายดอก ผ้าคอตตอน (คละลาย)',
    price: '65',
    retailPrice: '150',
    unit: 'ตัว',
    minOrder: '36 ตัว',
    category: 'เสื้อผ้า',
    image: floralShirtImg
  },
  {
    id: 6,
    name: 'ซองกันน้ำคอดอก (คละสี/ลายการ์ตูน)',
    price: '25',
    retailPrice: '79',
    unit: 'ชิ้น',
    minOrder: '12 ชิ้น',
    category: 'อุปกรณ์เสริม',
    image: waterproofChestPouchImg
  }
];

export default function ProductGrid() {
  return (
    <section id="products" className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">สินค้าขายส่งแนะนำ</h2>
          <p className="text-gray-600">คัดสรรสินค้าคุณภาพดี ขายง่าย กำไรดี สำหรับพ่อค้าแม่ค้า</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="category-tag">{product.category}</span>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price-box">
                  <div className="wholesale">
                    <span className="label">ราคาส่ง</span>
                    <span className="price">฿{product.price}</span>
                    <span className="unit">/{product.unit}</span>
                  </div>
                  <div className="retail">
                    <span>ปกติ ฿{product.retailPrice}</span>
                  </div>
                </div>
                <div className="min-order">
                  ขั้นต่ำ: {product.minOrder}
                </div>
                <button className="btn btn-outline-primary w-full">สนใจสั่งซื้อ</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .py-16 { padding-top: 4rem; padding-bottom: 4rem; }
        .mb-12 { margin-bottom: 3rem; }
        .text-gray-600 { color: #666; }
        .w-full { width: 100%; }
        
        .section-title {
          font-size: 2.25rem;
          color: var(--color-primary-dark);
          margin-bottom: 1rem;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .product-card {
          background: white;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          transition: transform 0.3s, box-shadow 0.3s;
          border: 1px solid #eee;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg);
        }

        .product-image {
          position: relative;
          height: 250px; /* Increased height for better visibility */
          overflow: hidden;
          background: #f9f9f9;
        }

        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: contain; /* Changed to contain to show full product */
          padding: 1rem;
          transition: transform 0.5s;
        }

        .product-card:hover .product-image img {
          transform: scale(1.05);
        }

        .category-tag {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255,255,255,0.9);
          padding: 0.25rem 0.75rem;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: var(--color-primary-dark);
          font-weight: 600;
          box-shadow: var(--shadow-sm);
        }

        .product-info {
          padding: 1.5rem;
        }

        .product-info h3 {
          font-size: 1.1rem;
          margin-bottom: 1rem;
          height: 2.8em;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .price-box {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 1rem;
        }

        .wholesale .label {
          display: block;
          font-size: 0.8rem;
          color: var(--color-secondary); /* Use pink/secondary mainly */
          margin-bottom: -4px;
        }

        .wholesale .price {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-secondary);
        }

        .wholesale .unit {
          font-size: 0.9rem;
          color: #666;
        }

        .retail {
          font-size: 0.9rem;
          color: #999;
          text-decoration: line-through;
        }

        .min-order {
          background: #f0f8ff;
          color: var(--color-primary-dark);
          padding: 0.5rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          text-align: center;
          margin-bottom: 1rem;
        }

        .btn-outline-primary {
          background: transparent;
          border: 2px solid var(--color-primary);
          color: var(--color-primary);
          padding: 0.5rem;
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all 0.2s;
          font-weight: 600;
        }

        .btn-outline-primary:hover {
          background: var(--color-primary);
          color: white;
        }
      `}</style>
    </section>
  );
}
