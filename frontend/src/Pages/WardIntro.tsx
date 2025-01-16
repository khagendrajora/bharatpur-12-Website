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
            Ward Introduction
          </h1>
        </div>

        <div className="flex flex-row text-slate-600 flex-wrap justify-center p-10 mx-auto md:w-3/4 ">
          <div className="flex flex-wrap gap-4 md:w-11/12 p-5">
            <img
              src="/hero.jpg"
              alt="logo"
              className="flex mx-auto md:mx-0 object-cover min-w-[250px] sm:max-w-[400px] "
            />
            <div className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              pariatur, enim reprehenderit quod, maxime aperiam fugiat
              voluptatibus nobis officiis velit veniam! Dicta necessitatibus
              maxime sunt ipsum cum nisi, eaque omnis?
            </div>
          </div>
        </div>
        <div className="flex flex-col text-slate-600 gap-4 md:w-3/4 mx-auto  mt-20 p-5  w-3/4">
          <h1 className="font-bold">Ward Introduction</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ut
            ullam sunt eos corporis, eum possimus voluptate labore cumque odit
            quisquam enim inventore quidem animi ea sed. Officia, veritatis
            natus?
          </p>
          <div>
            <h1 className="font-bold">Ward Introduction</h1>
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
