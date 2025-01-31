export const Publication = () => {
  return (
    <>
      {/* <div className="relative h-[500px]"> */}
      {/* <div className="absolute inset-0 bg-[url('/hill.jpg')] bg-cover bg-center text-center bg-fixed opacity-20"></div> */}
      {/* <div className="relative z-10 flex items-center h-1/2 justify-center ">
          <div className="text-xl sm:text-3xl md:text-5xl text-center font-bold font-mono p-2 bg-gradient-to-r from-red-600 to-blue-900  text-transparent bg-clip-text">
            भरतपुर
            <br /> <br />
            अन्वेषण गर्नुहोस्, अनुभव गर्नुहोस्, रमाइलो गर्नुहोस्
          </div>
        </div> */}
      {/* </div> */}

      <div
        className=" flex flex-wrap font-poppin justify-between w-full"
        id="publication"
      >
        <div className="py-14 w-full md:w-2/5">
          <div className="w-full">
            <div className="flex flex-col items-center md:items-start md:w-4/5 w-full mx-auto">
              <h1 className=" text-4xl font-bold">प्रकाशन</h1>
              <div className="p-5 mt-7  border-4 bg-white  rounded-lg w-fit lg:min-w-[300px] max-w-[570px] flex gap-3 items-center">
                <div className="p-5 bg-[#245fb9] font-bold text-center border rounded-full w-fit text-white">
                  आश्विन <br></br>१०
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold lg:text-xl">
                    वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)
                  </h1>
                  <h1 className="cursor-pointer flex  items-center gap-3 text-slate-500 hover:text-blue-500">
                    डाउनलोड गर्नुहोस्
                  </h1>
                </div>
              </div>

              <div className="p-5 mt-5 bg-white border-4 rounded-lg w-fit lg:min-w-[300px] max-w-[570px] flex gap-3 items-center">
                <div className="p-5 bg-[#245fb9] font-bold text-center border rounded-full w-fit text-white">
                  आश्विन <br></br>१०
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold lg:text-xl">
                    वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)
                  </h1>
                  <h1 className="cursor-pointer flex  items-center gap-3 text-slate-500 hover:text-blue-500">
                    डाउनलोड गर्नुहोस्
                  </h1>
                </div>
              </div>
              <div className="p-5 mt-5  bg-white border-4 rounded-lg w-fit lg:min-w-[300px] max-w-[570px] flex gap-3 items-center">
                <div className="p-5 bg-[#245fb9] font-bold text-center border rounded-full w-fit text-white">
                  आश्विन <br></br>१०
                </div>
                <div className="flex flex-col gap-1">
                  <h1 className="font-bold lg:text-xl">
                    वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)
                  </h1>
                  <h1 className="cursor-pointer flex  items-center gap-3 text-slate-500 hover:text-blue-500">
                    डाउनलोड गर्नुहोस्
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto md:w-3/5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172278.0772515662!2d84.24107640614274!3d27.65827846608394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea702f7!2sBharatpur%2044200!5e1!3m2!1sen!2snp!4v1737023516357!5m2!1sen!2snp"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </>
  );
};
