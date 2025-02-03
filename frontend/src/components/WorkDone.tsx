import { useState } from "react";
import { useNavigate } from "react-router";

export const WorkDone = () => {
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
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/6.jpg",
      alt: "Hero Image 3",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/4.jpg",
      alt: "Hero Image 4",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/6.jpg",
      alt: "Hero Image 4",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },

    {
      src: "/7.jpg",
      alt: "Hero Image 4",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
  ];

  return (
    <>
      <div className="bg-[#245fb9] w-full font-poppin  h-[300px]">
        <div className="md:w-3/4 mt-8 w-full mx-auto p-5 " id="works">
          <div className="flex justify-center w-3/4 items-center mx-auto ">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-white">हाम्रो काम</h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:w-10/12 w-full pb-10 font-poppin  mx-auto -mt-40 ">
        <div className="flex justify-center flex-wrap gap-9 p-2 ">
          {images.map((image, index) => (
            <>
              <div
                key={index}
                className=" relative shadow-md  bg-white md:w-1/2 lg:w-1/4 w-full sm:w-3/4 cursor-pointer"
                onClick={() => navigate(`/workdetail/${image.key}`)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className=" mx-auto h-auto min-h-[380px] object-cover"
                />

                <div className=" absolute flex bottom-2 right- w-3/4 text-center justify-between items-center font-semibold bg-white  p-5 py-2 ">
                  <div className="text-start w-full space-y-2">
                    <h1 className="font-semibold">
                      ७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम
                    </h1>
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
            </>
          ))}
        </div>
      </div>
    </>
  );
};
