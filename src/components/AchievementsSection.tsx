
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface AchievementsSectionProps {
  achievements: Achievement[];
  companyName: string;
  companyLogo?: string;
}

const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievements,
  companyName,
  companyLogo,
}) => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 animate-slideUp">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Why I'm The Perfect Fit For{" "}
            {companyLogo ? (
              <img 
                src={companyLogo} 
                alt={companyName} 
                className="h-6 inline-block mx-1" 
              />
            ) : (
              <span className="text-black font-bold">{companyName}</span>
            )}
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
                "transition-all duration-200 hover:shadow-md border border-border/20",
                "hover:border-black/30 bg-white rounded-lg"
              )}
            >
              <CardHeader className="pb-2">
                <div className="mb-2 h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-black">
                  {achievement.icon}
                </div>
                <CardTitle className="text-xl font-medium">{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
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
