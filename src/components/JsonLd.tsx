/**
 * JsonLd — Injects schema.org JSON-LD structured data into the document head.
 * Supports LocalBusiness, FAQPage, Service, BreadcrumbList, and AggregateRating schemas.
 */

const DOMAIN = "https://www.shaheenlocksmith.com";

// ─── Shared LocalBusiness base ────────────────────────────────────────────────

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Locksmith"],
  "name": "Shaheen Locksmith",
  "alternateName": "Shaheen Lock Master",
  "url": DOMAIN,
  "logo": `${DOMAIN}/android-chrome-512x512.png`,
  "image": `${DOMAIN}/opengraph.jpg`,
  "description": "Islamabad & Rawalpindi's most trusted automotive locksmith. Expert smart key programming, emergency lockouts, immobilizer repair, and precision key cutting for all vehicle brands.",
  "telephone": "+92-308-5556779",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop #1-2, Auto Market F-10/4 Markaz",
    "addressLocality": "Islamabad",
    "addressRegion": "Islamabad Capital Territory",
    "postalCode": "44000",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "33.7294",
    "longitude": "73.0931"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"],
      "opens": "09:00",
      "closes": "21:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Sunday"],
      "opens": "10:00",
      "closes": "19:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/share/18TWLxTgK3/",
    "https://www.instagram.com/reel/DZIOYCCzx8K/",
    "https://www.tiktok.com/@locksmith7053"
  ],
  "areaServed": [
    { "@type": "City", "name": "Islamabad" },
    { "@type": "City", "name": "Rawalpindi" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "350",
    "bestRating": "5",
    "worstRating": "1"
  }
};

// ─── FAQPage schema (used on Home page) ──────────────────────────────────────

export const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "I lost my only car key. Can you make a new one?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we can generate and program a new key for your vehicle even if all original keys are lost, saving you the hassle of towing to a dealership. We use dealer-level equipment to program transponder chips and smart keys on-site."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide emergency lockout services in Islamabad?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We offer 24/7 emergency vehicle unlocking services across Islamabad and Rawalpindi. We use damage-free techniques and typically arrive within 20-30 minutes of your call."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to program a smart key?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "For most modern vehicles, programming a new smart key or push-start fob takes between 20 to 45 minutes on-site. Complex vehicles may take slightly longer."
      }
    },
    {
      "@type": "Question",
      "name": "Are your keys as good as dealership keys?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use high-quality OEM and premium aftermarket keys, programmed with dealer-level equipment to ensure perfect functionality, reliability, and security — at a fraction of the dealership price."
      }
    },
    {
      "@type": "Question",
      "name": "Which car brands do you support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We service all major brands including Toyota, Honda, Suzuki, KIA, Hyundai, BMW, Audi, Mercedes-Benz, Nissan, Lexus, MG, Changan, Proton, Haval, Mitsubishi, and more."
      }
    }
  ]
};

// ─── BreadcrumbList schema generator ─────────────────────────────────────────

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${DOMAIN}${crumb.url}`
    }))
  };
}

// ─── Service schema generator ─────────────────────────────────────────────────

export function serviceSchema(serviceName: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "url": `${DOMAIN}/services/${slug}`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Shaheen Locksmith",
      "telephone": "+92-308-5556779",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop #1-2, Auto Market F-10/4 Markaz",
        "addressLocality": "Islamabad",
        "addressCountry": "PK"
      }
    },
    "areaServed": [
      { "@type": "City", "name": "Islamabad" },
      { "@type": "City", "name": "Rawalpindi" }
    ],
    "serviceType": "Automotive Locksmith"
  };
}

// ─── JsonLd React component ───────────────────────────────────────────────────

interface JsonLdProps {
  schemas: object | object[];
}

export function JsonLd({ schemas }: JsonLdProps) {
  const schemaArray = Array.isArray(schemas) ? schemas : [schemas];

  return (
    <>
      {schemaArray.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
