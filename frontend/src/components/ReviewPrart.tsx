export default function ReviewPrart() {
  return (
    <>
      <div
        className="w-full h-auto mt-20 p-10"
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
          <div className="flex w-full max-w-[400px] bg-white rounded-lg p-7 gap-7 flex-col">
            <p className="text-justify">
              भरतपुर नगरपालिका वडा नं ७ वडा कार्यालयमा सेवा लिन आउँदा मलाई एकदम
              सहज वातावरणको अनुभव भयो । यहाँका कर्मचारीहरू एकदम सरल, उत्कृष्ट र
              सहयोगी हुनुहुन्छ ।
            </p>
            <div className="flex gap-5">
              {/* <img
                src="/hero.jpg"
                alt="hero"
                className="w-20 h-20 rounded-full"
              /> */}
              <div className="flex flex-col justify-center">
                <h1 className="text-start">नाम</h1>
                <h1 className="">भरतपुर</h1>
              </div>
            </div>
          </div>
          <div className="flex w-full bg-white max-w-[400px] rounded-lg p-7 gap-7 flex-col">
            <p className="text-justify">
              भरतपुर नगरपालिका वडा नं ७ वडा कार्यालयमा सेवा लिन आउँदा मलाई एकदम
              सहज वातावरणको अनुभव भयो । यहाँका कर्मचारीहरू एकदम सरल, उत्कृष्ट र
              सहयोगी हुनुहुन्छ ।
            </p>
            <div className="flex gap-5">
              {/* <img
                src="/hero.jpg"
                alt="hero"
                className="w-20 h-20 rounded-full"
              /> */}
              <div className="flex flex-col  justify-center">
                <h1 className="text-start">नाम</h1>
                <h1 className="">भरतपुर</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
