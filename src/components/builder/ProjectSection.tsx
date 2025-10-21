import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FolderKanban, Plus, Trash2 } from "lucide-react";

interface Project {
  id: string;
  name: string;
  start: string;
  end: string;
  role: string;
  stack: string;
  description: string;
  links: string;
}

export const ProjectSection = () => {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      name: "",
      start: "",
      end: "",
      role: "",
      stack: "",
      description: "",
      links: "",
    },
  ]);

  const addProject = () => {
    setProjects([
      ...projects,
      {
        id: Date.now().toString(),
        name: "",
        start: "",
        end: "",
        role: "",
        stack: "",
        description: "",
        links: "",
      },
    ]);
  };

  const removeProject = (id: string) => {
    setProjects(projects.filter((proj) => proj.id !== id));
  };

  return (
    <Card className="shadow-soft border-border">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <FolderKanban className="w-5 h-5 text-accent" />
            项目经历
          </CardTitle>
          <Button variant="outline" size="sm" onClick={addProject}>
            <Plus className="w-4 h-4 mr-2" />
            添加项目
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((proj, index) => (
          <div key={proj.id} className="space-y-4 pb-6 border-b border-border last:border-0 last:pb-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">项目 #{index + 1}</span>
              {projects.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeProject(proj.id)}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              )}
            </div>

            <div className="space-y-2">
              <Label>项目名称</Label>
              <Input placeholder="电商数据分析平台" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>开始时间</Label>
                <Input type="month" />
              </div>
              <div className="space-y-2">
                <Label>结束时间</Label>
                <Input type="month" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>角色</Label>
                <Input placeholder="数据分析负责人" />
              </div>
              <div className="space-y-2">
                <Label>技术栈</Label>
                <Input placeholder="Python, SQL, Tableau" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>成果要点</Label>
              <Textarea 
                placeholder="描述项目的目标、您的贡献和成果...&#10;• 搭建完整的数据分析体系&#10;• 提升决策效率40%" 
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label>项目链接（可选）</Label>
              <Input placeholder="https://github.com/username/project" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
