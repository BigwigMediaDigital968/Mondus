import React from "react";
import { jsPDF } from "jspdf";

interface CatalogCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  onPreview: () => void;
  images: string[]; // Add this for download
}

const CatalogCard: React.FC<CatalogCardProps> = ({
  title,
  subtitle,
  imageUrl,
  onPreview,
  images,
}) => {
  const handleDownload = async () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = 210;
    const pageHeight = 297;

    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.src = images[i];

      await new Promise((resolve, reject) => {
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;

          ctx?.drawImage(img, 0, 0);
          const imgData = canvas.toDataURL("image/jpeg", 1.0);

          const ratio = Math.min(
            pageWidth / img.width,
            pageHeight / img.height
          );
          const imgWidth = img.width * ratio;
          const imgHeight = img.height * ratio;

          const x = (pageWidth - imgWidth) / 2;
          const y = (pageHeight - imgHeight) / 2;

          if (i !== 0) pdf.addPage();
          pdf.addImage(imgData, "JPEG", x, y, imgWidth, imgHeight);

          resolve(null);
        };
        img.onerror = reject;
      });
    }

    pdf.save(`${title}.pdf`);
  };

  return (
    <div className=" border border-gray-700 p-4 text-white max-w-sm">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-400 mb-2">{subtitle}</p>
      <div className="flex justify-between text-sm text-[#c28b66] cursor-pointer">
        <span className="hover:underline" onClick={handleDownload}>
          DOWNLOAD
        </span>
        <span className="hover:underline" onClick={onPreview}>
          PREVIEW
        </span>
      </div>
      <img
        src={imageUrl}
        alt={title}
        className="mt-4 w-full h-96 object-cover"
        draggable="false"
      />
    </div>
  );
};

export default CatalogCard;
