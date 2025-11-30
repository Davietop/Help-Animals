import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
export default function DifferentWays() {
  return (
   <section
  className={`
    relative bg-[url('/images/make_difference.jpg')] bg-cover bg-center 
    flex items-center justify-center flex-col w-full
    min-h-[60vh] md:min-h-[80vh]
    before:absolute my-6 before:inset-0 before:bg-black/40 before:z-0
    z-10 ${nunito.className}
  `}
>
  <div className="relative z-10 text-white flex flex-col items-center gap-y-6 px-4 text-center max-w-3xl">
    
    <h1 className="font-bold text-2xl sm:text-3xl md:text-5xl leading-snug">
      Countless Ways to Make a Difference
    </h1>

    <p className="text-sm sm:text-base md:text-xl leading-relaxed">
      Your donation directly funds affordable spay and neuter surgeries for
      families who could not otherwise afford them. Every dollar you give
      prevents animal homelessness, reduces shelter overcrowding, and keeps
      beloved pets with the families who love them.
    </p>

    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4">
      <button className="border border-white cursor-pointer px-10 rounded-xl text-[#a76765] bg-white font-bold py-3">
        Donate Now
      </button>

      <button className="border border-white cursor-pointer px-10 rounded-xl text-[#a76765] bg-white font-bold py-3">
        Learn About Spay-ueter
      </button>
    </div>
  </div>
</section>

  );
}
