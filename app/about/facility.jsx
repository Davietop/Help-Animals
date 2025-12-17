import { Nunito } from "next/font/google";
import {
  Scissors,
  PawPrint,
  UserCheck,
  ClipboardCheck,
} from "lucide-react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function Facility(){
    return <div className={`${nunito.className} px-5 lg:px-10`}>
        <div className="   ">
            <h1 className=" text-2xl border-l-4 border-[#8a5854] pl-4 lg:text-2xl font-bold leading-[1.05] text-gray-900 lg:mt-6 mb-4 lg:mb-4">
          Our Facility
          <p className="text-base lg:text-lg mt-2 w-full font-semibold">
            San Diego Animal Spay & Neuter Center
          </p>
        </h1>

        <h2 className="leading-relaxed text-gray-700 tracking-wide">
          Our foundation operates in partnership with San Diego Animal Spay & Neuter Center, our established clinic that serves as the foundation for everything we do.
        </h2>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 my-6 xl:my-0 xl:py-10">
  {[
    {
      icon: <Scissors className="h-6 w-6 md:h-7 md:w-7 xl:h-9 xl:w-9 text-[#8a5854]" />,
      heading: "Modern Surgical Suites",
      subText:
        "Equipped for high-volume operations with the latest veterinary technology and safety protocols.",
    },
    {
      icon: <PawPrint className="h-6 w-6 md:h-7 md:w-7 xl:h-9 xl:w-9 text-[#8a5854]" />,
      heading: "Dedicated Care Areas",
      subText:
        "Pre-op and recovery areas designed for animal comfort and efficient patient flow.",
    },
    {
      icon: <UserCheck className="h-6 w-6 md:h-7 md:w-7 xl:h-9 xl:w-9 text-[#8a5854]" />,
      heading: "Experienced Staff",
      subText:
        "Veterinary professionals who have performed tens of thousands of successful procedures.",
    },
    {
      icon: <ClipboardCheck className="h-6 w-6 md:h-7 md:w-7 xl:h-9 xl:w-9 text-[#8a5854]" />,
      heading: "Streamlined Process",
      subText:
        "Efficient check-in and care procedures that respect your time while prioritizing your pet’s wellbeing.",
    },
  ].map(({ icon, heading, subText }, index) => (
    <div
      key={index}
      className="group bg-white rounded-3xl p-7 md:p-8 flex flex-col gap-y-4 md:gap-y-5
                 shadow-lg hover:shadow-2xl transition-all duration-300
                 border border-gray-100 relative"
    >
      {/* icon */}
      <div
        className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-[#f7f1f0]
                   flex items-center justify-center"
        aria-hidden
      >
        {icon}
      </div>

      {/* heading */}
      <h3 className="text-lg xl:text-xl font-semibold text-gray-900">
        {heading}
      </h3>

      {/* text */}
      <p className="text-base xl:text-lg text-gray-600 leading-relaxed md:leading-loose">
        {subText}
      </p>
    </div>
  ))}
</div>


    </div>
}