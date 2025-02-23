import { useEffect } from "react";

export const ToleIntro = () => {
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <div className="w-full bg-gray-200  font-poppin">
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
                src="/Images/Lekhraj Pant.jpg"
                className="h-[400px] w-[350px] mx-auto"
              />
              <div className="w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री लेख राज पन्त</h1>
                <h1 className="">अध्यक्ष</h1>
                <h1 className="">९८५५०५६४३८</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full text-xs text-center sm:text-lg gap-y-3 justify-center flex-wrap mx-auto my-10 ">
          <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[300px] mx-auto">
            <img
              src="/Images/jamuna dhungana.jpg"
              className="h-[300px] w-[300px] mx-auto "
            />
            <div className="w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
              <h1 className="font-bold">श्री&nbsp;जमुना&nbsp;ढुंगाना </h1>
              <h1 className="">महिला&nbsp;सदस्य</h1>
              <h1 className="">९८४९०४६२६१</h1>
            </div>
          </div>
          <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[300px] mx-auto">
            <img
              src="/Images/mira nepali.jpg"
              className="h-[300px] w-[300px] mx-auto"
            />
            <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
              <h1 className="font-bold">श्री&nbsp;मिरा&nbsp;नेपाली </h1>
              <h1 className="">द.&nbsp;महिला&nbsp;सदस्य</h1>
              <h1 className="">९७४८४२९८९०</h1>
            </div>
          </div>
          <div className="w-11/12 lg:w-1/4 md:w-1/3  flex flex-col max-w-[350px] mx-auto">
            <img
              src="/Images/bir bahadur syantan.jpg"
              className="h-[300px] w-[300px] mx-auto"
            />
            <div className="w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
              <h1 className="font-bold">
                श्री&nbsp;बिर&nbsp;बहादुर&nbsp;स्याङतान
              </h1>
              <h1 className="">सदस्य</h1>
              <h1 className="">९८४५०८६०९८</h1>
            </div>
          </div>
          <div className="w-11/12  lg:w-1/4 md:w-1/3  flex flex-col max-w-[350px] mx-auto ">
            <img
              src="/Images/sanjay kumar thapa.jpg"
              className="h-[300px] w-[300px] mx-auto"
            />
            <div className="w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
              <h1 className="font-bold">
                श्री&nbsp;संजय&nbsp;कुमार&nbsp;थापा{" "}
              </h1>
              <h1 className="">सदस्य</h1>
              <h1 className="">९८५५०५४७१७</h1>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center flex bg-zinc-100 flex-col gap-20 py-20 ">
          <h1 className="text-center font-bold text-4xl">कर्मचारी</h1>
          <div className="flex flex-col w-full  flex-wrap justify-center mx-auto lg:w-3/4 ">
            <div className="flex justify-center gap-7 flex-col text-center w-full lg:w-3/4 mx-auto">
              <div className="w-full md:w-1/2 flex flex-col max-w-[350px] mx-auto">
                <img
                  src="/Images/Bisnu maya aacharya.jpg"
                  className="h-[400px] w-[350px] mx-auto"
                />
                <div className="w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                  <h1 className="font-bold">श्री बिष्णु माया आचार्य</h1>
                  <h1 className="">वडा सचिव</h1>
                  <h1 className="">९८४६५७०५२०</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-y-5 justify-center ">
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
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto ">
              <img
                src="/Images/Shisir Subedi.jpg"
                className="h-[300px] w-[300px] mx-auto"
              />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री सिशिर सुवेदी</h1>
                <h1 className="">इन्जिनियर</h1>
                <h1 className=""></h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img
                src="/Images/Aashish Sapkota.jpeg"
                className="h-[300px] w-[300px] mx-auto"
              />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री आशिष सापकोटा</h1>
                <h1 className="">सब इन्जिनियर</h1>
                <h1 className="">९८४५१७९०९९</h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img
                src="/Images/Anjana Kandel.jpg"
                className="h-[300px] w-[300px] mx-auto"
              />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री अन्जना कंडेल</h1>
                <h1 className="">कम्प्युटर अपरेटर</h1>
                <h1 className="">९८४५२०४६०६</h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img
                src="/Images/Pallavi Neupane.jpg"
                className="h-[300px] w-[300px] mx-auto"
              />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री पल्लवी न्यौपाने</h1>
                <h1 className="">कम्प्युटर अपरेटर</h1>
                <h1 className="">९८४५२०४६०६</h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img
                src="/Images/Sital Tamang.jpg"
                className="h-[300px] w-[300px] mx-auto"
              />
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
              <img
                src="/Images/Krishna Bahadur Kumal.jpeg"
                className="h-[300px] w-[300px] mx-auto"
              />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री कृष्ण बहादुर कुमाल</h1>
                <h1 className="">कार्यालय सहयोगी </h1>
                <h1 className="">९८४५११२०४६</h1>
              </div>
            </div>

            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img
                src="/Images/Man Bahadur Darai.jpg"
                className="h-[300px] w-[300px] mx-auto"
              />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री मान बहादुर दराई</h1>
                <h1 className="">कार्यालय सहयोगी </h1>
                <h1 className=""></h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img
                src="/Images/manju Shrestha Bhujel.jpg"
                className="h-[300px] w-[300px] mx-auto"
              />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री मञ्जु श्रेष्ठ</h1>
                <h1 className="">कार्यालय सहयोगी </h1>
                <h1 className=""></h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img
                src="/Images/Kausila Aryal.jpg"
                className="h-[300px] w-[300px] mx-auto"
              />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री कौसिला अर्याल</h1>
                <h1 className="">कार्यालय सहयोगी </h1>
                <h1 className=""></h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img
                src="/Images/Ajaya Syantan.jpg"
                className="h-[300px] w-[300px] mx-auto"
              />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री अजय स्यन्तान</h1>
                <h1 className="">बिजुली मिस्त्री </h1>
                <h1 className=""></h1>
              </div>
            </div>
            <div className="w-11/12 lg:w-1/4 md:w-1/3 flex-col flex max-w-[350px] mx-auto">
              <img
                src="/Images/Dhanapati Subedi.jpg"
                className="h-[300px] w-[300px] mx-auto"
              />
              <div className=" w-3/4 max-w-[250px] -mt-10 p-3 bg-white top-40 shadow-md  justify-center items-center mx-auto left-10  ">
                <h1 className="font-bold">श्री धनपति सुवेदी</h1>
                <h1 className="">बिजुली मिस्त्री </h1>
                <h1 className=""></h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
