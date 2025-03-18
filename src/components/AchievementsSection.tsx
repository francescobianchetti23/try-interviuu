
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Award, BarChart, Code, Rocket, Users } from "lucide-react";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
  companyName: string;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievements,
  companyName,
}) => {
  return (
    <section className="py-16 bg-brand-light">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 animate-slideUp">
          <h2 className="text-2xl md:text-3xl font-bold">
            Why I'm The Perfect Fit For{" "}
            <span className="text-brand-purple">{companyName}</span>
          </h2>
          <p className="text-muted-foreground max-w-[700px]">
            My skills and experiences align perfectly with what you're looking for.
            Here are some of my key achievements that demonstrate my capabilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className={cn(
                "transition-all duration-200 hover:shadow-md border border-border/50",
                "hover:border-brand-purple/30"
              )}
            >
              <CardHeader className="pb-2">
                <div className="mb-2 h-10 w-10 rounded-md bg-brand-accent/20 flex items-center justify-center text-brand-purple">
                  {achievement.icon}
                </div>
                <CardTitle className="text-xl">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
