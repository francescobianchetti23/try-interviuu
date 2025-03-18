
import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Webhook, Framer, Bookmark, Zap, CircleUser, LayoutPanelLeft, CircleDashed, FileCode, Box } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

interface ToolCardProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, name, className }) => {
  return (
    <Card className={cn("border border-border/20 hover:border-border/50 transition-colors h-full", className)}>
      <CardContent className="flex flex-col items-center justify-center p-6 text-center">
        <div className="text-gray-500 mb-3">
          {icon}
        </div>
        <h3 className="text-sm font-medium">{name}</h3>
      </CardContent>
    </Card>
  );
};

const ToolsSection: React.FC = () => {
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const tools = [
    { name: "Salesforce", icon: <CircleUser className="h-10 w-10" /> },
    { name: "HubSpot", icon: <Box className="h-10 w-10" /> },
    { name: "AWS", icon: <Webhook className="h-10 w-10" /> },
    { name: "Microsoft Office", icon: <FileCode className="h-10 w-10" /> },
    { name: "Tableau", icon: <LayoutPanelLeft className="h-10 w-10" /> },
    { name: "Asana", icon: <Zap className="h-10 w-10" /> },
    { name: "Slack", icon: <Bookmark className="h-10 w-10" /> },
    { name: "Google Analytics", icon: <CircleDashed className="h-10 w-10" /> },
    { name: "Zoom", icon: <Framer className="h-10 w-10" /> },
    { name: "LinkedIn Sales Navigator", icon: <CircleDashed className="h-10 w-10" /> }
  ];

  // Split tools into rows for desktop (2 rows of 5)
  const firstRow = tools.slice(0, 5);
  const secondRow = tools.slice(5, 10);

  // Function to create grid of tools for mobile (3 per row)
  const getMobileToolsGrid = () => {
    const rows = [];
    for (let i = 0; i < tools.length; i += 3) {
      rows.push(tools.slice(i, i + 3));
    }
    return rows;
  };

  const mobileToolsGrid = getMobileToolsGrid();

  // Auto-scroll effect for desktop carousels
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    const startAutoScroll = () => {
      interval = setInterval(() => {
        if (carouselRef.current) {
          const scrollElement = carouselRef.current;
          if (scrollElement.scrollLeft >= scrollElement.scrollWidth - scrollElement.clientWidth - 10) {
            // Reset to start when reaching the end
            scrollElement.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll one item width
            scrollElement.scrollBy({ left: 200, behavior: 'smooth' });
          }
        }
      }, 3000); // Scroll every 3 seconds
    };

    startAutoScroll();
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-16 bg-background" id="tools">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 animate-slideUp">
          <h2 className="text-2xl md:text-3xl font-semibold">Tools & Technologies</h2>
          <p className="text-muted-foreground max-w-[700px]">
            I have experience working with various tools and technologies that enable effective account management and client relations.
          </p>
        </div>
        
        {/* Desktop Version - Two Row Carousel */}
        <div className="hidden md:block">
          {/* First Row */}
          <div className="mb-4 overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex space-x-4 w-full overflow-x-auto pb-4 carousel-no-scrollbar"
            >
              {firstRow.map((tool, index) => (
                <div 
                  key={`row1-${index}`} 
                  className="flex-shrink-0 min-w-[180px] max-w-[180px] animate-slideUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ToolCard icon={tool.icon} name={tool.name} />
                </div>
              ))}
              {/* Duplicate first few items for infinite scroll effect */}
              {firstRow.slice(0, 3).map((tool, index) => (
                <div 
                  key={`row1-dup-${index}`} 
                  className="flex-shrink-0 min-w-[180px] max-w-[180px]"
                >
                  <ToolCard icon={tool.icon} name={tool.name} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Second Row - Reverse direction */}
          <div className="overflow-hidden">
            <div 
              className="flex space-x-4 w-full overflow-x-auto pb-4 carousel-no-scrollbar flex-row-reverse"
            >
              {secondRow.map((tool, index) => (
                <div 
                  key={`row2-${index}`} 
                  className="flex-shrink-0 min-w-[180px] max-w-[180px] animate-slideUp"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <ToolCard icon={tool.icon} name={tool.name} />
                </div>
              ))}
              {/* Duplicate first few items for infinite scroll effect */}
              {secondRow.slice(0, 3).map((tool, index) => (
                <div 
                  key={`row2-dup-${index}`} 
                  className="flex-shrink-0 min-w-[180px] max-w-[180px]"
                >
                  <ToolCard icon={tool.icon} name={tool.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile Version - 3 per row using Carousel */}
        <div className="md:hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {mobileToolsGrid.map((row, rowIndex) => (
                <CarouselItem key={`mobile-row-${rowIndex}`}>
                  <div className="grid grid-cols-3 gap-2">
                    {row.map((tool, toolIndex) => (
                      <div key={`mobile-tool-${rowIndex}-${toolIndex}`} className="animate-slideUp">
                        <ToolCard 
                          icon={tool.icon} 
                          name={tool.name} 
                          className="min-h-[120px]"
                        />
                      </div>
                    ))}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
