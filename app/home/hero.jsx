import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function Hero() {
  return (
    <div
  className={`
    relative bg-[url('/images/hero_banner2.jpg')] bg-cover bg-center 
    flex items-center justify-center flex-col w-full
    min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]
    px-4 text-center
    before:absolute before:inset-0 before:bg-black/40 before:z-0
    z-10 ${nunito.className}
  `}
>
  <h3 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white leading-snug z-10">
    Our Four-Legged Friends <br /> Need Your Help
  </h3>

  <p className="text-white text-base sm:text-lg md:text-xl mt-3 font-semibold z-10">
    Let us help Animals Foundation
  </p>

  <button className="border border-white cursor-pointer px-8 sm:px-10 rounded-xl text-[#a76765] bg-white mt-6 font-bold py-3 sm:py-4 z-10">
    Support Our Mission
  </button>
</div>

  );
}
