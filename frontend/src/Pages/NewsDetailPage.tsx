import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { INews } from "../AdminDashboard/Components/News/News";
import axios from "axios";
import { ImageURl } from "../Utils/ButtonLoader";
import HTMLReactParser from "html-react-parser/lib/index";

export const NewsDetailPage = () => {
  const params = useParams();
  const key = params.key;
  const [info, setInfo] = useState<INews>();

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
          `https://bharatpur12.org/new/api/samachar/${key}`
        );
        console.log(response.data);
        setInfo(response.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const convertToNepaliNumbers = (number: any) => {
    const nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return number
      .toString()
      .split("")
      .map((digit: any) => nepaliDigits[parseInt(digit)])
      .join("");
  };

  const formatNepaliDate = (dateString: any) => {
    const [year, month, day] = dateString.split("-");

    return {
      year: convertToNepaliNumbers(year),
      month: convertToNepaliNumbers(month),
      day: convertToNepaliNumbers(day),
    };
  };
  if (!info) {
    return <div>Loading...</div>;
  }

  const { year, month, day } = formatNepaliDate(info.date);

  return (
    <>
      <div className="w-full flex flex-col mb-[80px] font-poppin md:gap-20 gap-10">
        {info ? (
          <>
            <div className="w-full relative">
              <img
                src={`${ImageURl}/${info.image}`}
                alt="hero"
                className="w-full h-[400px]  object-cover"
              />
              <h1 className="absolute inset-0 font-bold justify-center items-center flex text-white text-center  text-shadow text-xl md:text-3xl ">
                {HTMLReactParser(info.title_np)}
              </h1>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col gap-6 md:w-1/2 p-2">
                <div className="flex gap-6 ">
                  <div className="bg-red-600 p-3 w-20 text-center text-white font-bold">
                    {year}
                    <br></br>
                    {month}-{day}
                  </div>
                  <div className="font-bold flex items-end text-2xl">
                    {HTMLReactParser(info.title_np)}
                  </div>
                </div>
                <div>
                  <img src={`${ImageURl}/${info.image}`} />
                </div>
                <div className="text-justify text-gray-500 font-normal leading-8">
                  {HTMLReactParser(info.description_np)}
                </div>
                <div>
                  <iframe
                    src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fbharatpur.netlify.app%2Fnewsdetail&layout&size&width=77&height=20&appId"
                    width="77"
                    height="20"
                    style={{ border: "none", overflow: "hidden" }}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61556758524668&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="340"
                  height="500"
                  style={{ border: "none", overflow: "hidden" }}
                  className="p-5 text-center overflow-hidden"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
