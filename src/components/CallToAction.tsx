
import React from "react";
import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon, SendIcon, ArrowRightIcon } from "lucide-react";
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
    <section className="py-16 md:py-20 bg-black text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOSAxLjc5MS00IDQtNHM0IDEuNzkxIDQgNC0xLjc5MSA0LTQgNC00LTEuNzkxLTQtNHptMC0xN2MwLTIuMjA5IDEuNzkxLTQgNC00czQgMS43OTEgNCw0LTEuNzkxIDQtNCA0LTQtMS43OTEtNC00em0tMTcgMGMwLTIuMjA5IDEuNzkxLTQgNC00czQgMS43OTEgNCw0LTEuNzkxIDQtNCA0LTQtMS43OTEtNC00em0wIDE3YzAtMi4yMDkgMS43OTEtNCA0LTRzNCAxLjc5MSA0IDQtMS43OTEgNC00IDQtNC0xLjc5MS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col space-y-8 animate-slideUp">
            {/* Header section with gradient text */}
            <div className="text-center space-y-4 animate-fade-in">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Let's make an impact together
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Ready to discuss how my experience in strategic account management can help {companyName} reach new heights? Let's connect.
              </p>
            </div>
            
            {/* Contact card */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    {companyLogo ? (
                      <img 
                        src={companyLogo} 
                        alt={companyName} 
                        className="h-6"
                      />
                    ) : null}
                    <h3 className="text-xl font-semibold">Contact Details</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 group transition-all">
                      <div className="bg-white/10 p-2.5 rounded-full group-hover:bg-white/20 transition-all">
                        <MailIcon className="h-5 w-5 text-white" />
                      </div>
                      <a 
                        href="mailto:alex.johnson@example.com" 
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        alex.johnson@example.com
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-3 group transition-all">
                      <div className="bg-white/10 p-2.5 rounded-full group-hover:bg-white/20 transition-all">
                        <PhoneIcon className="h-5 w-5 text-white" />
                      </div>
                      <a 
                        href="tel:+11234567890" 
                        className="text-gray-200 hover:text-white transition-colors"
                      >
                        +1 (123) 456-7890
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Schedule a Call</h3>
                  <p className="text-gray-400 text-sm">
                    Available for a quick chat about how I can contribute to your team's success.
                  </p>
                  <Button 
                    className="w-full group bg-white text-black hover:bg-white/90 rounded-md text-sm font-medium px-4 py-2 h-auto transition-all"
                  >
                    <SendIcon className="h-4 w-4 mr-2 transition-transform group-hover:translate-x-1" />
                    Schedule Meeting
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Call to action button */}
            <div className="flex flex-col items-center space-y-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Button 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg px-6 py-6 h-auto flex items-center justify-center gap-2 group transition-all duration-300"
              >
                <span className="text-lg">Connect on LinkedIn</span>
                <ArrowRightIcon className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </Button>
              
              <p className="text-xs text-gray-500 max-w-md text-center">
                This personalized landing page was created specifically for {companyName}'s {jobTitle} position.
                Thanks for considering my application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
