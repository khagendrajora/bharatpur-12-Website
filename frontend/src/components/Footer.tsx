import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
export const Footer = () => {
  const offsetTop = 0;
  return (
    <>
      <div className=" bg-[#245fb9] w-full relative flex flex-col  justify-center items-center text-white  min-h-[300px]">
        <div className="bg-[url('/raino6.jpg')]  absolute inset-0 bg-cover bg-center opacity-15 z-0 pointer-events-none"></div>
        <div className="flex relative z-10 flex-wrap lg:justify-center justify-between gap-16 2xl:gap-40 items-start p-10 w-full">
          <div className="flex flex-row gap-3">
            <div className="w-[80px] hidden lg:block">
              <img src="/logo2.jpeg" className=" object-cover" />
            </div>
            <h1 className="text-xs relative flex justify-center flex-col gap-5">
              <span className=" text-[20px] sm:text-[20px] lg:text-2xl font-bold">
                भरतपुर&nbsp;महानगरपालिका
              </span>{" "}
              <span className="text-white text-center text-[15x] lg:text-lg font-bold">
                वडा नं. १२, चितवन, नेपाल{" "}
              </span>
            </h1>
          </div>
          <div className="flex flex-col text-white  text-start gap-3  bg-blue- opacity-90">
            <h1 className="font-bold text-xl">
              <h1 className="">फोन</h1>
              <hr />
              <span className="text-sm">
                +९७७ ०२३-५२०१४८ <br></br>+९७७ ०२३-५२००९५
              </span>
            </h1>
          </div>

          <div className="flex flex-col text-white  text-start gap-3  bg-blue- opacity-90">
            <h1 className="font-bold text-xl">
              <h1>फ्याक्स</h1>
              <hr />
              <span className="text-sm">+९७७ ०२३५२०७८१</span>
            </h1>
          </div>
          <div className="flex flex-col text-white  text-start gap-3  bg-blue- opacity-90">
            <h1 className="font-bold text-xl">सम्पर्क</h1>
            <hr className="w-[100px]" />
            <div className="flex flex-col gap-5 text-sm">
              <h1>इमेल : info@Bharatpur.gov.np , ito.Bharatpur@gmail.com</h1>

              <div className="items-center  lg:text-lg flex gap-4">
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
          </div>
        </div>
        <div>
          <ul className="list-none h-fit text-xs lg:text-sm flex w-full justify-start gap-4 text-white md:gap-10 font-semibold">
            <Link
              to="/"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }, 1000);
              }}
            >
              <li className="hover:text-black cursor-pointer">गृहपृष्ठ</li>
            </Link>

            <Link
              to="/aboutus"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }, 1000);
              }}
            >
              <li className="hover:text-black cursor-pointer">
                हाम्रो&nbsp;बारेमा
              </li>
            </Link>
            <Link
              to="/workdone"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }, 1000);
              }}
            >
              <li className="hover:text-black cursor-pointer">
                {" "}
                हाम्रो&nbsp;काम
              </li>
            </Link>
            <Link
              to="/news"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }, 1000);
              }}
            >
              <li className="hover:text-black cursor-pointer">समाचार</li>
            </Link>
            <Link
              to="/contact"
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth",
                  });
                }, 1000);
              }}
            >
              <li className="hover:text-black cursor-pointer">सम्पर्क</li>
            </Link>
          </ul>
        </div>
        <div className="text-sm bg-[#245fb9] p-10 w-full text-center">
          Copyright © २०८१ भरतपुर नगरपालिका वडा नं १२ Website by DigiSoft
          Developers
        </div>
      </div>
    </>
  );
};
