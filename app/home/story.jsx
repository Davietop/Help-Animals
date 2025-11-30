import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
export default function Story() {
  return (
    <section className={`${nunito.className}  my-10`}>
      <div className="bg-white    px-5 lg:px-10">
        <h1 className=" text-left  font-bold text-2xl  leading-snug border-l-4 text-black border-[#a76765] font-bold pl-4">
          Our Story
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <div
          className="text-base flex flex-col text-center 
    w-full max-w-6xl my-10 mx-auto 
    items-center gap-y-5 px-4"
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Let us Help Animals Foundation grew from a simple recognition: San
            Diego needed a better solution to pet overpopulation, and we had the
            expertise to provide it.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            For 9 years, our veterinary team has operated San Diego Animal Spay
            & Neuter Center, a highvolume, low-cost clinic serving thousands of
            families each year. In that time, we have performed over 70,000 spay
            and neuter surgeries, along with countless life-saving procedures
            for animals whose owners could not afford traditional veterinary
            fees
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            But we knew we could do more. While our clinic provides affordable
            services, many families in our community still struggle to meet even
            our reduced fees. Pets go unsterilized. Unplanned litters
            happen—shelters overflow. And the cycle continues.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            That is why we founded Let us Help Animals Foundation—to bridge the
            gap between our clinic is affordable services and the financial
            reality facing San Diego most vulnerable pet owners.
          </p>
        </div>

        <button className="border border-white cursor-pointer px-10 rounded-xl text-white bg-[#a76765] font-bold py-3">
          Learn More
        </button>
      </div>
    </section>
  );
}
