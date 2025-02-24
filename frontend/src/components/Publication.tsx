import axios from "axios";
import { useEffect, useState } from "react";
import { IPublication } from "../AdminDashboard/Components/Publication/Publication";
import { Link } from "react-router";

export const Publication = () => {
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
        const latestData = sortData.slice(0, 3);
        setInfo(latestData);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div
        className=" flex flex-wrap font-poppin justify-between bg-zinc-100 w-full"
        id="publication"
      >
        <div className="py-14 w-full md:w-2/5">
          <div className="w-full">
            <div className="flex flex-col items-center md:items-start md:w-4/5 px-2 sm:px-0 w-full mx-auto">
              <h1 className=" text-4xl font-bold">प्रकाशन</h1>
              {info.length > 0
                ? info.map((info, i) => {
                    const { month, day } = formatNepaliDate(
                      info.publication_date
                    );
                    return (
                      <div
                        key={i}
                        className="p-5 mt-7  border-2 bg-white w-fit lg:min-w-[300px] max-w-[570px] flex gap-3 items-center"
                      >
                        <div className="p-5 bg-[#245fb9] font-bold text-center border rounded-full w-fit text-white">
                          {day}
                          <br></br>
                          {month}
                        </div>
                        <div className="flex flex-col gap-1">
                          <h1 className="font-bold lg:text-xl">
                            {info.title_np}
                          </h1>
                          <Link
                            to={`https://bharatpur12.org/new/storage/app/public/${info.document}`}
                            className="cursor-pointer flex  items-center gap-3 text-slate-500 hover:text-blue-500"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                          >
                            डाउनलोड गर्नुहोस्
                          </Link>
                        </div>
                      </div>
                    );
                  })
                : ""}

              {/* <div className="p-5 mt-5 bg-white border-2  w-fit lg:min-w-[300px] max-w-[570px] flex gap-3 items-center">
                <div className="p-5 bg-[#245fb9] font-bold text-center border rounded-full w-fit text-white">
                  आश्विन <br></br>१०
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold lg:text-xl">
                    वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)
                  </h1>
                  <h1 className="cursor-pointer flex  items-center gap-3 text-slate-500 hover:text-blue-500">
                    डाउनलोड गर्नुहोस्
                  </h1>
                </div>
              </div> */}
              {/* <div className="p-5 mt-5  bg-white border-2  w-fit lg:min-w-[300px] max-w-[570px] flex gap-3 items-center">
                <div className="p-5 bg-[#245fb9] font-bold text-center border rounded-full w-fit text-white">
                  आश्विन <br></br>१०
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold lg:text-xl">
                    वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)
                  </h1>
                  <h1 className="cursor-pointer flex  items-center gap-3 text-slate-500 hover:text-blue-500">
                    डाउनलोड गर्नुहोस्
                  </h1>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="w-full h-auto md:w-3/5">
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.391187862288!2d84.4566756!3d27.674301899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e5b408dc2ea1%3A0x9b43e267424dd98a!2sBharatpur%20Ward%20No%2012%20Office!5e0!3m2!1sen!2snp!4v1740046830497!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.391187862288!2d84.4566756!3d27.674301899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994e5b408dc2ea1%3A0x9b43e267424dd98a!2sBharatpur%20Ward%20No%2012%20Office!5e0!3m2!1sen!2snp!4v1740046830497!5m2!1sen!2snp"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};
