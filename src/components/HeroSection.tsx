
import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Volume2 } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeroSectionProps {
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  candidateName: string;
  candidateTitle: string;
  onWatchVideo: () => void;
  onListenAudio?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  companyName,
  companyLogo,
  jobTitle,
  candidateName,
  candidateTitle,
  onWatchVideo,
  onListenAudio = () => {},
}) => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-16 md:py-24 w-full animate-fadeIn">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 mb-8 md:mb-12 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full border border-black/10 bg-secondary text-xs font-medium mb-2">
            Perfect match for {companyLogo ? (
              <img 
                src={companyLogo} 
                alt={companyName} 
                className={`inline-block ml-1 ${isMobile ? 'h-3' : 'h-4'}`}
              />
            ) : companyName}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight max-w-3xl leading-tight">
            Hi, I'm {candidateName}
            <br />
            <span className="text-black font-bold">Your new {jobTitle}</span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-lg max-w-[700px]">
            {candidateTitle} with a proven track record of delivering exceptional results,
            perfectly aligned with {companyLogo ? (
              <img 
                src={companyLogo} 
                alt={companyName} 
                className={`inline-block mx-1 ${isMobile ? 'h-3' : 'h-4'}`}
              />
            ) : companyName}'s mission and values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button 
              size="lg" 
              className="gap-2 bg-black hover:bg-black/90 text-white rounded-md h-10 px-5 py-2 text-sm font-normal"
              onClick={onWatchVideo}
            >
              <Play className="h-4 w-4" /> Watch 60-Second Intro
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 border-gray-300 hover:bg-gray-100 text-gray-800 rounded-md h-10 px-5 py-2 text-sm font-normal"
              onClick={onListenAudio}
            >
              <Volume2 className="h-4 w-4" /> Listen to Intro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
