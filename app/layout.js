import "./globals.css";

export const metadata = {
    metadataBase: new URL("https://help-animals.vercel.app"),
  title: "Let us help Animals",
  description: "Every Pet Deserves a Chance. Every Family Deserves Support.",
  icons: {
    icon: "/favicon.ico",
  },
  applicationName: "Let us help Animals",
  manifest: "https://help-animals-five.vercel.app/",
  openGraph: {
    title: "Let us help Animals",
    description: "Every Pet Deserves a Chance. Every Family Deserves Support.",
    images: [
      {
        url: "ttps://help-animals-five.vercel.app/images/hero_banner2.jpg",
        width: 1200,
        height: 630,
        alt: "Every Pet Deserves a Chance. Every Family Deserves Support.",
      },
    ],
    url: "https://help-animals-five.vercel.app/",
  },
  twitter: {
    title: "Let us help Animals",
    description: "Every Pet Deserves a Chance. Every Family Deserves Support.",
    images: [
      {
        url: "https://help-animals-five.vercel.app/images/hero_banner2.jpg",
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
    "Direct Surgical Care",
    " Support Our Mission",
    " veterinary care",
    "Veterinary Excellence",
    "Make a Difference",
     "Let us Help Animals Foundation",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
