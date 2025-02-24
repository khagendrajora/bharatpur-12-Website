import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { IMembers } from "../AdminDashboard/Components/Employes/BoardMembers";
import { ImageURl } from "../Utils/ButtonLoader";
import { IIntro } from "../AdminDashboard/Components/Introduction/Intro";
import HTMLReactParser from "html-react-parser/lib/index";

export const Intro = () => {
  const navigate = useNavigate();
  const [members, setMembers] = useState<IMembers[]>([]);
  const [intro, setIntro] = useState<IIntro>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://bharatpur12.org/new/api/about-us`
        );
        console.log(response.data);
        // const latestData = response.data.slice(0, 2);
        setIntro(response.data);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://bharatpur12.org/new/api/board-members`
        );
        console.log(response.data);
        const filteredData = response.data.filter(
          (members: any) => members.category === "Board Member"
        );
        const sortData = filteredData.sort((a: any, b: any) => a.id - b.id);

        setMembers(sortData);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="bg-white py-20 md:py-0">
        <div className=" flex justify-center mx-auto lg:w-3/4 w-11/12 md:my-14 ">
          <div className="flex flex-wrap justify-center  gap-10">
            <div className="flex flex-col gap-5 md:w-2/5 xl:w-1/2">
              {intro && (
                <div>
                  <div className="font-bold text-4xl">
                    {HTMLReactParser(intro.title_np)}
                  </div>
                  <div className="text-justify text-gray-500 py-5 font-normal font-poppin text-[16px] leading-8">
                    {HTMLReactParser(intro.description_np)}
                  </div>
                  <div className="flex justify-start">
                    <button
                      className="border-2 border-[#245fb9] bg-[#245fb9] text-white hover:bg-white hover:text-[#245fb9]  p-3 font-medium"
                      onClick={() => navigate("/aboutus")}
                    >
                      थप पढ्नुहोस्
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="slider-containers  md:w-[380px] w-[300px]">
              <Slider {...settings}>
                {members.map((member, index) => (
                  <>
                    <div key={index} className=" relative ">
                      <img
                        src={`${ImageURl}/${member.image}`}
                        alt="image"
                        className="h-[450px] w-full object-cover"
                      />

                      <div className=" z-10 text-center space-y-1 absolute bottom-1 right-0 rounded-l bg-white p-3 w-3/4 ">
                        <h1 className="font-semibold">श्री {member.name_np}</h1>
                        <h1 className="font-normal text-slate-500 text-xs">
                          {member.designation_np}
                        </h1>
                        <h1 className="font-normal text-slate-500 text-xs">
                          {member.phone}
                        </h1>
                      </div>
                    </div>
                  </>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
