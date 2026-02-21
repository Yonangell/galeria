import ImageItem from "@/components/atoms/ImageItem";
import Link from "next/link";

export default function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img) => (
        <Link key={img.id} href={`/galeria/${img.id}`}>
          <ImageItem
            key={img.id}
            src={img.download_url}
            alt={`Image by ${img.author}`}
            author={img.author}
            width={img.width > 500 ? 500 : img.width}
            height={img.height > 300 ? 300 : img.height}
          />
        </Link>
      ))}
    </div>
  );
}
