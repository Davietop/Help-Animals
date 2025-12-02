import { Nunito } from "next/font/google";
import { Heart, Scissors, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

const features = [
  {
    icon: <Scissors className="w-10 h-10 text-[#a76765]" />,
    title: "Beyond Spay & Neuter",
    text: "While reducing pet overpopulation is our core mission, we also provide life-saving surgeries and essential veterinary services that keep pets healthy and families together.",
  },
  {
    icon: <Heart className="w-10 h-10 text-[#a76765]" />,
    title: "Direct Surgical Care",
    text: "Our licensed veterinarians perform every surgery in our own  facility. No outsourcing. No middlemen. Just experienced professionals who care deeply about every animal we serve.",
  },
  {
    icon: <Users className="w-10 h-10 text-[#a76765]" />,
    title: "Community-Focused",
    text: "We're San Diego veterinarians serving San Diego families. We understand our community's needs because we live and work here every day.",
  },
  {
    icon: <Award className="w-10 h-10 text-[#a76765]" />,
    title: "Proven Track Record",
    text: "With nearly a decade of high-volume, high-quality operationswe've refined our approach to deliver exceptional care efficiently, passing those savings directly to pet owners whoneed help most.",
  },
];
export default function WhatMakesUsDifferent() {
  return (
    <section className={`${nunito.className}`}>
      <div className="bg-white    px-5 lg:px-10">
        <h1 className=" text-left   font-bold text-2xl  border-l-4 text-black border-[#a76765] font-bold pl-4">
          What makes us Different
        </h1>
      </div>

      <div className="w-full bg-white py-8 px-6 md:px-16">
      

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <Card
              key={i}
              className="rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-[#a76765]/20"
            >
              <CardContent className="flex flex-col items-center text-center  space-y-4">
                <div className="p-4 rounded-full bg-[#a76765]/10">
                  {feat.icon}
                </div>
                <h3
                  className="font-bold text-lg "
               
                >
                  {feat.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feat.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
