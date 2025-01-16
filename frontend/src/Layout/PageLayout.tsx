import { Outlet } from "react-router";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import ReviewPrart from "../components/ReviewPrart";

export const PAgeLayout = () => {
  return (
    <>
      <div className="bg-zinc-100">
        <NavBar />
        <Outlet />
        <ReviewPrart />
        <Footer />
      </div>
    </>
  );
};
