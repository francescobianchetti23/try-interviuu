
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
    <header className={cn("w-full py-6 border-b", className)}>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-brand-purple flex items-center justify-center text-white font-bold">
            RL
          </div>
          <h3 className="font-semibold text-lg">ResumeLand</h3>
        </div>
        
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground mr-2">
            {candidateName}'s application for {jobTitle}
          </p>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Contact
          </Button>
          <Button size="sm" className="gap-1">
            Hire Me <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
