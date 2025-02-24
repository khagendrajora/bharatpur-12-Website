import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { INews } from "../AdminDashboard/Components/News/News";
import { ImageURl } from "../Utils/ButtonLoader";
import HTMLReactParser from "html-react-parser/lib/index";

export const News = () => {
  const [info, setInfo] = useState<INews[] | []>([]);
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
  const navigate = useNavigate();

  const convertToNepaliNumbers = (number: any) => {
    const nepaliDigits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];
    return number
      .toString()
      .split("")
      .map((digit: any) => nepaliDigits[parseInt(digit)])
      .join("");
  };

  const formatNepaliDate = (dateString: any) => {
    const nepaliMonths = [
      "बैशाख",
      "जेष्ठ",
      "असार",
      "श्रावण",
      "भाद्र",
      "अशोज",
      "कार्तिक",
      "मंसिर",
      "पुष",
      "माघ",
      "फाल्गुन",
      "चैत",
    ];
    const [year, month, day] = dateString.split("-");

    return {
      year: convertToNepaliNumbers(year),
      month: nepaliMonths[parseInt(month) - 1],
      day: convertToNepaliNumbers(day),
    };
  };

  return (
    <>
      <div className="py-10 pb-16 font-poppin relative bg-gray-200">
        <div className="bg-[url('/river2.jpg')] absolute inset-0 bg-cover bg-center opacity-10 z-0 pointer-events-none"></div>
        <div className="flex flex-col justify-center relative  mx-auto p- items-center md:w-10/12 ">
          <div className="flex relative justify-center w-3/4 mb-12 items-center mx-auto z-10 ">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold">समाचार </h1>
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-9 p-2 ">
            {info.length > 0
              ? info.map((info, i) => {
                  const { month, day } = formatNepaliDate(info.date);
                  return (
                    <div
                      key={i}
                      className=" relative shadow-sm bg-white min-w-[350px] md:w-1/2 lg:w-1/4 w-full sm:w-3/4"
                    >
                      <div>
                        <div className="overflow-hidden">
                          <img
                            src={`${ImageURl}/${info.image}`}
                            alt={`info image`}
                            className="mx-auto h-auto min-h-[300px] hover:scale-125 duration-1000 xl:min-h-[350px] max-h-[350px] lg:max-h-[340px]  object-cover "
                          />
                        </div>
                        <div className="bg-red-600 p-3 absolute right-5 w-20 -top-4 text-center text-white font-bold">
                          {day}
                          <br></br>
                          {month}
                        </div>
                      </div>
                      <div className="flex flex-col  gap-2 2xl:p-6 p-3  ">
                        <h1 className="font-semibold text-xl ">
                          {HTMLReactParser(info.title_np)}
                        </h1>
                      </div>
                      <div>
                        <hr />
                        <button
                          className="text-xs hover:text-blue-500 cursor-pointer p-3 text-slate-500"
                          onClick={() => navigate(`/newsdetail/${info.id}`)}
                        >
                          थप पढ्नुहोस्....
                        </button>
                      </div>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};
