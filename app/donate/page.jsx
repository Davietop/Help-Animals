import Navbar from "@/components/nav-bar";
import Hero from "./hero";
import Footer from "@/components/ui/footer";
import DonateSection from "./donatesection";
import Recommendation from "./recommendation";

export const metadata = {
  title: "Donate | Join the Movement",
  description:
    "Let us Help Animals Foundation is a 501(c)(3) non-profit organization and our mission is fully supported by our donors. Every donation is tax-deductible and goes towards our community programs. Monthly contributions are encouraged, so we can plan for the continued support of our programs",
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Let us help Animals Foundation",
  manifest: "https://help-animals-five.vercel.app/",
  openGraph: {
    title: "Donate | Join the Movement",
    description:
      "Let us Help Animals Foundation is a 501(c)(3) non-profit organization and our mission is fully supported by our donors. Every donation is tax-deductible and goes towards our community programs. Monthly contributions are encouraged, so we can plan for the continued support of our programs",
    images: [
      {
        url: "https://help-animals-five.vercel.app/images/donate_img.jpg",
        width: 1200,
        height: 630,
        alt: "Join the Movement",
      },
    ],
    url: "https://help-animals-five.vercel.app/",
  },
  twitter: {
    title: "Donate | Join the Movement",
    description:
      "Let us Help Animals Foundation is a 501(c)(3) non-profit organization and our mission is fully supported by our donors. Every donation is tax-deductible and goes towards our community programs. Monthly contributions are encouraged, so we can plan for the continued support of our programs",
    images: [
      {
        url: "https://help-animals-five.vercel.app/images/donate_img.jpg",
        width: 1200,
        height: 630,
        alt: "Join the Movement",
      },
    ],
    site: "https://help-animals-five.vercel.app/",
  },
  keywords: [
    "Animals foundation",
    "Donate | Join the Movement",
    "Beyond Spay & Neuter",
    "Direct Veterinary Care",
    " Support Our Mission",
    " Join the Movement",
    "Veterinary Excellence",
    "Make a Difference",
    "70,000+ lives saved",
    "San Diego Animal Spay & Neuter Center",
    "Why this foundation exists",
    "High-Volume, High-Quality Veterinary Care",
    "Our Expertise",
    "Be part of the change.",
    "Our Commitment to the Community",
    "Let us Help Animals Foundation",
    "Join Us in Making a Difference",
    "Every donation is tax-deductible",
    "Donation Amount",
    "You’re donating",
    "Monthly contributions ",
    "monthly donors",
    " Payment Methods",
    "Wire Transfer",
    "Donate",
  ],
};

export default function Donate() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      <DonateSection />
      <Recommendation />
      <Footer />
    </div>
  );
}
