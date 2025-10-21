import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, LogOut, Wand2, Copy, FileDown } from "lucide-react";
import { toast } from "sonner";
import { BasicInfoSection } from "@/components/builder/BasicInfoSection";
import { SkillsSection } from "@/components/builder/SkillsSection";
import { EducationSection } from "@/components/builder/EducationSection";
import { ExperienceSection } from "@/components/builder/ExperienceSection";
import { ProjectSection } from "@/components/builder/ProjectSection";
import { CertsLinksSection } from "@/components/builder/CertsLinksSection";
import { JobDescriptionSection } from "@/components/builder/JobDescriptionSection";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const Builder = () => {
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState("minimal");

  const handleGenerate = async () => {
    setGenerating(true);
    // TODO: Implement actual LLM generation
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
      toast.success("生成成功");
    }, 2000);
  };

  const handleCopy = () => {
    toast.success("内容已复制");
  };

  const handleExportPDF = () => {
    toast.success("正在生成 PDF...");
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <Link to="/dashboard" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-xl font-bold tracking-tight text-primary">SmartTailor</span>
          </Link>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/">
              <LogOut className="w-4 h-4 mr-2" />
              退出登录
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 max-w-7xl">
        <div className="grid lg:grid-cols-[1fr,400px] gap-8">
          {/* Left Column - Data Entry */}
          <div className="space-y-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight text-primary mb-2">简历生成器</h1>
              <p className="text-muted-foreground">填写您的信息，生成匹配岗位的简历</p>
            </div>

            <BasicInfoSection />
            <SkillsSection />
            <EducationSection />
            <ExperienceSection />
            <ProjectSection />
            <CertsLinksSection />
            <JobDescriptionSection />
          </div>

          {/* Right Column - Actions & Preview */}
          <div className="lg:sticky lg:top-24 h-fit space-y-4">
            <Card className="shadow-soft border-border">
              <CardContent className="p-6 space-y-4">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleGenerate}
                  disabled={generating}
                >
                  <Wand2 className="w-4 h-4 mr-2" />
                  {generating ? "生成中..." : "生成微调要点"}
                </Button>

                {generated && (
                  <>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleCopy}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      复制全部要点
                    </Button>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">选择模板</label>
                      <Select value={selectedTemplate} onValueChange={setSelectedTemplate}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="minimal">简约版</SelectItem>
                          <SelectItem value="professional">专业版</SelectItem>
                          <SelectItem value="academic">学术版</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      variant="secondary" 
                      className="w-full"
                      onClick={handleExportPDF}
                    >
                      <FileDown className="w-4 h-4 mr-2" />
                      导出 PDF
                    </Button>

                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        提示：请确保内容真实有效。系统不会新增虚构经历。
                      </p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {generated && (
              <Card className="shadow-soft border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-primary mb-3">生成的简历要点</h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-medium text-secondary mb-2">个人摘要</h4>
                      <p className="text-muted-foreground">具有3年数据分析经验的专业人士，精通SQL、Python和数据可视化工具...</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary mb-2">核心技能匹配</h4>
                      <p className="text-muted-foreground">SQL、Python、Tableau、数据建模、业务分析</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-secondary mb-2">工作经历</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>构建销售预测模型，提升预测准确率30%</li>
                        <li>优化数据处理流程，减少分析时间50%</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Builder;
