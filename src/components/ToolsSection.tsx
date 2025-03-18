
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Webhook, Framer, Bookmark, Zap, CircleUser, LayoutPanelLeft, CircleDashed, FileCode, Box } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface ToolCardProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, name, className }) => {
  return (
    <Card className={cn("border border-border/20 hover:border-border/50 transition-colors min-w-[160px] md:min-w-[180px]", className)}>
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

  return (
    <section className="py-16 bg-background" id="tools">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 animate-slideUp">
          <h2 className="text-2xl md:text-3xl font-semibold">Tools & Technologies</h2>
          <p className="text-muted-foreground max-w-[700px]">
            I have experience working with various tools and technologies that enable effective account management and client relations.
          </p>
        </div>
        
        <div className="scrollable-tools-container overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex space-x-4 w-max animate-slideUp">
            {tools.map((tool, index) => (
              <ToolCard key={index} icon={tool.icon} name={tool.name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
