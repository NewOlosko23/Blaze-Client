import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Blaze Briquettes - Premium Charcoal Briquettes in Homabay, Kenya",
  description = "Premium charcoal briquettes made from recycled materials in Homabay, Nyanza, Kenya. Countrywide delivery, eco-friendly fuel for cooking and heating. Order now!",
  keywords = "charcoal briquettes Kenya, Homabay charcoal, Nyanza fuel, eco-friendly charcoal, recycled briquettes, cooking fuel Kenya, heating fuel, charcoal delivery Kenya",
  canonical = "",
  ogImage = "/hero-image.jpg",
  structuredData = null
}) => {
  const baseUrl = "https://blazebriquettes.co.ke";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Language and Locale */}
      <html lang="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Homabay, Nyanza, Kenya" />
      <meta name="geo.position" content="-0.5363;34.4551" />
      <meta name="ICBM" content="-0.5363, 34.4551" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Blaze Briquettes" />
      <meta property="og:locale" content="en_KE" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      
      {/* Mobile and Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Business Information */}
      <meta name="author" content="Blaze Briquettes" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Local Business Information */}
      <meta name="business:contact_data:locality" content="Homabay" />
      <meta name="business:contact_data:region" content="Nyanza" />
      <meta name="business:contact_data:country_name" content="Kenya" />
      <meta name="business:contact_data:phone_number" content="+254715607720" />
      <meta name="business:contact_data:website" content="https://blazebriquettes.co.ke" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
