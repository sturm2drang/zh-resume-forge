import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { User, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BasicInfoSection = () => {
  return (
    <Card className="shadow-soft border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="w-5 h-5 text-accent" />
          基础信息
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">姓名 *</Label>
            <Input id="name" placeholder="张三" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title">求职头衔</Label>
            <Input id="title" placeholder="数据分析师" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">邮箱</Label>
            <Input id="email" type="email" placeholder="zhang@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">手机</Label>
            <Input id="phone" placeholder="+86 138 0000 0000" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">城市</Label>
            <Input id="location" placeholder="北京" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="summary">个人简介</Label>
          <Textarea 
            id="summary" 
            placeholder="简要介绍您的职业背景和优势..." 
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <Label>上传照片（可选）</Label>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              选择照片
            </Button>
            <span className="text-xs text-muted-foreground">
              仅 PNG/JPG，最大 2MB
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
