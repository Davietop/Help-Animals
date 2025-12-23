import Navbar from "@/components/nav-bar";
import Hero from "./hero";
import Explanation from "./explain";
import Footer from "@/components/ui/footer";
import MovementSection from "./movement";
export const metadata = {
  title: "Our Process",
  description: "When we founded Let us Help Animals Foundation, we built it on nine years of proven success—70,000+ surgeries that have directly prevented pet homelessness across San Diego. Our approach is different because we do not just coordinate care; we deliver it ourselves. High-Quality, High-Volume Surgical Care has become the backbone of everything we do, enabling us to save lives at scale while maintaining exceptional medical standards",
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Let us help Animals Foundation",
  manifest: "https://help-animals-five.vercel.app/",
  openGraph: {
    title: "Our Process",
  description: "When we founded Let us Help Animals Foundation, we built it on nine years of proven success—70,000+ surgeries that have directly prevented pet homelessness across San Diego. Our approach is different because we do not just coordinate care; we deliver it ourselves. High-Quality, High-Volume Surgical Care has become the backbone of everything we do, enabling us to save lives at scale while maintaining exceptional medical standards",
    images: [
      {
        url: "https://help-animals-five.vercel.app/images/emergency_care.jpg",
        width: 1200,
        height: 630,
        alt: "Every Pet Deserves a Chance. Every Family Deserves Support.",
      },
    ],
    url: "https://help-animals-five.vercel.app/",
  },
  twitter: {
    title: "Our Process",
  description: "When we founded Let us Help Animals Foundation, we built it on nine years of proven success—70,000+ surgeries that have directly prevented pet homelessness across San Diego. Our approach is different because we do not just coordinate care; we deliver it ourselves. High-Quality, High-Volume Surgical Care has become the backbone of everything we do, enabling us to save lives at scale while maintaining exceptional medical standards",
    images: [
      {
        url: "https://help-animals-five.vercel.app/images/emergency_care.jpg",
        width: 1200,
        height: 630,
        alt: "Every Pet Deserves a Chance. Every Family Deserves Support.",
      },
    ],
    site: "https://help-animals-five.vercel.app/",
  },
  keywords: [
    "Animals foundation",
    'Our Process',
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
    'Emergency Intervention',
    'Community Education',
    'Sterilizes, vaccinates & microchips', 'My Pet is Too Young', 'One Litter is Healthy'
  ],
};

export default function Process (){
    return <div>
        <Navbar/>
        <Hero/>
        <Explanation/>
        <MovementSection/>
        <Footer/>
        
        
    </div>
}