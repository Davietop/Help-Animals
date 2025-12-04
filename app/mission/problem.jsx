import { Card, CardContent } from "@/components/ui/card";
import { Nunito } from "next/font/google";
import { BarChart3, TriangleAlert, Users } from "lucide-react";



const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});



const features = [
  {
    icon: <BarChart3 className="w-10 h-10 text-[#a76765]" />,
    
    text: "Each year, millions of healthy, adoptable animals enter shelters across America. Many never make it out. The cause isn’t a lack of love, but often times it is a lack of  being able to care for their pets medical needs, along with some of the basic needs; affordable, spay and neuter, affordable vaccines",
  },
  {
    icon: <TriangleAlert className="w-10 h-10 text-[#a76765]" />,
   
    text: "When families can't afford to sterilize their pets, unplanned litters create a ripple effect: more homeless animals, overcrowded shelters, and heartbreaking euthanasia decisions..",
  },
  {
    icon: <Users className="w-10 h-10 text-[#a76765]" />,
    title: "In low-income communities, this problem intensifies, forcing families to choose between feeding their children and caring for their pets.",
    text: "We believe this is unacceptable. And we've spent nine years proving there's a better way.",
  },
 
];

export default function Problem() {
  return (
    <div className={`${nunito.className}`}>
      <div className="bg-white    px-5 lg:px-10">
        <h1 className=" text-left  font-bold text-xl sm:text-2xl  leading-snug border-l-4 text-black border-[#a76765] font-bold pl-4">
          The Problem We are Solving
        </h1>
      </div>

      <div className="w-full bg-white py-6 px-6 md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <Card
              key={i}
              className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#a76765]/20"
            >
              <CardContent className="flex flex-col items-center text-center  space-y-4">
                <div className="p-4 rounded-full bg-[#a76765]/10">
                  {feat.icon}
                </div>
                <h3 className="text-base md:text-lg text-gray-600 leading-relaxed ">{feat?.title}</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {feat.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


    </div>
  );
}
