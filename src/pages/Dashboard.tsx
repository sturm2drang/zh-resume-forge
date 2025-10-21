import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Plus, FileText, Calendar, Sparkles, LogOut } from "lucide-react";

const Dashboard = () => {
  // Mock data - will be replaced with actual data from backend
  const drafts = [
    {
      id: "1",
      title: "张三 - 数据分析师",
      createdAt: "2025-01-15",
    },
    {
      id: "2",
      title: "张三 - 产品经理",
      createdAt: "2025-01-10",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-6xl">
          <Link to="/" className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-xl font-bold tracking-tight text-primary">SmartTailor</span>
          </Link>
          <Button variant="ghost" size="sm">
            <LogOut className="w-4 h-4 mr-2" />
            退出登录
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-primary mb-2">我的简历</h1>
          <p className="text-muted-foreground">管理和创建您的简历草稿</p>
        </div>

        <div className="grid gap-6 mb-8">
          <Card className="shadow-soft border-border hover:shadow-medium transition-shadow cursor-pointer">
            <Link to="/builder">
              <CardContent className="flex items-center justify-center py-12">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-1">新建简历</h3>
                  <p className="text-sm text-muted-foreground">开始创建新的简历草稿</p>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>

        {drafts.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold text-primary mb-4">最近生成</h2>
            <div className="grid gap-4">
              {drafts.map((draft) => (
                <Card key={draft.id} className="shadow-soft border-border hover:shadow-medium transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-accent" />
                          {draft.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {draft.createdAt}
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" asChild>
                          <Link to={`/draft/${draft.id}`}>查看</Link>
                        </Button>
                        <Button variant="default" size="sm">导出</Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
