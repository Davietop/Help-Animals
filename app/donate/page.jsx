import Navbar from "@/components/nav-bar";
import Hero from "./hero";
import Footer from "@/components/ui/footer";
import DonateSection from "./donatesection";
import Recommendation from "./recommendation";

export default function Donate(){
  return <div className="bg-gray-50">

    <Navbar/>
    <Hero/>
    <DonateSection/>
    <Recommendation/>
    <Footer/>
  </div>
}