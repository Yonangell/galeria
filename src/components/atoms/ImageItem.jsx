import Image from "next/image";

export default function ImageItem({ src, alt, author, width = 400, height = 300 }) {
  return (
    <div className="border rounded-2xl overflow-hidden mt-4">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-48 object-cover"
        //priority
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{alt}</h3>
        <p className="text-gray-500 text-sm">{author}</p>
      </div>
    </div>
  );
}
