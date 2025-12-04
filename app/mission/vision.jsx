import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function VisionSection() {
  return (
    <section className={`${nunito.className} w-full py-10`}>
         <div className="bg-white    px-5 lg:px-10">
        <h1 className=" text-left  font-bold text-xl sm:text-2xl  leading-snug border-l-4 text-black border-[#a76765] font-bold pl-4">
           Our Vision for the Future
        </h1>
        <p className="text-base md:text-lg   text-gray-700 pl-4 leading-relaxed mt-2"> We are expanding our capacity to serve more families, provide more life-saving
            surgeries, and build a San Diego where no treatable pet is lost due to financial barriers.</p>
      </div>

      <div className="max-w-6xl mx-auto space-y-20">


        {/* IMAGE */}
        {/* <div className="relative w-full md:w-10/12 lg:md:max-w-2xl h-64 sm:h-80 md:h-96 overflow-hidden justify-center flex items-center rounded-3xl">
                   <Image
                     src="/images/mission_hero.jpg"
                     alt="Vet caring for a dog"
                     fill
                     className="object-cover"
                   />
                 </div> */}

        {/* SUPPORT COLUMN BLOCK */}
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 gap-x-16 px-7 gap-y-4">
          <div className="space-y-5">
            <h3 className="text-lg md:text-2xl font-bold ">
              With your support, we can:
            </h3>
          </div>

          <ul className="space-y-4 text-base md:text-lg text-[#2f3643]">
            {[
              "Subsidize spay & neuter surgeries for low-income families",
              "Provide affordable outpatient surgeries",
              "Expand outreach to underserved communities",
              "Educate the public about responsible pet ownership",
              "Partner with shelters to sterilize pets before adoption",
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="text-[#a76765] text-3xl leading-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
