import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ContactPage = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full relative">
          <img
            src="/hero.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute inset-0 justify-center items-center flex text-white font-bold text-shadow text-4xl md:text-7xl">
            Contact
          </h1>
        </div>
        <div className="flex flex-row text-slate-600 flex-wrap justify-between p-10 mx-auto md:w-3/4 ">
          <div className="flex flex-col gap-12">
            <h1 className="text-4xl font-bold">Hamro Smaparka ko lagi</h1>
            <div className="flex flex-row items-center gap-5">
              <FontAwesomeIcon
                icon={faLocationPin}
                size="xl"
                style={{ color: "#ff0000" }}
              />
              <div className="flex flex-col ">
                <h1 className="font-medium text-2xl">Address</h1>
                <h1>BharatPur</h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5">
              <FontAwesomeIcon
                icon={faPhone}
                size="xl"
                className="me-1 hover:scale-105 cursor-pointer text-red-600"
              />
              <div className="flex flex-col ">
                <h1 className="font-medium text-2xl">Address</h1>
                <h1>BharatPur</h1>
              </div>
            </div>
            <div className="flex flex-row items-center gap-5">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="xl"
                className="me-1 hover:scale-105 cursor-pointer text-red-600"
              />
              <div className="flex flex-col ">
                <h1 className="font-medium text-2xl">Address</h1>
                <h1>BharatPur</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
