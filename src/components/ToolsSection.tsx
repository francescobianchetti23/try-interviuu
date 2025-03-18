
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Webhook, Framer, Bookmark, Zap, CircleUser, LayoutPanelLeft, CircleDashed, FileCode, Box } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolCardProps {
  icon: React.ReactNode;
  name: string;
  className?: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon, name, className }) => {
  return (
    <Card className={cn("border border-border/20 hover:border-border/50 transition-colors", className)}>
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
  const tools = [
    { name: "Webhooks", icon: <Webhook className="h-10 w-10" /> },
    { name: "Supabase", icon: <Box className="h-10 w-10" /> },
    { name: "Clerk", icon: <CircleUser className="h-10 w-10" /> },
    { name: "Zapier", icon: <Zap className="h-10 w-10" /> },
    { name: "Census", icon: <LayoutPanelLeft className="h-10 w-10" /> },
    { name: "Framer", icon: <Framer className="h-10 w-10" /> },
    { name: "Make", icon: <CircleDashed className="h-10 w-10" /> },
    { name: "Segment", icon: <FileCode className="h-10 w-10" /> },
    { name: "Webflow", icon: <Bookmark className="h-10 w-10" /> },
    { name: "Bubble", icon: <CircleDashed className="h-10 w-10" /> }
  ];

  return (
    <section className="py-16 bg-background" id="tools">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 animate-slideUp">
          <h2 className="text-2xl md:text-3xl font-semibold">Tools & Technologies</h2>
          <p className="text-muted-foreground max-w-[700px]">
            I have experience working with various tools and technologies that enable efficient product development and integration.
          </p>
          <a href="#" className="text-black flex items-center gap-1 mt-2 text-sm hover:underline">
            See all <span className="text-xs">→</span>
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {tools.map((tool, index) => (
            <ToolCard key={index} icon={tool.icon} name={tool.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
