import { useState } from "react";
import { Download } from "lucide-react";

interface DownloadButtonProps {
  url: string | undefined;
  fileName: string | undefined;
}

export default function DownloadButton({ url, fileName }: DownloadButtonProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleDownload = async () => {
    try {
      const response = await fetch(url as string);

      if (response.ok) {
        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = fileName as string;
        document.body.appendChild(link);
        link.click();
        link.remove();
      }
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  return (
    <button
        onClick={handleDownload}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`w-10 h-10 rounded-full absolute right-2 bottom-2 flex justify-center items-center transition-all ${
          isHovering ? "bg-green-600" : "bg-green-200"
        }`}
      >
        <Download
          className={` ${
            isHovering ? "text-green-200" : "text-green-600"
          }`}
        />
      </button>
  )
}
