import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
export default function Hero() {
  return (
    <div
  className={`${nunito.className} mt-10 md:mt-0 relative bg-[url('/images/donate_img.jpg')] bg-cover bg-center 
    flex items-center justify-center flex-col w-full
    min-h-[80vh] sm:min-h-[70vh] md:min-h-[70vh]
     text-center text-white gap-y-4 z-10
    before:absolute before:inset-0 before:bg-black/70 before:z-0
  `}
>
      <h1 className="font-bold  text-4xl md:text-5xl xl:text-5xl z-100 ">
        Join the Movement
      </h1>
      <p className="text-xl z-100 md:text-2xl xl:text-3xl font-semibold">Be part of the change.</p>
      <p className="text-lg z-100 md:text-xl w-11/12 md:w-11/12 xl:w-9/12">
        Let us Help Animals Foundation is a 501(c)(3) non-profit organization
        and our mission is fully supported by our donors. Every donation is
        tax-deductible and goes towards our community programs. Monthly
        contributions are encouraged, so we can plan for the continued support
        of our programs
      </p>
      <p className="text-lg z-100 md:text-xl w-11/12 md:w-11/12 xl:w-9/12">
        Each <span className="font-bold">$125.00</span> donation will sterilize,
        vaccinate, and microchip one animal in need. Furthermore, the impact of
        your donation lasts for years by preventing{" "}
        <span className="font-bold">243 unwanted births</span>, allowing us to
        start reversing the cycle of pet overpopulation.
      </p>
    </div>
  );
}
