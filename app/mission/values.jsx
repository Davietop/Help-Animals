import { Nunito } from "next/font/google";
import {
  UserGroupIcon,
  CheckBadgeIcon,
  BoltIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function Values() {
  const values = [
    {
      title: "Accessibility",
      text: "We remove financial barriers so every pet owner can be a responsible pet owner.",
      icon: UserGroupIcon,
    },
    {
      title: "Excellence",
      text: "Our experienced surgical team maintains the highest medical standards while serving as many animals as possible.",
      icon: CheckBadgeIcon,
    }, 
    {
      title: "Community",
      text: "Ending pet homelessness requires collaboration. So we work alongside shelters, but with an expertise that makes the difference.",
      icon: HeartIcon,
    },
  ];

  return (
    <section className={`${nunito.className} w-full py-4`}>
      {/* Header */}
      <div className="bg-white px-5 lg:px-10">
        <h1 className="text-left font-bold text-xl sm:text-2xl leading-snug border-l-4 border-[#a76765] text-black pl-4">
          Core Values
        </h1>
      </div>

      {/* Grid */}
      <div className="max-w-6xl px-6 mt-6 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 auto-rows-fr">
          {values.map(({ title, text, icon: Icon }, index) => (
            <div key={index} className="relative group h-full">
              {/* Card */}
              <div className="relative bg-white h-full flex flex-col rounded-2xl p-6 shadow-[0_6px_0_#a76765] border border-[#a76765] transition-all duration-200 group-hover:shadow-[0_10px_0_#a76765]">
                
                {/* ICON */}
                <div className="mb-4">
                  <Icon className="h-10 w-10 text-[#a76765]" />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-[#4b3c2a] font-serif mb-3">
                  {title}
                </h3>

                <p className="text-[#3b4452] text-base leading-relaxed flex-grow">
                  {text}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
