"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import ImageItem from "@/components/atoms/ImageItem";

export default function ImageDetail() {
  const { id } = useParams();

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch(`https://picsum.photos/id/${id}/info`)
      .then((response) => response.json())
      .then((data) => {
        setImage(data);
        setLoading(false);
      })
    }, [id]);

    if (loading) return <p>Loading image details...</p>;
    if (!image) return <p>Image not found.</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Image Detail</h1>
      <ImageItem 
      id = {image.id}
      src={image.download_url} 
      alt={`Image by ${image.author}`} 
      author={image.author}
      />
      <Link
        href="/"
        className="text-blue-500 hover:underline mt-4 inline-block"
      >
        Back to Gallery
      </Link>
    </div>
  );
}
