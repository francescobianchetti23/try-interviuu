
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon, CalendarIcon, MailIcon, PhoneIcon } from "lucide-react";

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
  logo?: string;
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border border-border/20 rounded-lg shadow-sm h-full">
              <CardHeader className="pb-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <BriefcaseIcon className="h-4 w-4 text-black" />
                        <CardTitle className="text-lg font-medium">{exp.position}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-muted-foreground text-sm">{exp.company}</p>
                        {exp.logo && (
                          <img src={exp.logo} alt={exp.company} className="h-4 object-contain" />
                        )}
                      </div>
                    </div>
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

        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">Contact Information</h3>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-black" />
              <a href="mailto:alex.johnson@example.com" className="text-sm hover:underline">
                alex.johnson@example.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-black" />
              <a href="tel:+11234567890" className="text-sm hover:underline">
                +1 (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
