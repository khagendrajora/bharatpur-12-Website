// import {
//   faBicycle,
//   faCar,
//   faMotorcycle,
//   faPlaneUp,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export const Dashboard = () => {
//   const images = [
//     {
//       title: "बृद्ध",
//       value: "१",
//       percent: "0.02%",
//     },
//     {
//       title: "जेष्ठ नागरिक",
//       percent: "0.02%",
//       value: "१०",
//     },
//     {
//       title: "अधिबैसे",
//       percent: "0.02%",
//       value: "४०",
//     },
//     {
//       percent: "0.02%",
//       title: "युवा",
//       value: "१५",
//     },
//     {
//       title: "बालबालिका",
//       value: "५",
//       percent: "0.02%",
//     },
//     {
//       title: "शिशु",
//       value: "३०",
//       percent: "0.02%",
//     },
//   ];
//   const image = [
//     {
//       title: " अष्ट्रेलिया",
//       value: "१",
//       percent: "0.02%",
//     },
//     {
//       title: " यू.के",
//       percent: "0.02%",
//       value: "१०",
//     },
//     {
//       title: " यू.एस.ए",
//       percent: "0.02%",
//       value: "४०",
//     },
//     {
//       title: " अन्य",
//       percent: "0.02%",
//       value: "४०",
//     },
//   ];
//   const img = [
//     {
//       percent: "0.02%",
//       title: " गल्फ",
//       value: "१५",
//     },
//     {
//       title: "यूरोप",
//       value: "५",
//       percent: "0.02%",
//     },
//     {
//       title: "एसिया",
//       value: "३०",
//       percent: "0.02%",
//     },
//     {
//       title: " अन्य",
//       value: "३०",
//       percent: "0.02%",
//     },
//   ];
//   return (
//     <>
//       <div className="flex flex-col p-5">
//         <div className="flex flex-col">
//           <h1 className="font-semibold text-xl">Data Management System</h1>
//           <p className="text-slate-400">Home / Dashboard</p>
//         </div>
//         <div className="flex flex-wrap gap-5  mt-10 justify-center text-white p-5">
//           <div className="bg-blue-500 p-5 shadow-xl rounded-lg flex cursor-pointer flex-col gap-4 min-w-[300px] max-w-[300px] justify-center">
//             <h1>१०</h1>
//             <div className="w-full bg-gray-500 rounded-full h-1 dark:bg-gray-700">
//               <div className="bg-white h-1 rounded-full w-[50%]"></div>
//             </div>
//             <h3>बृद्ध</h3>
//             <span>(६० बर्ष देखि ७० बर्ष)</span>
//           </div>

//           <div className="bg-green-500 p-4 rounded-lg flex flex-col cursor-pointer min-w-[300px] gap-4 text-start max-w-[300px] justify-center ">
//             <h1>१०</h1>
//             <div className="w-full bg-gray-500 rounded-full h-1 dark:bg-gray-700">
//               <div className="bg-white h-1 rounded-full w-[50%]"></div>
//             </div>
//             <h3>जेष्ठ नागरिक</h3>
//             <span>(७० बर्ष भन्दा माथी)</span>
//           </div>

//           <div className="bg-blue-900 p-4 flex rounded-lg flex-col cursor-pointer min-w-[300px] gap-4 max-w-[300px] justify-center">
//             <h1>४०</h1>
//             <div className="w-full bg-gray-500 rounded-full h-1 dark:bg-gray-700">
//               <div className="bg-white h-1 rounded-full w-[50%]"></div>
//             </div>
//             <h3>अधिबैसे</h3>
//             <span>(४५ बर्ष देखि ६० बर्ष)</span>
//           </div>

//           <div className="bg-sky-400 p-4 flex rounded-lg flex-col cursor-pointer min-w-[300px] gap-4 max-w-[300px] justify-center ">
//             <h1>१५</h1>
//             <div className="w-full bg-gray-500 rounded-full h-1 dark:bg-gray-700">
//               <div className="bg-white h-1 rounded-full w-[50%]"></div>
//             </div>
//             <h3>युवा</h3>
//             <span>(१८ बर्ष देखि ४५ बर्ष)</span>
//           </div>

//           <div className="bg-pink-500 p-4 flex rounded-lg flex-col min-w-[300px] gap-4 max-w-[300px] justify-center ">
//             <h1>५</h1>
//             <div className="w-full bg-gray-500 rounded-full h-1 dark:bg-gray-700">
//               <div className="bg-white h-1 rounded-full w-[50%]"></div>
//             </div>
//             <h3>बालबालिका</h3>
//             <span>(५ बर्ष देखि १८ बर्ष)</span>
//           </div>
//         </div>
//         <div className="mt-10">
//           <h1 className="font-semibold text-xl">सवारी साधन</h1>
//         </div>
//         <div className="flex flex-wrap gap-5  mt-10 justify-center text-white p-5">
//           <div className="text-blue-500 p-5 shadow-xl border rounded-lg flex cursor-pointer flex-col gap-4 min-w-[300px] max-w-[300px] justify-center">
//             <div className="flex justify-between">
//               <h1>१०</h1>
//               <FontAwesomeIcon icon={faCar} className="text-blue-500" />
//             </div>

//             <div className="w-full bg-white border rounded-full h-1 dark:bg-gray-700">
//               <div className="bg-blue-500 h-1 rounded-full w-[50%]"></div>
//             </div>
//             <h3>मोटर</h3>
//             <span>(६० बर्ष देखि ७० बर्ष)</span>
//           </div>

//           <div className="shadow-xl text-green-500 p-4 border rounded-lg flex flex-col cursor-pointer min-w-[300px] gap-4 text-start max-w-[300px] justify-center ">
//             <div className="flex justify-between">
//               <h1>१०</h1>
//               <FontAwesomeIcon icon={faMotorcycle} className="text-green-500" />
//             </div>
//             <div className="w-full bg-white border rounded-full h-1 dark:bg-gray-700">
//               <div className="bg-green-500 h-1 rounded-full w-[50%]"></div>
//             </div>
//             <h3>मो.साईकल</h3>
//             <span>(७० बर्ष भन्दा माथी)</span>
//           </div>

//           <div className="shadow-xl text-red-500 p-4 border flex rounded-lg flex-col cursor-pointer min-w-[300px] gap-4 max-w-[300px] justify-center">
//             <div className="flex justify-between">
//               <h1>१०</h1>
//               <FontAwesomeIcon icon={faBicycle} className="text-red-500" />
//             </div>
//             <div className="w-full bg-white border rounded-full h-1 dark:bg-gray-700">
//               <div className="bg-red-500 h-1 rounded-full w-[50%]"></div>
//             </div>
//             <h3>साईकल</h3>
//             <span>(४५ बर्ष देखि ६० बर्ष)</span>
//           </div>

//           <div className="shadow-xl text-orange-500 border p-4 flex rounded-lg flex-col cursor-pointer min-w-[300px] gap-4 max-w-[300px] justify-center ">
//             <div className="flex justify-between">
//               <h1>१०</h1>
//               <FontAwesomeIcon icon={faPlaneUp} className="text-orange-500" />
//             </div>
//             <div className="w-full bg-white border rounded-full h-1 dark:bg-gray-700">
//               <div className="bg-orange-500 h-1 rounded-full w-[50%]"></div>
//             </div>
//             <h3>अन्य</h3>
//             <span>(१८ बर्ष देखि ४५ बर्ष)</span>
//           </div>

//           <div className="shadow-xl text-purple-500 border p-4 flex rounded-lg flex-col min-w-[300px] gap-4 max-w-[300px] justify-center ">
//             <div className="flex justify-between">
//               <h1>१०</h1>
//               <FontAwesomeIcon icon={faCar} className="text-purple-500" />
//             </div>
//             <div className="w-full bg-white border rounded-full h-1 dark:bg-gray-700">
//               <div className="bg-purple-500 h-1 rounded-full w-[50%]"></div>
//             </div>
//             <h3>इलेक्ट्रिक मोटर</h3>
//             <span>(५ बर्ष देखि १८ बर्ष)</span>
//           </div>
//         </div>

//         <div className="w-full flex justify-between gap- flex-wrap p-5">
//           <table className="w-full md:w-2/5">
//             <h1 className="font-semibold text-xl py-4">शिक्षाको अवस्था</h1>
//             {images.map((image, i) => (
//               <tr key={i} className="shadow flex justify-between p-3">
//                 <td className="min-w-[100px] max-w-[100px]">{image.title}</td>
//                 <td>{image.value}</td>
//                 <td>{image.percent}</td>
//               </tr>
//             ))}
//           </table>
//           <div className="w-full md:w-1/2">
//             <table className="w-full">
//               <h1 className="font-semibold text-xl py-4">बैदेशिक अध्ययन</h1>
//               {image.map((image, i) => (
//                 <tr key={i} className="shadow flex justify-between p-3">
//                   <td className="min-w-[100px] max-w-[100px]">{image.title}</td>
//                   <td>{image.value}</td>
//                   <td>{image.percent}</td>
//                 </tr>
//               ))}
//             </table>
//             <table className="w-full">
//               <h1 className="font-semibold text-xl py-4">बैदेशिक रोजगारी</h1>
//               {img.map((image, i) => (
//                 <tr key={i} className="shadow flex justify-between p-3">
//                   <td className="min-w-[100px] max-w-[100px]">{image.title}</td>
//                   <td>{image.value}</td>
//                   <td>{image.percent}</td>
//                 </tr>
//               ))}
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
