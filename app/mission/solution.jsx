import {
  Building,
  CheckCircle,
  HeartHandshake,
  Stethoscope,
} from "lucide-react";
import { Nunito } from "next/font/google";
import Image from "next/image";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
export default function Solutions() {
  return (
    <section className={`${nunito.className} py-4`}>
      <div className="bg-white    px-5 lg:px-10">
        <h1 className=" text-left  font-bold text-xl sm:text-2xl  leading-snug border-l-4 text-black border-[#a76765] font-bold pl-4">
          Our Solution
        </h1>
        <p className="pl-4 mt-2 text-base text-gray-700">
          Hands-On, High-Quality, Affordable Pet Care
        </p>
      </div>

      <section className="">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-x-16 gap-y-6 items-center">
          {/* TEXT */}
          <div>
            <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
              Since 2016, our veterinary team has performed over
              <span className="font-semibold">
                {" "}
                70,000 spay and neuter surgeries
              </span>
              —each one preventing future generations of homeless animals. But
              our impact goes deeper than numbers.
            </p>

            <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
              Unlike other animal welfare organizations, we don’t coordinate
              voucher programs or outsource surgeries. We{" "}
              <span className="font-semibold">are</span> the clinic—built on the
              expertise of licensed veterinarians who personally perform every
              procedure in our state-of-the-art facility.
            </p>

            {/* BENEFIT CARDS */}
            <div className="mt-8 grid sm:grid-cols-2 gap-5">
              <div className="p-4 bg-white rounded-2xl shadow-sm flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-[#4b2c1d] mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">
                  70,000+ procedures performed with precision and compassion.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl shadow-sm flex items-start gap-3">
                <Stethoscope className="w-6 h-6 text-[#4b2c1d] mt-1" />
                <p className="text-gray-700  text-base  leading-relaxed">
                  No outsourcing. Every pet cared for by our own medical team.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl shadow-sm flex items-start gap-3">
                <Building className="w-6 h-6 text-[#4b2c1d] mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">
                  A fully equipped, state-of-the-art veterinary facility.
                </p>
              </div>

              <div className="p-4 bg-white rounded-2xl shadow-sm flex items-start gap-3">
                <HeartHandshake className="w-6 h-6 text-[#4b2c1d] mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">
                  Compassionate, accessible care for every family.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
        <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-xl">
  <Image
    src="/images/mission_img.jpg"
    alt="Vet caring for a dog"
    fill
    className="object-cover"
  />
</div>
        </div>
      </section>
    </section>
  );
}
