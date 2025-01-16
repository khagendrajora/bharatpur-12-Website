import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Intro = () => {
  const images = [
    { src: "/hero.jpg", alt: "Hero Image 1", heading: "नाम" },
    { src: "/hero.jpg", alt: "Hero Image 2", heading: "नाम" },
    { src: "/hero.jpg", alt: "Hero Image 3", heading: "नाम" },
    { src: "/hero.jpg", alt: "Hero Image 4", heading: "नाम" },
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
      <div className=" flex justify-center mx-auto lg:w-3/4 w-11/12 md:mt-10">
        <div className="flex flex-wrap justify-center  gap-10">
          <div className="flex flex-col gap-5 md:w-1/2">
            <div className="font-bold text-4xl">संक्षिप्त परिचय</div>
            <div className="text-justify text-gray-500 font-normal leading-8">
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
            </div>
            <div className="flex justify-start">
              <button className="border-2 hover:bg-blue-500 rounded-full p-5 font-semibold">
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
                      className="h-[300px] object-cover"
                    />

                    <div className=" z-10 text-center absolute -bottom-1 left-7 rounded-lg bg-white p-3 w-3/4 ">
                      <h1 className="font-semibold">{image.heading}</h1>
                      <h1 className="font-normal text-slate-500 text-xs">पद</h1>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};
