import { useEffect, useState } from "react";
import { IPublication } from "../AdminDashboard/Components/Publication/Publication";
import axios from "axios";
import { Link } from "react-router";

export const PublicationPage = () => {
  const [info, setInfo] = useState<IPublication[] | []>([]);

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
          `https://bharatpur12.org/new/api/publications`
        );
        console.log(response.data);
        const sortData = response.data.sort(
          (a: any, b: any) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        setInfo(sortData);
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
          <h1 className="absolute inset-0  justify-center items-center flex text-white font-bold text-shadow text-4xl md:text-7xl">
            प्रकाशन
          </h1>
        </div>

        <div className="flex flex-wrap gap-4 sm:w-3/4 w-11/12 justify-center py-10 mx-auto ">
          {info.length > 0
            ? info.map((info, i) => {
                const { year, month, day } = formatNepaliDate(
                  info.publication_date
                );
                return (
                  <div
                    key={i}
                    className="flex gap-2 w-full  sm:w-3/4 md:w-2/5  border-2 sm:p-5 px-1 "
                  >
                    <div className="bg-[#ef4444] text-center p-5 w-[100px] md:h-[100px] text-white font-medium flex justify-center flex-col items-center gap-1">
                      {day}
                      <br></br>
                      {month}
                      <br></br>
                      {year}
                    </div>
                    <div className="flex flex-col h-full justify-between p-3 gap-3">
                      <p className=" ">{info.title_np}</p>
                      <Link
                        to={`https://bharatpur12.org/new/storage/app/public/${info.document}`}
                        className="text-slate-400  hover:text-blue-500 flex flex-row gap-3"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        डाउनलोड&nbsp;गर्नुहोस्
                      </Link>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};
