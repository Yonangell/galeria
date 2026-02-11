import Button from "@/components/atoms/Button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl font-mono mb-4">Bienvenido a la App Galeria</h1>
      <p className="text-gray-600 mb-4">
        Explora nuestra colección de imágenes y disfruta de la galería.
      </p>
      <Link href="/galeria" className="hover:text-blue-500">
        Ir a galeria
      </Link>
      <Button color="blue">Haz clic aquí</Button>
      <p> Esto es un ejemplo de texto adicional.</p>
    </div>
  );
}
