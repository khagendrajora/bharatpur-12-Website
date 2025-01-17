import { useState } from "react";

export const WardIntro = () => {
  //   const [table1, setTable1] = useState(true);
  const [table, setTable] = useState("table1");
  //   const [table2, setTable2] = useState(false);
  //   const [table3, setTable3] = useState(false);
  //   const [table4, setTable4] = useState(false);
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

        <div className="flex  md:w-11/12 flex-wrap justify-center mx-auto  p-5 xl:p-14 ">
          <div className="">
            <img
              src="/hero.jpg"
              alt="logo"
              className="flex mx-auto w-[600px] 2xl:h-[500px] object-cover"
            />
          </div>
          <div className="text-gray-600 p-3 leading-9 w-full lg:w-1/2  text-justify">
            खोकना पूर्व गाउँ विकास समिति (VDC) हो जुन छिमेकी गाविसा बुंगमती,
            छाम्पी, दुकुछाप र सानिबुसँग गाभिएर नेपालको बागमती अञ्चलको ललितपुर
            जिल्लाको कार्यविनायक नगरपालिका गठन गरिएको छ। 1991 को नेपाली जनगणना
            को समयमा, खोकना 4258 को जनसंख्या 699 व्यक्तिगत घरहरु मा बसोबास थियो।
            2011 को नेपाली जनगणना अनुसार, 1056 व्यक्तिगत घरहरु मा बसोबास गर्ने
            4927 को जनसंख्या थियो।. खोकना, एउटा परम्परागत र सानो नेवारी गाउँ,
            जुन काठमाण्डौबाट करिब ८ किलोमिटर दक्षिणमा (पाटनको बाहिरी भागमा)
            पर्छ। खोकना प्राचीनकालदेखि नै तोरीको तेल उत्पादनका लागि प्रख्यात छ ।
            राणा प्रधानमन्त्री चन्द्र शमशेरको पालामा सन् १९११ मा विद्युतले
            जलाउने नेपालको पहिलो सहर पनि थियो ।
          </div>
        </div>
        <div className="flex flex-col text-slate-600 gap-4 md:w-3/4 mx-auto  mt-20 p-5  w-3/4">
          <h1 className="font-bold"> वडाको&nbsp;विवरण</h1>
          <p className="text-justify">
            खोकना पूर्व गाउँ विकास समिति (VDC) हो जुन छिमेकी गाविसा बुंगमती,
            छाम्पी, दुकुछाप र सानिबुसँग गाभिएर नेपालको बागमती अञ्चलको ललितपुर
            जिल्लाको कार्यविनायक नगरपालिका गठन गरिएको छ।
          </p>
          <div className="mt-10">
            <h1 className="font-bold">बास्तरवाद&nbsp;जानकारी</h1>
            <div className={`flex flex-wrap`}>
              <button
                className={`px-4 p-1 border  ${
                  table === "table1" ? "bg-blue-400" : "bg-white"
                }
            `}
                onClick={() => setTable("table1")}
              >
                Button
              </button>
              <button
                className={`px-4 p-1 border  ${
                  table === "table2" ? "bg-blue-400" : "bg-white"
                }
            `}
                onClick={() => setTable("table2")}
              >
                Button
              </button>
              <button
                className={`px-4 p-1 border  ${
                  table === "table3" ? "bg-blue-400" : "bg-white"
                }
            `}
                onClick={() => setTable("table3")}
              >
                Button
              </button>
              <button
                className={`px-4 p-1 border  ${
                  table === "table4" ? "bg-blue-400" : "bg-white"
                }
            `}
                onClick={() => setTable("table4")}
              >
                Button
              </button>
            </div>
            {table === "table1" && (
              <table className="w-full overflow-auto mt-3 text-xs border">
                <thead className="font-normal border">
                  <tr className="border">
                    <th className="font-normal border p-1">Ward No.1</th>
                    <th className="font-normal border p-1">Ward Name</th>
                    <th className="font-normal border p-1">Population</th>
                    <th className="font-normal border p-1">Area</th>
                    <th className="font-normal border p-1">Households</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="font-normal border p-1">Ward No.</td>
                    <td className="font-normal border p-1">Ward Name</td>
                    <td className="font-normal border p-1">Population</td>
                    <td className="font-normal border p-1">Area</td>
                    <td className="font-normal border p-1">Households</td>
                  </tr>
                </tbody>
              </table>
            )}
            {table === "table2" && (
              <table className="w-full overflow-auto mt-3 text-xs border">
                <thead className="font-normal border">
                  <tr className="border">
                    <th className="font-normal border p-1">Ward No.2</th>
                    <th className="font-normal border p-1">Ward Name</th>
                    <th className="font-normal border p-1">Population</th>
                    <th className="font-normal border p-1">Area</th>
                    <th className="font-normal border p-1">Households</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="font-normal border p-1">Ward No.</td>
                    <td className="font-normal border p-1">Ward Name</td>
                    <td className="font-normal border p-1">Population</td>
                    <td className="font-normal border p-1">Area</td>
                    <td className="font-normal border p-1">Households</td>
                  </tr>
                </tbody>
              </table>
            )}
            {table === "table3" && (
              <table className="w-full overflow-auto mt-3 text-xs border">
                <thead className="font-normal border">
                  <tr className="border">
                    <th className="font-normal border p-1">Ward No.3</th>
                    <th className="font-normal border p-1">Ward Name</th>
                    <th className="font-normal border p-1">Population</th>
                    <th className="font-normal border p-1">Area</th>
                    <th className="font-normal border p-1">Households</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="font-normal border p-1">Ward No.</td>
                    <td className="font-normal border p-1">Ward Name</td>
                    <td className="font-normal border p-1">Population</td>
                    <td className="font-normal border p-1">Area</td>
                    <td className="font-normal border p-1">Households</td>
                  </tr>
                </tbody>
              </table>
            )}
            {table === "table4" && (
              <table className="w-full overflow-auto mt-3 text-xs border">
                <thead className="font-normal border">
                  <tr className="border">
                    <th className="font-normal border p-1">Ward No.4</th>
                    <th className="font-normal border p-1">Ward Name</th>
                    <th className="font-normal border p-1">Population</th>
                    <th className="font-normal border p-1">Area</th>
                    <th className="font-normal border p-1">Households</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-center">
                    <td className="font-normal border p-1">Ward No.</td>
                    <td className="font-normal border p-1">Ward Name</td>
                    <td className="font-normal border p-1">Population</td>
                    <td className="font-normal border p-1">Area</td>
                    <td className="font-normal border p-1">Households</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
