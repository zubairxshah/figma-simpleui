export default function LogosSection(){
  return (
    <div className="w-full md:w-[1280px] py-8 md:py-16 px-4 md:px-16 mx-auto 
    bg-[#f6f6f6] border border-[#676767]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Title - Desktop version */}
        <div className="hidden md:block text-black text-[24px] font-bold font-['Roboto'] 
        text-left mr-[-60px]">
          Trusted by 2000+ companies worldwide.
        </div>

        {/* Title - Mobile version */}
        <div className="md:hidden text-black text-[16px] font-bold font-['Roboto'] 
        text-left w-full">
          Trusted by the world's best companies [social proof to build credibility]
        </div>

        {/* Logos section */}
        <div className="w-full md:w-auto mr-[-50px]">
          {/* Mobile: 3 logos */}
          <div className="md:hidden flex flex-row justify-between items-center 
          gap-4 px-2">
            <div className="w-[30%] h-auto">
              <img src="/logos/logo-ipsum.png" alt="Logo 1" className="w-full h-auto"/>
            </div>
            <div className="w-[30%] h-auto">
              <img src="/logos/logo-logo.png" alt="Logo 2" className="w-full h-auto"/>
            </div>
            <div className="w-[30%] h-auto">
              <img src="/logos/logo-ipsum2.png" alt="Logo 3" className="w-full h-auto"/>
            </div>
          </div>

          {/* Desktop: All 6 logos */}
          <div className="hidden md:flex flex-nowrap justify-start 
          gap-[19.12px]">
            <div className="w-[123.80px] h-auto">
              <img src="/logos/logo-ipsum.png" alt="Logo 1" className="w-full h-auto"/>
            </div>
            <div className="w-[123.80px] h-auto">
              <img src="/logos/logo-logo.png" alt="Logo 2" className="w-full h-auto"/>
            </div>
            <div className="w-[123.80px] h-auto">
              <img src="/logos/logo-ipsum2.png" alt="Logo 3" className="w-full h-auto"/>
            </div>
            <div className="w-[123.80px] h-auto">
              <img src="/logos/logo-ipsum3.png" alt="Logo 4" className="w-full h-auto"/>
            </div>
            <div className="w-[123.80px] h-auto">
              <img src="/logos/logo-ipsum4.png" alt="Logo 5" className="w-full h-auto"/>
            </div>
            <div className="w-[123.80px] h-auto">
              <img src="/logos/logo-ipsum5.png" alt="Logo 6" className="w-full h-auto"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
