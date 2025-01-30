import { useNavigate } from "react-router";

export const WorkDone = () => {
  const navigate = useNavigate();
  const images = [
    {
      src: "/hero.jpg",
      alt: "Hero Image 1",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/1.jpg",
      alt: "Hero Image 2",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/6.jpg",
      alt: "Hero Image 3",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/4.jpg",
      alt: "Hero Image 4",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
    {
      src: "/6.jpg",
      alt: "Hero Image 4",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },

    {
      src: "/7.jpg",
      alt: "Hero Image 4",
      key: "1",
      year: "२०८१",
      title: "+2 उतिर्ण विद्यार्थीहरुलाई बधाई तथा शुभकामना कार्यक्रम",
    },
  ];

  return (
    <>
      <div className="bg-[#245fb9] w-full md:mt-10 h-[300px]">
        <div className=" md:w-3/4 mt-3 w-full mx-auto p-5 " id="works">
          <div className="flex justify-center w-3/4 items-center mx-auto ">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-white">हाम्रो काम</h1>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:w-10/12 w-full mx-auto -mt-52 ">
        <div className="flex justify-center flex-wrap gap-7 p-2 ">
          {images.map((image, index) => (
            <div
              key={index}
              className=" relative shadow-md bg-white md:w-1/2 lg:w-1/4 w-full sm:w-3/4 cursor-pointer"
              onClick={() => navigate(`/workdetail/${image.key}`)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className=" mx-auto h-auto min-h-[400px] object-cover"
              />

              <div className=" absolute flex bottom-2 right- w-3/4 text-center justify-between items-center font-semibold bg-white  p-5 py-2 ">
                <div className="text-start w-full space-y-2">
                  <h1 className="font-semibold">
                    ७६ बर्ष उमेर पुगेका जेष्ठ नागरिकहरुलाई सम्मान कार्यक्रम
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
