import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
export default function Footer(){
 return (
    <footer className={`${nunito.className} bg-[#a76765] text-white py-12 px-6`}>
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">

        {/* LEFT COLUMN */}
        <div>
          <h3 className="text-xl font-bold mb-4">Navigation</h3>
          <ul className="space-y-2 text-base sm:text-lg">
            <li className="transition cursor-pointer hover:text-white/80">Donate</li>
            <li className="transition cursor-pointer hover:text-white/80">Mission</li>
            <li className="transition cursor-pointer hover:text-white/80">Our Process</li>
            <li className="transition cursor-pointer hover:text-white/80">Team</li>
            <li className="transition cursor-pointer hover:text-white/80">Testimonials</li>
          </ul>
        </div>

        {/* MIDDLE COLUMN */}
        <div className=" md:mt-0">
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <ul className="space-y-2 text-base sm:text-lg">
            <li className="transition cursor-pointer hover:text-white/80">Who We Are</li>
            <li className="transition cursor-pointer hover:text-white/80">Reach Out</li>
          </ul>
        </div>

        {/* RIGHT COLUMN - SOCIALS */}
        <div className="hidden sm:block md:mt-0">
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <div className="flex items-center gap-4 flex-wrap mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
              <FaInstagram className="text-[#C13584] w-6 h-6" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
              <FaYoutube className="text-[#FF0000] w-6 h-6" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
              <FaWhatsapp className="text-[#25D366] w-6 h-6" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
              <FaFacebookF className="text-[#1877F2] w-6 h-6" />
            </a>
          </div>
        </div>

      </div>


       <div className="sm:hidden mt-8 md:mt-0">
          <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
          <div className="flex items-center gap-4 flex-wrap mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
              <FaInstagram className="text-[#C13584] w-6 h-6" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
              <FaYoutube className="text-[#FF0000] w-6 h-6" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
              <FaWhatsapp className="text-[#25D366] w-6 h-6" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:opacity-80 transition">
              <FaFacebookF className="text-[#1877F2] w-6 h-6" />
            </a>
          </div>
        </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-10 text-sm text-white/80">
        © {new Date().getFullYear()} Let Us Help Animals Foundation. All rights reserved.
      </div>
    </footer>
  );

}