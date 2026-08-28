import missionImg from "@/assets/our-mission.jpg";
import { Reveal } from "@/components/site/Reveal";
import { TextAnimate } from "@/registry/magicui/text-animate";

export function MissionSection() {
  return (
    <section className="relative overflow-hidden w-full h-[60vh] min-h-[500px] md:h-[80vh] md:min-h-[650px] flex items-end justify-end border-b border-border bg-black">
      {/* Background Image */}
      <img
        src={missionImg}
        alt="Our Mission Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
      />

      {/* Dark overlay for atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30 z-10" />

      {/* Mission Card (Flush with bottom and right on desktop) */}
      <div className="relative z-20 bg-[oklch(0.96_0.005_200)] text-zinc-950 p-8 sm:p-12 md:p-16 w-full sm:w-[85%] md:w-[50%] lg:w-[42%]  shadow-2xl transition-all duration-300">
        <h2 className="font-clash font-bold text-3xl sm:text-4xl md:text-5xl text-zinc-950 mb-6 tracking-tight">
          <TextAnimate animation="blurInUp" by="character" once>
            Our Mission
          </TextAnimate>
        </h2>

        <Reveal delay={0.1} y={20}>
          <p className="text-sm sm:text-base md:text-lg text-zinc-700 leading-relaxed font-sans">
            Empowering brands with innovative solutions to reach their full potential
            through creativity and collaboration. We believe in the power of ideas
            to transform and inspire.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
export default MissionSection;
