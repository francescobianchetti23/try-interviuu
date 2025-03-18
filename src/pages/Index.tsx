
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
import { Award, BarChart, BriefcaseIcon, CalendarIcon, Users } from "lucide-react";

const Index = () => {
  // Dati aggiornati per la posizione di Account Manager presso Amazon
  const candidateData = {
    name: "Alex Johnson",
    title: "Senior Account Manager",
    company: {
      name: "Amazon",
      role: "Account Manager",
      logo: "https://cdn.brandfetch.io/amazon.com/w/512/h/154/logo?c=1idzAwSdIHHayr0QJdL"
    }
  };

  // State for video modal
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Achievements aggiornati per Account Manager
  const achievements = [
    {
      icon: <BriefcaseIcon className="h-5 w-5" />,
      title: "Client Portfolio Growth",
      description: "Expanded client portfolio by 45% in 12 months, adding over $3.2M in new revenue through strategic relationship management and needs assessment."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Team Leadership",
      description: "Led a team of 6 account specialists, achieving 115% of quarterly targets for 8 consecutive quarters through effective coaching and mentorship."
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "Revenue Growth",
      description: "Increased average client spend by 32% through strategic upselling and cross-selling of complementary Amazon services and solutions."
    },
    {
      icon: <CalendarIcon className="h-5 w-5" />,
      title: "Client Retention",
      description: "Maintained a 94% client retention rate through proactive relationship management and regular strategic business reviews."
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Award-Winning Performance",
      description: "Recognized as 'Account Manager of the Year' for consistently exceeding targets and receiving exceptional client satisfaction scores."
    }
  ];

  // Experiences aggiornate per Account Manager
  const experiences = [
    {
      company: "Global Solutions Inc.",
      position: "Senior Account Manager",
      period: "Jan 2020 - Present",
      description: "Managed a portfolio of 28 enterprise clients with combined annual revenue of $12M. Developed and executed account growth strategies resulting in 35% increased revenue within existing accounts.",
      skills: ["Account Management", "Sales Strategy", "Client Relations", "Business Development", "Negotiations"]
    },
    {
      company: "Tech Partnerships Ltd.",
      position: "Account Manager",
      period: "Jun 2017 - Dec 2019",
      description: "Oversaw 15 mid-market accounts totaling $5.8M in annual revenue. Implemented customer success initiatives that improved retention by 22% and increased customer satisfaction scores by 18%.",
      skills: ["Key Account Management", "Customer Success", "Relationship Building", "Problem Solving", "Strategic Planning"]
    },
    {
      company: "Business Growth Partners",
      position: "Account Executive",
      period: "Aug 2015 - May 2017",
      description: "Developed and maintained relationships with 12 SMB clients. Consistently exceeded monthly sales targets by 18% through effective needs analysis and solution selling.",
      skills: ["Sales Execution", "Client Communication", "Needs Assessment", "Solution Selling", "CRM Management"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div id="hero">
          <HeroSection 
            companyName={candidateData.company.name}
            companyLogo={candidateData.company.logo}
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
            companyLogo={candidateData.company.logo}
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
            companyLogo={candidateData.company.logo}
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
