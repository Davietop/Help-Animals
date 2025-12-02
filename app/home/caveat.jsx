
import Image from "next/image";
import { Nunito } from "next/font/google";




const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});


export default function CaveatSection() {
  return (
   <section className="grid grid-cols-1 md:grid-cols-2 w-full min-h-[70vh] md:min-h-[90vh]">
  {/* LEFT SIDE */}
  <div className="bg-[#f1ece9] flex flex-col justify-center items-center text-center px-6 py-12 md:py-0">
    
    <h1
      className={`${nunito.className} font-bold text-2xl sm:text-3xl md:text-4xl leading-snug text-[#2b2b2b]`}
    >
      Pets change our lives. <br />
      We are on a quest to change <br />
      theirs.
    </h1>

    <p
      className={`${nunito.className} text-[#4b4b4b] mt-4 max-w-lg text-sm sm:text-base md:text-lg leading-relaxed`}
    >
      For nearly a decade, our expert surgical team has been fighting animal
      overpopulation in San Diego with affordable, high-quality spay and
      neuter services — and we are just getting started.
    </p>

    <button
      className={`${nunito.className} mt-6 bg-[#a76765] cursor-pointer text-white px-8 sm:px-10 py-3 rounded-xl transition-all hover:opacity-90`}
    >
      Join the Quest
    </button>
  </div>

  {/* RIGHT SIDE IMAGE */}
  <div className="relative w-full h-64 sm:h-80 md:h-full">
    <Image
      src="/images/change_theirs2.jpg"
      alt="Cute kitten"
      fill
      className="object-cover"
    />
  </div>
</section>

  );
}