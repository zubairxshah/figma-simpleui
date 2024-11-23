export default function AchievementsSection() {
  return (
    <div className="w-full md:w-[1280px] px-4 md:px-16 py-8 bg-white h-fit mx-auto">
      <div className="flex flex-col items-center h-auto">
        {/* Title */}
        <div className="text-center text-black text-3xl md:text-5xl font-bold 
        font-['Roboto'] leading-tight md:leading-[57.60px] mb-4">
          Our Achievements
        </div>

        {/* Description */}
        <div className="text-center text-black md:w-[1152px] md:text-[18px] font-normal 
        font-['Roboto'] leading-normal md:leading-[27px]  mb-6 md:mb-4 
        px-4 md:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum tristique. Duis
          cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
          commodo diam libero vitae erat.
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:flex md:flex-row justify-center 
        gap-8 md:gap-24 w-full max-w-xs md:max-w-none">
          <StatBlock number="+200" label="Courses" />
          <StatBlock number="50K" label="Mentors" />
          <StatBlock number="370k" label="Students" />
          <StatBlock number="100+" label="Recognition" />
        </div>
      </div>
    </div>
  );
}

type StatBlockProps = {
  number: string;
  label: string;
};

function StatBlock({ number, label }: StatBlockProps) {
  return (
    <div className="flex flex-col items-center gap-1 md:w-[1256px]">
      <div className="text-black text-2xl md:text-[40px] font-bold 
      font-['Roboto'] leading-tight md:leading-[48px]">
        {number}
      </div>
      <div className="text-black text-sm md:text-base font-normal 
      font-['Roboto'] leading-normal text-center">
        {label}
      </div>
    </div>
  );
}
