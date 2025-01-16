import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NoticesPage = () => {
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
            Notices
          </h1>
        </div>
        <div className="flex flex-wrap justify-center p-12 gap-4 mx-auto ">
          <div className="flex gap-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg p-5 rounded-lg border">
            <div className="bg-blue-700 p-5 text-white font-medium flex justify-center items-center">
              Chaitra 2076
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                ipsam sit voluptatibus omnis commodi quas a assumenda
              </p>
              <button className="text-slate-400 flex flex-row gap-3 items-center">
                View More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg p-5 rounded-lg border">
            <div className="bg-blue-700 p-5 text-white font-medium flex justify-center items-center">
              Chaitra 2076
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                ipsam sit voluptatibus omnis commodi quas a assumenda
              </p>
              <button className="text-slate-400 flex flex-row gap-3 items-center">
                View More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg p-5 rounded-lg border">
            <div className="bg-blue-700 p-5 text-white font-medium flex justify-center items-center">
              Chaitra 2076
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                ipsam sit voluptatibus omnis commodi quas a assumenda
              </p>
              <button className="text-slate-400 flex flex-row gap-3 items-center">
                View More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg p-5 rounded-lg border">
            <div className="bg-blue-700 p-5 text-white font-medium flex justify-center items-center">
              Chaitra 2076
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo
                ipsam sit voluptatibus omnis commodi quas a assumenda
              </p>
              <button className="text-slate-400 flex flex-row gap-3 items-center">
                View More <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
