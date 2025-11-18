import React from "react";

const Sitemap = () => {
  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen text-gray-800">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-10">
        Website Sitemap
      </h1>

      {/* Quick Links */}
      <Section title="Quick Links" links={[
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Domestic", href: "/domestic" },
        { name: "International", href: "/international" },
        { name: "Blog", href: "/blog" },
        { name: "Contact", href: "/contact" },
        { name: "Trending", href: "/trending" },
        { name: "Get a Free Quote", href: "/quote" },
      ]} />

      {/* Trending Destinations */}
      <Section title="Trending Destinations" links={[
        { name: "Sikkim", href: "/destinations/sikkim" },
        { name: "Uttarakhand", href: "/destinations/uttarakhand" },
        { name: "Thailand", href: "/destinations/thailand" },
        { name: "Sri Lanka", href: "/destinations/sri-lanka" },
        { name: "Leh-Ladakh", href: "/destinations/leh-ladakh" },
        { name: "Kashmir", href: "/destinations/kashmir" },
        { name: "Vietnam", href: "/destinations/vietnam" },
        { name: "Andaman", href: "/destinations/andaman" },
      ]} />

      {/* Domestic Destinations */}
      <Section title="Domestic Destinations" links={[
        { name: "South India", href: "/destinations/south-india" },
        { name: "Hyderabad", href: "/destinations/hyderabad" },
        { name: "Chennai", href: "/destinations/chennai" },
        { name: "Jaipur", href: "/destinations/jaipur" },
        { name: "Nagpur", href: "/destinations/nagpur" },
        { name: "Pune", href: "/destinations/pune" },
        { name: "Cochin", href: "/destinations/cochin" },
        { name: "Bangalore", href: "/destinations/bangalore" },
      ]} />

      {/* International Destinations */}
      <Section title="International Destinations" links={[
        { name: "Maldives", href: "/destinations/maldives" },
        { name: "Mauritius", href: "/destinations/mauritius" },
        { name: "Europe", href: "/destinations/europe" },
        { name: "Nepal", href: "/destinations/nepal" },
        { name: "Switzerland", href: "/destinations/switzerland" },
        { name: "Singapore", href: "/destinations/singapore" },
        { name: "Bhutan", href: "/destinations/bhutan" },
        { name: "Dubai", href: "/destinations/dubai" },
      ]} />

      {/* Legal */}
      <Section title="Legal" links={[
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Sitemap", href: "/sitemap" },
      ]} />
    </div>
  );
};

const Section = ({ title, links }) => (
  <div className="mb-10">
    <h2 className="text-xl font-semibold text-gray-700 border-b-2 border-red-500 pb-1 mb-4">{title}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          className="text-blue-600 hover:underline transition-all"
        >
          {link.name}
        </a>
      ))}
    </div>
  </div>
);

export default Sitemap;
