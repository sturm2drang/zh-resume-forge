import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Award, Plus, Trash2, Link as LinkIcon } from "lucide-react";

interface Cert {
  id: string;
  name: string;
  org: string;
  certId: string;
  link: string;
}

interface Link {
  id: string;
  label: string;
  url: string;
}

export const CertsLinksSection = () => {
  const [certs, setCerts] = useState<Cert[]>([
    { id: "1", name: "", org: "", certId: "", link: "" },
  ]);
  
  const [links, setLinks] = useState<Link[]>([
    { id: "1", label: "", url: "" },
  ]);

  const addCert = () => {
    setCerts([...certs, { id: Date.now().toString(), name: "", org: "", certId: "", link: "" }]);
  };

  const removeCert = (id: string) => {
    setCerts(certs.filter((cert) => cert.id !== id));
  };

  const addLink = () => {
    setLinks([...links, { id: Date.now().toString(), label: "", url: "" }]);
  };

  const removeLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
  };

  return (
    <>
      <Card className="shadow-soft border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              证书
            </CardTitle>
            <Button variant="outline" size="sm" onClick={addCert}>
              <Plus className="w-4 h-4 mr-2" />
              添加证书
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {certs.map((cert, index) => (
            <div key={cert.id} className="space-y-4 pb-4 border-b border-border last:border-0 last:pb-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-muted-foreground">证书 #{index + 1}</span>
                {certs.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeCert(cert.id)}
                  >
                    <Trash2 className="w-4 h-4 text-destructive" />
                  </Button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>证书名称</Label>
                  <Input placeholder="数据分析师认证" />
                </div>
                <div className="space-y-2">
                  <Label>颁发机构</Label>
                  <Input placeholder="阿里云" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>证书编号</Label>
                  <Input placeholder="CERT-2024-001" />
                </div>
                <div className="space-y-2">
                  <Label>证书链接</Label>
                  <Input placeholder="https://..." />
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="shadow-soft border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <LinkIcon className="w-5 h-5 text-accent" />
              链接
            </CardTitle>
            <Button variant="outline" size="sm" onClick={addLink}>
              <Plus className="w-4 h-4 mr-2" />
              添加链接
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {links.map((link, index) => (
            <div key={link.id} className="grid md:grid-cols-[1fr,2fr,auto] gap-4 items-end">
              <div className="space-y-2">
                <Label>标签</Label>
                <Input placeholder="GitHub" />
              </div>
              <div className="space-y-2">
                <Label>链接地址</Label>
                <Input placeholder="https://github.com/username" />
              </div>
              {links.length > 1 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeLink(link.id)}
                >
                  <Trash2 className="w-4 h-4 text-destructive" />
                </Button>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};
