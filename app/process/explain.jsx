import { Nunito } from "next/font/google";
import Image from "next/image";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
export default function Explanation() {
  return (
    <div
      className={`${nunito.className} my-10 lg:mt-[160px] px-4 lg:px-10 flex flex-col md:grid md:grid-cols-12 gap-y-6 gap-x-10`}
    >
      {/* 1 — Fund Raising */}
      <div className="bg-white col-span-12 lg:col-span-8">
        <h1 className="font-bold text-2xl leading-snug border-l-4 border-[#a76765] text-black pl-4">
          Fund Raising
        </h1>
        <p className="pl-4 leading-loose tracking-wide">
          Creating widespread access through strategic fundraising
        </p>

        <p className="mt-4 lg:mt-2  lg:pl-0  leading-loose  tracking-wide">
          For most San Diego families, the greatest barrier to spaying and
          neutering their pets is cost. At traditional veterinary hospitals,
          sterilization procedures can cost $800–$1,200, far beyond what many
          households can afford. Even low-cost clinics charge fees that remain
          out of reach for families facing financial hardship. With the support
          of our donors, Let us Help Animals Foundation expands access to
          affordable spay and neuter services at scale. Because we operate our
          own clinic with our own veterinary team, every dollar donated goes
          directly toward subsidizing surgeries for families who need help most.
        </p>
      </div>

      <div className="relative col-span-12 lg:col-span-4  h-[350px]  px-6 w-full">
        <Image
          src="/images/fund_raising.jpg"
          alt="Fundraising"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* 2 — Surgical Care (Mobile) */}
      <div className="bg-white col-span-12 lg:hidden">
        <h1 className="font-bold text-2xl leading-snug border-l-4 border-[#a76765] text-black pl-4">
          High-Quality, High-Volume Surgical Care
        </h1>
        <p className="pl-4 leading-loose tracking-wide">
          Expert veterinary services performed in-house
        </p>

        <p className="mt-4 lg:mt-2 leading-loose tracking-wide">
          Unlike organizations that coordinate voucher programs or outsource
          surgeries to partner clinics, Let us Help Animals Foundation operates
          differently: we are the veterinarians. Our licensed surgical team
          personally performs every procedure in our state-of-the-art facility,
          San Diego Animal Spay & Neuter Center. With over 70,000 successful
          surgeries since 2016, we have mastered the specialized balance between
          efficiency and excellence.
        </p>
      </div>

      {/* 2 — Image */}
      <div className="relative col-span-12 lg:col-span-4  h-[350px]  px-6 w-full">
        <Image
          src="/images/surgical_care.jpg"
          alt="Fundraising"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* 2 — Surgical Care (Desktop) */}
      <div className="hidden lg:block bg-white col-span-8">
        <h1 className="font-bold text-2xl text-right leading-snug border-r-4 border-[#a76765] text-black pr-4">
          High-Quality, High-Volume Surgical Care
        </h1>
        <p className="pr-4 text-right leading-loose tracking-wide">
          Expert veterinary services performed in-house
        </p>

        <p className="mt-4 lg:mt-2 leading-loose tracking-wide text-right">
          Unlike organizations that coordinate voucher programs or outsource
          surgeries to partner clinics, Let us Help Animals Foundation operates
          differently: we are the veterinarians. Our licensed surgical team
          personally performs every procedure in our state-of-the-art facility,
          San Diego Animal Spay & Neuter Center. With over 70,000 successful
          surgeries since 2016, we have mastered the specialized balance between
          efficiency and excellence.
        </p>
      </div>

      {/* 3 — Emergency */}
      <div className="bg-white col-span-12 lg:col-span-8">
        <h1 className="font-bold text-2xl leading-snug border-l-4 border-[#a76765] text-black pl-4">
          Emergency Intervention
        </h1>
        <p className="pl-4 leading-loose tracking-wide">
          Life-saving surgeries for families in crisis
        </p>

        <p className="mt-4 lg:mt-2 leading-loose tracking-wide">
          Pet overpopulation and pet homelessness are deeply connected to
          another heartbreaking reality: families facing impossible financial
          choices when their beloved animal needs emergency medical care. A dog
          hit by a car, a cat with a life-threatening blockage, a pet with a
          treatable tumor—at traditional emergency hospitals, these surgeries
          can cost thousands of dollars. Let us Help Animals Foundation provides
          life-saving surgical care for animals whose families are experiencing
          financial hardship.
        </p>
      </div>

      <div className="relative col-span-12 lg:col-span-4  h-[350px]  px-6 w-full">
        <Image
          src="/images/emergency_care.jpg"
          alt="Fundraising"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* 4 — Education (Mobile) */}
      <div className="bg-white col-span-12 lg:hidden">
        <h1 className="font-bold text-2xl leading-snug border-l-4 border-[#a76765] text-black pl-4">
          Community Education
        </h1>
        <p className="pl-4 leading-loose tracking-wide">
          Building awareness that prevents problems at the source
        </p>

        <p className="mt-4 lg:mt-2 leading-loose tracking-wide">
          As we all know, knowledge is power. Despite decades of animal welfare
          advocacy, many San Diego pet owners still do not understand the
          urgency of spaying and neutering or they believe persistent myths like
          <q className="font-bold px-1">My Pet is Too Young</q> or <q className="font-bold px-1">One Litter is Healthy.</q> Fostering
          responsible pet ownership through education is a critical focus for
          Let us Help Animals Foundation. We engage directly with San Diego
          communities to raise awareness and normalize affordable veterinary
          care.
        </p>
      </div>

      <div className="relative col-span-12 lg:col-span-4  h-[350px]  px-6 w-full">
        <Image
          src="/images/community_education.jpg"
          alt="Fundraising"
          fill
          className="object-cover rounded-xl"
        />
      </div>

      {/* 4 — Education (Desktop) */}
      <div className="hidden lg:block bg-white col-span-8">
        <h1 className="font-bold text-2xl text-right leading-snug border-r-4 border-[#a76765] text-black pr-4">
          Community Education
        </h1>
        <p className="pr-4 text-right leading-loose tracking-wide">
          Building awareness that prevents problems at the source
        </p>

        <p className="mt-4 lg:mt-2 leading-loose tracking-wide text-right">
          As we all know, knowledge is power. Despite decades of animal welfare
          advocacy, many San Diego pet owners still do not understand the
          urgency of spaying and neutering or they believe persistent myths like 
           <q className="font-bold px-2">My Pet is Too Young</q> or <q className="font-bold px-2">One Litter is Healthy.</q> Fostering
          responsible pet ownership through education is a critical focus for
          Let us Help Animals Foundation. We engage directly with San Diego
          communities to raise awareness and normalize affordable veterinary
          care.
        </p>
      </div>
    </div>
  );
}
