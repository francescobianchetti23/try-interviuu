
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, DownloadIcon, MailIcon } from "lucide-react";

interface CallToActionProps {
  candidateName: string;
  jobTitle: string;
  companyName: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  candidateName,
  jobTitle,
  companyName,
}) => {
  return (
    <section className="py-16 bg-brand-purple/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold">
            Ready to bring value to {companyName}
          </h2>
          <p className="text-muted-foreground">
            I'm excited about the opportunity to join {companyName} as a {jobTitle}.
            Let's connect to discuss how my skills and experiences align with your needs.
          </p>
          
          <div className="flex flex-col sm:flex-row w-full max-w-md gap-4 mt-4">
            <Button className="flex-1 gap-2">
              <MailIcon className="h-4 w-4" /> Contact Me
            </Button>
            <Button variant="outline" className="flex-1 gap-2">
              <DownloadIcon className="h-4 w-4" /> Download Resume
            </Button>
          </div>
          
          <div className="pt-6 text-sm text-muted-foreground">
            <p>
              This personalized landing page was created specifically for {companyName}.
              Thank you for considering my application.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
