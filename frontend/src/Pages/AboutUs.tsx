export const AboutUs = () => {
  return (
    <>
      <div className="w-full font-poppin">
        <div className="w-full relative">
          <img
            src="/hero.jpg"
            alt="hero"
            className="w-full h-[400px]  object-cover"
          />
          <h1 className="absolute inset-0 justify-center items-center flex text-white font-bold text-shadow text-4xl md:text-7xl">
            हाम्रो&nbsp;बारेमा
          </h1>
        </div>

        <div className="flex flex-row  flex-wrap gap-5 justify-center mx-auto my-5 p-5 xl:p-14 ">
          <div className="">
            <img
              src="/bharatpur.jpg"
              alt="logo"
              className="flex mx-auto w-[600px] xl:h-[500px] object-cover"
            />
          </div>
          <div className="p-2 xl:p-5 2xl:w-1/2  w-full flex flex-col gap-5">
            <h1 className="sm:text-4xl text-2xl p-2 font-bold">
              संक्षिप्त परिचय
            </h1>
            <p className="text-gray-600 leading-10 text-justify font-normal ">
              खोकना पूर्व गाउँ विकास समिति (VDC) हो जुन छिमेकी गाविसा बुंगमती,
              छाम्पी, दुकुछाप र सानिबुसँग गाभिएर नेपालको बागमती अञ्चलको ललितपुर
              जिल्लाको कार्यविनायक नगरपालिका गठन गरिएको छ। 1991 को नेपाली जनगणना
              को समयमा, खोकना 4258 को जनसंख्या 699 व्यक्तिगत घरहरु मा बसोबास
              थियो। 2011 को नेपाली जनगणना अनुसार, 1056 व्यक्तिगत घरहरु मा बसोबास
              गर्ने 4927 को जनसंख्या थियो।. खोकना, एउटा परम्परागत र सानो नेवारी
              गाउँ, जुन काठमाण्डौबाट करिब ८ किलोमिटर दक्षिणमा (पाटनको बाहिरी
              भागमा) पर्छ। खोकना प्राचीनकालदेखि नै तोरीको तेल उत्पादनका लागि
              प्रख्यात छ । राणा प्रधानमन्त्री चन्द्र शमशेरको पालामा सन् १९११ मा
              विद्युतले जलाउने नेपालको पहिलो सहर पनि थियो ।
            </p>
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
