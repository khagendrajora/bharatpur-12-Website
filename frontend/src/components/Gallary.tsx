import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router";
// import Slider from "react-slick";

export const Gallary = () => {
  const images = [
    {
      src: "/hero1.jpg",
      alt: "Hero Image 2",
      title: "बृद्ध",
      color: "bg-gradient-to-r from-cyan-400 to-blue-400",
      value: "१०%",
    },
    {
      src: "/hero-6.jpg",
      alt: "Hero Image 1",
      title: "जेष्ठ नागरिक",
      color: "bg-gradient-to-r from-blue-400 to-cyan-500",
      value: "१०%",
    },
    {
      src: "/hero-2.jpg",
      alt: "Hero Image 3",
      title: "अधिबैसे",
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
      value: "४०%",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "युवा",
      value: "१५%",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "बालबालिका",
      value: "५%",
      color: "bg-gradient-to-r from-cyan-500 to-blue-500",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "शिशु",
      value: "३०%",
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
  ];

  // const settings = {
  //   dots: true,
  //   infinite: true, // Enable infinite scrolling
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1, // Scroll one slide at a time
  //   // autoplay: true,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
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
      <div className=" p-5 py-14 relative">
        <div className="bg-[url('/river2.jpg')]  absolute inset-0 bg-cover bg-center opacity-10 z-0 pointer-events-none"></div>
        <div className="flex relative justify-end w-11/12 mx-auto"></div>
        <div className="flex flex-wrap gap-8 mt-10 justify-center text-white p-5">
          {images.map((image, index) => (
            <>
              <div
                key={index}
                className={`relative ${image.color} p-5 shadow-xl rounded-lg flex cursor-pointer flex-col gap-4 min-w-[250px] max-w-[250px] justify-center${image.color} border-black`}
              >
                {/* <div className="absolute text-center text-white font-bold w-full "> */}
                {/* <div className="bg-blue-500 p-5 shadow-xl rounded-lg flex cursor-pointer flex-col gap-4 min-w-[300px] max-w-[300px] justify-center"> */}
                <h1>{image.value}</h1>
                <div className="w-full bg-gray-500 rounded-full h-1 dark:bg-gray-700">
                  <div className="bg-white h-1 rounded-full w-[50%]"></div>
                </div>
                <h3>{image.title}</h3>
                <span>(६० बर्ष देखि ७० बर्ष)</span>
              </div>
              {/* </div> */}
              {/* </div> */}
            </>
          ))}
        </div>
        <div className="flex  justify-center w-11/12 mx-auto mt-10">
          <Link to="/dashboard">
            <button className="border-2 bg-[#245fb9] text-white hover:bg-white hover:text-[#245fb9] p-3 font-medium">
              थप पढ्नुहोस्
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
