import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { adminLogin } from "../../Validation/Validation";
import "react-toastify/dist/ReactToastify.css";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: adminLogin,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch(`https://bharatpur12.org/new/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const data = await res.json();

        if (!res.ok) {
          toast.error(data.error);
        } else {
          localStorage.setItem("token", data.token);
          setTimeout(() => {
            const token = localStorage.getItem("token");
            if (token) {
              navigate("/admin/dashboard");
            } else {
              console.log("token failed");
            }
          }, 2000);

          resetForm();
        }
      } catch (error: any) {
        toast.error(error);
      }
    },
  });

  return (
    <>
      <ToastContainer theme="colored" position="top-center" />
      <div className="flex flex-col items-center justify-center min-h-screen  ">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-y-5 shadow-xl p-20 rounded-md "
        >
          <div>
            <input
              type="text"
              name="email"
              className="border shadow rounded-lg appearance-none p-3 md:w-96"
              placeholder="Admin Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              placeholder="Password"
              className="border shadow rounded-lg appearance-none p-3 md:w-96"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500">{formik.errors.password}</div>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-xl w-full"
            >
              Login
            </button>
          </div>
          {/* <div className="flex gap-3 items-center">
          <p>Login with:</p>
          <img
            width="35"
            height="35"
            className="bg-white shadow-lg p-1 cursor-pointer"
            src="https://img.icons8.com/fluency/48/google-logo.png"
            alt="google-logo"
          />
        </div> */}
        </form>
      </div>
    </>
  );
};
