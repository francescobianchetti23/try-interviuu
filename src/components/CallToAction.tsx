
import React from "react";
import { MailIcon, PhoneIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

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
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-10 animate-fadeIn">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Ready to bring value to{" "}
              {companyLogo ? (
                <span className="inline-flex items-center">
                  <img 
                    src={companyLogo} 
                    alt={companyName} 
                    className={cn("mx-1", isMobile ? "h-6" : "h-8")}
                  />
                </span>
              ) : (
                companyName
              )}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
            <a 
              href="mailto:alex.johnson@example.com" 
              className="group flex items-center p-4 bg-background border border-border/40 rounded-lg hover:border-primary/30 transition-all duration-300 hover:shadow-md animate-fade-in"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary/50 mr-4 group-hover:bg-primary/10 transition-colors">
                <MailIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-sm text-muted-foreground">Email</span>
                <span className="font-medium group-hover:text-primary transition-colors">alex.johnson@example.com</span>
              </div>
            </a>
            
            <a 
              href="tel:+11234567890" 
              className="group flex items-center p-4 bg-background border border-border/40 rounded-lg hover:border-primary/30 transition-all duration-300 hover:shadow-md animate-fade-in"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary/50 mr-4 group-hover:bg-primary/10 transition-colors">
                <PhoneIcon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-sm text-muted-foreground">Phone</span>
                <span className="font-medium group-hover:text-primary transition-colors">+1 (123) 456-7890</span>
              </div>
            </a>
          </div>
          
          <div className="pt-8 text-xs text-muted-foreground max-w-lg">
            <p>
              This personalized landing page was created specifically for{" "}
              {companyLogo ? (
                <img 
                  src={companyLogo} 
                  alt={companyName} 
                  className={cn("inline-block mx-1", isMobile ? "h-3" : "h-4")}
                />
              ) : (
                companyName
              )}.
              Thank you for considering my application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
