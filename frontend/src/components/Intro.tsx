import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

export const Intro = () => {
  const navigate = useNavigate();
  const images = [
    {
      src: "/lekhrajpanta.jpg",
      alt: "Hero Image 1",
      name: "लेख राज पन्त",
      post: "अध्यक्ष",
    },
    {
      src: "/female.png",
      alt: "Hero Image 2",
      name: "जमुना ढुंगाना ",
      post: "महिला सदस्य",
    },
    {
      src: "/female.png",
      alt: "Hero Image 3",
      name: "	मिरा नेपाली ",
      post: "द. महिला सदस्य",
    },
    {
      src: "/male.png",
      alt: "Hero Image 4",
      name: "	बिर बहादुर स्याङतान",
      post: "सदस्य",
    },
    {
      src: "/male.png",
      alt: "Hero Image 4",
      name: "संजय कुमार थापा",
      post: "सदस्य",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <div className="bg-white py-10 md:py-0">
        <div className=" flex justify-center mx-auto lg:w-3/4 w-11/12 md:my-14 ">
          <div className="flex flex-wrap justify-center  gap-10">
            <div className="flex flex-col gap-5 md:w-1/2">
              <div className="font-bold text-4xl">संक्षिप्त परिचय</div>
              <div className="text-justify text-gray-500 font-normal font-poppin text-[16px] leading-8">
                खोकना पूर्व गाउँ विकास समिति (VDC) हो जुन छिमेकी गाविसा बुंगमती,
                छाम्पी, दुकुछाप र सानिबुसँग गाभिएर नेपालको बागमती अञ्चलको
                ललितपुर जिल्लाको कार्यविनायक नगरपालिका गठन गरिएको छ। 1991 को
                नेपाली जनगणना को समयमा, खोकना 4258 को जनसंख्या 699 व्यक्तिगत
                घरहरु मा बसोबास थियो। 2011 को नेपाली जनगणना अनुसार, 1056
                व्यक्तिगत घरहरु मा बसोबास गर्ने 4927 को जनसंख्या थियो।. खोकना,
                एउटा परम्परागत र सानो नेवारी गाउँ, जुन काठमाण्डौबाट करिब ८
                किलोमिटर दक्षिणमा (पाटनको बाहिरी भागमा) पर्छ। खोकना
                प्राचीनकालदेखि नै तोरीको तेल उत्पादनका लागि प्रख्यात छ । राणा
                प्रधानमन्त्री चन्द्र शमशेरको पालामा सन् १९११ मा विद्युतले जलाउने
                नेपालको पहिलो सहर पनि थियो ।
              </div>
              <div className="flex justify-start">
                <button
                  className="hover:border-1 bg-[#245fb9] text-white hover:bg-white hover:text-[#245fb9]  p-3 font-medium"
                  onClick={() => navigate("/aboutus")}
                >
                  थप पढ्नुहोस्
                </button>
              </div>
            </div>
            <div className="slider-containers  w-[300px]">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <>
                    <div key={index} className=" relative ">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-[300px] w-full object-cover"
                      />

                      <div className=" z-10 text-center absolute bottom-1 left-7 rounded-lg bg-white p-3 w-3/4 ">
                        <h1 className="font-semibold">श्री {image.name}</h1>
                        <h1 className="font-normal text-slate-500 text-xs">
                          {image.post}
                        </h1>
                      </div>
                    </div>
                  </>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
