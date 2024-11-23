export default function TeamSection() {
  return (
    <div className="w-[320px] md:w-[1280px] px-4 md:px-16 py-12 md:py-28 bg-[#f6f6f6] 
    flex flex-col justify-start items-center gap-8 md:gap-20">
      <div className="h-[109px] flex-col justify-start items-center gap-4 flex">
        <div className="self-stretch h-[109px] flex-col justify-start items-center gap-6 flex">
          <div className="self-stretch text-center text-black text-3xl md:text-5xl font-bold font-['Roboto'] leading-tight md:leading-[57.60px]">
            Our team
          </div>
          <div className="self-stretch text-center text-black text-base md:text-lg font-normal font-['Roboto'] leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 md:gap-24">
        {/* First Row - Always visible */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="flex flex-col justify-start items-center gap-6">
            <img
              className="w-20 h-20"
              src="/team/Image1.svg"
            />
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="flex flex-col justify-start items-center">
                <div className="text-center text-black text-xl font-semibold font-['Roboto'] leading-[30px]">
                  James Nduku
                </div>
                <div className="text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  Marketing Coordinator
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start gap-3.5">
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
              <div className="w-6 h-6 px-[3px] pt-[4.50px] pb-[4.20px] flex justify-center items-center" />
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-6">
            <img
              className="w-20 h-20"
              src="/team/Image2.svg"
            />
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="flex flex-col justify-start items-center">
                <div className="text-center text-black text-xl font-semibold font-['Roboto'] leading-[30px]">
                  Joseph Munyambu
                </div>
                <div className="text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  Nursing Assistant
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start gap-3.5">
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
              <div className="w-6 h-6 px-[3px] pt-[4.50px] pb-[4.20px] flex justify-center items-center" />
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-6">
            <img
              className="w-20 h-20"
              src="/team/Image3.svg"
            />
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="flex flex-col justify-start items-center">
                <div className="text-center text-black text-xl font-semibold font-['Roboto'] leading-[30px]">
                  Joseph Ngumbau
                </div>
                <div className="text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  Medical Assistant
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start gap-3.5">
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
              <div className="w-6 h-6 px-[3px] pt-[4.50px] pb-[4.20px] flex justify-center items-center" />
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
            </div>
          </div>
        </div>

        {/* Second Row - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-3 gap-16">
          <div className="flex flex-col justify-start items-center gap-6">
            <img
              className="w-20 h-20"
              src="/team/Image4.svg"
            />
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="flex flex-col justify-start items-center">
                <div className="text-center text-black text-xl font-semibold font-['Roboto'] leading-[30px]">
                  Erick Kipkemboi
                </div>
                <div className="text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  Web Designer
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start gap-3.5">
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
              <div className="w-6 h-6 px-[3px] pt-[4.50px] pb-[4.20px] flex justify-center items-center" />
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-6">
            <img
              className="w-20 h-20"
              src="/team/Image5.svg"
            />
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="flex flex-col justify-start items-center">
                <div className="text-center text-black text-xl font-semibold font-['Roboto'] leading-[30px]">
                  Stephen Kerubo
                </div>
                <div className="text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  President of Sales
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start gap-3.5">
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
              <div className="w-6 h-6 px-[3px] pt-[4.50px] pb-[4.20px] flex justify-center items-center" />
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-6">
            <img
              className="w-20 h-20"
              src="/team/Image6.svg"
            />
            <div className="flex flex-col justify-start items-center gap-4">
              <div className="flex flex-col justify-start items-center">
                <div className="text-center text-black text-xl font-semibold font-['Roboto'] leading-[30px]">
                  John Leboo
                </div>
                <div className="text-center text-black text-lg font-normal font-['Roboto'] leading-[27px]">
                  Dog Trainer
                </div>
              </div>
            </div>
            <div className="flex justify-start items-start gap-3.5">
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
              <div className="w-6 h-6 px-[3px] pt-[4.50px] pb-[4.20px] flex justify-center items-center" />
              <div className="w-6 h-6 p-[3px] flex justify-center items-center" />
            </div>
          </div>
        </div>

        {/* View All Button - Only visible on mobile */}
        <div className="md:hidden w-full flex justify-center">
          <button className="px-4 py-2 rounded-[5px] border border-black">
            <span className="text-black text-base font-normal font-['Roboto'] leading-normal">
              View All Team
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
