
import React from "react";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";
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
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-3xl mx-auto">
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
          
          <div className="flex flex-col sm:flex-row w-full max-w-md gap-4 mt-4">
            <Button className="flex-1 gap-2 bg-black hover:bg-black/90 text-white rounded-md text-sm font-normal">
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
