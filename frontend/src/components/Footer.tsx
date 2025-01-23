import {
  faFacebook,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
export const Footer = () => {
  const offsetTop = 0; // Define offsetTop with an appropriate value
  return (
    <>
      <div className=" bg-[#245fb9] w-full relative flex flex-col  justify-center items-center text-white  min-h-[400px]">
        <div className="bg-[url('/raino6.jpg')]  absolute inset-0 bg-cover bg-center opacity-15 z-0 pointer-events-none"></div>
        <div className="flex relative z-10 flex-wrap justify-center gap-14 2xl:gap-40 items-start p-10 w-full">
          <div className="flex flex-row gap-3">
            <div className="w-[80px]">
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

          <div className="flex flex-col text-white  text-start gap-3 min-h-[130px] bg-blue- opacity-90">
            <h1 className="font-bold text-xl">सूचनाहरु</h1>
            <div className="flex flex-col gap-5 text-xs">
              <h1>समाचार</h1>
              <ul className="list-disc space-y-5">
                <li>
                  <h1 className="cursor-pointer">
                    सार्वजनिक खरीद /बोलपत्र सूचना
                  </h1>
                </li>
                <li>
                  <h1 className="cursor-pointer"> एन, कानुन तथा निर्देशिका</h1>
                </li>
                <li>
                  <h1 className="cursor-pointer">कर तथा शुल्कहरु</h1>
                </li>
              </ul>
              {/* <h1>Bharatpur@gmail.com</h1> */}
            </div>
          </div>
          <div className="flex flex-col text-white  text-start gap-3 min-h-[130px] bg-blue- opacity-90">
            <h1 className="font-bold text-xl">प्रतिवेदन</h1>
            <div className="flex flex-col gap-5 text-xs">
              <h1>वार्षिक प्रगति प्रतिवेदन</h1>
              <ul className="list-disc space-y-5">
                <li>
                  <h1 className="cursor-pointer">चौमासिक प्रगति प्रतिवेदन</h1>
                </li>
                <li>
                  <h1 className="cursor-pointer">सार्वजनिक सुनुवाई</h1>
                </li>
                <li>
                  <h1 className="cursor-pointer">सार्वजनिक परीक्षण</h1>
                </li>
              </ul>
              {/* <h1>Bharatpur@gmail.com</h1> */}
            </div>
          </div>
          {/* <div className="flex flex-col text-white p-4 text-center min-h-[130px] bg-blue-500 opacity-90">
            <h1 className="font-bold text-xl">बिर बहादुर स्याङतान</h1>
            <h1>सदस्य</h1>
            <h1>9803030780</h1>
            <h1>Bharatpur@gmail.com</h1>
          </div> */}

          <div className="flex flex-col text-white  text-start gap-3 min-h-[130px] bg-blue- opacity-90">
            <h1 className="font-bold text-xl">सम्पर्क</h1>
            <div className="flex flex-col gap-5 text-xs">
              <h1>भरतपुर&nbsp;महानगरपालिका वडा नं. १२, चितवन, नेपाल</h1>
              <h1>फोन : +९७७ ०२३-५२०१४८ +९७७ ०२३-५२००९५</h1>
              <h1>फ्याक्स : +९७७ ०२३५२०७८१</h1>
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
          {/* <div className="flex flex-col text-white p-4 text-start gap-3 min-h-[130px] bg-blue- opacity-90">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226170.82289542153!2d84.24107912779294!3d27.657974337368024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea702f7!2sBharatpur%2044200!5e0!3m2!1sen!2snp!4v1737541711339!5m2!1sen!2snp"
              width="200"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div> */}
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
