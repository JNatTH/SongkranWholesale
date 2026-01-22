import { Helmet } from 'react-helmet-async';

export default function SEOHead({ title, description, keywords, image, url }) {
    const siteUrl = url || 'https://songkranwholesale.com';
    const defaultTitle = "ขายส่งสินค้าสงกรานต์ ปืนฉีดน้ำ เสื้อลายดอก ราคาโรงงาน";
    const defaultDescription = "ศูนย์รวมสินค้าสงกรานต์ขายส่ง ปืนฉีดน้ำ ซองกันน้ำ แว่นตา เสื้อลายดอก ราคาถูกที่สุด จัดส่งทั่วประเทศ สั่งเยอะลดเยอะ";
    const defaultKeywords = "ขายส่งปืนฉีดน้ำ, สินค้าสงกรานต์, เสื้อลายดอก, ซองกันน้ำสงกรานต์, ขายส่งราคาถูก, ปืนฉีดน้ำเป้, แว่นตากันน้ำ, กระเป๋ากันน้ำ, เสื้อฮาวาย";
    const ogImage = image || `${siteUrl}/og-image.jpg`;

    // Structured Data - Organization
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Songkran Wholesale",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "description": defaultDescription,
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "availableLanguage": "Thai"
        },
        "sameAs": [
            "https://lin.ee/tIMVPn1"
        ]
    };

    // Structured Data - WebSite
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Songkran Wholesale",
        "url": siteUrl,
        "description": defaultDescription,
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${siteUrl}/?search={search_term_string}`
            },
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <Helmet>
            <html lang="th" />
            <title>{title ? `${title} | Songkran Wholesale` : defaultTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            <meta name="keywords" content={keywords || defaultKeywords} />
            <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
            <link rel="canonical" href={url || siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={url || siteUrl} />
            <meta property="og:title" content={title || defaultTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content="th_TH" />
            <meta property="og:site_name" content="Songkran Wholesale" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:url" content={url || siteUrl} />
            <meta name="twitter:title" content={title || defaultTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(websiteSchema)}
            </script>
        </Helmet>
    );
}
