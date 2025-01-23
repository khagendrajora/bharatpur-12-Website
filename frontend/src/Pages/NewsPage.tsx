import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NewsPage = () => {
  const images = [
    {
      src: "/hero.jpg",
      alt: "Hero Image 1",
      month: "भाद्र",
      day: "१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/hero.jpg",
      alt: "Hero Image 2",
      month: "आश्विन",
      day: "१०",
      title: "ज्येष्ठ नागरिक दिवसको शुभ अवसरमा र्याली तथा कार्यक्रम -२०८०",
    },
    {
      src: "/hero.jpg",
      alt: "Hero Image 3",
      month: "भाद्र",
      day: "१",
      title: "७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम",
    },
    // { src: "/hero.jpg", alt: "Hero Image 1", month: "आश्विन ", day: "१०" },
    // { src: "/hero.jpg", alt: "Hero Image 2", month: "भाद्र ", day: "१०" },
    // { src: "/hero.jpg", alt: "Hero Image 3", month: "आश्विन ", day: "१०" },
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-32">
        <div className="w-full relative">
          <img
            src="/hero.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute inset-0 font-bold justify-center items-center flex text-white  text-shadow text-4xl md:text-7xl">
            समाचार
          </h1>
        </div>
        <div className="flex justify-center flex-wrap gap-7 p-2 ">
          {images.map((image, index) => (
            <>
              <div
                key={index}
                className="relative shadow-md rounded-lg bg-white md:w-1/2 max-w-[350px] lg:w-1/4 w-full sm:w-3/4"
              >
                <img
                  src="/hero.jpg"
                  alt="logo"
                  className="mx-auto h-auto min-h-[400px]  object-cover"
                />
                <div className="bg-red-600 p-3 absolute right-5 w-20 top-0 text-center text-white font-bold">
                  {image.month}
                  <br></br>
                  {image.day}
                </div>
                <div className="flex flex-col gap-5 p-10">
                  <p className="text-xl font-bold leading-8  scrollbar-hidden">
                    {image.title}
                  </p>
                  <hr />
                  <button className="text-slate-400 p-2 hover:text-blue-600 flex flex-row gap-3 items-center">
                    थप&nbsp;पढ्नुहोस् <FontAwesomeIcon icon={faArrowRight} />
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
