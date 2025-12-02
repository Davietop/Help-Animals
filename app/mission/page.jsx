import Navbar from "@/components/nav-bar";
import Hero from "./hero";
import MissionStatement from "./missionStatement";
import Problem from "./problem";
import Solutions from "./solution";
import Approach from "./approach";
import Values from "./values";
import Footer from "@/components/ui/footer";
import VisionSection from "./vision";
import HelpUs from "./helpUs";

export default function Missions() {
  return (
    <div>
        <Navbar/>
      <Hero />
      <MissionStatement/>
      <Problem/>
    <Solutions/>
    <Approach/>
    <Values/>
    <VisionSection/>
    <HelpUs/>
    <Footer/>
    </div>
  );
}
