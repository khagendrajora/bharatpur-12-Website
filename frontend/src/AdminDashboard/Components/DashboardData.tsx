import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { IPublication } from "./Publication/Publication";
import { toast } from "react-toastify";
import { INotice } from "./Notice/Notice";
import { INews } from "./News/News";

export const DashboardData = () => {
  const images = [
    {
      src: "/hero1.jpg",
      alt: "Hero Image 2",
      title: "बृद्ध",
      numbers: "१२८५",
      color: "bg-gradient-to-r from-blue-600 to-blue-400",
      value: "१३.६५%",
      range: " ५५ बर्ष देखि ६५ बर्ष",
    },
    {
      src: "/hero-6.jpg",
      alt: "Hero Image 1",
      title: "जेष्ठ नागरिक",
      numbers: "८४४",
      color: "bg-gradient-to-r from-amber-600 to-amber-500",
      value: "८.९७%",
      range: "६५ बर्ष माथि",
    },
    {
      src: "/hero-2.jpg",
      alt: "Hero Image 3",
      title: "अधिबैसे",
      numbers: "३४.१८",
      color: "bg-gradient-to-r from-green-500 to-green-500",
      value: "३६.३२%",
      range: " ३३ बर्ष देखि ५४ बर्ष",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "युवा",
      value: "२४.६१%",
      numbers: "२३१६",
      color: "bg-gradient-to-r from-pink-600 to-pink-500",
      range: " १७ बर्ष देखि ३२ बर्ष",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "बालबालिका",
      value: "१०.८%",
      numbers: "१०१६",
      color: "bg-gradient-to-r from-blue-600 to-blue-500",
      range: " ६  बर्ष देखि १६  बर्ष",
    },
    {
      src: "/hero-3.jpg",
      alt: "Hero Image 1",
      title: "शिशु",
      value: "५.१३%",
      numbers: "४८३",
      color: "bg-gradient-to-r from-amber-600 to-amber-500",
      range: " ०  बर्ष देखि ५  बर्ष",
    },
  ];

  const img = [
    {
      src: "/hero1.jpg",
      alt: "Hero Image 2",
      title: "कुल जनसंख्या",
      count: "९४११",
      color: "bg-sky-400",
      value: "१००%",
    },
    {
      src: "/hero-6.jpg",
      alt: "Hero Image 1",
      title: "कुल घरधुरी",
      count: "२६७३",
      color: "bg-green-500",
      value: "१००%",
    },
    {
      src: "/hero-2.jpg",
      alt: "Hero Image 3",
      title: "कुल घरसंख्या",
      count: "९६५९१",
      color: "bg-blue-500",
      value: "१००%",
    },
  ];

  const navigate = useNavigate();
  const [info, setInfo] = useState<IPublication[]>([]);
  const [notice, setNotice] = useState<INotice[]>([]);
  const [news, setNews] = useState<INews[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://bharatpur12.org/new/api/publications
`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.error);
        } else {
          setInfo(data);
        }
      } catch (error: any) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://bharatpur12.org/new/api/information`);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.error);
        } else {
          // const filterData = data.filter(
          //   (item: { category: string }) => item.category === "Board Member"
          // );
          setNotice(data);
        }
      } catch (error: any) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://bharatpur12.org/new/api/samachar
  `);
        const data = await res.json();
        if (!res.ok) {
          console.log(data.error);
        } else {
          setNews(data);
        }
      } catch (error: any) {
        toast.error(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="sm:ml-60 mt-20 sm:px-30 p-2">
        <div className="pb-2 font-poppin">
          <div className="flex justify-end w-11/12 mx-auto">
            <Link
              to="http://103.233.58.102/report"
              target="_blank"
              className="hover:text-black text-[#245fb9] font-semibold "
            >
              थप पढ्नुहोस्
            </Link>
          </div>
          <div className="flex flex-wrap gap-5 mx-auto lg:w-11/12 justify-start  text-white mt-5">
            {images.map((image, index) => (
              <>
                <div
                  key={index}
                  className={`relative ${image.color} p-5 shadow-sm flex flex-col gap-4 sm:min-w-[200px] max-w-[250px] justify-center${image.color} border-black`}
                >
                  <div className="flex justify-between">
                    <h1>{image.value}</h1>
                    <h1>{image.numbers}</h1>
                  </div>
                  {/* <div className="w-full bg-zinc-800 rounded-full  h-1">
                    <div className="bg-white h-1 rounded-full w-[50%]"></div>
                  </div> */}
                  <h3>{image.title}</h3>
                  <span>{image.range}</span>
                </div>
              </>
            ))}
          </div>
          <div className="flex  flex-wrap gap-8 xl:gap-10 pt-10 mx-auto lg:w-11/12  justify-start  text-black">
            {info && (
              <>
                <div
                  className={`relative  p-5 w-full shadow-sm flex border flex-col gap-4 lg:w-1/4   justify-center cursor-pointer  border-black`}
                  onClick={() => navigate("/admin/publication")}
                >
                  <div className="flex justify-between flex-wrap">
                    <h3 className="font-semibold text-xl">प्रकाशन</h3>
                  </div>

                  <span className="font-bold">{info.length}</span>
                </div>
              </>
            )}
            {notice && (
              <>
                <div
                  className={`relative  p-5 w-full shadow-sm flex border flex-col cursor-pointer  gap-4 lg:w-1/4   justify-center  border-black`}
                  onClick={() => navigate("/admin/notice")}
                >
                  <div className="flex justify-between flex-wrap">
                    <h3 className="font-semibold text-xl">सूचना</h3>
                  </div>

                  <span className="font-bold">{notice.length}</span>
                </div>
              </>
            )}
            {news && (
              <>
                <div
                  className={`relative  p-5 w-full shadow-sm cursor-pointer  flex border flex-col gap-4 lg:w-1/4   justify-center  border-black`}
                  onClick={() => navigate("/admin/news")}
                >
                  <div className="flex justify-between flex-wrap">
                    <h3 className="font-semibold text-xl">समाचार</h3>
                  </div>

                  <span className="font-bold">{news.length}</span>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-8 xl:gap-10 pt-10 justify-start w-11/12 mx-auto text-white">
            {img.map((image, index) => (
              <>
                <div
                  key={index}
                  className={`relative ${image.color} p-5 shadow-sm w-full  flex  flex-col gap-4 lg:w-1/4   justify-center${image.color} border-black`}
                >
                  <div className="flex justify-between flex-wrap">
                    <h3 className="font-semibold text-xl">{image.title}</h3>
                    <h1 className="">{image.value}</h1>
                  </div>
                  <span>{image.count}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
