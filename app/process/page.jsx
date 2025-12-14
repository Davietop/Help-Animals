import Navbar from "@/components/nav-bar";
import Hero from "./hero";
import Explanation from "./explain";
import Footer from "@/components/ui/footer";
import MovementSection from "./movement";

export default function Process (){
    return <div>
        <Navbar/>
        <Hero/>
        <Explanation/>
        <MovementSection/>
        <Footer/>
        
        
    </div>
}