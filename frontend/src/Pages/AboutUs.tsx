// import { useState } from "react";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css";

export const AboutUs = () => {
  // const [editors, setEditors] = useState("");
  // const toolbarOptions = [
  //   ["bold", "italic", "underline", "strike"], // toggled buttons
  //   ["blockquote", "code-block"],
  //   ["link", "image", "video", "formula"],

  //   [{ header: 1 }, { header: 2 }], // custom button values
  //   [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  //   [{ script: "sub" }, { script: "super" }], // superscript/subscript
  //   [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  //   [{ direction: "rtl" }], // text direction

  //   [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  //   [{ header: [1, 2, 3, 4, 5, 6, false] }],

  //   [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  //   [{ font: [] }],
  //   [{ align: [] }],

  //   ["clean"], // remove formatting button
  // ];

  // const modules = {
  //   toolbar: toolbarOptions,
  // };

  // const convertToNepali = (english: string) => {
  //   const englishToNepaliMap: { [key: string]: string } = {
  //     a: "अ",
  //     b: "ब",
  //     c: "स",
  //     d: "द",
  //     e: "इ",
  //     f: "फ",
  //     g: "ग",
  //     h: "ह",
  //     i: "इ",
  //     j: "ज",
  //     k: "क",
  //     l: "ल",
  //     m: "म",
  //     n: "न",
  //     o: "ओ",
  //     p: "प",
  //     q: "क",
  //     r: "र",
  //     s: "स",
  //     t: "त",
  //     u: "उ",
  //     v: "व",
  //     w: "व",
  //     x: "क",
  //     y: "य",
  //     z: "ज",
  //     A: "आ",
  //     B: "भ",
  //     C: "च",
  //     D: "ढ",
  //     E: "ई",
  //     F: "फ़",
  //     G: "घ",
  //     H: "ह",
  //     I: "ई",
  //     J: "झ",
  //     K: "ख",
  //     L: "ल",
  //     M: "म्",
  //     N: "ण",
  //     O: "ओ",
  //     P: "फ",
  //     Q: "क",
  //     R: "ऱ",
  //     S: "श",
  //     T: "ठ",
  //     U: "ऊ",
  //     V: "व",
  //     W: "व",
  //     X: "क्ष",
  //     Y: "य",
  //     Z: "ज़",
  //     "1": "१",
  //     "2": "२",
  //     "3": "३",
  //     "4": "४",
  //     "5": "५",
  //     "6": "६",
  //     "7": "७",
  //     "8": "८",
  //     "9": "९",
  //     "0": "०",
  //     "!": "!",
  //     "@": "@",
  //     "#": "#",
  //     $: "₹",
  //     "%": "%",
  //     "^": "^",
  //     "&": "&",
  //     "*": "*",
  //     "(": "(",
  //     ")": ")",
  //     _: "_",
  //     "+": "+",
  //     "=": "=",
  //     "-": "—",
  //     "/": "।",
  //     ",": " ",
  //     ".": "।",
  //     ":": ":",
  //     ";": ";",
  //     "'": "’",
  //     '"': "“",
  //     "<": "‹",
  //     ">": "›",
  //     "?": "?",
  //     "\\": "\\",
  //     "|": "|",
  //     "{": "{",
  //     "}": "}",
  //     "[": "[",
  //     "]": "]",
  //     "`": "ऽ",
  //     "~": "~",
  //     " ": " ",
  //   };
  //   return english
  //     .split("")
  //     .map((char) => englishToNepaliMap[char] || char)
  //     .join("");
  // };

  // const handleChange = (html: string) => {
  //   const parser = new DOMParser();
  //   const doc = parser.parseFromString(html, "text/html");
  //   const traverseNodes = (node: ChildNode) => {
  //     if (node.nodeType === Node.TEXT_NODE) {
  //       node.textContent = convertToNepali(node.textContent || "");
  //     } else if (node.childNodes.length) {
  //       node.childNodes.forEach(traverseNodes);
  //     }
  //   };

  //   doc.body.childNodes.forEach(traverseNodes);

  //   setEditors(doc.body.innerHTML);
  // };
  // console.log(editors);

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
            हाम्रो&nbsp;बारेमा
          </h1>
        </div>

        <div className="flex flex-row  flex-wrap gap-5 justify-center mx-auto my-5 p-5 xl:p-14 ">
          <div className="">
            <img
              src="/bharatpur.jpg"
              alt="logo"
              className="flex mx-auto w-[600px] xl:h-[500px] object-cover"
            />
          </div>
          <div className="p-2 xl:p-5 2xl:w-1/2  w-full flex flex-col gap-5">
            <h1 className="sm:text-4xl text-2xl p-2 font-bold">
              संक्षिप्त परिचय
            </h1>
            <p className="text-gray-600 leading-10 text-justify font-normal ">
              पवित्र नारायणी नदी किनार तथा प्रसिद्ध धार्मिकस्थल देवघाटधामको
              काखमा अवस्थित भरतपुर महानगरपालिका ऐतिहासिक, सामाजिक, आर्थिक,
              राजनीतिक, धार्मिक तथा सांस्कृतिक आदि रूपले मुलुककै अग्रणी नगरीको
              रूपमा आफ्नो पहिचान बनाएको छ । वि.सं. २०३५ सालमा तत्कालीन भरतपुर
              गाउँ पञ्चायत र नारायणगढ गाउँ पञ्चायतलाई मिलाई भरतपुर नगर पञ्चायतको
              रूपमा रही २०४८ साल देखि भरतपुर नगरपालिकाको रूपमा संचालित भएकोमा
              नेपाल सरकार मन्त्रिपरिषदको मिति २०७१।०८।१६ को निर्णयले यस भरतपुर
              नगरपालिकालाई आसपासका पाँच गा.बि.स. मगंलपुर ,फुलबारी , गीतानगर ,
              शिवनगर र पटिहानी समावेश गरि भरतपुर उप– महानगरपालिकामा स्तरोन्नती
              गरिएको थियो . यसै गरि नेपाल सरकार मन्त्रिपरिषदको मिति २०७३ ।११ ।२७
              को निर्णयले यस भरतपुर उप -महानगरपालिका मा नारायणी नगरपालिका ,
              चित्रबन नगरपालिका र कविलास गा.बि .स समेत थप गरि भरतपुर
              महानगरपालिकामा स्तरोन्नती भएको छ ।
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
