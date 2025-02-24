import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { INews } from "../AdminDashboard/Components/News/News";
import axios from "axios";
import { ImageURl } from "../Utils/ButtonLoader";
import HTMLReactParser from "html-react-parser/lib/index";

export const NewsPage = () => {
  const [info, setInfo] = useState<INews[] | []>([]);
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://bharatpur12.org/new/api/samachar`
        );
        console.log(response.data);
        const sortData = response.data.sort(
          (a: any, b: any) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        const latestData = sortData.slice(0, 3);
        setInfo(latestData);
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

  return (
    <>
      <div className="w-full flex flex-col font-poppin">
        <div className="w-full relative">
          <img
            src="/hero.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute inset-0 font-bold justify-center items-center flex text-white  text-shadow text-4xl md:text-7xl">
            समाचार
          </h1>
        </div>
        <div className="flex justify-center flex-wrap gap-7 py-10 ">
          {info.length > 0
            ? info.map((info, i) => {
                const { year, month, day } = formatNepaliDate(info.date);
                return (
                  <>
                    <div
                      key={i}
                      className="relative shadow-md rounded-lg bg-white md:w-1/2 max-w-[350px] lg:w-1/4 w-full sm:w-3/4"
                    >
                      <img
                        src={`${ImageURl}/${info.image}`}
                        alt="logo"
                        className="mx-auto h-auto min-h-[400px]  object-cover"
                      />
                      <div className="bg-red-600 p-3 absolute right-5 w-20 top-0 text-center text-white font-bold">
                        {year}
                        <br></br>
                        {month}-{day}
                      </div>
                      <div className="flex flex-col gap-5 p-6 ">
                        <p className="text-xl font-bold leading-8  scrollbar-hidden">
                          {HTMLReactParser(info.title_np)}
                        </p>
                        <hr />
                        <button
                          className="text-slate-400 p-2 hover:text-blue-600 flex flex-row gap-3 items-center"
                          onClick={() => navigate(`/newsdetail/${info.id}`)}
                        >
                          थप&nbsp;पढ्नुहोस्
                        </button>
                      </div>
                    </div>
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};
