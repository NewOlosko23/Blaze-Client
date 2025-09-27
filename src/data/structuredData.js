// Structured Data for SEO
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Blaze Briquettes",
  "description": "Premium charcoal briquettes made from recycled materials in Homabay, Nyanza, Kenya. Eco-friendly fuel for cooking and heating with countrywide delivery.",
  "url": "https://blazebriquettes.co.ke",
  "telephone": "+254715607720",
  "email": "info@blazebriquettes.co.ke",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Homabay",
    "addressRegion": "Nyanza",
    "addressCountry": "Kenya"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-0.5363",
    "longitude": "34.4551"
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 09:00-16:00"
  ],
  "priceRange": "KSh 200 - KSh 3500",
  "paymentAccepted": ["Cash", "M-Pesa", "Bank Transfer"],
  "currenciesAccepted": "KES",
  "areaServed": {
    "@type": "Country",
    "name": "Kenya"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Charcoal Briquettes",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Premium Charcoal Briquettes - 1kg",
          "description": "High-quality charcoal briquettes made from recycled materials"
        },
        "price": "200",
        "priceCurrency": "KES",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Premium Charcoal Briquettes - 10kg",
          "description": "Bulk charcoal briquettes for restaurants and businesses"
        },
        "price": "1800",
        "priceCurrency": "KES",
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Premium Charcoal Briquettes - 20kg",
          "description": "Wholesale charcoal briquettes for large orders"
        },
        "price": "3500",
        "priceCurrency": "KES",
        "availability": "https://schema.org/InStock"
      }
    ]
  },
  "sameAs": [
    "https://www.facebook.com/people/BLAZE-Charcoal/61578335618851/",
    "https://www.twitter.com/blazebriquettes",
    "https://www.instagram.com/blazebriquettes"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Blaze Briquettes",
  "url": "https://blazebriquettes.co.ke",
  "logo": "https://blazebriquettes.co.ke/logo.png",
  "description": "Leading provider of premium charcoal briquettes in Kenya, specializing in eco-friendly fuel solutions for cooking and heating.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Homabay",
    "addressRegion": "Nyanza",
    "addressCountry": "Kenya"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+254715607720",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://www.facebook.com/people/BLAZE-Charcoal/61578335618851/",
    "https://www.twitter.com/blazebriquettes",
    "https://www.instagram.com/blazebriquettes"
  ]
};

export const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Premium Charcoal Briquettes",
  "description": "High-quality charcoal briquettes made from 100% recycled materials. Perfect for cooking, heating, and grilling with 4-6 hours burn time.",
  "brand": {
    "@type": "Brand",
    "name": "Blaze Briquettes"
  },
  "manufacturer": {
    "@type": "Organization",
    "name": "Blaze Briquettes",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Homabay",
      "addressRegion": "Nyanza",
      "addressCountry": "Kenya"
    }
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "1kg Premium Briquettes",
      "price": "200",
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Blaze Briquettes"
      }
    },
    {
      "@type": "Offer",
      "name": "10kg Bulk Briquettes",
      "price": "1800",
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Blaze Briquettes"
      }
    },
    {
      "@type": "Offer",
      "name": "20kg Wholesale Briquettes",
      "price": "3500",
      "priceCurrency": "KES",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Blaze Briquettes"
      }
    }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "2847"
  }
};

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://blazebriquettes.co.ke"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Order",
      "item": "https://blazebriquettes.co.ke/order"
    }
  ]
};
