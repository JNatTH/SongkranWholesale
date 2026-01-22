import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, keywords }) {
    const defaultTitle = "ขายส่งสินค้าสงกรานต์ ปืนฉีดน้ำ เสื้อลายดอก ราคาโรงงาน";
    const defaultDescription = "ศูนย์รวมสินค้าสงกรานต์ขายส่ง ปืนฉีดน้ำ ซองกันน้ำ แว่นตา เสื้อลายดอก ราคาถูกที่สุด จัดส่งทั่วประเทศ สั่งเยอะลดเยอะ";
    const defaultKeywords = "ขายส่งปืนฉีดน้ำ, สินค้าสงกรานต์, เสื้อลายดอก, ซองกันน้ำสงกรานต์, ขายส่งราคาถูก";

    return (
        <Helmet>
            <title>{title ? `${title} | SongkranWholeSale` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:title" content={title || defaultTitle} />
            <meta property="twitter:description" content={description || defaultDescription} />
        </Helmet>
    );
}
