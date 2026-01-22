import React from 'react';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container text-center">
                <p>© {new Date().getFullYear()} SongkranWholesale - ศูนย์รวมสินค้าสงกรานต์ราคาส่ง</p>
                <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '0.5rem' }}>
                    เราคือโรงงานผลิตและนำเข้าสินค้าสงกรานต์โดยตรง ไม่ผ่านคนกลาง
                </p>
            </div>
            <style>{`
        .site-footer {
          background: #333;
          color: white;
          padding: 2rem 0;
          margin-top: 4rem;
        }
      `}</style>
        </footer>
    );
}
