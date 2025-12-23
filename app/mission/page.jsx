import Navbar from "@/components/nav-bar";
import Hero from "./hero";
import MissionStatement from "./missionStatement";
import Problem from "./problem";
import Solutions from "./solution";
import Approach from "./approach";
import Values from "./values";
import Footer from "@/components/ui/footer";
import VisionSection from "./vision";
import HelpUs from "./helpUs";

export const metadata = {
  title: "Our Mission",
  description: "Ending Pet Homelessness Starts With Compassion",
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Let us help Animals Foundation",
  manifest: "https://help-animals-five.vercel.app/",
  openGraph: {
    title: "Our Mission",
    description:
      "Affordable spay, neuter, and essential veterinary care—so every family can care for their pets, no matter their financial situation. Your support prevents overpopulation, reduces shelter overcrowding, and keeps pets at home with the families who love them.",
    images: [
      {
        url: "https://help-animals-five.vercel.app/images/mission_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Every Pet Deserves a Chance. Every Family Deserves Support.",
      },
    ],
    url: "https://help-animals-five.vercel.app/",
  },
  twitter: {
    title: "Our Mission",
    description:
      "Affordable spay, neuter, and essential veterinary care—so every family can care for their pets, no matter their financial situation. Your support prevents overpopulation, reduces shelter overcrowding, and keeps pets at home with the families who love them.",
    images: [
      {
        url: "https://help-animals-five.vercel.app/images/mission_hero.jpg",
        width: 1200,
        height: 630,
        alt: "Every Pet Deserves a Chance. Every Family Deserves Support.",
      },
    ],
    site: "https://help-animals-five.vercel.app/",
  },
  keywords: [
    "Animals foundation",
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
    "Compassion",
    "Pet Homelessness",
    " Animal Overpopulation",
    "Affordable Pet Care",
    "Trust And Consistency",
    "adoption",
    "Community",
    "state-of-the-art veterinary facility.",
  ],
};

export default function Missions() {
  return (
    <div>
      <Navbar />
      <Hero />
      <MissionStatement />
      <Problem />
      <Solutions />
      <Approach />
      <Values />
      <VisionSection />
      <HelpUs />
      <Footer />
    </div>
  );
}
