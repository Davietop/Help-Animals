import { Nunito } from "next/font/google";
import Image from "next/image";
import Impact1 from "@/public/images/impact1.jpg";
import Impact2 from "@/public/images/impact2.jpg";
import Impact3 from "@/public/images/impact3.jpg";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
const impactData = [
  {
    imageSrc: Impact1,
    phrase: "Animal statistics",
    text: "70,000+ Animals Spayed & Neutered",
  },
  {
    imageSrc: Impact2,
    phrase: "Industry Expertise",
    text: "9 Years of Hands-On Veterinary Excellence",
  },
  {
    imageSrc: Impact3,
    phrase: "1 Mission",
    text: "End Pet Overpopulation and Homelessness Through Affordable Care",
  },
];
export default function Impact() {
  return (
    <section className={`${nunito.className} my-6`}>
      <div className="bg-white    px-5 lg:px-10">
        <h1 className=" text-left  font-bold text-2xl   leading-snug border-l-4 text-black border-[#a76765] font-bold pl-4">
          Our Impact
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 w-11/12 mx-auto">
        {impactData.map(({ imageSrc, phrase, text }, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Responsive Image Wrapper */}
            <div className="relative w-full h-64 sm:h-72 lg:h-80 rounded-xl overflow-hidden">
              <Image src={imageSrc} alt="dog" fill className="object-cover" />
            </div>

            <p className="mt-3 font-bold text-lg">{phrase}</p>
            <p className="text-gray-700 text-sm sm:text-base">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
