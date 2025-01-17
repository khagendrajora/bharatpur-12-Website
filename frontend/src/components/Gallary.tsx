import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

export const Gallary = () => {
  const images = [
    {
      src: "/hero1.jpg",
      alt: "Hero Image 2",
      title: "बृद्ध",
      color: "bg-gradient-to-r from-cyan-300 to-blue-600",
      value: "१०%",
    },
    {
      src: "/hero-6.jpg",
      alt: "Hero Image 1",
      title: "जेष्ठ नागरिक",
      color: "bg-gradient-to-r from-lime-300 to-lime-600",
      value: "१०%",
    },
    {
      src: "/hero-2.jpg",
      alt: "Hero Image 3",
      title: "अधिबैसे",
      color: "bg-gradient-to-r from-amber-300 to-amber-600",
      value: "४०%",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "युवा",
      value: "१५%",
      color: "bg-gradient-to-r from-teal-300 to-teal-600",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "बालबालिका",
      value: "५%",
      color: "bg-gradient-to-r from-cyan-300 to-blue-600",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "शिशु",
      value: "३०%",
      color: "bg-gradient-to-r from-cyan-300 to-blue-600",
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
      <div className=" p-5 ">
        {" "}
        <div className="flex justify-end md:w-3/4 mx-auto">
          <button className="border-2 border-blue-500 text-xs hover:bg-blue-500 rounded-full p-2 font-semibold">
            थप पढ्नुहोस्
          </button>
        </div>
        <div className="w-full flex flex-wrap justify-center  gap-10">
          {images.map((image, index) => (
            <>
              <div
                key={index}
                className={`relative w-full cursor-pointer hover:scale-110 duration-500 sm:w-1/3 lg:w-1/4 min-h-[100px]  z-10 mt-4 rounded-md ${image.color} border-black`}
              >
                {/* <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full bg-cover object-cover "
                /> */}
                <div className="absolute text-center text-white font-bold w-full top-1/3">
                  {image.title}&nbsp; &nbsp;{image.value}
                </div>
                {/* <button className="absolute top-1/2 text-xs lg:text-xl font-semibold left-[40%] text-white  bg-red-500 hover:bg-blue-500 p-2 rounded">
                  थप पढ्नुहोस्
                </button> */}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};
