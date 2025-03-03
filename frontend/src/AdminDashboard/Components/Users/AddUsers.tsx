import React from "react";
import { ButtonLoader } from "../../../Utils/ButtonLoader";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const AddUsers = () => {
  const navigate = useNavigate();
  const [isButton, setIsButton] = React.useState(false);
  const [inputs, setInputs] = React.useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });

  const add = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsButton(true);
    const formData = new FormData();
    formData.append("name", inputs.name);
    formData.append("email", inputs.email);
    formData.append("password", inputs.password);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Token Missing");
        return;
      }
      const res = await fetch("https://bharatpur12.org/new/api/user", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },

        body: formData,
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error);
        console.log(data);
      } else {
        toast.success(data.message);

        setInputs({
          name: "",
          email: "",
          password: "",
        });
        setTimeout(() => {
          navigate(-1);
        }, 2000);
      }
    } catch (error: any) {
      toast.error(error);
    } finally {
      setIsButton(false);
    }
  };
  return (
    <>
      <div className="sm:ml-60 mt-20 sm:px-30 p-3 md:p-5">
        <div className="flex justify-center mx-auto">
          <form
            onSubmit={add}
            className="flex w-full justify-center gap-20 flex-col mx-auto border md:p-10 p-2"
          >
            <div className="flex flex-col gap-16 ">
              <h1 className="font-bold text-xl pb-10 text-center lg:text-2xl">
                Add New Admin User
              </h1>
              <div className="flex flex-wrap gap-16 ">
                <div className="relative z-0 w-full md:w-2/5 mb-5 group">
                  <input
                    type="text"
                    name="name"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500k dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Name
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap gap-16  ">
                <div className="relative z-0 w-full md:w-2/5 mb-5 group">
                  <input
                    type="email"
                    name="email"
                    value={inputs.email}
                    onChange={(e) =>
                      setInputs({ ...inputs, email: e.target.value })
                    }
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Email
                  </label>
                </div>

                <div className="relative z-0 w-full md:w-2/5 mb-5 group">
                  <input
                    type="password"
                    name="password"
                    value={inputs.password}
                    onChange={(e) =>
                      setInputs({ ...inputs, password: e.target.value })
                    }
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                    Password
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-center  w-full ">
              <button className="text-white font-medium bg-blue-700 hover:bg-blue-800  text-lg w-full lg:w-1/4  p-3 text-center">
                Add New User {isButton ? <ButtonLoader /> : ""}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
