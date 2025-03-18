
import React from "react";
import { cn } from "@/lib/utils";

interface FooterProps {
  candidateName: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ candidateName, className }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={cn("w-full py-6 border-t border-border/20", className)}>
      <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-sm bg-black flex items-center justify-center text-white font-medium text-xs">
              RL
            </div>
            <p className="text-xs font-medium">ResumeLand</p>
          </div>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-xs text-muted-foreground">
            © {currentYear} {candidateName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
