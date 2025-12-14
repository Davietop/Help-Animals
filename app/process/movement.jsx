import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
export default function MovementSection() {
  return (
    <section className={`${nunito.className} w-11/12 mx-auto bg-[#8a5854] text-white py-20 my-10 px-4 md:px-10 rounded-[20px]`}>
      {/* Top Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Join the Movement
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          Be part of the change.
        </p>

        <p className="text-base leading-relaxed text-gray-200">
          Let us Help Animals Foundation is a 501(c)(3) non-profit organization, 
          and our mission is fully supported by our donors. Every donation is 
          tax-deductible and directly funds subsidized surgeries, emergency 
          medical care, and community programs.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full max-w-5xl mx-auto my-10 border-t border-white/20" />

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-5xl mx-auto">
        <div>
          <h2 className="text-4xl font-bold mb-2">$125</h2>
          <p className="text-base text-gray-200">
            Sterilizes, vaccinates & microchips 1 animal
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-2">243</h2>
          <p className="text-base text-gray-200">
            Unwanted births prevented per surgery
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-2">70K+</h2>
          <p className="text-base text-gray-200">
            Surgeries completed since 2016
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-5xl mx-auto my-10 border-t border-white/20" />

      {/* Bottom Text */}
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gray-200 text-base leading-relaxed mb-6">
          We’ve spent nine years proving affordable, high-quality veterinary care 
          can end pet homelessness. With your support, we can expand our impact 
          even further.
        </p>

        {/* Buttons */}
        <div className="flex  flex-col md:flex-row items-center justify-center gap-5 mt-8">
          <button className="bg-white text-[#8a5854] font-semibold cursor-pointer px-10 w-full sm:w-fit py-3 rounded-full shadow hover:opacity-90 transition">
            Donate Now
          </button>

          <button className="border border-white font-semibold px-10 py-3 w-full sm:w-fit rounded-full cursor-pointer hover:bg-white hover:text-[#8a5854] transition">
            Learn About Our Services
          </button>

          <button className="border border-white font-semibold px-10 py-3 w-full sm:w-fit rounded-full cursor-pointer hover:bg-white hover:text-[#8a5854] transition">
            Get Involved
          </button>
        </div>
      </div>
    </section>
  );
}
