export const PhotoesPage = () => {
  const images = [
    {
      src: "/Photoes/20250212_133651.jpg",
    },
    {
      src: "/Photoes/20250212_142606.jpg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-11 at 12.13.21.jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-11 at 12.08.57.jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-11 at 12.09.00.jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-11 at 12.09.23.jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-11 at 12.09.34.jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-11 at 12.13.22 (1).jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-11 at 12.13.22 (2).jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-11 at 12.13.28.jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-12 at 08.48.31.jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-12 at 08.48.31 (1).jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-12 at 08.48.29.jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-12 at 08.48.27.jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-11 at 12.13.27.jpeg",
    },
    {
      src: "/Photoes/WhatsApp Image 2025-02-11 at 12.13.24.jpeg",
    },
  ];
  return (
    <>
      <div className="w-11/12 mx-auto py-20">
        <div className="flex flex-wrap gap-4 mx-auto justify-center w-full py-10">
          {images &&
            images.map((image, i) => (
              <div key={i} className="w-1/4">
                <img src={image.src} alt="" />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
