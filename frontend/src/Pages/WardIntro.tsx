import { useEffect, useState } from "react";

export const WardIntro = () => {
  const offsetTop = 0;
  useEffect(() => {
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }, []);
  const [table, setTable] = useState("table1");

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
            वडाको&nbsp;विवरण
          </h1>
        </div>
        <div className="flex flex-wrap justify-center lg:p-10 ">
          <div className="lg:w-1/2 w-full">
            <img
              src="/bharatpur.jpg"
              alt="logo"
              className="flex mx-auto p-10  xxl:h-full h-[500px] object-cover"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col w-full">
            <div className="p-2 xl:p-5 mt-5 w-full flex flex-col gap-5">
              <h1 className="text-4xl px-4 font-bold">
                भरतपुर महानगरपालिका वडा नं. १२ को विवरण
              </h1>
              <div className="text-gray-600 px-4 leading-9 w-full   text-justify">
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
            </div>
          </div>
          <div className="flex flex-col p-2 overflow-auto text-black gap-4 mt-10 w-full ">
            <div className="flex flex-col w-full  ">
              <h1 className="font-bold mx-auto xl:mx-0  text-2xl">
                महत्वपूर्ण&nbsp;स्थानहरुः
              </h1>
              <div className="w-full">
                <div className={`flex flex-wrap py-10 `}>
                  <button
                    className={`md:px-10 p-2 sm:w-1/2 xl:w-1/4  border md:text-lg text-sm ${
                      table === "table1" ? "bg-sky-500 text-white" : "bg-white"
                    }
                      `}
                    onClick={() => setTable("table1")}
                  >
                    विद्यालयहरु
                  </button>
                  <button
                    className={`md:px-10 p-2 md:min-w-[200px]  sm:w-1/2 xl:w-1/4 border  md:text-lg text-sm  ${
                      table === "table2" ? "bg-sky-500 text-white" : "bg-white"
                    }
                      `}
                    onClick={() => setTable("table2")}
                  >
                    अस्पतालहरूको&nbsp;नाम
                  </button>
                  <button
                    className={`md:px-10 p-2 md:min-w-[200px]  sm:w-1/2 xl:w-1/4 border md:text-lg text-sm  ${
                      table === "table3" ? "bg-sky-500 text-white" : "bg-white"
                    }
                      `}
                    onClick={() => setTable("table3")}
                  >
                    पर्यटकीय&nbsp;स्थलहरु
                  </button>
                  <button
                    className={`md:px-10  p-2 md:min-w-[200px]   sm:w-1/2 xl:w-1/4 border md:text-lg text-sm  ${
                      table === "table4" ? "bg-sky-500 text-white" : "bg-white"
                    }
                      `}
                    onClick={() => setTable("table4")}
                  >
                    प्रतिनिधिको&nbsp;सम्पर्क&nbsp;नं
                  </button>
                </div>
                {table === "table1" && (
                  <table className="min-w-full text-xs  border ">
                    <thead className="font-normal text-start border">
                      <tr className="border text-start">
                        <th className="font-normal text-start p-4">क्र.स</th>
                        <th className="font-normal text-start p-4">
                          विद्यालयको&nbsp;नाम
                        </th>
                        <th className="font-normal text-start p-4">
                          प्रधानाध्यापकको नाम
                        </th>
                        <th className="font-normal text-start p-4">
                          फोन/मोबाइल&nbsp;नं
                        </th>
                        <th className="font-normal text-start p-4">
                          नगरपालिकामा&nbsp;दर्ता&nbsp;भएको/नभएको&nbsp;कैफियत
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-start">
                        <td className="font-normal p-4">१</td>
                        <td className="font-normal p-4">
                          श्री&nbsp;जनजागृति&nbsp;माध्यमिक&nbsp;विद्यालय
                        </td>
                        <td className="font-normal p-4">श्री रामबहादुर थापा</td>
                        <td className="font-normal p-4">०५६-५२७००१</td>
                        <td className="font-normal p-4">निजी</td>
                      </tr>
                      <tr className="text-start">
                        <td className="font-normal p-4">२</td>
                        <td className="font-normal p-4">
                          श्री&nbsp;जनप्रकाश&nbsp;आधारभूत&nbsp;विद्यालय
                        </td>
                        <td className="font-normal p-4">
                          श्रीमती सिता अधिकारी
                        </td>
                        <td className="font-normal  p-4">०५६-५२७००२</td>
                        <td className="font-normal  p-4">निजी</td>
                      </tr>
                      <tr className="text-start">
                        <td className="font-normal  p-4">३</td>
                        <td className="font-normal  p-4">
                          जनकल्याण&nbsp;पराथमिक&nbsp;विद्यालय
                        </td>
                        <td className="font-normal  p-4">
                          श्री&nbsp;गोविन्द प&nbsp;रसाद&nbsp;पाण्डे
                        </td>
                        <td className="font-normal  p-4">०५६-५२७००२</td>
                        <td className="font-normal  p-4">निजी</td>
                      </tr>
                    </tbody>
                  </table>
                  // </div>
                )}

                {table === "table2" && (
                  <table className="min-w-full text-xs border">
                    <thead className="font-normal border">
                      <tr className="border text-start">
                        <th className="font-normal text-start p-4">क्र.स</th>
                        <th className="font-normal text-start p-4">
                          अस्पतालहरूको&nbsp;नाम
                        </th>
                        <th className="font-normal text-start p-4">
                          प्रतिनिधि
                        </th>
                        <th className="font-normal text-start p-4">सम्पर्क</th>
                        <th className="font-normal text-start p-4">कैफियत</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-start">
                        <td className="font-normal  p-4">१</td>
                        <td className="font-normal  p-4">
                          चितवन&nbsp;मेडिकल&nbsp;कलेज&nbsp;शिक्षण&nbsp;अस्पताल
                        </td>
                        <td className="font-normal  p-4">
                          डा.&nbsp;दयाराम&nbsp;लम्साल
                        </td>
                        <td className="font-normal  p-4">०५६-५३०७९५</td>
                        <td className="font-normal  p-4">निजी</td>
                      </tr>
                      <tr className="text-start">
                        <td className="font-normal  p-4">२</td>
                        <td className="font-normal  p-4">
                          भरतपुर&nbsp;अस्पताल
                        </td>
                        <td className="font-normal  p-4">डा. भोजराज अधिकारी</td>
                        <td className="font-normal  p-4">०५६-५२५००१</td>
                        <td className="font-normal  p-4">निजी</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                {table === "table3" && (
                  <table className="w-full  text-xs border">
                    <thead className="font-normal border">
                      <tr className="border">
                        <th className="font-normal text-start p-4">क्र.स</th>
                        <th className="font-normal text-start  p-4">नाम</th>
                        <th className="font-normal text-start  p-4">विशेषता</th>
                        <th className="font-normal text-start p-4">सम्पर्क</th>
                        <th className="font-normal text-start p-4">विवरण</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-start">
                        <td className="font-normal  p-4">१</td>
                        <td className="font-normal  p-4">नारायणी नदी किनार</td>
                        <td className="font-normal  p-4">
                          सूर्यास्तको मनोरम दृश्य, माछा मार्ने गतिविधि
                        </td>
                        <td className="font-normal  p-4">
                          स्थानीय पर्यटन कार्यालय, भरतपुर
                        </td>
                        <td className="font-normal  p-4">
                          यहाँ डुङ्गा सयरको सुविधा पनि उपलब्ध छ
                        </td>
                      </tr>
                      <tr className="text-start">
                        <td className="font-normal  p-4">२</td>
                        <td className="font-normal  p-4">गणेशस्थान मन्दिर</td>
                        <td className="font-normal  p-4">
                          बर्सेनि हुने विशेष पूजा तथा मेला
                        </td>
                        <td className="font-normal  p-4">
                          मन्दिर व्यवस्थापन समिति
                        </td>
                        <td className="font-normal  p-4">
                          यो प्राचीन मन्दिर भगवान गणेशलाई समर्पित छ{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                )}
                {table === "table4" && (
                  <table className="w-full   text-xs border">
                    <thead className="font-normal border">
                      <tr className="border">
                        <th className="font-normal text-start  p-4">क्र.स</th>
                        <th className="font-normal text-start p-4">नाम</th>
                        <th className="font-normal text-start  p-4">पद</th>
                        <th className="font-normal text-start  p-4">
                          सम्पर्क १
                        </th>
                        <th className="font-normal text-start   p-4">
                          सम्पर्क २
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-start">
                        <td className="font-normal  p-4">१</td>
                        <td className="font-normal  p-4">लेख राज पन्त</td>
                        <td className="font-normal  p-4">अध्यक्ष</td>
                        <td className="font-normal  p-4">९८५५०५६४३८</td>
                        <td className="font-normal  p-4">९८५५०९२३१२</td>
                      </tr>
                      <tr className="text-start">
                        <td className="font-normal  p-4">२</td>
                        <td className="font-normal  p-4">जमुना ढुंगाना </td>
                        <td className="font-normal  p-4">महिला सदस्य</td>
                        <td className="font-normal  p-4">९८४९०४६२६१</td>
                        <td className="font-normal  p-4"></td>
                      </tr>
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
