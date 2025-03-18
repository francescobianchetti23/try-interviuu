
import React from "react";
import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface CallToActionProps {
  candidateName: string;
  jobTitle: string;
  companyName: string;
  companyLogo?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  candidateName,
  jobTitle,
  companyName,
  companyLogo,
}) => {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-12 md:py-16 bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto animate-slideUp">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Ready to bring value to {companyLogo ? (
              <img 
                src={companyLogo} 
                alt={companyName} 
                className={`inline-block mx-1 ${isMobile ? 'h-4' : 'h-6'}`}
              />
            ) : companyName}
          </h2>
          <p className="text-muted-foreground text-xs md:text-sm">
            I'm excited about the opportunity to join {companyLogo ? (
              <img 
                src={companyLogo} 
                alt={companyName} 
                className={`inline-block mx-1 ${isMobile ? 'h-3' : 'h-4'}`}
              />
            ) : companyName} as a {jobTitle}.
            Let's connect to discuss how my account management expertise can drive growth and success for your team.
          </p>
          
          <div className="flex flex-col space-y-6 w-full max-w-md mt-4 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex items-center gap-2 bg-background/80 p-4 rounded-lg border border-border/30 hover:border-primary/20 transition-all hover:shadow-sm">
                <MailIcon className="h-5 w-5 text-black shrink-0" />
                <a href="mailto:alex.johnson@example.com" className="text-sm hover:underline">
                  alex.johnson@example.com
                </a>
              </div>
              <div className="flex items-center gap-2 bg-background/80 p-4 rounded-lg border border-border/30 hover:border-primary/20 transition-all hover:shadow-sm">
                <PhoneIcon className="h-5 w-5 text-black shrink-0" />
                <a href="tel:+11234567890" className="text-sm hover:underline">
                  +1 (123) 456-7890
                </a>
              </div>
            </div>
            
            <Button className="flex-1 gap-2 bg-black hover:bg-black/90 text-white rounded-md text-sm font-normal transition-all duration-300 hover:scale-105 animate-fade-in">
              <MailIcon className="h-4 w-4" /> Contact Me
            </Button>
          </div>
          
          <div className="pt-4 md:pt-6 text-xs text-muted-foreground">
            <p>
              This personalized landing page was created specifically for {companyLogo ? (
                <img 
                  src={companyLogo} 
                  alt={companyName} 
                  className={`inline-block mx-1 ${isMobile ? 'h-2' : 'h-3'}`}
                />
              ) : companyName}.
              Thank you for considering my application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
