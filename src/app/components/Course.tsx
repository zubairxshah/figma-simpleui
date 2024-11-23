import CourseCard from "../components/CourseCard"

export default function Home() {
  return (
    <div className="w-[320px] md:w-[1280px] min-h-[1742px] px-4 md:px-16 py-16 md:py-28 bg-white border border-[#676767] flex-col justify-start items-center gap-[60px] md:inline-flex">
      {/* Header Section */}
      <div className="w-[320px] md:w-[768px] h-[118px] md:flex-col justify-start items-center gap-4 md:flex">
        <div className="self-stretch w-[70%] md:w-[768px] h-[118px] block md:flex-col justify-start items-center gap-6 md:flex">
          <div className="self-stretch text-center text-black text-4xl md:text-[56px] font-bold font-['Roboto'] leading-[67.20px]">
            Courses
          </div>
          <div className="w-[249px] md:w-full text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
            Your Ultimate Guide to learning
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-col items-center gap-8 md:gap-16">
        {/* Navigation Tabs */}
        <div className="w-[320px] md:w-[336px] overflow-x-auto">
          <div className="flex justify-start items-center">
            <div className="px-4 py-2 border-b border-[#676767]">
              <div className="text-black text-base font-normal font-['Roboto'] whitespace-nowrap">
                Popular
              </div>
            </div>
            <div className="px-4 py-2">
              <div className="text-black text-base font-normal font-['Roboto'] whitespace-nowrap">
                Recommended
              </div>
            </div>
            <div className="px-4 py-2">
              <div className="text-black text-base font-normal font-['Roboto'] whitespace-nowrap">
                Best Price
              </div>
            </div>
          </div>
        </div>

        {/* First Row - Visible on both mobile and desktop */}
        <div className="w-[320px] md:w-[1312px] flex flex-col md:flex-row gap-8 md:gap-8">
          <CourseCard 
            image="/courses/image1.png" 
            pname="Design" 
            title="UX/UI Design 201" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
          />
          <CourseCard 
            image="/courses/image2.png" 
            pname="Programming" 
            title="Introduction to Python" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
          />
          <CourseCard 
            image="/courses/image3.png" 
            pname="Business" 
            title="Data Analysis for Beginners" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
          />
        </div>

        {/* Second Row - Hidden on mobile */}
        <div className="hidden md:flex w-[1312px] gap-16">
          <CourseCard 
            image="/courses/image4.png" 
            pname="Art" 
            title="Art Specialization" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
          />
          <CourseCard 
            image="/courses/image5.png" 
            pname="Law" 
            title="Rule of Law" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
          />
          <CourseCard 
            image="/courses/image6.png" 
            pname="Tech" 
            title="Introduction to webflow" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." 
          />
        </div>

        {/* View All Button */}
        <div className="w-auto px-4 py-2 rounded-[5px] border border-black flex justify-center items-center">
          <div className="text-black text-base font-normal font-['Roboto'] whitespace-nowrap">
            View All Courses
          </div>
        </div>
      </div>
    </div>
  );
}
