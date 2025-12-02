import Image from "next/image";
 import { Info } from "lucide-react";
 import { HeartHandshake } from "lucide-react";
import Link from "next/link";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});



const CTAs = () => (
  <div className={`${nunito.className} mt-6 flex flex-col items-center lg:items-start justify-center lg:justify-start sm:flex-row gap-3`}>
 

       <div className="flex w-full md:w-fit items-center gap-x-4">
        <Link
          href="/donate"
          className="flex w-full md:w-fit items-center justify-center gap-3 border-2 bg-white border-[#a76765]  text-[#a76765]  text-base hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
        >
          <HeartHandshake className="w-5 h-5" />
          Donate
        </Link>
      </div>
       <div className="flex w-full md:w-fit items-center gap-x-4">
        <Link
          href="/donate"
          className="flex w-full md:w-fit items-center justify-center  gap-3 border-2 bg-white border-[#a76765]  text-[#a76765]  text-base hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-3 px-6 rounded-xl shadow-md transition duration-300"
        >
          <Info className="w-5 h-5" />
          Learn How We Help
        </Link>
      </div>
  </div>
);

export default function Hero() {
  return (
    <section className={`${nunito.className} relative`}>
      <div className="w-full md:w-full lg:w-11/12 justify-center mx-auto px-4 md:px-10 lg:px-5 pt-20 pb-10 lg:py-18 xl:py-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1  text-center lg:text-left">
          <h1 className="text-xl md:text-3xl xl:text-5xl font-bold leading-tight">
            Ending Pet Homelessness Starts With Compassion
          </h1>
          <p className="mt-4 text-gray-700   text-base md:text-lg ">
            Affordable spay, neuter, and essential veterinary care—so every
            family can care for their pets, no matter their financial situation.
          </p>

          <p className="mt-4 text-gray-700 text-base">
            Your support prevents overpopulation, reduces shelter overcrowding,
            and keeps pets at home with the families who love them.
          </p>

          <CTAs />
        </div>

        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative w-full md:w-10/12 lg:md:max-w-2xl h-64 sm:h-80 md:h-96 overflow-hidden rounded-3xl">
            <Image
              src="/images/mission_hero.jpg"
              alt="Vet caring for a dog"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
