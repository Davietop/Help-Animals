"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IBM_Plex_Sans } from "next/font/google";
import { HeartHandshake } from "lucide-react";

import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const paths = {
  home: "/",

  mission: "/mission",
  process: "/process",
  team: "/team",
  testimonial: "/testimonial",
  contact: "/contact",
  aboutUs: '/aboutUs',
  reach: '/reachOut'
};

export const links = [
  {
    name: "Mission",
    link: paths.mission,
  },
  {
    name: "Our Process",
    link: paths.process,
  },
  {
    name: "Team",
    link: paths.team,
  },
  {
    name: "Testimonial",
    link: paths.testimonial,
  },
  {
    name: "Contact",
    link: paths.contact,
  },
  {
    name: "About Us",
    link: paths.aboutUs,
  },
  {
    name: "Reach Out",
    link: paths.reach,
  },
];

const PcNav = () => {
  const pathname = usePathname();

  const shouldRenderWhite = pathname === paths.home;

  return (
    <nav
      className={`text-white  ${nunito.className}  h-[80px] hidden xl:flex justify-around  relative z-10  items-center  ${
        pathname === paths.team ? "lg:relative" : ""
      }  `}
    >
      <>
        <Link href="/">
          <Image
            src={`/images/logo_background.png`}
            alt="Afrindependent.svg"
            width={150}
            height={52}
            priority
          />
        </Link>

        <ul className="flex gap-x-2 items-center text-base font-semibold">
          {links.map(({ name, link }, index) => {
            const active = pathname === link;
            return (
              <li key={link} className="flex items-center">
                <Link href={link} className={`px-4 pb-1 text-black block`}>
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </>

      <div className="flex items-center gap-x-4">
        <Link
          href="/donate"
          className="flex items-center justify-center gap-3 border-2 bg-white border-[#a76765]  text-[#a76765]  text-base hover:text-deepForest hover:bg-white dark:hover:text-black font-semibold py-1.5 px-6 rounded-xl shadow-md transition duration-300"
        >
          <HeartHandshake className="w-5 h-5" />
          Donate
        </Link>
      </div>
    </nav>
  );
};

export default PcNav;
