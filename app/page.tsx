import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import EducationSection from "@/components/sections/EducationSection";
import HobbiesSection from "@/components/sections/HobbiesSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CaseStudiesSection />
      <EducationSection />
      <HobbiesSection />
      <ContactSection />
    </main>
  );
}
