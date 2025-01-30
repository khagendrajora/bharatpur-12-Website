import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IData } from "./NewsDetailPage";

export const PublicationDetailPage = () => {
  const params = useParams();
  const key = params.key;
  const [data, setData] = useState<IData | null>(null);
  const images = [
    {
      src: "/hero.jpg",
      alt: "Hero Image 1",
      month: "आश्विन",
      day: "१०",
      year: "२०८१",
      key: "1",
      title: "वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)",
    },
    {
      src: "/hero.jpg",
      alt: "Hero Image 2",
      month: "आश्विन",
      day: "१०",
      year: "२०६२",
      key: "2",
      title: "वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)",
    },
    {
      src: "/hero.jpg",
      alt: "Hero Image 3",
      month: "भाद्र",
      day: "१०",
      year: "२०७१",
      key: "3",
      title: "वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)",
    },
    {
      src: "/hero.jpg",
      alt: "Hero Image 3",
      month: "भाद्र",
      day: "१०",
      year: "२०७१",
      key: "4",
      title: "वार्षिक प्रगति समीक्षाको प्रतिवेदन (आ.व. ०७२।७३)",
    },
  ];

  useEffect(() => {
    const filterData = images.filter((image) => image.key === key);
    if (filterData.length > 0) {
      setData(filterData[0]);
    } else {
      setData(null);
    }
  }, []);
  return (
    <>
      <div className="w-full flex flex-col mb-[80px] md:gap-20 gap-10">
        {data ? (
          <>
            <div className="w-full relative">
              <img
                src="/hero.jpg"
                alt="hero"
                className="w-full h-[400px]  object-cover"
              />
              <h1 className="absolute inset-0 font-bold justify-center items-center flex text-white text-center  text-shadow text-xl md:text-3xl ">
                {data.title}
              </h1>
            </div>
            <div className="flex flex-wrap justify-center">
              <div className="flex flex-col gap-6 md:w-1/2 p-2">
                <div className="flex gap-6 ">
                  <div className="bg-red-600 p-3 w-20 text-center flex flex-col gap-1  text-white font-bold">
                    <span>{data.day}</span>
                    {/* <br></br> */}
                    <span> {data.month}</span>

                    {/* <br></br> */}
                    <span> {data.year}</span>
                  </div>
                  <div className="font-bold flex items-center text-2xl">
                    {data.title}
                  </div>
                </div>
                <div>
                  <img src={data.src} />
                </div>
                <div className="text-justify text-gray-500 font-normal leading-8">
                  खोकना पूर्व गाउँ विकास समिति (VDC) हो जुन छिमेकी गाविसा
                  बुंगमती, छाम्पी, दुकुछाप र सानिबुसँग गाभिएर नेपालको बागमती
                  अञ्चलको ललितपुर जिल्लाको कार्यविनायक नगरपालिका गठन गरिएको छ।
                  1991 को नेपाली जनगणना को समयमा, खोकना 4258 को जनसंख्या 699
                  व्यक्तिगत घरहरु मा बसोबास थियो। 2011 को नेपाली जनगणना अनुसार,
                  1056 व्यक्तिगत घरहरु मा बसोबास गर्ने 4927 को जनसंख्या थियो।.
                  खोकना, एउटा परम्परागत र सानो नेवारी गाउँ, जुन काठमाण्डौबाट
                  करिब ८ किलोमिटर दक्षिणमा (पाटनको बाहिरी भागमा) पर्छ। खोकना
                  प्राचीनकालदेखि नै तोरीको तेल उत्पादनका लागि प्रख्यात छ । राणा
                  प्रधानमन्त्री चन्द्र शमशेरको पालामा सन् १९११ मा विद्युतले
                  जलाउने नेपालको पहिलो सहर पनि थियो ।
                </div>
                <div>
                  <iframe
                    src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fbharatpur.netlify.app%2Fnewsdetail&layout&size&width=77&height=20&appId"
                    width="77"
                    height="20"
                    style={{ border: "none", overflow: "hidden" }}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61556758524668&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="340"
                  height="500"
                  style={{ border: "none", overflow: "hidden" }}
                  className="p-5 text-center overflow-hidden"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
