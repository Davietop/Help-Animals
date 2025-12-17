import { Nunito } from "next/font/google";
import Link from "next/link";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function MissionStatement(){
    return <div className={`${nunito.className}`}>
 <div className="bg-white    px-5 lg:px-10">
        <h1 className=" text-left  font-bold text-xl sm:text-2xl  leading-snug border-l-4 text-black border-[#8a5854] font-bold pl-4">
          Our Mission
        </h1>
        <p className="text-base mt-2 text-gray-700 pl-4">An End To Animal Overpopulation</p>
      </div>

      <div className="pb-10 pt-6 flex items-center justify-center flex-col gap-y-4">
        <p className="text-base md:text-xl text-gray-700 w-10/12 md:w-7/12 text-center leading-loose  mx-auto">Let us Help Animals Foundation exists to end pet homelessness in San Diego by making spay, neuter, and essential veterinary services affordable for every family—regardless of their financial circumstances.</p>
         <Link href={'/donate'} className="flex w-fit items-center justify-center  gap-3 border-2  border-[#8a5854] text-white bg-[#8a5854]  text-base hover:text-[#8a5854] hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300 cursor-pointer">
          Support Our Mission
        </Link>

    
      </div>
    </div>
}