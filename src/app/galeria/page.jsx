"use client";
import Link from "next/link";
//import Gallery from "@/components/organism/gallery";
import Button from "@/components/atoms/Button";
//import { useState } from "react";
import { useState } from "react";


export default function Home() {
  const [count, setCount] = useState(0);

  function hanleClick() {
    setCount(count + 1); // count = count + 1;
  }

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl font-mono mb-4"> App Galeria</h1>
      <p> Esto es un ejemplo de texto adicional.</p>
      {/* <Gallery /> */}
      <Link href="/" className="hover:text-blue-500">
        Ir a galeria
      </Link>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded-4xl w-fit mt-4 self-center" onClick={hanleClick}>
        Haz clic aquí Count:{count}
      </Button>
    </div>
  );
}
