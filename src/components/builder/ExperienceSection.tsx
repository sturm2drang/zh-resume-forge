import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Briefcase, Plus, Trash2 } from "lucide-react";

interface Experience {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  location: string;
  remote: boolean;
  description: string;
}

export const ExperienceSection = () => {
  const [experiences, setExperiences] = useState<Experience[]>([
    {
      id: "1",
      company: "",
      role: "",
      start: "",
      end: "",
      location: "",
      remote: false,
      description: "",
    },
  ]);

  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        id: Date.now().toString(),
        company: "",
        role: "",
        start: "",
        end: "",
        location: "",
        remote: false,
        description: "",
      },
    ]);
  };

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id));
  };

  return (
    <Card className="shadow-soft border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-accent" />
            工作经历
          </CardTitle>
          <Button variant="outline" size="sm" onClick={addExperience}>
            <Plus className="w-4 h-4 mr-2" />
            添加工作经历
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="space-y-4 pb-6 border-b border-border last:border-0 last:pb-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">经历 #{index + 1}</span>
              {experiences.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeExperience(exp.id)}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>公司名称</Label>
                <Input placeholder="字节跳动" />
              </div>
              <div className="space-y-2">
                <Label>职位</Label>
                <Input placeholder="数据分析师" />
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
                <Label>城市</Label>
                <Input placeholder="北京" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id={`remote-${exp.id}`} />
              <label
                htmlFor={`remote-${exp.id}`}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                远程工作
              </label>
            </div>

            <div className="space-y-2">
              <Label>业绩要点</Label>
              <Textarea 
                placeholder="描述您的主要职责和成就，建议使用量化指标...&#10;• 提升销售额30%&#10;• 优化流程节省20小时/周" 
                rows={4}
              />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
