
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, CalendarIcon } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
}

interface ExperienceSectionProps {
  experiences: Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 animate-slideUp">
          <h2 className="text-2xl md:text-3xl font-semibold">Relevant Experience</h2>
          <p className="text-muted-foreground max-w-[700px]">
            My professional journey has equipped me with the skills and experiences 
            needed to excel in this role.
          </p>
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-border/20 rounded-lg shadow-sm">
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <BriefcaseIcon className="h-4 w-4 text-black" />
                      <CardTitle className="text-xl font-medium">{exp.position}</CardTitle>
                    </div>
                    <p className="text-muted-foreground text-sm">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <CalendarIcon className="h-3 w-3" />
                    {exp.period}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="secondary" className="bg-secondary text-xs font-normal">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
