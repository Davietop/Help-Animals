import Navbar from "@/components/nav-bar";
import Hero from "./hero";
import Footer from "@/components/ui/footer";
import Image from "next/image";
import WhoWeAre from "./whoWeAre";
import Expertise from "./expertise";
import Facility from "./facility";
import Team from "./team";
import Commitment from "./commitment";

export const metadata = {
  title: "About Us",
  description:
    "Nine years of proven veterinary excellence. 70,000+ lives saved. One mission: ending pet homelessness through affordable, hands-on care.",
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Let us help Animals Foundation",
  manifest: "https://help-animals-five.vercel.app/",
  openGraph: {
    title: "About Us",
    description:
      "Nine years of proven veterinary excellence. 70,000+ lives saved. One mission: ending pet homelessness through affordable, hands-on care.",
    images: [
      {
        url: "https://help-animals-five.vercel.app/images/make_difference.jpg",
        width: 1200,
        height: 630,
        alt: "Every Pet Deserves a Chance. Every Family Deserves Support.",
      },
    ],
    url: "https://help-animals-five.vercel.app/",
  },
  twitter: {
    title: "About Us | Let us help Animals",
    description: "Every Pet Deserves a Chance. Every Family Deserves Support.",
    images: [
      {
        url: "https://help-animals-five.vercel.app/images/make_difference.jpg",
        width: 1200,
        height: 630,
        alt: "Every Pet Deserves a Chance. Every Family Deserves Support.",
      },
    ],
    site: "https://help-animals-five.vercel.app/",
  },
  keywords: [
    "Animals foundation",
    "About Us",
    "Beyond Spay & Neuter",
    "Direct Veterinary Care",
    " Support Our Mission",
    " veterinary care",
    "Veterinary Excellence",
    "Make a Difference",
    "70,000+ lives saved",
    "San Diego Animal Spay & Neuter Center",
    "Why this foundation exists",
    "High-Volume, High-Quality Veterinary Care",
    "Our Expertise",
    "Modern Surgical Suites",
    "Our Commitment to the Community",
    "Let us Help Animals Foundation",
    "Join Us in Making a Difference",
  ],
};

export default function Donate() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <WhoWeAre />

      <Expertise />
      <Facility />
      <Team />
      <Commitment />

      <Footer />
    </div>
  );
}
