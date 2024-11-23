import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="w-full md:w-[1280px] mx-auto bg-white flex flex-col md:flex-row 
    items-center justify-between px-4 md:px-0 py-8 md:py-0">
      {/* Text Content Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 
      px-4 md:pl-20 md:pr-[60px]">
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <h1 className="text-black text-3xl md:text-5xl lg:text-[56px] font-bold 
          font-['Roboto'] leading-tight md:leading-[67.20px]">
            Learn new skills online with ease
          </h1>
          <p className="text-black text-[12px] text-base md:text-lg font-normal font-['Roboto'] 
          leading-normal md:leading-[27px]">
            Discover a wide range of courses covering a variety of
            subjects, taught by expert instructors.
          </p>
        </div>
        
        {/* Buttons - Adjusted for smaller screens */}
        <div className="w-full flex flex-row gap-2 sm:gap-4 pt-4">
          <button className="flex-1 px-3 sm:px-6 py-3 bg-black rounded-[5px] 
          border border-black flex justify-center items-center">
            <span className="text-white text-sm sm:text-base font-normal font-['Roboto'] 
            leading-normal whitespace-nowrap">
              Start learning now
            </span>
          </button>
          <button className="flex-1 px-3 sm:px-6 py-3 rounded-[5px] border 
          border-black flex justify-center items-center">
            <span className="text-black text-sm sm:text-base font-normal font-['Roboto'] 
            leading-normal whitespace-nowrap">
              Explore Courses
            </span>
          </button>
        </div>
      </div>

      {/* Desktop/Laptop Image */}
      <div className="hidden md:block w-1/2 h-[800px]">
        <img
          className="w-full h-full object-cover"
          src="/images/women-hero.png"
          alt="Hero section woman"
        />
      </div>

      {/* Mobile Image */}
      <div className="md:hidden w-full flex justify-center mt-8">
        <Image 
          src="/images/girl-mobile.png"
          alt="Mobile hero image"
          width={428}
          height={390}
          className="w-full max-w-[428px] h-auto"
          priority
        />
      </div>
    </div>
  );
}
