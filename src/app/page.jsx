"use client";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import Gallery from "@/components/organism/gallery";

function sayHello() {
  console.log("¡Hola! Has hecho clic en el botón.");
}
export default function Home() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl font-normal mb-4">Bienvenido a la App Galeria</h1>
      <p className="text-gray-600 mb-4">
        Explora nuestra colección de imágenes y disfruta de la galería.
      </p>
      <Link href="/galeria" className="hover:text-blue-500 cursor-pointer">
        Ir a galeria
      </Link>
      <p> Esto es un ejemplo de texto adicional.</p>
      <Gallery />
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-4xl w-fit mt-4 self-center"
        onClick={sayHello}
      >
        Haz clic aquí
      </Button>
    </div>
  );
}
