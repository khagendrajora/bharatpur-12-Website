import { useEffect } from "react";

export const ComplainPage = () => {
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
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
            उजुरी
          </h1>
        </div>

        <div className="flex flex-row md:w-11/12  flex-wrap justify-center mx-auto  py-10 p-4 ">
          <div className="p-2 xl:p-5 lg:w-1/2  w-full flex flex-col gap-5">
            <p className="text-gray-600 leading-10 text-justify font-normal"></p>
          </div>
          {/* <div
            style={{
              overflow: "hidden",
              margin: "0 50px",
              textAlign: "center",
            }}
          >
            <iframe
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61556758524668&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
              // width="340"
              height="500"
              style={{ border: "none", overflow: "hidden" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div> */}
        </div>
      </div>
    </>
  );
};
