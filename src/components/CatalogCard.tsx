import React from "react";

interface CatalogCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  onPreview: () => void;
}

const CatalogCard: React.FC<CatalogCardProps> = ({
  title,
  subtitle,
  imageUrl,
  onPreview,
}) => {
  return (
    <div className="bg-black border border-gray-700 p-4 text-white max-w-sm">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-400 mb-2">{subtitle}</p>
      <div className="flex justify-between text-sm text-[#c28b66] cursor-pointer">
        <span className="hover:underline">DOWNLOAD</span>
        <span className="hover:underline" onClick={onPreview}>
          PREVIEW
        </span>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="mt-4 w-full h-60 object-cover"
      />
    </div>
  );
};

export default CatalogCard;
