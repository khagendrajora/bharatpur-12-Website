export const AboutUs = () => {
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
            About Us
          </h1>
        </div>

        <div className="flex flex-row md:w-11/12 flex-wrap justify-center mx-auto  p-10  ">
          <div className="">
            <img
              src="/hero.jpg"
              alt="logo"
              className="flex mx-auto w-[600px] md:h-[700px] object-cover"
            />
          </div>
          <div className="p-4 lg:w-1/2 w-full flex flex-col  gap-5">
            <h1 className="lg:text-6xl sm:text-4xl text-2xl p-2 font-bold">
              Short Introduction
            </h1>
            <p className="text-gray-600 p-3 text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
              voluptate expedita voluptatum officia, voluptatem blanditiis atque
              illum libero dicta exercitationem quia recusandae ea nobis dolores
              cumque magnam velit autem quos?
            </p>
            <button className="p-2 rounded-sm bg-blue-600 text-white w-fit">
              View More
            </button>
          </div>
        </div>
        {/* <div className="flex w-full flex-wr lg:h-32 h-fit gap-[2px] text-white font-semibold lg:text-2xl overflow-x-auto -mt-[5px]"> */}
        {/* <div className="bg-blue-300 hover:bg-blue-400 cursor-pointer  min-w-[100px] w-1/5 flex justify-center lg:gap-10 gap-2 flex-wrap items-center">
          <FontAwesomeIcon icon={faCreditCard} style={{ color: "#f7f7f7" }} />
          NOtice
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ color: "#ffffff" }}
          />
        </div> */}
        {/* <div className="bg-blue-400 hover:bg-blue-500 cursor-pointer  p-5  w-1/5 flex justify-center  lg:gap-10 flex-wrap gap-2 items-center">
          <FontAwesomeIcon icon={faCreditCard} style={{ color: "#f7f7f7" }} />
          NOtice
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ color: "#ffffff" }}
          />
        </div> */}

        {/* <div className="bg-red-400 hover:bg-red-500 cursor-pointer  p-5  w-1/5  flex justify-center lg:gap-10 flex-wrap gap-2 items-center">
          <FontAwesomeIcon
            icon={faFileCirclePlus}
            style={{ color: "#ffffff" }}
          />
          Notice
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ color: "#ffffff" }}
          />
        </div> */}
        {/* 
        <div className="bg-lime-500 hover:bg-lime-600 cursor-pointer p-5  w-1/5  flex justify-center lg:gap-10 flex-wrap gap-2 items-center">
          <FontAwesomeIcon
            icon={faFileCirclePlus}
            style={{ color: "#ffffff" }}
          />
          NOtice
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            style={{ color: "#ffffff" }}
          />
        </div> */}
      </div>
    </>
  );
};
