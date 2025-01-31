export const ToleIntro = () => {
  // const images = [
  //   {
  //     src: "/hero1.jpg",
  //     alt: "Hero Image 2",
  //     title: "बृद्ध",
  //     color: "bg-gradient-to-r from-cyan-300 to-blue-600",
  //     value: "१०%",
  //   },
  //   {
  //     src: "/hero-6.jpg",
  //     alt: "Hero Image 1",
  //     title: "जेष्ठ नागरिक",
  //     color: "bg-gradient-to-r from-lime-300 to-lime-600",
  //     value: "१०%",
  //   },
  //   {
  //     src: "/hero-2.jpg",
  //     alt: "Hero Image 3",
  //     title: "अधिबैसे",
  //     color: "bg-gradient-to-r from-amber-300 to-amber-600",
  //     value: "४०%",
  //   },
  //   {
  //     src: "/hero-3.jpg",
  //     alt: "Hero Image 1",
  //     title: "युवा",
  //     value: "१५%",
  //     color: "bg-gradient-to-r from-teal-300 to-teal-600",
  //   },
  //   {
  //     src: "/hero-3.jpg",
  //     alt: "Hero Image 1",
  //     title: "बालबालिका",
  //     value: "५%",
  //     color: "bg-gradient-to-r from-cyan-300 to-blue-600",
  //   },
  //   {
  //     src: "/hero-3.jpg",
  //     alt: "Hero Image 1",
  //     title: "शिशु",
  //     value: "३०%",
  //     color: "bg-gradient-to-r from-cyan-300 to-blue-600",
  //   },
  // ];
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
            टाेली
          </h1>
        </div>
        <div className="flex flex-col w-full  flex-wrap justify-center my-16 mx-auto lg:w-3/4 ">
          <div className="flex justify-center gap-7 flex-col text-center w-full lg:w-3/4 mx-auto">
            <div className="space-y-2">
              <h1>प्रतिनिधि</h1>
              <h1 className="font-bold text-3xl">जन&nbsp;प्रतिनिधि</h1>
            </div>
            <div className="w-full md:w-1/2 flex flex-col max-w-[350px] mx-auto">
              <img
                src="/lekhrajpanta.jpg"
                className="h-[300px] w-[300px] mx-auto"
              />
              <div className="w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री लेख राज पन्त</h1>
                <h1 className="">अध्यक्ष</h1>
                <h1 className="">९८५५०५६४३८</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full text-xs text-center sm:text-lg  justify-center flex-wrap mx-auto my-10 lg:w-4/5">
          <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
            <img src="/female.png" className="h-[300px] w-[300px] mx-auto " />
            <div className="w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
              <h1 className="font-bold">श्री जमुना ढुंगाना </h1>
              <h1 className="">महिला सदस्य</h1>
              <h1 className="">९८४९०४६२६१</h1>
            </div>
          </div>
          <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
            <img src="/female.png" className="h-[300px] w-[300px] mx-auto" />
            <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
              <h1 className="font-bold">श्री मिरा नेपाली </h1>
              <h1 className="">द. महिला सदस्य</h1>
              <h1 className="">९७४८४२९८९०</h1>
            </div>
          </div>
          <div className="w-11/12 lg:w-1/4 md:w-1/3  flex flex-col max-w-[350px] mx-auto">
            <img src="/male.png" className="h-[300px] w-[300px] mx-auto" />
            <div className="w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
              <h1 className="font-bold">श्री बिर बहादुर स्याङतान</h1>
              <h1 className="">सदस्य</h1>
              <h1 className="">९८४५०८६०९८</h1>
            </div>
          </div>
          <div className="w-11/12  lg:w-1/4 md:w-1/3  flex flex-col max-w-[350px] mx-auto ">
            <img src="/male.png" className="h-[300px] w-[300px] mx-auto" />
            <div className="w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
              <h1 className="font-bold">श्री संजय कुमार थापा </h1>
              <h1 className="">सदस्य</h1>
              <h1 className="">९८५५०५४७१७</h1>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center flex flex-col gap-20 my-16 lg:w-4/5">
          <h1 className="text-center  font-bold text-4xl">कर्मचारीका</h1>
          <div className="flex flex-wrap gap-5 justify-center ">
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img src="/female.png" className="h-[300px] w-[300px] mx-auto" />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री बिष्णु माया आचार्य</h1>
                <h1 className="">वडा सचिव</h1>
                <h1 className="">९८४६५७०५२०</h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img src="/female.png" className="h-[300px] w-[300px] mx-auto" />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री स्मिता श्रेष्ठ</h1>
                <h1 className="">इन्जिनियर</h1>
                <h1 className="">९८४६५७२५९२</h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto ">
              <img src="/female.png" className="h-[300px] w-[300px] mx-auto" />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री खगेश्वरी पौडेल</h1>
                <h1 className="">वरिष्ठ सहायक</h1>
                <h1 className="">९८४८०५५८५२</h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img src="/male.png" className="h-[300px] w-[300px] mx-auto" />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री आशिष सापकोटा</h1>
                <h1 className="">सब इन्जिनियर</h1>
                <h1 className="">९८४५१७९०९९</h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img src="/female.png" className="h-[300px] w-[300px] mx-auto" />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री अन्जना कंडेल</h1>
                <h1 className="">कम्प्युटर अपरेटर</h1>
                <h1 className="">९८४५२०४६०६</h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img src="/female.png" className="h-[300px] w-[300px] mx-auto" />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री शितल तमाङ</h1>
                <h1 className=""> सहायक कम्प्युटर अपरेटर</h1>
                <h1 className="">९८१६२७७०९८</h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img src="/male.png" className="h-[300px] w-[300px] mx-auto" />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री यकेन्द्र पन्त</h1>
                <h1 className="">अमिन</h1>
                <h1 className="">९८६६८०३९९२</h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img src="/male.png" className="h-[300px] w-[300px] mx-auto" />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री कृष्ण बहादुर कुमाल</h1>
                <h1 className="">कार्यालय सहयोगी </h1>
                <h1 className="">९८४५११२०४६</h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img src="/female.png" className="h-[300px] w-[300px] mx-auto" />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री मञ्जु श्रेष्ठ</h1>
                <h1 className="">कार्यालय सहयोगी </h1>
                <h1 className=""></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
