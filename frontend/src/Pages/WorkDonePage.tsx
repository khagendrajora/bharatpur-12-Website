import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const WorkDonePage = () => {
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const images = [
    {
      src: "/hero.jpg",
      alt: "Hero Image 1",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/1.jpg",
      alt: "Hero Image 2",
      key: "2",
      year: "२०८१",
      title: "७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम",
    },
    {
      src: "/6.jpg",
      alt: "Hero Image 3",
      key: "3",
      year: "२०८१",
      title: "ज्येष्ठ नागरिक दिवसको शुभ अवसरमा र्याली तथा कार्यक्रम -२०८०",
    },
    {
      src: "/4.jpg",
      alt: "Hero Image 4",
      key: "4",
      year: "२०८१",
      title: "बार्षिक समीक्षा कार्यक्रमको प्रगती प्रतिवेदन",
    },
    {
      src: "/6.jpg",
      alt: "Hero Image 4",
      key: "5",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },

    {
      src: "/7.jpg",
      alt: "Hero Image 4",
      key: "6",
      year: "२०८१",
      title: "७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम",
    },
  ];
  return (
    <>
      <div className="w-full font-poppin flex flex-col ">
        <div className="w-full relative">
          <img
            src="/bharatpur.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute  inset-0 font-bold justify-center items-center flex text-white  text-shadow text-4xl md:text-7xl">
            <span className="">हाम्रो&nbsp;काम</span>
          </h1>
        </div>
        <div className=" md:w-10/12 w-full  mx-auto my-12  ">
          <div className="flex justify-center flex-wrap gap-7 p-2 ">
            {images.map((image, index) => (
              <div
                key={index}
                className=" relative shadow-md bg-white md:w-1/2 lg:w-1/4 w-full sm:w-3/4"
                onClick={() => navigate(`/workdetail/${image.key}`)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className=" mx-auto h-auto min-h-[400px] object-cover"
                />

                <div className=" absolute flex bottom-2  w-3/4 text-center justify-between items-center font-semibold bg-white  p-2 py-2 ">
                  <div className="text-start w-full space-y-2">
                    <h1 className="font-semibold">{image.title}</h1>
                  </div>
                </div>
                <div
                  className={`absolute bottom-0 left-0 w-full ${
                    hoveredIndex === index ? "h-full " : "h-0 "
                  } bg-[#0c1110] opacity-50  transition-all duration-1000 ease-in-out z-0`}
                ></div>
                <div
                  className={`absolute inset-0 flex justify-center items-center z-20 transition-transform duration-1000 ${
                    hoveredIndex === index
                      ? "translate-y-0 "
                      : "translate-y-1/2 opacity-0"
                  }`}
                >
                  <button
                    className={`bg-red-600 p-2 hover:bg-red-700  text-white `}
                  >
                    थप पढ्नुहोस्
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
