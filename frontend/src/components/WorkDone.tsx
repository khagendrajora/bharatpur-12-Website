// import Slider from "react-slick";

export const WorkDone = () => {
  const images = [
    { src: "/hero.jpg", alt: "Hero Image 1" },
    { src: "/1.jpg", alt: "Hero Image 2" },
    { src: "/6.jpg", alt: "Hero Image 3" },
    { src: "/4.jpg", alt: "Hero Image 4" },
    { src: "/3.jpg", alt: "Hero Image 3" },
    { src: "/7.jpg", alt: "Hero Image 4" },
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
      <div className="bg-[#245fb9] w-full md:mt-10 h-[300px]">
        <div className=" md:w-3/4 mt-3 w-full mx-auto p-5 " id="works">
          <div className="flex justify-center w-3/4 items-center mx-auto ">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-white">हाम्रो काम</h1>
              <p className="text-black text-center">हालको काम</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end md:w-3/4 mx-auto -mt-60">
        <button className="border border-black  hover:bg-blue-500 text-xs rounded-full px-3 p-2 font-semibold">
          थप पढ्नुहोस्
        </button>
      </div> */}
      <div className=" md:w-10/12 w-full mx-auto -mt-52 ">
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

              <div className="text-blue-800 absolute flex bottom-0 right-0 w-3/4 text-center justify-between items-center font-semibold bg-white  p-2 py-2 ">
                <div className="text-start w-full space-y-2">
                  <h1 className="font-semibold">
                    ७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम
                  </h1>
                  <button className="border-2 text-blue-500 hover:bg-[#245fb9] hover:text-white p-2 rounded-full font-medium">
                    थप पढ्नुहोस्
                  </button>
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
