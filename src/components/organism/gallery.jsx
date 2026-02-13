import ImageGrid from "@/components/molecules/ImageGrid";

// import imagen1 from "@/asset/minato_namikaze.png";
// import imagen2 from "@/asset/Patonana_Logo.png";
// import imagen3 from "@/asset/poshito.png";
// import imagen4 from "@/asset/lion-rey.jpg";
// import imagen5 from "@/asset/graduacion.png";

import { useImages } from "@/hooks/useImage";

export default function Gallery() {
  // const images = [
  //   {
  //     id: 1,
  //     src: imagen1,
  //     alt: "Minato Namikaze",
  //     author: "Ing. Yonangell Guillen",
  //   },

  //   {
  //     id: 2,
  //     src: imagen2,
  //     alt: "Patonana Logo",
  //     author: "Ing. Yonangell Guillen",
  //   },
  //   {
  //     id:3,
  //     src: imagen3,
  //     alt: "Poshito",
  //     author: "Ing. Yonangell Guillen",
  //   },
  //   {
  //     id:4,
  //     src: imagen4,
  //     alt: "Leon",
  //     author: "Ing.Yonangell Guillen",
  //   },
  //   {
  //     id:5,
  //     src: imagen5,
  //     alt: "Graduacion",
  //     author: "Ing.Yonangell Guillen",
  //   }
  // ];

  const { images, loading, error } = useImages();

  if (loading) {
    return <p>Cargando imagenes...</p>
  }

  if (error) {
    return <p>Error al cargar las imagenes: {error.message}</p>
  }

   return <ImageGrid images={images} />;
}
