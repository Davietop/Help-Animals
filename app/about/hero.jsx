import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
export default function Hero() {
  return (
    <div
  className={`${nunito.className} mt-10 md:mt-0 relative bg-[url('/images/aboutHero.jpg')] bg-cover bg-center md:bg-contain md:bg-left md:bg-no-repeat md:bg-[#0b1727]
    flex items-center justify-center flex-col w-full
    min-h-[60vh] leading-relaxed tracking-wide  sm:min-h-[70vh] md:min-h-[70vh]
     text-center text-white gap-y-4 md:gap-y-6 z-10
    before:absolute  before:inset-0 before:bg-black/70 before:z-0
  `}
>
      <h1 className="font-bold  text-4xl md:text-5xl xl:text-5xl z-100 ">
      About Us 
      </h1>
      <h2 className="font-semibold  text-xl md:text-3xl z-100 ">
      Let us Help Animals Foundation
      </h2>
    
    
      <h3 className="text-base font-medium  z-100 md:text-xl w-11/12 md:w-11/12 xl:w-8/12">
      Nine years of proven veterinary excellence. 70,000+ lives saved. One mission: ending pet homelessness through affordable, hands-on care.
      </h3>
      
    </div>
  );
}
