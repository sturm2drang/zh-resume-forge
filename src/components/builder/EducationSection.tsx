import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { GraduationCap, Plus, Trash2 } from "lucide-react";

interface Education {
  id: string;
  school: string;
  degree: string;
  start: string;
  end: string;
  gpa: string;
  description: string;
}

export const EducationSection = () => {
  const [educations, setEducations] = useState<Education[]>([
    {
      id: "1",
      school: "",
      degree: "",
      start: "",
      end: "",
      gpa: "",
      description: "",
    },
  ]);

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: Date.now().toString(),
        school: "",
        degree: "",
        start: "",
        end: "",
        gpa: "",
        description: "",
      },
    ]);
  };

  const removeEducation = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  return (
    <Card className="shadow-soft border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-accent" />
            教育经历
          </CardTitle>
          <Button variant="outline" size="sm" onClick={addEducation}>
            <Plus className="w-4 h-4 mr-2" />
            添加教育经历
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {educations.map((edu, index) => (
          <div key={edu.id} className="space-y-4 pb-6 border-b border-border last:border-0 last:pb-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">教育 #{index + 1}</span>
              {educations.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeEducation(edu.id)}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>学校</Label>
                <Input placeholder="北京大学" />
              </div>
              <div className="space-y-2">
                <Label>学位/专业</Label>
                <Input placeholder="计算机科学学士" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>开始时间</Label>
                <Input type="month" />
              </div>
              <div className="space-y-2">
                <Label>结束时间</Label>
                <Input type="month" />
              </div>
              <div className="space-y-2">
                <Label>GPA/成绩</Label>
                <Input placeholder="3.8/4.0" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>描述要点</Label>
              <Textarea 
                placeholder="主修课程、学术成就、获奖情况等..." 
                rows={3}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
