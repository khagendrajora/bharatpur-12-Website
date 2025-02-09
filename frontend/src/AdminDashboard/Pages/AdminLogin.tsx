import { toast, ToastContainer } from "react-toastify";
import { useFormik } from "formik";
import { useNavigate } from "react-router";
import { adminLogin } from "../../Validation/Validation";
import "react-toastify/dist/ReactToastify.css";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      adminEmail: "",
      adminPwd: "",
    },
    validationSchema: adminLogin,
    enableReinitialize: true,
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch(`${URL}/api/adminlogin`, {
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
          navigate("/admin/admdashboard");

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
              name="adminEmail"
              className="border shadow rounded-lg appearance-none p-3 md:w-96"
              placeholder="Admin Email"
              value={formik.values.adminEmail}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.adminEmail && formik.errors.adminEmail && (
              <div className="text-red-500">{formik.errors.adminEmail}</div>
            )}
          </div>
          <div>
            <input
              type="password"
              name="adminPwd"
              value={formik.values.adminPwd}
              placeholder="Password"
              className="border shadow rounded-lg appearance-none p-3 md:w-96"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.adminPwd && formik.errors.adminPwd && (
              <div className="text-red-500">{formik.errors.adminPwd}</div>
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
