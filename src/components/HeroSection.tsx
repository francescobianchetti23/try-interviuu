
import React from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface HeroSectionProps {
  companyName: string;
  jobTitle: string;
  candidateName: string;
  candidateTitle: string;
  onWatchVideo: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  companyName,
  jobTitle,
  candidateName,
  candidateTitle,
  onWatchVideo,
}) => {
  return (
    <section className="py-24 md:py-32 w-full animate-fadeIn">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 mb-12 max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full border border-black/10 bg-secondary text-xs font-medium mb-2">
            Perfect match for {companyName}
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl leading-tight">
            Hi, I'm {candidateName} — Your Ideal{" "}
            <span className="text-black font-bold">{jobTitle}</span>
          </h1>
          <p className="text-muted-foreground md:text-lg max-w-[700px]">
            {candidateTitle} with a proven track record of delivering exceptional results,
            perfectly aligned with {companyName}'s mission and values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button 
              size="lg" 
              className="gap-2 bg-black hover:bg-black/90 text-white rounded-md h-10 px-5 py-2 text-sm font-normal"
              onClick={onWatchVideo}
            >
              <Play className="h-4 w-4" /> Watch 60-Second Intro
            </Button>
            {/* Pulsante "Download Resume" rimosso come richiesto */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
