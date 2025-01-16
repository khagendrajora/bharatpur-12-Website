import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NewsPage = () => {
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
            News
          </h1>
        </div>
        <div className="flex  flex-wrap justify-start p-10 mx-auto md:w-3/4 ">
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-lg gap-5 p-5 rounded-lg border">
            <img
              src="/hero.jpg"
              alt="logo"
              className="flex mx-auto   object-cover"
            />
            <p className="text-gray-600 p-1 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              vel, quisquam laborum labore beatae dolorem mollitia nesciunt
              cupiditate illum reiciendis, quibusdam molestias officiis animi
              incidunt esse optio praesentium. Iusto, voluptas.
            </p>
            <hr />
            <button className="text-slate-400 flex flex-row gap-3 items-center">
              View More <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/3 shadow-lg gap-5 p-5 rounded-lg border">
            <img
              src="/hero.jpg"
              alt="logo"
              className="flex mx-auto   object-cover"
            />
            <p className="text-gray-600 p-1 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              vel, quisquam laborum labore beatae dolorem mollitia nesciunt
              cupiditate illum reiciendis, quibusdam molestias officiis animi
              incidunt esse optio praesentium. Iusto, voluptas.
            </p>
            <hr />
            <button className="text-slate-400 flex flex-row gap-3 items-center">
              View More <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="flex flex-col w-full md:w-1/2 lg:w-1/3  shadow-lg gap-5 p-5 rounded-lg border">
            <img
              src="/hero.jpg"
              alt="logo"
              className="flex mx-auto   object-cover"
            />
            <p className="text-gray-600 p-1 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              vel, quisquam laborum labore beatae dolorem mollitia nesciunt
              cupiditate illum reiciendis, quibusdam molestias officiis animi
              incidunt esse optio praesentium. Iusto, voluptas.
            </p>
            <hr />
            <button className="text-slate-400 flex flex-row gap-3 items-center">
              View More <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
