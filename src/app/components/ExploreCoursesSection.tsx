function ExploreCoursesSection(){
  return(
      <div className="w-full md:w-[1280px] min-h-[800px] px-4 md:px-16 py-12 md:py-28 
      bg-white border border-[#676767] flex flex-col justify-center items-center gap-8 md:gap-20 mx-auto">
          {/* Title Section */}
          <div className="flex flex-col gap-4 md:gap-6 text-center md:text-left w-full">
              <div className="text-black text-3xl md:text-5xl font-bold font-['Roboto'] 
              leading-tight md:leading-[57.60px]">
                  Explore Courses By Category
              </div>
              <div className="text-black text-base md:text-lg font-normal font-['Roboto'] 
              leading-normal md:leading-[27px]">
                  Discover a wide range of courses covering a variety of subjects,
                  taught by expert instructors.
              </div>
          </div>

          {/* Courses Grid */}
          <div className="w-full flex flex-col gap-8">
              {/* First Row - Always Visible */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  {/* First Course */}
                  <div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] flex items-center gap-8">
                      <div className="p-[34px] bg-white rounded-[5px] flex">
                          <div className="w-8 h-8 relative">
                              <div className="w-[25.95px] h-[16.23px] left-[3.03px] top-[2.67px] absolute">
                                  <img src="/icons/pen-tool-2.svg" alt="Design icon" />
                              </div>
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                          <div className="text-black text-xl font-semibold font-['Roboto']">
                              Design & Development
                          </div>
                          <div className="text-black text-lg font-normal font-['Roboto']">
                              50+ Courses Available
                          </div>
                      </div>
                  </div>

                  {/* Second Course */}
                  <div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] flex items-center gap-8">
                      <div className="p-[34px] bg-white rounded-[5px] flex">
                          <div className="w-8 h-8 relative">
                              <img src="/icons/volume-high.svg" alt="Marketing icon" />
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                          <div className="text-black text-xl font-semibold font-['Roboto']">
                              Marketing
                          </div>
                          <div className="text-black text-lg font-normal font-['Roboto']">
                              50+ Courses Available
                          </div>
                      </div>
                  </div>

                  {/* Third Course */}
                  <div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] flex items-center gap-8">
                      <div className="p-[34px] bg-white rounded-[5px] flex">
                          <div className="w-8 h-8 relative">
                              <img src="/icons/group.svg" alt="Development icon" />
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                          <div className="text-black text-xl font-semibold font-['Roboto']">
                              Development
                          </div>
                          <div className="text-black text-lg font-normal font-['Roboto']">
                              50+ Courses Available
                          </div>
                      </div>
                  </div>
              </div>

              {/* Second Row - Hidden on Mobile */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                  {/* Fourth Course */}
                  <div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] flex items-center gap-8">
                      <div className="p-[34px] bg-white rounded-[5px] flex">
                          <div className="w-8 h-8 relative">
                              <img src="/icons/microphone.svg" alt="Communication icon" />
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                          <div className="text-black text-xl font-semibold font-['Roboto']">
                              Communication
                          </div>
                          <div className="text-black text-lg font-normal font-['Roboto']">
                              50+ Courses Available
                          </div>
                      </div>
                  </div>

                  {/* Fifth Course */}
                  <div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] flex items-center gap-8">
                      <div className="p-[34px] bg-white rounded-[5px] flex">
                          <div className="w-8 h-8 relative">
                              <img src="/icons/link.svg" alt="Digital Marketing icon" />
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                          <div className="text-black text-xl font-semibold font-['Roboto']">
                              Digital Marketing
                          </div>
                          <div className="text-black text-lg font-normal font-['Roboto']">
                              50+ Courses Available
                          </div>
                      </div>
                  </div>

                  {/* Sixth Course */}
                  <div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] flex items-center gap-8">
                      <div className="p-[34px] bg-white rounded-[5px] flex">
                          <div className="w-8 h-8 relative">
                              <img src="/icons/arrow-2.svg" alt="Self Development icon" />
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                          <div className="text-black text-xl font-semibold font-['Roboto']">
                              Self Development
                          </div>
                          <div className="text-black text-lg font-normal font-['Roboto']">
                              50+ Courses Available
                          </div>
                      </div>
                  </div>

                  {/* Seventh Course */}
                  <div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] flex items-center gap-8">
                      <div className="p-[34px] bg-white rounded-[5px] flex">
                          <div className="w-8 h-8 relative">
                              <img src="/icons/briefcase.svg" alt="Self Development icon" />
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                          <div className="text-black text-xl font-semibold font-['Roboto']">
                              Business
                          </div>
                          <div className="text-black text-lg font-normal font-['Roboto']">
                              50+ Courses Available
                          </div>
                      </div>
                  </div>

                  {/* Eighth Course */}
                  <div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] flex items-center gap-8">
                      <div className="p-[34px] bg-white rounded-[5px] flex">
                          <div className="w-8 h-8 relative">
                              <img src="/icons/book1.svg" alt="Self Development icon" />
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                          <div className="text-black text-xl font-semibold font-['Roboto']">
                              Finance
                          </div>
                          <div className="text-black text-lg font-normal font-['Roboto']">
                              50+ Courses Available
                          </div>
                      </div>
                  </div>

                  {/* Ninth Course */}
                  <div className="h-[132px] p-4 bg-[#f6f6f6] rounded-[5px] flex items-center gap-8">
                      <div className="p-[34px] bg-white rounded-[5px] flex">
                          <div className="w-8 h-8 relative">
                              <img src="/icons/book2.svg" alt="Self Development icon" />
                          </div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                          <div className="text-black text-xl font-semibold font-['Roboto']">
                              Consulting
                          </div>
                          <div className="text-black text-lg font-normal font-['Roboto']">
                              50+ Courses Available
                          </div>
                      </div>
                  </div>

              </div>

              

              {/* View All Courses Button */}
              <div className="flex justify-center items-center mt-4 md:mt-8">
                  <button className="w-[155px] h-[48px]  bg-white text-black rounded-[5px] 
                  font-['Roboto'] text-center font-normal text-[16px] border border-black">
                      View All Courses
                  </button>
              </div>
          </div>
      </div>
  )
}

export default ExploreCoursesSection;
