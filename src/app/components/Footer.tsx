function Footer() {
  return (
    <div
      className="w-full md:w-[1280px] p-4 md:p-20 bg-white flex flex-col 
        justify-start items-center gap-10 md:gap-20"
    >
      <div className="w-full flex flex-col justify-start items-start gap-10 md:gap-20">
        {/* Newsletter Section */}
        <div className="w-full flex flex-col md:flex-row md:justify-between items-start gap-8 md:gap-0">
          <div className="w-full md:w-[500px] flex-col justify-start items-start">
            <div className="text-black text-lg font-semibold font-['Roboto'] leading-[27px]">
              Subscribe to our newsletter
            </div>
            <div className="text-black text-base font-normal font-['Roboto'] leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
          <div className="w-full md:w-[400px] flex-col justify-start items-start gap-4">
            <div className="w-full flex flex-col sm:flex-row justify-start items-start gap-4">
              <div className="w-full grow shrink basis-0 h-12 p-3 bg-white rounded-[5px] border border-black flex items-center">
                <div className="grow shrink basis-0 text-[#4f4f4f] text-base font-normal font-['Roboto']">
                  Enter your email
                </div>
              </div>
              <div className="w-full sm:w-auto px-6 py-3 rounded-[5px] border border-black flex justify-center items-center">
                <div className="text-black text-base font-normal font-['Roboto']">
                  Subscribe
                </div>
              </div>
            </div>
            <div className="self-stretch">
              <span className="text-black text-xs font-normal font-['Roboto'] leading-[18px]">
                By subscribing you agree to with our{" "}
              </span>
              <span className="text-black text-xs font-normal font-['Roboto'] underline leading-[18px]">
                Privacy Policy
              </span>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:justify-start md:items-start gap-10">
          {/* Logo Section */}
          <div className="w-full md:w-1/4 items-center justify-center">
            <div className="py-[29px] flex-col justify-center md:items-start items-center gap-[10.50px]">
              <div className="flex items-center justify-center gap-2">
                <div className="w-[32.58px] h-[30.38px] md:relative md:justify-normal justify-center items-center md:items-start">
                  <img src="/logos/Frame1.svg" />
                </div>
                <div className="text-black text-[25.07px] font-bold font-['Inter'] text-center md:text-justify">
                  Ddsgnr
                </div>
              </div>
            </div>
          </div>

          {/* Courses Section - Show on all screen sizes */}
          <div className="w-full md:w-1/4 flex-col justify-start items-start gap-4">
            <div className="text-black text-center md:text-justify font-semibold font-['Roboto']">
              Courses
            </div>
            <div className="w-full flex-col justify-start items-start">
              {[
                "Business",
                "Development",
                "Technology",
                "Design",
                "Programming",
              ].map((item) => (
                <div key={item} className="w-full py-2 text-center md:text-justify">
                  <div className="text-black text-sm font-normal font-['Roboto']">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="w-full md:w-1/4 flex-col justify-start items-start gap-4">
            <div className="text-black text-center md:text-justify font-semibold font-['Roboto']">
              Resources
            </div>
            <div className="w-full flex-col justify-start items-start ">
              {[
                "Career",
                "Resume",
                "Learning",
                "Interview Preparation",
                "Jobs",
              ].map((item) => (
                <div key={item} className="w-full py-2 text-center md:text-justify">
                  <div className="text-black text-sm font-normal font-['Roboto']">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About Us Section */}
          <div className="w-full md:w-1/4 flex-col justify-between items-center gap-4">
            <div className="text-black text-center md:text-justify font-semibold font-['Roboto']">
              About Us
            </div>
            <div className="w-full flex-col justify-start items-start">
              {["Contact", "Help/Support", "FAQ", "Terms and Conditions"].map(
                (item) => (
                  <div key={item} className="w-full py-2 text-center md:text-justify">
                    <div className="text-black text-sm font-normal font-['Roboto']">
                      {item}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col gap-8 py-4">
        {/* Horizontal line */}
        <div className="self-stretch h-px bg-black" />

        {/* Content container - stacked on mobile, inline on desktop */}
        <div className="self-stretch flex flex-col sm:flex-row sm:justify-between gap-6">
          {/* Row 1: Copyright */}
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <div className="text-black text-sm font-normal font-['Roboto'] leading-[21px] w-full text-center sm:text-left">
              2023 Ddsgnr. All right reserved.
            </div>
          </div>

          {/* Row 2: Links */}
          <div className="flex flex-row w-full justify-center">
            <div className="flex flex-row justify-center items-center gap-2 sm:gap-6">
              <div className="text-black text-[12px] font-normal font-['Roboto'] underline ">
                Privacy Policy
              </div>
              <div className="text-black text-[12px] font-normal font-['Roboto'] underline ">
                Terms of Service
              </div>
              <div className="text-black text-[12px] font-normal font-['Roboto'] underline ">
                Cookies Settings
              </div>
            </div>
          </div>

          {/* Row 3: Social Icons */}
          <div className="flex justify-center sm:justify-end items-center gap-3 w-full">
            {/* <div className="w-6 h-6 px-[7px] py-[3px] justify-center items-center flex" />
            <div className="w-6 h-6 p-[3px] justify-center items-center flex" />
            <div className="w-6 h-6 px-[3px] pt-[4.50px] pb-[4.20px] justify-center items-center flex" />
            <div className="w-6 h-6 p-[3px] justify-center items-center flex" /> */}
            <img
              src="/icons/Social-Links.png"
              alt="Social Links"
              className="object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
