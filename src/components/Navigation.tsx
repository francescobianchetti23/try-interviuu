
import React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - (isMobile ? 60 : 100),
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={cn("w-full py-2 md:py-3 bg-background border-b border-border/10 sticky top-0 z-10", className)}>
      <div className="container">
        <Tabs defaultValue="achievements" className="w-full">
          <TabsList className="w-full justify-center bg-transparent h-auto p-0 gap-2 md:gap-8 overflow-x-auto">
            <TabsTrigger 
              value="achievements" 
              className="px-0 py-2 whitespace-nowrap text-xs md:text-sm data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-foreground border-b-2 border-transparent data-[state=active]:border-black rounded-none"
              onClick={() => scrollToSection("achievements")}
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger 
              value="experience" 
              className="px-0 py-2 whitespace-nowrap text-xs md:text-sm data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-foreground border-b-2 border-transparent data-[state=active]:border-black rounded-none"
              onClick={() => scrollToSection("experience")}
            >
              Experience
            </TabsTrigger>
            <TabsTrigger 
              value="tools" 
              className="px-0 py-2 whitespace-nowrap text-xs md:text-sm data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-foreground border-b-2 border-transparent data-[state=active]:border-black rounded-none"
              onClick={() => scrollToSection("tools")}
            >
              Tools
            </TabsTrigger>
            <TabsTrigger 
              value="cta" 
              className="px-0 py-2 whitespace-nowrap text-xs md:text-sm data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-foreground border-b-2 border-transparent data-[state=active]:border-black rounded-none"
              onClick={() => scrollToSection("cta")}
            >
              Contact
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default Navigation;
