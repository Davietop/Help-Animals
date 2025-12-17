import { Nunito } from "next/font/google";
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-nunito",
});
export default function Team(){
    return <div id="team" className={`${nunito.className} px-5  lg:px-10`}>
          <div className="  pt-5 lg:pt-0 ">
            <h1 className=" text-2xl border-l-4 border-[#8a5854] pl-4 lg:text-2xl font-bold leading-[1.05] text-gray-900 lg:mt-6 mb-4 lg:mb-4">
         Meet Our Team
         
        </h1>

        <h2 className="leading-loose text-gray-700 tracking-wide">
       Our foundation is powered by dedicated veterinary professionals who bring passion, expertise, and compassion to every surgery. Meet the team making a difference in San Diego.
        </h2>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 my-10 ">
  {[
    {
      image: "👨‍⚕️",
      name: "Dr. [Name]",
      role: "Lead Veterinarian",
      bio: "With over [X] years of experience in high-volume spay and neuter surgery, Dr. [Name] leads our surgical team with expertise and compassion.",
    },
    {
      image: "👩‍⚕️",
      name: "Dr. [Name]",
      role: "Veterinarian",
      bio: "Specializing in soft tissue surgeries, Dr. [Name] ensures every pet receives the highest standard of care.",
    },
    {
      image: "🧑‍⚕️",
      name: "[Name]",
      role: "Veterinary Technician",
      bio: "Ensures smooth surgical operations and provides exceptional pre-op and post-op care for every animal.",
    },
    {
      image: "🧑‍💼",
      name: "[Name]",
      role: "Operations Manager",
      bio: "Oversees daily operations and community outreach programs to help us serve as many families as possible.",
    },
  ].map(({ image, name, role, bio }, index) => (
    <div
      key={index}
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl
                 transition-all duration-300
                 p-6 md:p-8  lg:p-4 flex flex-col items-center text-center
                 gap-y-3 md:gap-y-4"
    >
      {/* avatar */}
      <div
        className="h-20 w-20 md:h-24 md:w-24 rounded-full
                   bg-[#8a5854]/30 flex items-center justify-center
                   text-3xl md:text-4xl"
        aria-hidden
      >
        {image}
      </div>

      {/* name */}
      <h3 className="text-base md:text-lg xl:text-xl font-semibold text-[#8a5854]">
        {name}
      </h3>

      {/* role */}
      <p className="text-sm font-bold tracking-widest uppercase text-gray-500">
        {role}
      </p>

      {/* bio */}
      <p className="text-base xl:text-lg text-gray-600 leading-relaxed md:leading-loose">
        {bio}
      </p>
    </div>
  ))}
</div>


    </div>
}