// import Slider from "react-slick";

export const WorkDone = () => {
  const images = [
    { src: "/hero.jpg", alt: "Hero Image 1" },
    { src: "/hero.jpg", alt: "Hero Image 2" },
    { src: "/hero.jpg", alt: "Hero Image 3" },
    { src: "/hero.jpg", alt: "Hero Image 4" },
    { src: "/hero.jpg", alt: "Hero Image 3" },
    { src: "/hero.jpg", alt: "Hero Image 4" },
  ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,

  //   slidesToShow: 2,
  //   slidesToScroll: 1,
  //   // autoplay: true,
  //   autoplaySpeed: 5000,
  //   cssEase: "linear",
  //   rtl: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
  return (
    <>
      <div className="bg-blue-500 w-full h-[300px]">
        <div className=" md:w-3/4 w-full mx-auto p-5 " id="works">
          <div className="flex justify-center w-3/4 items-center mx-auto ">
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold">हाम्रो काम</h1>
              <p className="text-gray-600 text-center">हालको काम</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end md:w-3/4 mx-auto -mt-60">
        <button className="border border-black  hover:bg-blue-500 text-xs rounded-full px-3 p-2 font-semibold">
          थप पढ्नुहोस्
        </button>
      </div> */}
      <div className=" md:w-10/12 w-full mx-auto -mt-52 p-5">
        <div className="flex justify-center flex-wrap gap-y-8 gap-x-1  w-full ">
          {images.map((image, index) => (
            <div
              key={index}
              className=" mx-auto border-2 relative shadow-md bg-white p-2 md:w-1/2 lg:w-1/4 rounded-lg w-full sm:w-3/4 min-w-[300px]"
            >
              <img
                src={image.src}
                alt={image.alt}
                className=" mx-auto h-auto min-h-[250px] object-cover rounded-lg"
              />

              <div className="text-blue-800 absolute flex bottom-3 right-5 w-28 text-center justify-between items-center font-semibold bg-white  p-2 py-2 rounded">
                <div className="text-center w-full">
                  <h1 className="font-semibold">शीर्षक</h1>
                  <p className="text-slate-500 text-xs">थाप&nbsp;जानकारी</p>
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
      {/* </div> */}
    </>
  );
};
