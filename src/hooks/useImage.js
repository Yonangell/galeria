"use client";

import { useEffect, useState } from "react";

export function useImages() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://picsum.photos/v2/list?page=1&limit=20")
      //fetch("https://picsum.photos/v2/list?page=2&limit=10")
      //fetch("https://unsplash.com/photos")
      .then((response) => {
        console.log("Respuesta del servidor:", response);
        return response.json();
      })
      .then((data) => {
        console.log("Datos recibidos:", data);
        setImages(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error al cargar las imagenes:", err);
        setError(err);
        setLoading(false);
      });
  }, []);

  return { images, loading, error };
}
