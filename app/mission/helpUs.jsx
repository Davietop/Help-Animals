import Image from "next/image";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function HelpUs() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[70vh] mb-20 md:min-h-[90vh]">
      {/* LEFT SIDE */}
      <div className="bg-[#f1ece9] flex flex-col justify-center items-center text-center px-6 py-12 md:py-0">
        <h1
          className={`${nunito.className} font-bold text-2xl sm:text-3xl md:text-4xl leading-snug text-[#2b2b2b]`}
        >
          Help Us Help More Animals
        </h1>

        <p
          className={`${nunito.className} text-[#4b4b4b] mt-4 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed`}
        >
          Your donation directly funds affordable spay and neuter surgeries
          forfamilies who could not otherwise afford them.
        </p>
        <p
          className={`${nunito.className} text-[#4b4b4b] mt-4 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed`}
        >
          Your donation directly funds affordable spay and neuter surgeries
          forfamilies who could not otherwise afford them.
        </p>

        <button
          className={`${nunito.className} mt-6 bg-[#a76765] cursor-pointer text-white px-8 sm:px-10 py-3 rounded-xl transition-all hover:opacity-90`}
        >
         Donate
        </button>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="relative w-full h-64 sm:h-80 md:h-full">
        <Image
          src="/images/help_animal.jpg"
          alt="Cute kitten"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
