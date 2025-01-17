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
            समाचार
          </h1>
        </div>
        <div className="flex  flex-wrap justify-center gap-10 p-10 mx-auto md:w-10/12 ">
          <div className="flex flex-col w-full md:w-2/5 min-w-[300px] max-w-[300px] max-h-[400px] bg-slate-100 lg:w-1/3 shadow-lg gap-5 p-3 rounded-lg border">
            <img
              src="/hero.jpg"
              alt="logo"
              className="flex mx-auto   object-cover"
            />
            <p className="text-gray-600 p-1 overflow-auto leading-8 scrollbar-hidden text-justify">
              खोकना पूर्व गाउँ विकास समिति (VDC) हो जुन छिमेकी गाविसा बुंगमती,
              छाम्पी, दुकुछाप र सानिबुसँग गाभिएर नेपालको बागमती अञ्चलको ललितपुर
              जिल्लाको कार्यविनायक नगरपालिका गठन गरिएको छ। 1991 को नेपाली जनगणना
              को समयमा, खोकना 4258 को जनसंख्या 699 व्यक्तिगत घरहरु मा बसोबास
              थियो।
            </p>
            <hr />
            <button className="text-slate-400 flex flex-row gap-3 items-center">
              थप&nbsp;पढ्नुहोस् <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="flex flex-col w-full max-h-[400px] min-w-[300px] max-w-[300px] bg-slate-100 md:w-1/2 lg:w-1/3 shadow-lg gap-5 p-5 rounded-lg border">
            <img
              src="/hero.jpg"
              alt="logo"
              className="flex mx-auto   object-cover"
            />
            <p className="text-gray-600 p-1 leading-8 overflow-auto scrollbar-hidden text-justify">
              खोकना पूर्व गाउँ विकास समिति (VDC) हो जुन छिमेकी गाविसा बुंगमती,
              छाम्पी, दुकुछाप र सानिबुसँग गाभिएर नेपालको बागमती अञ्चलको ललितपुर
              जिल्लाको कार्यविनायक नगरपालिका गठन गरिएको छ। 1991 को नेपाली जनगणना
              को समयमा, खोकना 4258 को जनसंख्या 699 व्यक्तिगत घरहरु मा बसोबास
              थियो।
            </p>
            <hr />
            <button className="text-slate-400 flex flex-row gap-3 items-center">
              थप&nbsp;पढ्नुहोस् <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          <div className="flex flex-col w-full  md:w-1/2 lg:w-1/3 bg-slate-100 max-w-[300px] max-h-[400px] min-w-[300px] shadow-lg gap-5 p-5 rounded-lg border">
            <img
              src="/hero.jpg"
              alt="logo"
              className="flex mx-auto   object-cover"
            />
            <p className="text-gray-600 p-1 max:h-[300px] overflow-auto scrollbar-hidden leading-8 text-justify">
              खोकना पूर्व गाउँ विकास समिति (VDC) हो जुन छिमेकी गाविसा बुंगमती,
              छाम्पी, दुकुछाप र सानिबुसँग गाभिएर नेपालको बागमती अञ्चलको ललितपुर
              जिल्लाको कार्यविनायक नगरपालिका गठन गरिएको छ। 1991 को नेपाली जनगणना
              को समयमा, खोकना 4258 को जनसंख्या 699 व्यक्तिगत घरहरु मा बसोबास
              थियो।
            </p>
            <hr />
            <button className="text-slate-400 flex flex-row gap-3 items-center">
              थप&nbsp;पढ्नुहोस् <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
