import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { ImageURl } from "../../../Utils/ButtonLoader";
import axios from "axios";
import HTMLReactParser from "html-react-parser/lib/index";

export interface IIntro extends Document {
  id?: string;
  title_en: string;
  title_np: string;
  description_en: string;
  description_np: string;
  feature_image: string;
  slider_images: string[];
  main_image: string;
}

export const Intro = () => {
  const [info, setInfo] = useState<IIntro | null>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://bharatpur12.org/new/api/about-us
  `);
        const data = await res.json();
        if (!res.ok) {
          console.log(data);
        } else {
          setInfo(data);
        }
      } catch (error: any) {
        toast.error(error);
      }
    };
    fetchData();
  }, [info]);
  console.log(info);

  const Delete = async () => {
    try {
      const confirmed = window.confirm("Delete ?");
      if (confirmed) {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Token Missing");
          return;
        }
        // setIsButton(id || "");
        const response = await axios.delete(
          `https://bharatpur12.org/new/api/about-us`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = response.data;
        if (data.message) {
          toast.error(data.message);
        } else {
          setInfo(null);
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="sm:ml-60 mt-20 sm:px-30 p-5">
        <h1 className="font-bold text-2xl pb-10">परिचय</h1>
        <div className="pb-4 bg-white flex flex-wrap gap-10 justify-between dark:bg-gray-900">
          <div className="relative mt-1">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search"
              className="block  ps-10 p-2 text-sm text-gray-900  rounded-lg w-80 bg-gray-50   dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white "
              placeholder="Search for items"
            />
          </div>
          <div>
            <Link
              to="/admin/addintro"
              className="bg-[#245fb9] hover:bg-blue-600 px-3 p-2 rounded-lg text-white font-semibold"
            >
              नयाँ थप्नुहोस्
            </Link>
          </div>
        </div>
        <div className="relative overflow-x-auto text-center shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-center  border text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-3 py-3">
                  <span>ID</span>
                </th>
                <th scope="col" className="px-3 py-3">
                  Feture Image
                </th>
                <th scope="col" className="px-3 py-3">
                  Main Image
                </th>
                <th scope="col" className="px-3 py-3">
                  Title
                </th>

                <th scope="col" className="px-3 py-3">
                  Description
                </th>

                <th scope="col" className="px-3 py-3">
                  Slider&nbsp;Image
                </th>
                <th scope="col" className="px-3 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {info && (
                <>
                  <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className=" py-4   font-semibold text-gray-900 dark:text-white">
                      {info.id}
                    </td>
                    <td className="p-4 ">
                      <img
                        src={`${ImageURl}/${info.feature_image}`}
                        className="w-16 md:w-32 max-w-full mx-auto max-h-full"
                        alt="Image"
                      />
                    </td>
                    <td className="p-4 ">
                      <img
                        src={`${ImageURl}/${info.feature_image} `}
                        className="w-16 md:w-32 max-w-full mx-auto max-h-full"
                        alt="Image"
                      />
                    </td>
                    <td className="  py-4 font-semibold text-gray-900 dark:text-white">
                      <div>{info.title_en}</div>
                      <br />
                      <div>{info.title_np}</div>
                    </td>

                    <td className="py-4 font-semibold max-w-[300px] min-w-[300px] px-3  text-gray-900 dark:text-white">
                      <div>{HTMLReactParser(info.description_en)}</div>
                      <br />
                      <div>{HTMLReactParser(info.description_np)}</div>
                    </td>

                    <td className="">
                      {info.slider_images.length > 0 &&
                        info.slider_images.map((s) => (
                          <img
                            src={`${ImageURl}/${s}`}
                            className="w-16 md:w-32 max-w-full mx-auto max-h-full"
                            alt="Apple Watch"
                          />
                        ))}
                    </td>
                    <td className="">
                      <FontAwesomeIcon
                        icon={faEye}
                        className="text-blue-600 hover:text-blue-700 bg-gray-100 border p-2 mx-2 rounded cursor-pointer"
                      />

                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="text-green-600 hover:text-green-700 bg-gray-100 border p-2 mx-2 rounded cursor-pointer"
                        onClick={() => navigate(`/admin/updateintro/:id`)}
                      />

                      <FontAwesomeIcon
                        icon={faTrash}
                        className="text-red-600 hover:text-red-700 bg-gray-100 border p-2 mx-2 rounded cursor-pointer"
                        onClick={() => Delete()}
                      />
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
