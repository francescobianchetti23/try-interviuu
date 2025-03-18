
import React, { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AchievementsSection from "@/components/AchievementsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ToolsSection from "@/components/ToolsSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import { Award, BarChart, Code, Rocket, Users } from "lucide-react";

const Index = () => {
  // This would be dynamically populated in a real implementation
  const candidateData = {
    name: "Alex Johnson",
    title: "Senior Product Manager",
    company: {
      name: "TechInnovate",
      role: "Product Manager"
    }
  };

  // State for video modal
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Mock data for achievements
  const achievements = [
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Product Launch",
      description: "Led the successful launch of 4 major product features, resulting in a 35% increase in user engagement and 22% boost in revenue."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Team Leadership",
      description: "Managed cross-functional teams of 8+ members, fostering collaboration between design, engineering, and marketing departments."
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "Revenue Growth",
      description: "Implemented strategic initiatives that drove a 42% year-over-year growth in product revenue while reducing costs by 18%."
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: "Technical Integration",
      description: "Oversaw the integration of 3 critical APIs, improving data flow and reducing system bottlenecks by 65%."
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Award-Winning Solutions",
      description: "Developed an innovative approach to user onboarding that won industry recognition and increased conversion by 28%."
    }
  ];

  // Mock data for experience
  const experiences = [
    {
      company: "GrowthTech Solutions",
      position: "Senior Product Manager",
      period: "Jan 2020 - Present",
      description: "Led the development and launch of the company's flagship product, resulting in $2.4M in new revenue. Managed a team of 6 product specialists and collaborated closely with engineering and design teams.",
      skills: ["Product Strategy", "Agile", "User Research", "Roadmapping", "Analytics"]
    },
    {
      company: "InnovateCorp",
      position: "Product Manager",
      period: "Jun 2017 - Dec 2019",
      description: "Spearheaded the redesign of core user features, increasing customer satisfaction scores by 42%. Conducted comprehensive market analysis to identify key opportunities for product enhancement.",
      skills: ["Product Development", "UX Design", "A/B Testing", "Market Research", "Scrum"]
    },
    {
      company: "TechStart Inc.",
      position: "Associate Product Manager",
      period: "Aug 2015 - May 2017",
      description: "Assisted in the development of product requirements and worked with engineering teams to ensure successful implementation. Analyzed user feedback to inform product decisions.",
      skills: ["Requirements Gathering", "User Stories", "Prototyping", "Data Analysis"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        companyName={candidateData.company.name}
        jobTitle={candidateData.company.role}
        candidateName={candidateData.name}
      />
      
      <main className="flex-1">
        <div id="hero">
          <HeroSection 
            companyName={candidateData.company.name}
            jobTitle={candidateData.company.role}
            candidateName={candidateData.name}
            candidateTitle={candidateData.title}
            onWatchVideo={() => setIsVideoOpen(true)}
          />
        </div>
        
        <Navigation />
        
        <div id="achievements">
          <AchievementsSection 
            achievements={achievements} 
            companyName={candidateData.company.name}
          />
        </div>
        
        <ToolsSection />
        
        <div id="experience">
          <ExperienceSection experiences={experiences} />
        </div>
        
        <div id="cta">
          <CallToAction
            candidateName={candidateData.name}
            jobTitle={candidateData.company.role}
            companyName={candidateData.company.name}
          />
        </div>
      </main>
      
      <Footer candidateName={candidateData.name} />
      
      <VideoPlayer 
        isOpen={isVideoOpen}
        setIsOpen={setIsVideoOpen}
        candidateName={candidateData.name}
      />
    </div>
  );
};

export default Index;
