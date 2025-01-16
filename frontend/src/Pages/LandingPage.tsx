import { Gallary } from "../components/Gallary";
import { Hero } from "../components/Hero";
import { Intro } from "../components/Intro";
import { News } from "../components/News";
import { Publication } from "../components/Publication";
import { WorkDone } from "../components/WorkDone";

export const LandingPage = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-10 overflow-x-hidden bg-zinc-100  ">
        <Hero />
        <Intro />
        <Gallary />
        <WorkDone />
        <News />
        <Publication />
      </div>
    </>
  );
};
