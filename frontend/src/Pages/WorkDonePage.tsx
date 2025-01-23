export const WorkDonePage = () => {
  const images = [
    { src: "/hero.jpg", alt: "Hero Image 1" },
    { src: "/1.jpg", alt: "Hero Image 2" },
    { src: "/6.jpg", alt: "Hero Image 3" },
    { src: "/4.jpg", alt: "Hero Image 4" },
    { src: "/3.jpg", alt: "Hero Image 3" },
    { src: "/7.jpg", alt: "Hero Image 4" },
  ];
  return (
    <>
      <div className="w-full flex flex-col gap-32">
        <div className="w-full relative">
          <img
            src="/bharatpur.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute inset-0 font-bold justify-center items-center flex text-white  text-shadow text-4xl md:text-7xl">
            हाम्रो&nbsp;काम
          </h1>
        </div>
        <div className=" md:w-10/12 w-full mx-auto  ">
          <div className="flex justify-center flex-wrap gap-7 p-2 ">
            {images.map((image, index) => (
              <div
                key={index}
                className=" relative shadow-md bg-white md:w-1/2 lg:w-1/4 w-full sm:w-3/4"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className=" mx-auto h-auto min-h-[400px] object-cover"
                />

                <div className=" absolute flex bottom-2  w-3/4 text-center justify-between items-center font-semibold bg-white  p-2 py-2 ">
                  <div className="text-start w-full space-y-2">
                    <h1 className="font-semibold">
                      ७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम
                    </h1>
                    {/* <button className="border-2 border-blue-500 text-blue-500 hover:bg-[#245fb9] hover:text-white p-2 rounded-full font-medium">
                      थप पढ्नुहोस्
                    </button> */}
                  </div>
                  {/* <button className="text-slate-500 text-xs">
                  {" "}
                  थप&nbsp;पढ्नुहोस्
                </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
