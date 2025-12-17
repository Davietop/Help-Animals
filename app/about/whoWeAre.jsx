import Image from "next/image";
import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function WhoWeAre(){
    return <section className={`${nunito.className} bg-white pt-10`}>
  <div className="px-5 lg:px-10 mx-auto">
    
    {/* Editorial Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 gap-x-20 items-start">
      
      {/* Type Block */}
      <div className="lg:col-span-6">
       

        <h2 className="text-2xl border-l-4 border-[#8a5854] pl-4  font-bold leading-[1.05] text-gray-900 lg:mt-6 mb-4 lg:mb-10">
          Our Story
        </h2>

        <p className="max-w-full tracking-wide leading-relaxed text-base lg:text-lg text-gray-700">
          Let’s Help Animals Foundation was born from a simple truth:
          caring for animals shouldn’t depend on financial privilege.
        </p>
      </div>

      {/* Image */}
      <div className="lg:col-span-6 relative before:absolute  before:inset-0 before:bg-black/70 before:z-0  h-[420px] lg:h-[520px] rounded-[28px] overflow-hidden">
        <Image
          src="/images/make_difference.jpg"
          alt="Veterinary care for animals"
          fill
          className="object-cover "
          priority
        />
      </div>

      {/* Body Text */}
      <div className="lg:col-span-6 max-w-full  space-y-6 text-gray-600 tracking-wide leading-relaxed">
        <p>
          For over 9 years, our veterinary team has operated the San Diego Animal
          Spay & Neuter Center — a high-volume, low-cost clinic serving thousands
          of families annually and performing more than{" "}
          <strong className="text-gray-900">70,000</strong> life-saving
          procedures.
        </p>

        <p className="tracking-wide leading-relaxed">
          Yet affordability alone wasn’t enough. Many families still couldn’t
          access even reduced-cost services. Pets went unsterilized. Shelters
          overflowed.
        </p>
      </div>

      {/* Mission Callout */}
      <div className="lg:col-span-6">
        <div className="border-l-4 border-[#8a5854] tracking-wide leading-relaxed pl-4 lg:pl-6 py-6 bg-gray-50 rounded-md max-w-full">
          <p className="font-semibold text-gray-900 mb-1">
            Why this foundation exists
          </p>
          <p className="text-sm text-gray-700">
            To close the gap between accessible veterinary care and the families
            who need it most.
          </p>
        </div>
      </div>

    </div>
  </div>

     <section className="w-full py-10">
      {/* Top divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Stat 1 */}
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#8a5854]">
              70,000+
            </h2>
            <p className="mt-3 text-gray-600 font-medium">
              Successful Surgeries
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#8a5854]">
              9
            </h2>
            <p className="mt-3 text-gray-600 font-medium">
              Years of Excellence
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#8a5854]">
              100%
            </h2>
            <p className="mt-3 text-gray-600 font-medium">
              Direct Veterinary Care
            </p>
          </div>

        </div>
      </div>

      {/* Bottom divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-gray-200" />
      </div>
    </section>
</section>
}