import Footer from "@/components/ui/footer";
import CaveatSection from "./caveat";
import ChanceSupport from "./deservesChance";
import DifferentWays from "./differentWays";
import Hero from "./hero";
import Impact from "./impact";
import WhatMakesUsDifferent from "./makesDifferent";
import Story from "./story";

export default function HomePage() {
  return (
    <div className="mt-10 sm:mt-0">
     <Hero/> 
     <CaveatSection/>
     <ChanceSupport/>
     <Impact/>
     <WhatMakesUsDifferent/>
     <DifferentWays/>
     <Story/>
     <Footer/>
    </div>
  );
}