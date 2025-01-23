import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NoticesPage = () => {
  const images = [
    {
      src: "/hero.jpg",
      alt: "Hero Image 1",
      month: "भाद्र",
      day: "१०",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/hero.jpg",
      alt: "Hero Image 2",
      month: "आश्विन",
      day: "१०",
      year: "२०६२",
      title: "ज्येष्ठ नागरिक दिवसको शुभ अवसरमा र्याली तथा कार्यक्रम -२०८०",
    },
    {
      src: "/hero.jpg",
      alt: "Hero Image 3",
      month: "भाद्र",
      day: "१०",
      year: "२०७१",
      title: "७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम",
    },
  ];
  return (
    <>
      <div className="w-full">
        <div className="w-full relative">
          <img
            src="/hero.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute inset-0  justify-center items-center flex text-white font-bold text-shadow text-4xl md:text-7xl">
            सूचना
          </h1>
        </div>
        {/* <div className="flex  justify-center p-14 mx-auto"> */}
        <div className="flex flex-wrap sm:w-3/4 w-11/12 justify-start mt-20 mx-auto ">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex gap-2 w-full sm:w-3/4 md:w-1/2  sm:p-5 px-1 py-5 "
            >
              <div className="bg-[#245fb9]  p-10  text-white font-medium flex justify-center flex-col items-center gap-2">
                <span>{image.year}</span>
                <span>
                  {image.month} {image.day}
                </span>
              </div>
              <div className="flex flex-col h-full justify-between p-3 gap-3">
                <p className=" ">{image.title}</p>
                <button className="text-slate-400  hover:text-blue-500 flex flex-row gap-3">
                  थप&nbsp;पढ्नुहोस्
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};
