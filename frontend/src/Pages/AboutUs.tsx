import { useEffect, useState } from "react";
import { IIntro } from "../AdminDashboard/Components/Introduction/Intro";
import axios from "axios";
import HTMLReactParser from "html-react-parser/lib/index";
import { ImageURl } from "../Utils/ButtonLoader";

export const AboutUs = () => {
  const [intro, setIntro] = useState<IIntro>();
  const offsetTop = 0;

  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://bharatpur12.org/new/api/about-us`
        );
        console.log(response.data);

        setIntro(response.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="w-full font-poppin">
        <div className="w-full relative">
          <img
            src="/hero.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute inset-0 justify-center items-center flex text-white font-bold text-shadow text-4xl md:text-7xl">
            हाम्रो&nbsp;बारेमा
          </h1>
        </div>

        <div className="flex flex-row  flex-wrap gap-5 justify-center mx-auto my-5 p-5 xl:p-14 ">
          {intro && (
            <>
              <div className="">
                <img
                  src={`${ImageURl}/${intro.main_image}`}
                  alt="Main Image"
                  className="flex mx-auto w-[600px] xl:h-[500px] object-cover"
                />
              </div>
              <div className="p-2 xl:p-5 2xl:w-1/2  w-full flex flex-col gap-5">
                <h1 className="sm:text-4xl text-2xl p-2 font-bold">
                  {HTMLReactParser(intro.title_np)}
                </h1>
                <p className="text-gray-600 leading-10 text-justify font-normal ">
                  {HTMLReactParser(intro.description_np)}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
