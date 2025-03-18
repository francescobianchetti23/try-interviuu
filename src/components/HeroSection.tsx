
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

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
    <section className="py-16 md:py-24 w-full animate-fadeIn">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-accent/20 text-brand-purple text-sm font-medium mb-2">
            Perfect match for {companyName}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter max-w-3xl">
            Hi, I'm {candidateName} — Your Ideal{" "}
            <span className="text-brand-purple">{jobTitle}</span>
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-[700px]">
            {candidateTitle} with a proven track record of delivering exceptional results,
            perfectly aligned with {companyName}'s mission and values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button 
              size="lg" 
              className="gap-2 bg-brand-purple hover:bg-brand-purple/90"
              onClick={onWatchVideo}
            >
              <Play className="h-4 w-4" /> Watch 60-Second Intro
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              View Resume <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
