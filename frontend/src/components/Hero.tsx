import {
  faArrowUpRightFromSquare,
  faCreditCard,
  faFileCirclePlus,
  faMoneyBill,
  faPhone,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = () => {
  const images = [
    { src: "/hero.jpg", alt: "Hero Image 1" },
    { src: "/hero1.jpg", alt: "Hero Image 2" },
    { src: "/hero-2.jpg", alt: "Hero Image 3" },
    { src: "/hero-3.jpg", alt: "Hero Image 1" },
    { src: "/hero-6.jpg", alt: "Hero Image 2" },
    { src: "/hero-7.jpg", alt: "Hero Image 3" },
    { src: "/hero-8.jpg", alt: "Hero Image 1" },
    { src: "/hero-9.jpg", alt: "Hero Image 2" },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="w-full flex flex-col ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <>
              <div
                className="w-full hover:scale-125 duration-1000 "
                key={index}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[400px] lg:h-[600px] object-cover"
                />
              </div>
            </>
          ))}
        </Slider>
        <div className="flex w-full flex-wrap min-h-[80px] lg:min-h-[120px] max-h-[200px] text-sm text-white font-semibold lg:text-lg justify-center ">
          <div className="bg-blue-200 border hover:bg-blue-300 cursor-pointer min-w-[100px] w-1/5  p-5 flex justify-center lg:gap-6 gap-2 flex-wrap items-center">
            <FontAwesomeIcon icon={faCreditCard} style={{ color: "#f7f7f7" }} />
            उजुरी
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: "#ffffff" }}
            />
          </div>
          <div className="bg-blue-300 border hover:bg-blue-400 cursor-pointer min-w-[100px]  p-5 w-1/5 flex justify-center  lg:gap-6 flex-wrap gap-2 items-center">
            <FontAwesomeIcon icon={faMoneyBill} />
            दर&nbsp;र&nbsp;शुल्क
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: "#ffffff" }}
            />
          </div>

          <div className="bg-blue-400 border hover:bg-blue-500 cursor-pointer  p-5 min-w-[100px] w-1/5  flex justify-center lg:gap-6 flex-wrap gap-2 items-center">
            <FontAwesomeIcon
              icon={faFileCirclePlus}
              style={{ color: "#ffffff" }}
            />
            नागरिक&nbsp;बडापत्र
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: "#ffffff" }}
            />
          </div>

          <div className="bg-blue-500 border hover:bg-blue-600 cursor-pointer p-5  w-1/5 min-w-[100px] flex justify-center lg:gap-6 flex-wrap gap-2 items-center">
            <FontAwesomeIcon icon={faSackDollar} />
            बार्षिक&nbsp;बजेट
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: "#ffffff" }}
            />
          </div>

          <div className="bg-lime-500 border hover:bg-blue-400 cursor-pointer   p-5 w-1/5 min-w-[100px] flex justify-center lg:gap-6 flex-wrap gap-2 items-center">
            <FontAwesomeIcon icon={faPhone} />
            सम्पर्क
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="" />
          </div>
        </div>
      </div>
    </>
  );
};
