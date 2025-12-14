import { Nunito } from "next/font/google";
import { HandCoins, Stethoscope, Siren, GraduationCap } from "lucide-react";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

const info = [{

    text: 'Fund Raising',
    icon: <HandCoins className="text-[#5f3b3b]"/>,

},
{
   
    text: 'Surgical Care',
    icon: <Stethoscope className="text-[#5f3b3b]"/>,

},
{
    
    text: 'Emergency',
    icon: <Siren className="text-[#5f3b3b]" />,

},
{
   
    text: 'Education',
    icon: <GraduationCap className="text-[#5f3b3b]"/>,

}
]

export default function Hero() {
  return (
   <div className={`${nunito.className} relative mt-14 xl:mt-0`}>
    <div
      className={` h-[500px] text-white justify-center text-center flex flex-col items-center w-full bg-[#5f3b3b] gap-y-4`}
    >
      <h1 className="font-bold lg:mt-[-90px] text-3xl md:text-4xl  ">Our Process</h1>
      <p className="w-11/12 md:w-11/12 leading-loose tracking-wide text-base md:text-lg">
        When we founded Let us Help Animals Foundation, we built it on nine
        years of proven success—70,000+ surgeries that have directly prevented
        pet homelessness across San Diego. Our approach is different because we
        do not just coordinate care; we deliver it ourselves.{" "}
        <span className="font-bold">
          High-Quality, High-Volume Surgical Care{" "}
        </span>
        has become the backbone of everything we do, enabling us to save lives
        at scale while maintaining exceptional medical standards
      </p>
    </div>

    <div className="lg:absolute lg:bottom-[-130px] xl:bottom-[-100px] w-full gap-y-6 px-6 lg:px-14 gap-x-6 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-6 lg:mt-0">
        {
            info.map(({icon, text}, index)=>{
                return   <div key={index} className="border-l-4 lg:border-l-0 border-[#5f3b3b] h-[230px] shadow-lg bg-white flex items-center justify-center flex-col gap-8 rounded-xl">
            <div className="rounded-full p-4 bg-[#5f3b3b] text-white flex items-center justify-center h-[10px] w-[10px]">{index+1}</div>
            <div className="border rounded-full px-4 h-[60px] w-[60px] border-[#5f3b3b]  items-center justify-center flex text-black ">{icon}</div>
           
            <p className="text-lg text-base font-semibold  tracking-wide">{text}</p>

            </div>
            })
        }
      
       

    </div>
   </div>
  );
}
