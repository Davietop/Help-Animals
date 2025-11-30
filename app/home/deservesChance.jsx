import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function ChanceSupport() {
  return (
    <div
      className={`
    ${nunito.className}
    text-base flex flex-col text-center 
    w-full max-w-6xl my-10 mx-auto 
    items-center gap-y-5 px-4
  `}
    >
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-snug">
        Every Pet Deserves a Chance. Every Family Deserves Support.
      </h1>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Every day in San Diego, countless animals face uncertain futures because
        their families can not afford essential veterinary care. At Let us Help
        Animals Foundation, we believe cost should never be a barrier to
        responsible pet ownership.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Unlike organizations that outsource surgeries to third-party providers,
        our foundation operates on a different model: we are veterinarians and
        animal care professionals who personally perform every procedure. With
        over 70,000 successful spay and neuter surgeries completed since 2016,
        our experienced surgical team has proven that high-quality veterinary
        care can be both affordable and accessible.
      </p>

      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Through our established clinic, San Diego Animal Spay & Neuter Center,
        we have spent nine years perfecting our approach—combining efficiency
        with compassion, volume with quality, and expertise with affordability.
      </p>

      <button
        className="
      mt-6 bg-[#a76765] cursor-pointer 
      text-white px-10 sm:px-16 py-3 
      rounded-xl font-semibold 
      transition-all hover:opacity-90
    "
      >
        Our Process
      </button>
    </div>
  );
}
