export default function Testimonial(){
  return(
      <div className="w-[320px] md:w-[1280px] h-auto md:h-[830.89px] px-4 md:px-16 py-16 md:py-28 bg-[#f6f6f6] 
      flex-col justify-center items-start gap-8 md:gap-20 inline-flex">
          <div className="flex-col justify-start items-start gap-4 md:gap-6 flex">
            <div className="w-full md:w-[560px] text-black text-3xl md:text-5xl font-bold font-['Roboto'] leading-tight md:leading-[57.60px]">
              Customer testimonials
            </div>
            <div className="w-full md:w-[560px] text-black text-base md:text-lg font-normal font-['Roboto'] leading-[27px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>

          {/* Mobile View */}
          <div className="md:hidden self-stretch flex-col justify-start items-start gap-8 flex">
            <div className="w-full p-8 border border-black flex-col justify-start items-start gap-6 flex">
              <div className="justify-start items-start gap-1 inline-flex" />
              <div className="self-stretch flex-col justify-start items-start gap-6 flex">
                <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare."
                </div>
                <div className="justify-start items-center gap-5 inline-flex">
                  <img
                    className="w-14 h-14 rounded-full"
                    src="/team/image3.svg"
                  />
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">
                      James Nduku
                    </div>
                    <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                      Software Developer
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Navigation */}
            <div className="w-full flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-black rounded-full" />
                <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
                <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
                <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
                <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
              </div>
              <div className="flex gap-4">
                <button className="w-12 h-12 p-3 rounded-full border border-black flex items-center justify-center">
                  <img src="/team/arrowleft.svg" className="ml-2" alt="Previous" />
                </button>
                <button className="w-12 h-12 p-3 rounded-full border border-black flex items-center justify-center">
                  <img src="/team/arrowright.svg" className="ml-2" alt="Next" />
                </button>
              </div>
            </div>
          </div>

          {/* Desktop View - Original Layout */}
          <div className="hidden md:flex self-stretch h-[417.89px] flex-col justify-start items-start gap-12">
            <div className="self-stretch justify-start items-start gap-8 inline-flex">
              <div className="grow shrink basis-0 p-8 border border-black flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-start gap-1 inline-flex" />
                <div className="self-stretch h-[215px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </div>
                  <div className="justify-start items-center gap-5 inline-flex">
                    <img
                      className="w-14 h-14 rounded-full"
                      src="/team/image3.svg"
                    />
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">
                        James Nduku
                      </div>
                      <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                        Software Developer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-8 border border-black flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-start gap-1 inline-flex" />
                <div className="self-stretch h-[215px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </div>
                  <div className="justify-start items-center gap-5 inline-flex">
                    <img
                      className="w-14 h-14 rounded-full"
                      src="/team/image1.svg"
                    />
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">
                        Erick Kipkemboi
                      </div>
                      <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                        Scrum Master
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grow shrink basis-0 p-8 border border-black flex-col justify-start items-start gap-6 inline-flex">
                <div className="justify-start items-start gap-1 inline-flex" />
                <div className="self-stretch h-[215px] flex-col justify-start items-start gap-6 flex">
                  <div className="self-stretch text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare."
                  </div>
                  <div className="justify-start items-center gap-5 inline-flex">
                    <img
                      className="w-14 h-14 rounded-full"
                      src="/team/image6.svg"
                    />
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="text-black text-base font-semibold font-['Roboto'] leading-normal">
                        Stephen Kerubo
                      </div>
                      <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
                        UI/UX Designer
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Desktop Navigation */}
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="justify-start items-start gap-2 flex">
                <div className="w-2 h-2 bg-black rounded-full" />
                <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
                <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
                <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
                <div className="w-2 h-2 bg-[#8d8d8d] rounded-full" />
              </div>
              <div className="justify-start items-start gap-[15px] flex">
                <button className="w-12 h-12 p-3 rounded-full border border-black flex items-center justify-center">
                  <img src="/team/arrowleft.svg" className="" alt="Previous" />
                </button>
                <button className="w-12 h-12 p-3 rounded-full border border-black flex items-center justify-center">
                  <img src="/team/arrowright.svg" className="" alt="Next" />
                </button>
              </div>
            </div>
          </div>
        </div>
  )
}
