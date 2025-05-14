import React, { useState } from "react";
import CatalogCard from "./CatalogCard";
import CatalogPreviewModal from "./CatalogPreviewModal";

const catalogItems = [
  {
    title: "Best Emaar Offers",
    subtitle: "TOP 10 PROJECTS FROM DUBAI LEADING DEVELOPER",
    cover: "https://fnst.axflare.com/catalog/images/WEBP/yQEOifTGKc.webp",
    pages: [
      "https://fnst.axflare.com/catalog/images/WEBP/yQEOifTGKc.webp",
      "https://fnst.axflare.com/catalog/images/WEBP/QJxFTxvzWR.webp",
      "https://fnst.axflare.com/catalog/images/WEBP/JuKUpbzljH.webp",
      "https://fnst.axflare.com/catalog/images/WEBP/JuKUpbzljH.webp",
    ],
  },
  {
    title: "Branded Homes",
    subtitle:
      "CURATED PROJECTS IN DUBAI MADE IN COLLABORATION WITH FAMOUS BRANDS",
    cover: "/catelog/branded-cover.jpg",
    pages: [
      "/catelog/branded-cover.jpg",
      "/catelog/branded-1.jpg",
      "/catelog/branded-2.jpg",
    ],
  },
];

const CatalogSection: React.FC = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [activePages, setActivePages] = useState<string[]>([]);

  const handlePreview = (pages: string[]) => {
    setActivePages(pages);
    setPreviewOpen(true);
  };

  return (
    <div className="bg-black p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {catalogItems.map((item, idx) => (
        <CatalogCard
          key={idx}
          title={item.title}
          subtitle={item.subtitle}
          imageUrl={item.cover}
          onPreview={() => handlePreview(item.pages)}
        />
      ))}
      <CatalogPreviewModal
        isOpen={previewOpen}
        onRequestClose={() => setPreviewOpen(false)}
        images={activePages}
      />
    </div>
  );
};

export default CatalogSection;
