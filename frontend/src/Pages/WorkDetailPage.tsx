import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { IWork } from "../components/WorkDone";
import axios from "axios";
import { ImageURl } from "../Utils/ButtonLoader";
import HTMLReactParser from "html-react-parser/lib/index";

export const WorkDetailPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.key;
  const [data, setData] = useState<IWork | null>(null);
  const [info, setInfo] = useState<IWork[] | []>([]);

  // const offsetTop = 0;
  // useEffect(() => {
  //   window.scrollTo({
  //     top: offsetTop,
  //     behavior: "smooth",
  //   });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://bharatpur12.org/new/api/our-works/${id}`
        );
        // console.log(response.data);
        setData(response.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

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
        const latestData =
          data && sortData.filter((d: any) => d.id != data.id || null);
        setInfo(latestData);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, [data]);
  console.log(info);

  return (
    <>
      <div className="w-full  flex flex-col mb-[80px] font-poppin md:gap-20 gap-10">
        {data ? (
          <>
            <div className="w-full relative">
              <img
                src="/hero.jpg"
                alt="hero"
                className="w-full h-[400px]  object-cover"
              />
              <h1 className="absolute inset-0 font-bold justify-center items-center flex text-white text-center  text-shadow text-xl md:text-5xl ">
                {HTMLReactParser(data.title_en)}
              </h1>
            </div>
            <div className="flex flex-wrap gap-16 justify-center">
              <div className="flex flex-col gap-6 md:w-2/3 p-2">
                <div className="flex gap-6 ">
                  <div className="font-bold flex items-end text-3xl">
                    {HTMLReactParser(data.title_en)}
                  </div>
                </div>
                <div>
                  <img src={`${ImageURl}/${data.main_image}`} />
                </div>
                <div className="text-justify text-gray-500 font-normal leading-8">
                  {HTMLReactParser(data.description_np)}
                </div>
                <iframe
                  src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fbharatpur.netlify.app%2Fnewsdetail&layout&size&width=77&height=20&appId"
                  width="77"
                  height="20"
                  style={{ border: "none", overflow: "hidden" }}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className=" flex flex-col gap-5 md:w-1/4">
                <h1 className="font-bold text-[#245fb9] text-4xl">थप कामहरू</h1>
                <ul className="">
                  {info
                    ? info.map((work, i) => (
                        <>
                          <li
                            key={i}
                            className="p-4  flex text-md font-bold cursor-pointer hover:text-blue-600 "
                            onClick={() => navigate(`/workdetail/${work.id}`)}
                          >
                            {i + 1}.&nbsp;&nbsp;&nbsp;
                            {HTMLReactParser(work.title_np)}
                          </li>
                        </>
                      ))
                    : ""}
                </ul>
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
