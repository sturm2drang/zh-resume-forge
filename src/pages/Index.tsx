import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Database, Shield, Compass } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";
import logo from "@/assets/logo.png";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <img src={logo} alt="SmartTailor" className="w-10 h-10" />
            <span className="text-xl font-bold tracking-tight text-primary">SmartTailor</span>
          </div>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button variant="ghost" asChild>
              <Link to="/auth/login">{t('auth.login')}</Link>
            </Button>
            <Button variant="default" asChild>
              <Link to="/auth/register">{t('auth.register')}</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="container mx-auto px-6 py-24 max-w-7xl relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Shield className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Enterprise-Grade AI</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-primary mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-3xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Button size="lg" className="text-base px-8 h-12 shadow-enterprise" asChild>
                <Link to="/auth/register">{t('hero.cta.primary')}</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 h-12" asChild>
                <Link to="/dashboard">{t('hero.cta.secondary')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Layer Architecture Section */}
      <section className="container mx-auto px-6 py-20 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">3-Layer Security & Logic Stack</h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-grade architecture ensuring accuracy, compliance, and strategic alignment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Knowledge Layer */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
            <div className="relative bg-card rounded-2xl p-8 border border-border shadow-enterprise hover:shadow-large transition-shadow h-full">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                {t('layer.knowledge.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('layer.knowledge.desc')}
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                    Ivy League Standards
                  </span>
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                    Fortune 500
                  </span>
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                    O*NET Data
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Security Layer */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
            <div className="relative bg-card rounded-2xl p-8 border border-success/30 shadow-enterprise hover:shadow-large transition-shadow h-full">
              <div className="w-16 h-16 rounded-xl bg-success/10 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-success" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                {t('layer.security.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('layer.security.desc')}
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-success/10 text-xs font-medium text-success border border-success/20">
                    Fact-Lock™
                  </span>
                  <span className="px-3 py-1 rounded-full bg-success/10 text-xs font-medium text-success border border-success/20">
                    DEI Audit
                  </span>
                  <span className="px-3 py-1 rounded-full bg-success/10 text-xs font-medium text-success border border-success/20">
                    Zero Hallucinations
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Strategic Layer */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity" />
            <div className="relative bg-card rounded-2xl p-8 border border-border shadow-enterprise hover:shadow-large transition-shadow h-full">
              <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                <Compass className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-3">
                {t('layer.strategic.title')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('layer.strategic.desc')}
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                    North Star Alignment
                  </span>
                  <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground">
                    Mission Focused
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-12 bg-card/30">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="SmartTailor" className="w-8 h-8" />
              <span className="text-sm text-muted-foreground">
                © 2025 SmartTailor. Enterprise Recruitment Architect.
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              Powered by Multi-Agent RAG
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
