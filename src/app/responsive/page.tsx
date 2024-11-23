
import HeroSection from "../components/HeroSection";
import AchievementsSection from "../components/AchievementSection";
import TeamSection from "../components/TeamSection";
import Course from "../components/Course";
import LogosSection from "../components/LogosSection";
import ExploreCoursesSection from "../components/ExploreCoursesSection";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Testimonial from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-col-1 gap-8">
      <div className="">
        <div className=" bg-white border border-[#676767]">
        <main className="">
          <Header />
          <NavBar />
          <HeroSection />
          <LogosSection />
          <ExploreCoursesSection />
          <AchievementsSection />
          <Course />
          <TeamSection />
          <Testimonial />
          <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
