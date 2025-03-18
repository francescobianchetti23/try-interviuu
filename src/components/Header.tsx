
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  companyName: string;
  jobTitle: string;
  candidateName: string;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ 
  companyName, 
  jobTitle, 
  candidateName,
  className
}) => {
  return (
    <header className={cn("w-full py-6", className)}>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-sm bg-black flex items-center justify-center text-white font-medium text-xs">
            RL
          </div>
          <h3 className="font-medium text-sm">ResumeLand</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <p className="text-xs text-muted-foreground mr-2">
            {candidateName}'s application for {jobTitle}
          </p>
          <Button variant="outline" size="sm" className="hidden md:flex text-xs h-8 font-normal">
            Contact
          </Button>
          <Button size="sm" className="gap-1 text-xs font-normal h-8 rounded-md bg-black text-white hover:bg-black/90">
            Hire Me <ArrowRight className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
