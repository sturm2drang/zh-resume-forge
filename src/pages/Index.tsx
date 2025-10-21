import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sparkles, FileText, Download, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-xl font-bold tracking-tight text-primary">SmartTailor</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/auth/login">登录</Link>
            </Button>
            <Button variant="default" asChild>
              <Link to="/auth/register">注册</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
            中文简历智能微调
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            粘贴岗位描述，一键生成更匹配的中文简历要点。
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button size="lg" className="text-base px-8" asChild>
              <Link to="/auth/register">开始使用</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" asChild>
              <Link to="/auth/login">已有账户？登录</Link>
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">条目式输出</h3>
            <p className="text-muted-foreground leading-relaxed">
              将你的经历与岗位要求智能匹配，生成精准的中文简历要点。
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Download className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">版式模板导出 PDF</h3>
            <p className="text-muted-foreground leading-relaxed">
              选择专业模板，一键导出精美的 PDF 简历文件。
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-primary mb-2">合规不过度包装</h3>
            <p className="text-muted-foreground leading-relaxed">
              基于真实信息优化表达，绝不虚构经历和成果。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8 bg-card/50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 SmartTailor. 让求职更高效。</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
