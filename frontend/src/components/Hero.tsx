import {
  faArrowUpRightFromSquare,
  faFileCirclePlus,
  faMoneyBill,
  faNoteSticky,
  faPhone,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

export const Hero = () => {
  const navigate = useNavigate();
  const images = [
    { src: "/bharatpur.jpg", alt: "Hero Image 2" },
    { src: "/hero.jpg", alt: "Hero Image 1" },
    { src: "/6.jpg", alt: "Hero Image 3" },
    { src: "/hero-3.jpg", alt: "Hero Image 1" },
    { src: "/hero-6.jpg", alt: "Hero Image 2" },
    // { src: "/hero-7.jpg", alt: "Hero Image 3" },
    // { src: "/hero-8.jpg", alt: "Hero Image 1" },
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
                  className="w-full h-screen  object-cover"
                />
              </div>
            </>
          ))}
        </Slider>
        <div className="flex w-full flex-wrap z-10 -mt-[120px] min-h-[80px] lg:min-h-[120px] max-h-[200px] text-sm text-white font-semibold lg:text-lg justify-center ">
          <div
            className="bg-[#2c84c7] lg:text-[20px] border  cursor-pointer min-w-[100px] w-1/5  p-5 flex justify-center lg:gap-6 gap-2 flex-wrap items-center"
            onClick={() => navigate("/complain")}
          >
            <FontAwesomeIcon
              icon={faNoteSticky}
              className="lg:h-8"
              style={{ color: "#ffffff" }}
            />
            उजुरी
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: "#ffffff" }}
              className="lg:h-6"
            />
          </div>
          <div
            className="bg-[#3aa8f0] border lg:text-[20px]  cursor-pointer min-w-[100px]  p-5 w-1/5 flex justify-center  lg:gap-6 flex-wrap gap-2 items-center"
            onClick={() => navigate("/taxpage")}
          >
            <FontAwesomeIcon icon={faMoneyBill} className="lg:h-8" />
            दर&nbsp;र&nbsp;शुल्क
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: "#ffffff" }}
              className="lg:h-6"
            />
          </div>

          <div
            className="bg-[#61beef] border lg:text-[20px]  cursor-pointer  p-5 min-w-[100px] w-1/5  flex justify-center lg:gap-6 flex-wrap gap-2 items-center"
            onClick={() => navigate("/nagrikpatra")}
          >
            <FontAwesomeIcon
              icon={faFileCirclePlus}
              className="lg:h-8"
              style={{ color: "#ffffff" }}
            />
            नागरिक&nbsp;बडापत्र
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: "#ffffff" }}
              className="lg:h-6"
            />
          </div>

          <div
            className="bg-[#a6d4ed] border lg:text-[20px]  cursor-pointer p-5  w-1/5 min-w-[100px] flex justify-center lg:gap-6 flex-wrap gap-2 items-center"
            onClick={() => navigate("/budget")}
          >
            <FontAwesomeIcon icon={faSackDollar} className="lg:h-8" />
            बार्षिक&nbsp;बजेट
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              style={{ color: "#ffffff" }}
              className="lg:h-6"
            />
          </div>

          <div
            className="bg-[#06a10b] border lg:text-[20px]  cursor-pointer  p-5 w-1/5 min-w-[100px] flex justify-center lg:gap-6 flex-wrap gap-2 items-center"
            onClick={() => navigate("/contact")}
          >
            <FontAwesomeIcon icon={faPhone} className="lg:h-8" />
            सम्पर्क
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="lg:h-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};
