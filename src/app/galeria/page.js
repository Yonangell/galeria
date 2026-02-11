import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl font-mono mb-4"> App Galeria</h1>
      <p> Esto es un ejemplo de texto adicional.</p>
      <Link href="/" className="hover:text-blue-500">
        Ir a galeria
      </Link>
    </div>
  );
}
