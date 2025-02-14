import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router";

export const Intro = () => {
  const navigate = useNavigate();
  const images = [
    {
      src: "/Images/Lekhraj Pant.jpg",
      alt: "Hero Image 1",
      name: "लेख राज पन्त",
      post: "अध्यक्ष",
      number: "९८५५०५६४३८",
    },

    {
      src: "/Images/Bisnu maya aacharya.jpg",
      alt: "Hero Image 4",
      name: " श्री बिष्णु माया आचार्य",
      post: "वडा सचिव",
      number: "९८४६५७०५२०",
    },

    {
      src: "/Images/bir bahadur syantan.jpg",
      alt: "Hero Image 4",
      name: "	बिर बहादुर स्याङतान",
      post: "सदस्य",
      number: "९८४५०८६०९८",
    },
    {
      src: "/Images/sanjay kumar thapa.jpg",
      alt: "Hero Image 4",
      name: "संजय कुमार थापा",
      post: "सदस्य",
      number: "९८५५०५४७१७",
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
      <div className="bg-white py-20 md:py-0">
        <div className=" flex justify-center mx-auto lg:w-3/4 w-11/12 md:my-14 ">
          <div className="flex flex-wrap justify-center  gap-10">
            <div className="flex flex-col gap-5 md:w-2/5 xl:w-1/2">
              <div className="font-bold text-4xl">संक्षिप्त परिचय</div>
              <div className="text-justify text-gray-500 font-normal font-poppin text-[16px] leading-8">
                पवित्र नारायणी नदी किनार तथा प्रसिद्ध धार्मिकस्थल देवघाटधामको
                काखमा अवस्थित भरतपुर महानगरपालिका ऐतिहासिक, सामाजिक, आर्थिक,
                राजनीतिक, धार्मिक तथा सांस्कृतिक आदि रूपले मुलुककै अग्रणी नगरीको
                रूपमा आफ्नो पहिचान बनाएको छ । वि.सं. २०३५ सालमा तत्कालीन भरतपुर
                गाउँ पञ्चायत र नारायणगढ गाउँ पञ्चायतलाई मिलाई भरतपुर नगर
                पञ्चायतको रूपमा रही २०४८ साल देखि भरतपुर नगरपालिकाको रूपमा
                संचालित भएकोमा नेपाल सरकार मन्त्रिपरिषदको मिति २०७१।०८।१६ को
                निर्णयले यस भरतपुर नगरपालिकालाई आसपासका पाँच गा.बि.स. मगंलपुर
                ,फुलबारी , गीतानगर , शिवनगर र पटिहानी समावेश गरि भरतपुर उप–
                महानगरपालिकामा स्तरोन्नती गरिएको थियो . यसै गरि नेपाल सरकार
                मन्त्रिपरिषदको मिति २०७३ ।११ ।२७ को निर्णयले यस भरतपुर उप
                -महानगरपालिका मा नारायणी नगरपालिका , चित्रबन नगरपालिका र कविलास
                गा.बि .स समेत थप गरि भरतपुर महानगरपालिकामा स्तरोन्नती भएको छ ।
              </div>
              <div className="flex justify-start">
                <button
                  className="border-2 border-[#245fb9] bg-[#245fb9] text-white hover:bg-white hover:text-[#245fb9]  p-3 font-medium"
                  onClick={() => navigate("/aboutus")}
                >
                  थप पढ्नुहोस्
                </button>
              </div>
            </div>
            <div className="slider-containers  md:w-[380px] w-[300px]">
              <Slider {...settings}>
                {images.map((image, index) => (
                  <>
                    <div key={index} className=" relative ">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-[450px] w-full object-cover"
                      />

                      <div className=" z-10 text-center space-y-1 absolute bottom-1 right-0 rounded-l bg-white p-3 w-3/4 ">
                        <h1 className="font-semibold">श्री {image.name}</h1>
                        <h1 className="font-normal text-slate-500 text-xs">
                          {image.post}
                        </h1>
                        <h1 className="font-normal text-slate-500 text-xs">
                          {image.number}
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
