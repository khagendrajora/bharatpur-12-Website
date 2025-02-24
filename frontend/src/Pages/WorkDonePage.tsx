import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { IWork } from "../components/WorkDone";
import axios from "axios";
import { ImageURl } from "../Utils/ButtonLoader";
import HTMLReactParser from "html-react-parser/lib/index";

export const WorkDonePage = () => {
  const [info, setInfo] = useState<IWork[] | []>([]);
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://bharatpur12.org/new/api/our-works`
        );
        console.log(response.data);
        const sortData = response.data.sort(
          (a: any, b: any) =>
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
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
      <div className="w-full font-poppin flex flex-col ">
        <div className="w-full relative">
          <img
            src="/bharatpur.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute  inset-0 font-bold justify-center items-center flex text-white  text-shadow text-4xl md:text-7xl">
            <span className="">हाम्रो&nbsp;काम</span>
          </h1>
        </div>
        <div className=" md:w-10/12 w-full  mx-auto my-12  ">
          <div className="flex justify-center flex-wrap gap-7 p-2 ">
            {info.length > 0 &&
              info.map((image, index) => (
                <div
                  key={index}
                  className=" relative shadow-md bg-white md:w-1/2 lg:w-1/4 w-full sm:w-3/4"
                  onClick={() => navigate(`/workdetail/${image.id}`)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={`${ImageURl}/${image.main_image}`}
                    alt={`image`}
                    className=" mx-auto h-auto min-h-[400px] object-cover"
                  />

                  <div className=" absolute flex bottom-2  w-3/4 text-center justify-between items-center font-semibold bg-white  p-2 py-2 ">
                    <div className="text-start w-full space-y-2">
                      <h1 className="font-semibold">
                        {HTMLReactParser(image.title_np)}
                      </h1>
                    </div>
                  </div>
                  <div
                    className={`absolute bottom-0 left-0 w-full ${
                      hoveredIndex === index ? "h-full " : "h-0 "
                    } bg-[#0c1110] opacity-50  transition-all duration-1000 ease-in-out z-0`}
                  ></div>
                  <div
                    className={`absolute inset-0 flex justify-center items-center z-20 transition-transform duration-1000 ${
                      hoveredIndex === index
                        ? "translate-y-0 "
                        : "translate-y-1/2 opacity-0"
                    }`}
                  >
                    <button
                      className={`bg-red-600 p-2 hover:bg-red-700  text-white `}
                    >
                      थप पढ्नुहोस्
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
