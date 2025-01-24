export const News = () => {
  const images = [
    {
      src: "/hero.jpg",
      alt: "Hero Image 1",
      month: "भाद्र",
      day: "१०",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/bharatpur.jpg",
      alt: "Hero Image 2",
      month: "आश्विन",
      day: "१०",
      title: "ज्येष्ठ नागरिक दिवसको शुभ अवसरमा र्याली तथा कार्यक्रम -२०८०",
    },
    {
      src: "/FlagNepal.gif",
      alt: "Hero Image 3",
      month: "भाद्र",
      day: "१०",
      title: "७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम",
    },
    // { src: "/hero.jpg", alt: "Hero Image 1", month: "आश्विन ", day: "१०" },
    // { src: "/hero.jpg", alt: "Hero Image 2", month: "भाद्र ", day: "१०" },
    // { src: "/hero.jpg", alt: "Hero Image 3", month: "आश्विन ", day: "१०" },
  ];
  return (
    <>
      <div className=" py-1 relative">
        <div className="bg-[url('/river2.jpg')] absolute inset-0 bg-cover bg-center opacity-10 z-0 pointer-events-none"></div>
        <div className="flex flex-col justify-center relative  mx-auto p-5 items-center md:w-10/12 ">
          {/* <div className=" bg-[url('/bgnews.jpg')] absolute inset-0 bg-cover bg-center opacity-40 z-0 pointer-events-none"></div> */}
          <div className="flex relative justify-center w-3/4 items-center mx-auto z-10 ">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">समाचार </h1>
            </div>
          </div>
          <div className="flex w-full md:w-3/4 justify-end my-7">
            <button className="border-2 bg-[#245fb9] text-white hover:bg-white hover:text-[#245fb9] p-3 font-medium">
              थप पढ्नुहोस्
            </button>
          </div>
          <div className="flex justify-center flex-wrap gap-9 p-2 ">
            {images.map((image, index) => (
              <div
                key={index}
                className=" relative shadow-md bg-white md:w-1/2 lg:w-1/4 w-full sm:w-3/4"
              >
                <div>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className=" mx-auto h-auto min-h-[300px] xl:min-h-[350px] max-h-[350px] lg:max-h-[350px]  object-cover"
                  />
                  <div className="bg-red-600 p-3 absolute right-5 w-20 -top-4 text-center text-white font-bold">
                    {image.month}
                    <br></br>
                    {image.day}
                  </div>
                </div>
                <div className="flex flex-col  gap-2 2xl:p-8 p-3 ">
                  <h1 className="font-semibold text-xl">{image.title}</h1>
                </div>
                <div>
                  <hr />
                  <button className="text-xs hover:text-blue-500 cursor-pointer p-3 text-slate-500">
                    थप पढ्नुहोस्....
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
