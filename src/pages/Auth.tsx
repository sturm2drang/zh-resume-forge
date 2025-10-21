import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { toast } from "sonner";

type AuthMode = "login" | "register";

const Auth = ({ mode = "login" }: { mode?: AuthMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (mode === "register" && password !== confirmPassword) {
      toast.error("密码不一致，请重新输入");
      return;
    }

    setLoading(true);
    
    // TODO: Implement actual auth with Lovable Cloud
    setTimeout(() => {
      setLoading(false);
      toast.success(mode === "login" ? "登录成功" : "注册成功");
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-accent" />
            <span className="text-2xl font-bold tracking-tight text-primary">SmartTailor</span>
          </Link>
        </div>

        <Card className="shadow-large border-border">
          <CardHeader>
            <CardTitle className="text-2xl">{mode === "login" ? "登录" : "注册"}</CardTitle>
            <CardDescription>
              {mode === "login" ? "登录您的账户以继续" : "创建新账户开始使用"}
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">邮箱</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">密码</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {mode === "register" && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">确认密码</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}

              {mode === "register" && (
                <p className="text-xs text-muted-foreground">
                  注册即表示同意服务条款与隐私政策。
                </p>
              )}
            </CardContent>

            <CardFooter className="flex flex-col gap-4">
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "处理中..." : mode === "login" ? "登录" : "创建账户"}
              </Button>

              <div className="text-sm text-center space-y-2">
                {mode === "login" ? (
                  <>
                    <Link to="/auth/forgot-password" className="text-accent hover:underline block">
                      忘记密码？
                    </Link>
                    <div className="text-muted-foreground">
                      还没有账户？{" "}
                      <Link to="/auth/register" className="text-accent hover:underline">
                        去注册
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="text-muted-foreground">
                    已有账户？{" "}
                    <Link to="/auth/login" className="text-accent hover:underline">
                      去登录
                    </Link>
                  </div>
                )}
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
