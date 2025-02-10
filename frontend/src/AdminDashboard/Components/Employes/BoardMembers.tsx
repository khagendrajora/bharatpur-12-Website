import {
  faEye,
  faPenToSquare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";

export const BoardMembers = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:ml-60 mt-20 sm:px-30 p-5">
      <h1 className="font-bold text-2xl pb-10">जन&nbsp;प्रतिनिधि</h1>
      <div className="pb-4 bg-white flex justify-between flex-wrap gap-10 dark:bg-gray-900">
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
            to="/admin/addboardmember"
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
                Image
              </th>
              <th scope="col" className="px-3 py-3">
                Name
              </th>

              <th scope="col" className="px-3 py-3">
                Post
              </th>
              <th scope="col" className="px-3 py-3">
                Phone Number
              </th>

              <th scope="col" className="px-3 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className=" py-4   font-semibold text-gray-900 dark:text-white">
                1
              </td>
              <td className="p-4 ">
                <img
                  src="/1.jpg"
                  className="w-16 md:w-32 max-w-full mx-auto max-h-full"
                  alt="Apple Watch"
                />
              </td>
              <td className="  py-4 font-semibold text-gray-900 dark:text-white">
                <div>Khagendra</div>
                <br />
                <div>नेपाली</div>
              </td>

              <td className="py-4 font-semibold px-3  text-gray-900 dark:text-white">
                <div>Adhikrit</div>
              </td>

              <td className="">9812766153</td>
              <td className="">
                <FontAwesomeIcon
                  icon={faEye}
                  className="text-blue-600 hover:text-blue-700 bg-gray-100 border p-2 mx-2 rounded cursor-pointer"
                />

                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="text-green-600 hover:text-green-700 bg-gray-100 border p-2 mx-2 rounded cursor-pointer"
                  onClick={() => navigate(`/admin/updatebod`)}
                />

                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-red-600 hover:text-red-700 bg-gray-100 border p-2 mx-2 rounded cursor-pointer"
                />
              </td>
            </tr>
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                       <td className=" py-4 w-fit font-semibold text-gray-900 dark:text-white">
                         1
                       </td>
                       <td className="p-4 ">
                         <img
                           src="/1.jpg"
                           className="w-16 md:w-32  max-w-full max-h-full"
                           alt="Apple iMac"
                         />
                       </td>
                       <td className=" py-4 font-semibold text-gray-900 dark:text-white">
                         iMac 27"
                       </td>
       
                       <td className=" py-4">
                         <a
                           href="#"
                           className="font-medium text-red-600 dark:text-red-500 hover:underline"
                         >
                           Remove
                         </a>
                       </td>
                     </tr> */}
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                       <td className=" py-4 w-fit font-semibold text-gray-900 dark:text-white">
                         1
                       </td>
                       <td className="p-4">
                         <img
                           src="/1.jpg"
                           className="w-16 md:w-32 max-w-full max-h-full"
                           alt="iPhone 12"
                         />
                       </td>
                       <td className=" py-4 font-semibold text-gray-900 dark:text-white">
                         IPhone 12
                       </td>
       
                       <td className=" py-4">
                         <a
                           href="#"
                           className="font-medium text-red-600 dark:text-red-500 hover:underline"
                         >
                           Remove
                         </a>
                       </td>
                     </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};
