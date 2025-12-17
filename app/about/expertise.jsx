import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});

export default function Expertise() {
  return (
    <div className={`${nunito.className} bg-white pb-10 `}>
      <div className="   px-5 lg:px-10">
        <h1 className=" text-2xl border-l-4 border-[#8a5854] pl-4 lg:text-2xl font-bold leading-[1.05] text-gray-900 lg:mt-6 mb-4 lg:mb-4">
          Our Expertise
          <p className="text-base lg:text-lg mt-2 w-full font-semibold">
            High-Volume, High-Quality Veterinary Care
          </p>
        </h1>

        <h2 className="leading-relaxed text-gray-700 tracking-wide">
          Running a successful spay-and-neuter clinic requires specialized
          skills. Our veterinary team has mastered the balance between
          efficiency and excellence, allowing us to serve more animals without
          compromising safety or surgical outcomes.
        </h2>

        <div className="">
          <h2 className="text-xl leading-relaxed tracking-wide font-bold text-left my-6 ">
            What &quot;high-volume, high-quality&quot; means?
          </h2>

          <ul className="space-y-6 eading-relaxed tracking-wide ">
            {/* List Item */}
            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-2">
                <span className="h-2 w-2 block bg-[#8a5854] rounded-full"></span>
              </div>
              <p className="text-left text-gray-700">
                Streamlined surgical protocols that maximize our daily capacity
              </p>
            </li>

            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-2">
                <span className="h-2 w-2 block bg-[#8a5854] rounded-full"></span>
              </div>
              <p className="text-left text-gray-700">
                Specialized training in rapid, safe sterilization techniques
              </p>
            </li>

            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-2">
                <span className="h-2 w-2 block bg-[#8a5854] rounded-full"></span>
              </div>
              <p className="text-left text-gray-700">
                State-of-the-art equipment designed for volume surgery
              </p>
            </li>

            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-2">
                <span className="h-2 w-2 block bg-[#8a5854] rounded-full"></span>
              </div>
              <p className="text-left text-gray-700">
                Comprehensive pain management and post-operative care
              </p>
            </li>

            <li className="flex items-start space-x-4">
              <div className="flex-shrink-0 mt-2">
                <span className="h-2 w-2 block bg-[#8a5854] rounded-full"></span>
              </div>
              <p className="text-left text-gray-700">
                Low complication rates that meet or exceed industry standards
              </p>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-11/12 mx-auto h-fit py-14 lg:py-18 bg-[#8a5854] text-white flex items-center justify-center mb-6 flex-col gap-y-6 mt-8 px-6 rounded-3xl text-left md:text-center">
           <h1 className="text-xl lg:text-2xl leading-relaxed w-full lg:w-10/12 xl:w-8/12 font-bold lg:text-3xl">When a beloved family pet needs emergency surgery, financial hardship should not be a death sentence</h1>
           <p className="text-lg leading-relaxed  lg:text-xl">Our surgical team has the expertise to handle complex cases, and our foundation ensures cost is not the deciding factor between life and death.</p>
        </div>
      </div>
    </div>
  );
}
