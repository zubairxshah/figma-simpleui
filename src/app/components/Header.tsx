export default function Header(){
    return(
        <div className="hidden md:w-[1280px] h-[54px] pl-[62px] pr-16 mb-6 bg-[#f6f6f6] shadow-inner 
        border border-[#676767] 
        flex-col justify-start items-center md:flex">
          <div className="self-stretch py-3 justify-start items-center gap-8 inline-flex">
            <div className="justify-start items-center gap-4 flex">
              <div className="text-black text-sm font-normal font-['Roboto'] leading-[21px]">
                Phone Number: 956 742 455 678
              </div>
              <div className="w-[30px] h-[0px] mt-7 origin-top-left -rotate-90 border border-[#676767]"></div>
              <div className="text-black text-sm font-normal font-['Roboto'] leading-[21px] ml-[-20px]">
                Email:info@ddsgnr.com
              </div>
            </div>
            <div className="grow shrink basis-0 h-6 justify-end items-center gap-4 flex">
              <div className="justify-start items-start gap-3 flex">
                <div className="w-6 h-6 px-[7px] py-[3px] justify-center items-center flex" />
                <div className="w-6 h-6 p-[3px] justify-center items-center flex" />
                <div className="w-6 h-6 px-[3px] pt-[4.50px] pb-[4.20px] justify-center items-center flex" />
                <div className="w-6 h-6 p-[3px] justify-center items-center flex" />
              <img src="/icons/Social-Links.png" />
              </div>
            </div>
          </div>
        </div>
    )
}