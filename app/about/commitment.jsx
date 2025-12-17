import { Button } from "@/components/ui/button";
import { Nunito } from "next/font/google";
import Link from "next/link";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
export default function Commitment(){
    return <div className={`${nunito.className} px-5  lg:px-10`}
    >
          <div className="  pt-5 lg:pt-0 ">
            <h1 className=" text-2xl border-l-4 border-[#8a5854] pl-4 lg:text-2xl font-bold leading-[1.05] text-gray-900 lg:mt-6 leading-relaxed mb-4 lg:mb-4">
         Our Commitment to the Community
         
        </h1>

        <div className="flex flex-col gap-y-2 text-base">
              <h2 className="leading-loose text-base lg:text-lg text-gray-700 tracking-wide">
       For nine years, we have watched families face impossible choices: sterilize a pet or pay rent, get needed surgery or feed the family, keep a beloved animal or surrender them to an overcrowded shelter.
        </h2>
        <h2 className="leading-loose text-base lg:text-lg text-gray-700 tracking-wide">These are not abstract problems to us. We see them every day in the families who walk through our doors—working parents juggling multiple jobs, seniors on fixed incomes, young adults trying to do right by the rescue dog they adopted, and families experiencing temporary hardship who just need a little help to care for their pets responsibly.</h2>
        <h2 className="leading-loose text-base lg:text-lg text-gray-700 tracking-wide"><span className="font-bold">Let us Help Animals Foundation exists to help these families.</span> Not through complicated voucher systems or referrals to other providers, but through direct, immediate, hands-on veterinary care from professionals who have proven we can make a difference.</h2>
        </div>


         <div className="w-full lg:w-11/12 mx-auto h-fit py-14 lg:py-18 bg-[#8a5854] text-white flex md:items-center md:justify-center mb-6 flex-col gap-y-6 mt-8 px-6 rounded-3xl text-left md:text-center">
           <h1 className="text-xl lg:text-2xl leading-relaxed w-full lg:w-10/12 xl:w-8/12 font-bold lg:text-3xl">Join Us in Making a Difference</h1>
           <p className="text-lg leading-relaxed lg:w-10/12  lg:text-xl">Whether through donations, volunteer support, or spreading awareness about our services, you can help us continue nine years of proven impact—and expand it to serve even more families and animals in need..</p>

          <div className="flex flex-col md:flex-row  gap-4">
            <Link href={'/mission'} className="border text-center border-white text-white cursor-pointer px-8 sm:px-10 rounded-xl text-[#a76765] bg-transparent bold py-3 sm:py-4 z-10">
    Support Our Mission
  </Link>
           <Link href={'/donate'} className={`border text-center border-white cursor-pointer px-8 sm:px-10 rounded-xl text-[#a76765] bg-white  font-bold py-3 sm:py-4 z-10`}>Donate Now</Link>
          </div>
        </div>

              <div className="flex flex-col items-center justify-center text-center lg:w-10/12 mx-auto pb-10 gap-y-2 text-base">
              <h2 className="leading-loose font-bold  text-xl lg:text-2xl text-gray-700 tracking-wide">
       Creating a Better San Diego.
        </h2>
        <h2 className="leading-loose text-base lg:text-lg text-gray-700 tracking-wide">Together, we can create a San Diego where no pet creates unwanted litters due to their owners financial circumstances, no family has to surrender a beloved pet because they can not afford basic care, and no healthy, treatable animal loses their life in a shelter due to overpopulation.</h2>
        <h2 className="leading-loose text-base lg:text-lg text-gray-700 tracking-wide"> We have spent nine years proving it is possible. With your help, we can make it a reality.</h2>
        </div>

      
        </div>
    </div>
}