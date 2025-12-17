import Navbar from "@/components/nav-bar";
import Hero from "./hero";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import WhoWeAre from "./whoWeAre";
import Expertise from "./expertise";
import Facility from "./facility";
import Team from "./team";
import Commitment from "./commitment";

export default function Donate() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <WhoWeAre/>
    
      <Expertise/>
      <Facility/>
      <Team/>
      <Commitment/>




      <Footer />
    </div>
  );
}
