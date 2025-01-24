import { useState } from "react";

export const WardIntro = () => {
  const [table, setTable] = useState("table1");

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
            वडाको&nbsp;विवरण
          </h1>
        </div>
        <div className="flex flex-col md:w-11/12 mx-auto  ">
          <div className="flex  flex-wrap justify-center mx-auto  mt-20">
            <div className="">
              <img
                src="/bharatpur.jpg"
                alt="logo"
                className="flex mx-auto lg:w-[800px] p-3  2xl:h-[500px] object-cover"
              />
            </div>
            <div className="p-2 xl:p-5 lg:w-1/2 mt-5 w-full flex flex-col gap-5">
              <h1 className="text-4xl px-4 font-bold">वडा नं.१२ को विवरण</h1>
              <div className="text-gray-600 px-4 leading-9 w-full   text-justify">
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
            </div>
          </div>
          <div className="flex flex-col p-2  overflow-auto  text-black gap-4 mt-20 mb-10 md:w-full xl:w-1/2">
            <div className="flex flex-col  mx-auto gap-10">
              <h1 className="font-bold mx-auto xl:mx-0 w-fit text-2xl">
                महत्वपूर्ण&nbsp;स्थानहरुः
              </h1>
              <div>
                <div className={`flex flex-wrap`}>
                  <button
                    className={`px-10 p-1  sm:w-1/2 xl:w-1/4  border text-lg ${
                      table === "table1" ? "bg-sky-500 text-white" : "bg-white"
                    }
            `}
                    onClick={() => setTable("table1")}
                  >
                    विद्यालयहरु
                  </button>
                  <button
                    className={`px-10 p-1 min-w-[200px]  sm:w-1/2 xl:w-1/4 border text-lg  ${
                      table === "table2" ? "bg-sky-500 text-white" : "bg-white"
                    }
            `}
                    onClick={() => setTable("table2")}
                  >
                    अस्पतालहरूको&nbsp;नाम
                  </button>
                  <button
                    className={`px-10 p-1 min-w-[200px]  sm:w-1/2 xl:w-1/4 border text-lg  ${
                      table === "table3" ? "bg-sky-500 text-white" : "bg-white"
                    }
            `}
                    onClick={() => setTable("table3")}
                  >
                    पर्यटकीय&nbsp;स्थलहरु
                  </button>
                  <button
                    className={`px-10 p-1 min-w-[200px]   sm:w-1/2 xl:w-1/4 border text-lg  ${
                      table === "table4" ? "bg-sky-500 text-white" : "bg-white"
                    }
            `}
                    onClick={() => setTable("table4")}
                  >
                    प्रतिनिधिको&nbsp;सम्पर्क&nbsp;नं
                  </button>
                </div>

                {table === "table1" && (
                  <>
                    <table className="min-w-full text-xs  border">
                      <thead className="font-normal text-start border">
                        <tr className="border text-start">
                          <th className="font-normal text-start p-3">क्र.स</th>
                          <th className="font-normal text-start p-3">
                            विद्यालयको&nbsp;नाम
                          </th>
                          <th className="font-normal text-start p-3">
                            प्रधानाध्यापकको नाम
                          </th>
                          <th className="font-normal text-start p-3">
                            फोन/मोबाइल&nbsp;नं
                          </th>
                          <th className="font-normal text-start p-3">
                            नगरपालिकामा&nbsp;दर्ता&nbsp;भएको/नभएको&nbsp;कैफियत
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="text-start">
                          <td className="font-normal p-3">१</td>
                          <td className="font-normal p-3">
                            श्री&nbsp;जनजागृति&nbsp;माध्यमिक&nbsp;विद्यालय
                          </td>
                          <td className="font-normal p-3">
                            श्री रामबहादुर थापा
                          </td>
                          <td className="font-normal p-3">०५६-५२७००१</td>
                          <td className="font-normal p-3">निजी</td>
                        </tr>
                        <tr className="text-start">
                          <td className="font-normal p-3">२</td>
                          <td className="font-normal p-3">
                            श्री&nbsp;जनप्रकाश&nbsp;आधारभूत&nbsp;विद्यालय
                          </td>
                          <td className="font-normal p-3">
                            श्रीमती सिता अधिकारी
                          </td>
                          <td className="font-normal  p-3">०५६-५२७००२</td>
                          <td className="font-normal  p-3">निजी</td>
                        </tr>
                        <tr className="text-start">
                          <td className="font-normal  p-3">३</td>
                          <td className="font-normal  p-3">
                            जनकल्याण&nbsp;पराथमिक&nbsp;विद्यालय
                          </td>
                          <td className="font-normal  p-3">
                            श्री&nbsp;गोविन्द प&nbsp;रसाद&nbsp;पाण्डे
                          </td>
                          <td className="font-normal  p-3">०५६-५२७००२</td>
                          <td className="font-normal  p-3">निजी</td>
                        </tr>
                      </tbody>
                    </table>
                  </>
                )}

                {table === "table2" && (
                  <table className="min-w-full text-xs border">
                    <thead className="font-normal border">
                      <tr className="border text-start">
                        <th className="font-normal text-start p-3">क्र.स</th>
                        <th className="font-normal text-start p-3">
                          अस्पतालहरूको&nbsp;नाम
                        </th>
                        <th className="font-normal text-start p-3">
                          प्रतिनिधि
                        </th>
                        <th className="font-normal text-start p-3">सम्पर्क</th>
                        <th className="font-normal text-start p-3">कैफियत</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-start">
                        <td className="font-normal  p-3">१</td>
                        <td className="font-normal  p-3">
                          चितवन&nbsp;मेडिकल&nbsp;कलेज&nbsp;शिक्षण&nbsp;अस्पताल
                        </td>
                        <td className="font-normal  p-3">
                          डा.&nbsp;दयाराम&nbsp;लम्साल
                        </td>
                        <td className="font-normal  p-3">०५६-५३०७९५</td>
                        <td className="font-normal  p-3">निजी</td>
                      </tr>
                      <tr className="text-start">
                        <td className="font-normal  p-3">२</td>
                        <td className="font-normal  p-3">
                          भरतपुर&nbsp;अस्पताल
                        </td>
                        <td className="font-normal  p-3">डा. भोजराज अधिकारी</td>
                        <td className="font-normal  p-3">०५६-५२५००१</td>
                        <td className="font-normal  p-3">निजी</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                {table === "table3" && (
                  <table className="w-full  text-xs border">
                    <thead className="font-normal border">
                      <tr className="border">
                        <th className="font-normal text-start p-3">क्र.स</th>
                        <th className="font-normal text-start  p-3">नाम</th>
                        <th className="font-normal text-start  p-3">विशेषता</th>
                        <th className="font-normal text-start p-3">सम्पर्क</th>
                        <th className="font-normal text-start p-3">विवरण</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-start">
                        <td className="font-normal  p-3">१</td>
                        <td className="font-normal  p-3">नारायणी नदी किनार</td>
                        <td className="font-normal  p-3">
                          सूर्यास्तको मनोरम दृश्य, माछा मार्ने गतिविधि
                        </td>
                        <td className="font-normal  p-3">
                          स्थानीय पर्यटन कार्यालय, भरतपुर
                        </td>
                        <td className="font-normal  p-3">
                          यहाँ डुङ्गा सयरको सुविधा पनि उपलब्ध छ
                        </td>
                      </tr>
                      <tr className="text-start">
                        <td className="font-normal  p-3">२</td>
                        <td className="font-normal  p-3">गणेशस्थान मन्दिर</td>
                        <td className="font-normal  p-3">
                          बर्सेनि हुने विशेष पूजा तथा मेला
                        </td>
                        <td className="font-normal  p-3">
                          मन्दिर व्यवस्थापन समिति
                        </td>
                        <td className="font-normal  p-3">
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
                        <th className="font-normal text-start  p-3">क्र.स</th>
                        <th className="font-normal text-start p-3">नाम</th>
                        <th className="font-normal text-start  p-3">पद</th>
                        <th className="font-normal text-start  p-3">
                          सम्पर्क १
                        </th>
                        <th className="font-normal text-start   p-3">
                          सम्पर्क २
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-start">
                        <td className="font-normal  p-3">१</td>
                        <td className="font-normal  p-3">लेख राज पन्त</td>
                        <td className="font-normal  p-3">अध्यक्ष</td>
                        <td className="font-normal  p-3">९८५५०५६४३८</td>
                        <td className="font-normal  p-3">९८५५०९२३१२</td>
                      </tr>
                      <tr className="text-start">
                        <td className="font-normal  p-3">२</td>
                        <td className="font-normal  p-3">जमुना ढुंगाना </td>
                        <td className="font-normal  p-3">महिला सदस्य</td>
                        <td className="font-normal  p-3">९८४९०४६२६१</td>
                        <td className="font-normal  p-3"></td>
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
