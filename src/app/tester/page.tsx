import CourseCard from "../components/CourseCard"


export default function Home() {
  return (
<div className="w-[1280px] h-[1742px] px-16 py-28 bg-white border border-[#676767] flex-col justify-center items-center gap-[60px] inline-flex">
          <div className="h-[118px] flex-col justify-start items-center gap-4 flex">
            <div className="self-stretch h-[118px] flex-col justify-start items-center gap-6 flex">
              <div className="self-stretch text-center text-black text-[56px] font-bold font-['Roboto'] leading-[67.20px]">
                Courses
              </div>
              <div className="self-stretch text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                Your Ultimate Guide to learning
              </div>
            </div>
          </div>
          <div className="self-stretch h-[1340px] flex-col justify-start items-center gap-16 flex">
            <div className="justify-start items-center inline-flex">
              <div className="px-4 py-2 border-b border-[#676767] justify-center items-center gap-2 flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Popular
                </div>
              </div>
              <div className="px-4 py-2 justify-center items-center gap-2 flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Recommended
                </div>
              </div>
              <div className="px-4 py-2 justify-center items-center gap-2 flex">
                <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                  Best Price
                </div>
              </div>
            </div>
            <div className="w-[1312px] h-[1132px] flex-col justify-start items-center gap-16 flex">
              <CourseCard image="/courses/image1.png" pname="Design" title="UX/UI Design 201" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
              <CourseCard image="/courses/image2.png" pname="Programming" title="Introduction to Python" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
              <CourseCard image="/courses/image3.png" pname="Business" title="Data Analysis for Beginners" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
            </div>
            <div className="w-[1312px] h-[1132px] flex-col justify-start items-center gap-16 flex">
              <CourseCard image="/courses/image4.png" pname="Art" title="Art Specialization" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
              <CourseCard image="/courses/image5.png" pname="Law" title="Rule of Law" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
              <CourseCard image="/courses/image6.png" pname="Tech" title="Introduction to webflow" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
              
            </div>
            <div className="px-4 py-2 rounded-[5px] border border-black justify-center items-center gap-2 inline-flex">
              <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                View All Courses
              </div>
            </div>
          </div>
        </div>
          
  );
}
