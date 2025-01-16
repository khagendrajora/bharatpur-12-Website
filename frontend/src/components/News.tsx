export const News = () => {
  const images = [
    { src: "/hero.jpg", alt: "Hero Image 1", month: "भाद्र", day: "१०" },
    { src: "/hero.jpg", alt: "Hero Image 2", month: "आश्विन", day: "१०" },
    { src: "/hero.jpg", alt: "Hero Image 3", month: "भाद्र", day: "१०" },
    { src: "/hero.jpg", alt: "Hero Image 1", month: "आश्विन ", day: "१०" },
    { src: "/hero.jpg", alt: "Hero Image 2", month: "भाद्र ", day: "१०" },
    { src: "/hero.jpg", alt: "Hero Image 3", month: "आश्विन ", day: "१०" },
  ];
  return (
    <>
      <div className="flex flex-col bg-slate-100 justify-center relative  mx-auto p-5 items-center  ">
        <div className=" bg-[url('/bgnews.jpg')] absolute inset-0 bg-cover bg-center opacity-40 z-0 pointer-events-none"></div>
        <div className="flex relative justify-center w-3/4 items-center mx-auto z-10 ">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">समाचार </h1>
          </div>
        </div>
        <div className="flex w-full md:w-3/4 justify-end my-7">
          <button className="border-2 border-blue-500 hover:bg-blue-500 text-xs rounded-full px-3 p-2 font-semibold">
            थप पढ्नुहोस्
          </button>
        </div>

        <div className="flex justify-center flex-wrap gap-16 w-full md:w-11/12 ">
          {images.map((image, index) => (
            <div
              key={index}
              className=" mx-auto border-2 shadow-md relative p-2 lg:w-1/4 sm:w-3/4 min-w-[300px] rounded-lg w-full bg-white"
            >
              <div>
                <img
                  src={image.src}
                  alt={image.alt}
                  className=" mx-auto h-auto min-h-[250px] rounded-lg object-cover "
                />
                <div className="bg-red-600 p-3 absolute right-5 w-20 top-0 text-center text-white font-bold">
                  {image.month}
                  <br></br>
                  {image.day}
                </div>
              </div>
              <div className="flex flex-col gap-2 p-3">
                <h1 className="font-semibold text-xl">समाचार शीर्षक</h1>
                <p className="text-slate-600">थाप जानकारी</p>
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
      {/* </div> */}
    </>
  );
};
