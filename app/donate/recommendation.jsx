import { Button } from "@/components/ui/button";
import { Nunito } from "next/font/google";
import {
  HandHeart,
  HeartHandshake,
  HeartPulse,
  Medal,
  Scalpel,
  Sparkles,
  Target,
} from "lucide-react";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function Recommendation() {
  return (
    <div className={`w-11/12 m:max-w-6xl mx-auto ${nunito.className}`}>
      <div
        className={`${nunito.className} mb-10 w-11/12 flex flex-col text-center px-4 py-10 items-center justify-center sm:max-w-6xl rounded-3xl bg-white border-2 border-[#8a5854] rounded-2xl gap-y-6 mx-auto h-fit`}
      >
        <Button
          variant={`solid`}
          size={`lg`}
          className={`px-10 text-lg font-bold`}
        >
          Recommended
        </Button>
        <h1 className="font-bold text-lg md:text-2xl text-[#8a5854]">
          Monthly Giving Makes a Bigger Impact
        </h1>
        <p className="w-full text-base md:w-10/12">
          Monthly contributions allow us to plan for the continued support of
          our programs and expand our capacity to serve more families. A monthly
          gift of just $125 provides year-round support and prevents nearly
          3,000 unwanted births annually.
        </p>
        <p>Join our community of monthly donors today.</p>
      </div>

      {/* BOXESSSSS */}

      <div
        className={`${nunito.className} w-11/12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10  mb-10`}
      >
        <div className="border-2 flex flex-col items-center justify-center px-10 py-20 gap-y-4 rounded-3xl border-[#8a5854]">
          {" "}
          <HeartPulse className="w-8 h-8 text-[#8a5854]" />
          <h1 className="font-bold text-lg md:text-2xl text-[#8a5854]">
            70,000+
          </h1>
          <p className="text-base">Surgeries Performed Since 2016</p>
        </div>
        <div className="border-2 flex flex-col items-center justify-center px-10 py-20 gap-y-4 rounded-3xl border-[#8a5854]">
          {" "}
          <Medal className="w-8 h-8 text-[#8a5854]" />
          <h1 className="font-bold text-lg md:text-2xl text-[#8a5854]">9</h1>
          <p className="text-base">Years of Veterinary Excellence</p>
        </div>
        <div className="border-2 flex flex-col items-center justify-center px-10 py-20 gap-y-4 rounded-3xl border-[#8a5854]">
          {" "}
          <HandHeart className="w-8 h-8 text-[#8a5854]" />
          <h1 className="font-bold text-lg md:text-2xl text-[#8a5854]">100%</h1>
          <p className="text-base">Hands-On Direct Care</p>
        </div>
      </div>

      {/* wWhy donation matters */}

      <div>
        <h1 className="text-center text-[#8a5854] my-10 text-2xl xl:text-4xl font-bold">
          Why your Donation Matters
        </h1>

        <div
          className={` w-11/12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10  mb-10`}
        >
          <div className="border-2 flex flex-col items-left justify-left px-4 lg:px-10 py-10 gap-y-4 rounded-3xl shadow-3xl">
            {" "}
            <Target className="w-8 h-8 text-[#8a5854]" />
            <h1 className="font-bold text-lg md:text-2xl text-[#8a5854]">
              Direct Impact
            </h1>
            <p className="text-base">
              Your donation goes directly to our veterinary team who personally
              performs every surgery. No middlemen, no vouchers—just immediate,
              hands-on care.
            </p>
          </div>
          <div className="border-2 flex flex-col items-left justify-left  px-4 lg:px-10 py-10 gap-y-4 rounded-3xl shadow-3xl">
            {" "}
            <Medal className="w-8 h-8 text-[#8a5854]" />
            <h1 className="font-bold text-lg md:text-2xl text-[#8a5854]">
              Proven Excellence
            </h1>
            <p className="text-base">
              With 70,000+ successful surgeries since 2016, our experienced
              surgical team has proven that high-volume does not mean low
              quality.
            </p>
          </div>
          <div className="border-2 flex flex-col items-left justify-left  px-4 lg:px-10 py-10 gap-y-4 rounded-3xl shadow-3xl">
            {" "}
            <HeartHandshake className="w-8 h-8 text-[#8a5854]" />
            <h1 className="font-bold text-lg md:text-2xl text-[#8a5854]">
              Keep Families Together
            </h1>
            <p className="text-base">
              Your support helps families afford essential care, preventing pet
              surrender and keeping beloved animals with those who love them.
            </p>
          </div>
          <div className="border-2 flex flex-col iitems-left justify-left px-4 lg:px-10 py-10 gap-y-4 rounded-3xl shadow-3xl">
            {" "}
            <Sparkles className="w-8 h-8 text-[#8a5854]" />
            <h1 className="font-bold text-lg md:text-2xl text-[#8a5854]">
              Multiplied Impact
            </h1>
            <p className="text-base">
              Every surgery prevents hundreds of future births, creating
              exponential impact that reverses pet overpopulation for years to
              come.
            </p>
          </div>
        </div>
      </div>

      {/* Information */}
      <div className="w-full flex justify-center px-4 mb-10 b">
        <div className="w-full max-w-6xl bg-[#FFF4CC] border-l-4 border-[#F4B400] rounded-xl px-6 py-5 shadow-sm">
          <p className="text-sm md:text-base text-[#5A3E00] leading-relaxed">
            Due to the homeless animal crisis with shelters being over capacity,
            thousands of healthy, well behaved pets getting euthanized on a
            regular basis, it inspired us to start this foundation to try and
            help people care for their pets.
          </p>
        </div>
      </div>


      {/* ADDITIONAL PAYMENTS */}

      <section className="w-full flex justify-center px-4 py-10">
        <div className="w-full max-w-6xl bg-[#8a5854] text-white rounded-3xl px-6 md:px-12 py-12">
          {/* Heading */}
          <h3 className="text-sm font-semibold tracking-wide  mb-10 uppercase">
            Additional Payment Methods
          </h3>

          {/* Payment Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Zelle */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Zelle</h4>
              <a
                href="mailto:hello@caravitafoundation.org"
                className="underline "
              >
                hello@letushelpanimal.org
              </a>
            </div>

            {/* Venmo */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">venmo</h4>
              <p className="font-medium underline">@letushelpanimal</p>
              <p className="text-sm leading-relaxed ">
                *Please include your name and email in the memo so we can thank
                you personally and send you a donation receipt.
              </p>
            </div>

            {/* Check / ACH */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">
                Check or ACH/Wire Transfer
              </h4>
              <p className="text-sm leading-relaxed ">
                If you prefer to donate via check to a secured mailbox, or via
                ACH or wire transfer, please reach out to us at{" "}
                <a
                  href="mailto:hello@letushelpanimal.org"
                  className="underline"
                >
                  hello@letushelpanimal.org
                </a>
                . We will provide payment instructions.
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-sm leading-relaxed  max-w-5xl">
            The Let us help Animal Foundation is a registered 501(c)(3) tax-exempt public
            charity (EIN: 99-1585525). Our organization was formerly known as
            the <em>Angels for Angels Foundation</em>, incorporated in the State
            of Colorado. We have formally updated our organization’s name with
            the State of Colorado and notified the IRS of our name change,
            though it may take some time for the IRS public database to reflect
            the update. Your donation is tied to our EIN, not our name. This
            means all contributions remain fully tax-deductible, and you may
            list either <em>Angels for Angels Foundation</em> (our previous
            name) or <em>Caravita Foundation</em> (our current name) when
            sending a donation.
          </p>
        </div>
      </section>
    </div>
  );
}
