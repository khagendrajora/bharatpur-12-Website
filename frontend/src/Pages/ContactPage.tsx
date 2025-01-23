import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
// import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { contact } from "../Validation/Validation";

export const ContactPage = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     message: "",
  //   },
  //   enableReinitialize: true,
  //   validationSchema: contact,
  //   onSubmit: async (values, {}) => {
  //     // setIsButton(true);
  //     try {
  //       // const res = await fetch(`/api/login`, {
  //       //   method: "POST",
  //       //   headers: {
  //       //     "Content-Type": "application/json",
  //       //   },
  //       //   body: JSON.stringify(values),
  //       // });
  //       // const data = await res.json();
  //       // if (!res.ok) {
  //       //   toast.error(data.error);
  //       // } else {
  //       //   toast.success(data.message);
  //       //   setAuthUser(data);
  //       //   resetForm();
  //       // }
  //     } catch (error: any) {
  //       // toast.error(error);
  //     } finally {
  //       // setIsButton(false);
  //     }
  //   },
  // });
  return (
    <>
      <div className="w-full bg-[#f2f2f2]">
        <div className="w-full relative">
          <img
            src="/hero.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute inset-0 font-sans justify-center items-center flex text-white   text-4xl md:text-7xl">
            सम्पर्क
          </h1>
        </div>
        <div className="flex flex-row text-slate-600 flex-wrap justify-center xl:justify-e gap-x-[300px]  gap-y-10 p-10 mx-auto w-full  ">
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold">
              हाम्रो&nbsp;सम्पर्कको&nbsp;लागि
            </h1>
            <div className="flex flex-row items-center gap-5 bg-white p-5 shadow-sm rounded-md">
              <FontAwesomeIcon
                icon={faLocationPin}
                size="xl"
                style={{ color: "#ff0000" }}
              />
              <div className="flex flex-col ">
                <h1 className="font-medium text-2xl">ठेगाना</h1>
                <h1>भरतपुर</h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 bg-white p-5 shadow-sm rounded-md">
              <FontAwesomeIcon
                icon={faPhone}
                size="xl"
                className="me-1 hover:scale-105 cursor-pointer text-red-600"
              />
              <div className="flex flex-col ">
                <h1 className="font-medium text-2xl">फोन&nbsp;नम्बर</h1>
                <h1>9812766153</h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5 bg-white p-5 shadow-sm rounded-md">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="xl"
                className="me-1 hover:scale-105 cursor-pointer text-red-600"
              />
              <div className="flex flex-col ">
                <h1 className="font-medium text-2xl">इमेल</h1>
                <h1>bharatpur&gmail.com</h1>
              </div>
            </div>
          </div>
          <div className="w-full  md:min-w-[400px] max-w-[500px]">
            <form
              // onSubmit={}
              className="flex w-full flex-col text-white rounded-md items-center lg:gap-y-4 bg-[#245fb9] mb-10  gap-5 p-4"
            >
              <div className="w-full space-y-2">
                <label className="font-semibold">नाम</label>
                <input
                  type="text"
                  name="name"
                  className="border border-slate-700 rounded-lg  p-2 lg:p-3 w-full"
                  placeholder="नाम"
                  // value={formik.values.name.trim().toLowerCase()}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                />
                {/* {formik.touched.name && formik.errors.name && (
                  <div className="text-red-500">{formik.errors.name}</div> */}
                {/* )} */}
              </div>
              <div className="w-full space-y-2">
                <label className="font-semibold">इमेल</label>
                <input
                  type="email"
                  name="email"
                  // value={formik.values.email.trim()}
                  placeholder="इमेल"
                  className="border border-slate-700 rounded-lg p-2 lg:p-3 w-full "
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                />
                {/* {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500">{formik.errors.email}</div>
                )} */}
              </div>
              <div className="w-full space-y-2">
                <label className="font-semibold">सन्देश</label>
                <textarea
                  name="message"
                  // value={formik.values.message.trim()}
                  placeholder="सन्देश"
                  className="border border-slate-700 rounded-lg p-2 lg:p-3 w-full "
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                />
                {/* {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500">{formik.errors.message}</div>
                )} */}
              </div>

              <div className=" flex flex-col w-3/4 gap-4 max-w-96">
                <button
                  type="submit"
                  className="bg-button bg-green-500 hover:bg-[#06243C]  text-white p-2 rounded-lg w-full"
                >
                  पठाउनुहोस्
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
