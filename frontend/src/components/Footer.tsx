import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Footer = () => {
  return (
    <>
      <div className=" bg-[#245fb9] w-full relative flex flex-col  justify-center items-center text-white  min-h-[400px]">
        <div className="bg-[url('/raino6.jpg')]  absolute inset-0 bg-cover bg-center opacity-15 z-0 pointer-events-none"></div>
        <div className="flex relative z-10 flex-wrap justify-center lg:px-20   gap-5 2xl:gap-40 items-center p-3 w-full">
          <h1 className="text-xs relative flex justify-center flex-col gap-5 p-5">
            <span className=" text-[25px] sm:text-[25px] lg:text-2xl font-bold">
              भरतपुर&nbsp;महानगरपालिका
            </span>{" "}
            <span className="text-white text-center text-[15x] lg:text-lg font-bold">
              वडा नं. १२, चितवन, नेपाल{" "}
            </span>
          </h1>

          <div className="bg-blue-500 opacity-90 p-4 text-center lg:text-xl flex flex-col min-h-[130px] gap-4">
            <h1>Bharatpur@gmail.com</h1>
            <h1>9803030780</h1>
          </div>
          <div className="flex flex-col text-white p-4 text-center min-h-[130px] bg-blue-500 opacity-90">
            <h1 className="font-bold text-xl">बिर बहादुर स्याङतान</h1>
            <h1>सदस्य</h1>
            <h1>9803030780</h1>
            <h1>Bharatpur@gmail.com</h1>
          </div>
          <div className="bg-blue-500 opacity-90 p-4 items-center  lg:text-xl flex min-h-[130px] gap-4">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ color: "#1996f5" }}
              size="lg"
              className="bg-white p-1 hover:scale-110 cursor-pointer rounded-full"
            />
            <FontAwesomeIcon
              icon={faYoutube}
              size="lg"
              className="bg-white p-1 rounded-full hover:scale-110 cursor-pointer"
              style={{ color: "#ff0505" }}
            />
            <FontAwesomeIcon
              icon={faXTwitter}
              size="lg"
              className="bg-white p-1 rounded-full hover:scale-110 cursor-pointer"
              style={{ color: "#0a0a0a" }}
            />
          </div>
        </div>
        <div>
          <ul className="list-none   h-fit text-xs lg:text-sm mt-5 lg:mt-10 flex w-full justify-center gap-4 text-white md:gap-10 font-semibold">
            <li className="hover:text-black cursor-pointer">गृहपृष्ठ</li>
            <li className="hover:text-black cursor-pointer">
              हाम्रो&nbsp;बारेमा
            </li>
            <li className="hover:text-black cursor-pointer">
              {" "}
              हाम्रो&nbsp;काम
            </li>
            <li className="hover:text-black cursor-pointer">समाचार</li>
            <li className="hover:text-black cursor-pointer">सम्पर्क</li>
          </ul>
        </div>
        <div className="text-sm bg-[#245fb9] p-10 w-full text-center">
          Copyright © २०८० भरतपुर नगरपालिका वडा नं ७ Website by{" "}
          <span className="text-red-600 text-lg">DigiSoft Developers</span>
        </div>
      </div>
    </>
  );
};
