import HamburgerMenu from "./mobilemenu"

export default function NavBar(){
    return(
        <nav className="w-full md:w-[1280px] min-h-[72px] bg-[#f6f6f6] border-b border-[#676767]">
            <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex items-center justify-between">
                {/* Logo and Brand Section */}
                <div className="flex items-center gap-2 py-4">
                    <div className="w-[32.58px] h-[30.38px]">
                        <img src="/logos/Frame1.svg" alt="Logo" className="w-full h-full" />
                    </div>
                    <div className="text-black text-[25.07px] font-bold font-['Inter']">
                        Ddsgnr
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <HamburgerMenu />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 bg-white">
                    {/* Navigation Links */}
                    <nav className="flex items-center gap-8">
                        <a href="#" className="p-2.5 border-b border-black">
                            <span className="text-black text-base font-normal font-['Roboto']">
                                Home
                            </span>
                        </a>
                        <a href="#" className="p-2.5">
                            <span className="text-black text-base font-normal font-['Roboto']">
                                Courses
                            </span>
                        </a>
                        <a href="#" className="p-2.5">
                            <span className="text-black text-base font-normal font-['Roboto']">
                                Services
                            </span>
                        </a>
                        <a href="#" className="p-2.5">
                            <span className="text-black text-base font-normal font-['Roboto']">
                                Achievement
                            </span>
                        </a>
                        <a href="#" className="p-2.5">
                            <span className="text-black text-base font-normal font-['Roboto']">
                                About Us
                            </span>
                        </a>
                        <a href="#" className="p-2.5">
                            <span className="text-black text-base font-normal font-['Roboto']">
                                Testimonial
                            </span>
                        </a>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-4">
                        <button className="px-5 py-2 rounded-[5px] border border-black">
                            <span className="text-black text-base font-normal font-['Roboto']">
                                Login
                            </span>
                        </button>
                        <button className="px-5 py-2 bg-black rounded-[5px] border border-black">
                            <span className="text-white text-base font-normal font-['Roboto']">
                                Sign Up
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
