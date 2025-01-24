export default function ReviewPrart() {
  return (
    <>
      <div
        className="w-full h-auto mt-2 lg:p-10 p-3"
        style={{
          backgroundImage: "url('/review.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full text-center text-slate-500">
          <div className="">
            <h1>जनताको सुझाव</h1>
            <h1 className="font-medium text-black text-3xl">
              हाम्रो प्रति जनताको विचार
            </h1>
          </div>
        </div>
        <div className="flex justify-center flex-wrap mt-10 gap-10">
          <div className="flex w-full max-w-[550px] relative bg-white rounded-lg p-7 gap-7 flex-col">
            <div className="bg-[url('/bgnews.jpg')]  absolute inset-0 bg-cover bg-center opacity-50 z-0 pointer-events-none"></div>
            <p className="text-justify z-10 text-slate-500">
              भरतपुर नगरपालिका वडा नं ७ वडा कार्यालयमा सेवा लिन आउँदा मलाई एकदम
              सहज वातावरणको अनुभव भयो । यहाँका कर्मचारीहरू एकदम सरल, उत्कृष्ट र
              सहयोगी हुनुहुन्छ ।
            </p>
            <div className="flex relative gap-5">
              <img
                src="/fblogo.png"
                alt="hero"
                className="w-20 h-auto rounded-full"
              />
              <div className="flex text-slate-500 relative flex-col justify-center">
                <h1 className="text-start">Khagendra Singh Jora</h1>
                <h1 className="">Kanchanpur</h1>
              </div>
            </div>
          </div>
          <div className="flex w-full bg-white relative max-w-[550px] rounded-lg p-7 gap-7 flex-col">
            <div className="bg-[url('/bgnews.jpg')]  absolute inset-0 bg-cover bg-center opacity-50 z-0 pointer-events-none"></div>
            <p className="text-justify text-slate-500 relative z-10">
              भरतपुर नगरपालिका वडा नं ७ वडा कार्यालयमा सेवा लिन आउँदा मलाई एकदम
              सहज वातावरणको अनुभव भयो । यहाँका कर्मचारीहरू एकदम सरल, उत्कृष्ट र
              सहयोगी हुनुहुन्छ ।
            </p>
            <div className="flex relative gap-5">
              <img
                src="/googlelogo.png"
                alt="hero"
                className="w-20 h-auto rounded-full"
              />
              <div className="flex text-slate-500 flex-col  justify-center">
                <h1 className="text-start">Buddhi Dangol</h1>
                <h1 className="">Kathmandu</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
