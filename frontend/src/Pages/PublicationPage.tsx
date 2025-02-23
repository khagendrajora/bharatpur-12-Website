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
    const [year, month, day] = dateString.split("-");

    return {
      year: convertToNepaliNumbers(year),
      month: convertToNepaliNumbers(month),
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
        // const latestData = sortData.slice(0, 3);
        setInfo(sortData);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // const images = [
  //   {
  //     src: "/hero.jpg",
  //     alt: "Hero Image 1",
  //     month: "आश्विन",
  //     day: "१०",
  //     year: "२०८१",
  //     key: "1",
  //     title: "वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)",
  //   },
  //   {
  //     src: "/hero.jpg",
  //     alt: "Hero Image 2",
  //     month: "आश्विन",
  //     day: "१०",
  //     year: "२०६२",
  //     key: "2",
  //     title: "वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)",
  //   },
  //   {
  //     src: "/hero.jpg",
  //     alt: "Hero Image 3",
  //     month: "भाद्र",
  //     day: "१०",
  //     year: "२०७१",
  //     key: "3",
  //     title: "वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)",
  //   },
  //   {
  //     src: "/hero.jpg",
  //     alt: "Hero Image 3",
  //     month: "भाद्र",
  //     day: "१०",
  //     year: "२०७१",
  //     key: "4",
  //     title: "वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)",
  //   },
  // ];
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
                    <div className="bg-[#ef4444]  p-5 w-[100px] md:h-[100px] text-white font-medium flex justify-center flex-col items-center gap-1">
                      <span>
                        {month}-{day}
                      </span>
                      <span>{year}</span>
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
