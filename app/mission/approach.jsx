import { Nunito } from "next/font/google";
import Image from "next/image";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

const approachInfo = [
    {
        src: '/images/quality_control.jpg',
        text: 'Quality Control',
        subText: 'Every surgery meets our rigorous standards'
    },
    {
        src: '/images/save_cost.jpg',
        text: 'Save Cost',
        subText: 'We eliminate administrative overhead and middleman costse'
    },
    {
        src: '/images/trust_and_onsistency.jpg',
        text: 'Comprehensive Care',
        subText: 'Address complications and provide life-saving surgeries'
    },
    {
        src: '/images/comprehensive_care.jpg',
        text: 'Trust And Consistency',
        subText: 'Same dedicated team every visit'
    },
]

export default function Approach() {
  return (
    <div className={`${nunito.className} py-6`}>
      <div className="bg-white    px-5 lg:px-10">
        <h1 className=" text-left  font-bold text-xl sm:text-2xl  leading-snug border-l-4 text-black border-[#a76765] font-bold pl-4">
          Our Hands-on Approach
        </h1>
      </div>

      <div className="grid mt-6 px-6 sm:px-15 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  gap-6">

        {
            approachInfo.map(({src, text, subText}, index)=>{
                return   <div key={index} className="flex flex-col border shadow-xl gap-y-8 rounded-3xl ">
          <div className="relative w-full h-[200px] overflow-hidden  rounded-tl-xl rounded-tr-xl">
            <Image
              src={src}
              alt="Vet caring for a dog"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-center text-center px-4  flex-col mb-10  ">
            <h1 className="font-bold text-lg mb-2 ">{text}</h1>
            <p className="text-base text-gray-700 ">{subText}</p>
          </div>
        </div>
            })
        }
      
       
      </div>
    </div>
  );
}
