import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Publication = () => {
  return (
    <>
      <div className="bg-[url('/hill.jpg')] bg-cover bg-center bg-fixed bg-fixed-ios h-[500px]  opacity-10 z-0"></div>
      <div className=" flex flex-wrap justify-between z-10 bg-white -mt-40  w-full">
        <div className="w-full md:w-2/3 p-5">
          <div className="flex  flex-col md:w-3/4 w-full mx-auto">
            <h1 className="text-gray-500">हाम्रो&nbsp;बारेमा</h1>
            <h1 className="text-6xl font-bold">प्रकाशन</h1>
            <div className="p-5 mt-5 bg-blue-500 rounded-lg w-fit flex gap-3 items-center">
              <div className="p-5 bg-blue-500 font-bold text-center border rounded-full w-fit text-white">
                आश्विन <br></br>१०
              </div>
              <div className="flex flex-col">
                <h1 className="font-bold">
                  वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)
                </h1>
                <h1 className="cursor-pointer flex  items-center gap-3 text-gray-300">
                  डाउनलोड गर्नुहोस् <FontAwesomeIcon icon={faArrowRight} />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto md:w-1/3">
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
