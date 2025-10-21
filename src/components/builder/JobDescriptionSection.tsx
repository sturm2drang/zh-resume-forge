import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FileText } from "lucide-react";

export const JobDescriptionSection = () => {
  return (
    <>
      <Card className="shadow-soft border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent" />
            岗位描述（JD）
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label htmlFor="jd">粘贴完整的招聘岗位描述</Label>
          <Textarea 
            id="jd"
            placeholder="职位名称：数据分析师&#10;&#10;岗位职责：&#10;1. 负责业务数据分析和报告撰写...&#10;2. 构建数据看板和可视化系统...&#10;&#10;任职要求：&#10;1. 3年以上数据分析经验...&#10;2. 精通SQL、Python等分析工具..."
            rows={10}
            className="font-mono text-sm"
          />
        </CardContent>
      </Card>

      <Card className="shadow-soft border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-accent" />
            额外指令（可选）
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Label htmlFor="instructions">补充说明或特殊要求</Label>
          <Textarea 
            id="instructions"
            placeholder="例如：&#10;• 用更精炼的风格改写&#10;• 突出SQL和Tableau技能&#10;• 适配校招应届生身份&#10;• 强调数据驱动的思维方式"
            rows={5}
          />
        </CardContent>
      </Card>
    </>
  );
};
