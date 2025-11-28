import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'de' | 'fr' | 'it' | 'es' | 'zh' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Landing Page
    'hero.title': 'Strategic Recruitment Architect',
    'hero.subtitle': 'Engineer "Fact-Locked™" applications using Multi-Agent RAG to translate experience into industry-aligned impact.',
    'hero.cta.primary': 'Start Architecture',
    'hero.cta.secondary': 'View Logic Stack',
    'layer.knowledge.title': 'Knowledge Layer (RAG)',
    'layer.knowledge.desc': 'Queries Ivy League Standards, Fortune 500 Competencies & O*NET data.',
    'layer.security.title': 'Security Layer (Sentinel)',
    'layer.security.desc': 'Fact-Lock™ & DEI Audit. Zero Hallucinations.',
    'layer.strategic.title': 'Strategic Layer',
    'layer.strategic.desc': 'North Star Alignment to Target Product Mission.',
    // Dashboard
    'nav.profiles': 'My Profiles',
    'nav.applications': 'Applications',
    'nav.ats': 'ATS Reports',
    'nav.settings': 'Settings',
    'mode.expert.title': 'CV Writing Expert',
    'mode.expert.desc': 'Full Rewrite (Autonomous). Fact-locked & Strategic.',
    'mode.assistant.title': 'Resume Assistant',
    'mode.assistant.desc': 'Refine & Polish. Interactive narrative editing.',
    'mode.validator.title': 'ATS Validator',
    'mode.validator.desc': 'Simulation & Scoring. Parse risk analysis.',
    // Auth
    'auth.login': 'Log In',
    'auth.register': 'Sign Up',
    'auth.logout': 'Log Out',
  },
  de: {
    'hero.title': 'Strategischer Rekrutierungsarchitekt',
    'hero.subtitle': 'Entwickeln Sie "Fact-Locked™" Bewerbungen mit Multi-Agent RAG zur Übersetzung von Erfahrung in branchenspezifische Wirkung.',
    'hero.cta.primary': 'Architektur Starten',
    'hero.cta.secondary': 'Logic Stack Ansehen',
    'layer.knowledge.title': 'Wissensschicht (RAG)',
    'layer.knowledge.desc': 'Fragt Ivy League-Standards, Fortune 500-Kompetenzen & O*NET-Daten ab.',
    'layer.security.title': 'Sicherheitsschicht (Sentinel)',
    'layer.security.desc': 'Fact-Lock™ & DEI-Audit. Null Halluzinationen.',
    'layer.strategic.title': 'Strategische Schicht',
    'layer.strategic.desc': 'North Star-Ausrichtung auf Zielproduktmission.',
    'nav.profiles': 'Meine Profile',
    'nav.applications': 'Bewerbungen',
    'nav.ats': 'ATS-Berichte',
    'nav.settings': 'Einstellungen',
    'mode.expert.title': 'CV-Schreibexperte',
    'mode.expert.desc': 'Vollständige Überarbeitung (Autonom). Faktensicher & Strategisch.',
    'mode.assistant.title': 'Lebenslauf-Assistent',
    'mode.assistant.desc': 'Verfeinern & Polieren. Interaktive narrative Bearbeitung.',
    'mode.validator.title': 'ATS-Validator',
    'mode.validator.desc': 'Simulation & Bewertung. Risikoanalyse parsen.',
    'auth.login': 'Anmelden',
    'auth.register': 'Registrieren',
    'auth.logout': 'Abmelden',
  },
  fr: {
    'hero.title': 'Architecte Stratégique de Recrutement',
    'hero.subtitle': 'Créez des candidatures "Fact-Locked™" avec Multi-Agent RAG pour traduire l\'expérience en impact aligné sur l\'industrie.',
    'hero.cta.primary': 'Démarrer l\'Architecture',
    'hero.cta.secondary': 'Voir Logic Stack',
    'layer.knowledge.title': 'Couche de Connaissances (RAG)',
    'layer.knowledge.desc': 'Interroge les standards Ivy League, les compétences Fortune 500 et les données O*NET.',
    'layer.security.title': 'Couche de Sécurité (Sentinel)',
    'layer.security.desc': 'Fact-Lock™ & Audit DEI. Zéro Hallucinations.',
    'layer.strategic.title': 'Couche Stratégique',
    'layer.strategic.desc': 'Alignement North Star sur la Mission Produit Cible.',
    'nav.profiles': 'Mes Profils',
    'nav.applications': 'Candidatures',
    'nav.ats': 'Rapports ATS',
    'nav.settings': 'Paramètres',
    'mode.expert.title': 'Expert en Rédaction CV',
    'mode.expert.desc': 'Réécriture complète (Autonome). Verrouillé par les faits & Stratégique.',
    'mode.assistant.title': 'Assistant CV',
    'mode.assistant.desc': 'Affiner & Polir. Édition narrative interactive.',
    'mode.validator.title': 'Validateur ATS',
    'mode.validator.desc': 'Simulation & Notation. Analyse des risques.',
    'auth.login': 'Se connecter',
    'auth.register': 'S\'inscrire',
    'auth.logout': 'Se déconnecter',
  },
  it: {
    'hero.title': 'Architetto Strategico del Reclutamento',
    'hero.subtitle': 'Crea applicazioni "Fact-Locked™" con Multi-Agent RAG per tradurre l\'esperienza in impatto allineato al settore.',
    'hero.cta.primary': 'Inizia Architettura',
    'hero.cta.secondary': 'Vedi Logic Stack',
    'layer.knowledge.title': 'Strato di Conoscenza (RAG)',
    'layer.knowledge.desc': 'Interroga Standard Ivy League, Competenze Fortune 500 e dati O*NET.',
    'layer.security.title': 'Strato di Sicurezza (Sentinel)',
    'layer.security.desc': 'Fact-Lock™ & Audit DEI. Zero Allucinazioni.',
    'layer.strategic.title': 'Strato Strategico',
    'layer.strategic.desc': 'Allineamento North Star alla Missione del Prodotto Target.',
    'nav.profiles': 'I Miei Profili',
    'nav.applications': 'Candidature',
    'nav.ats': 'Report ATS',
    'nav.settings': 'Impostazioni',
    'mode.expert.title': 'Esperto di Scrittura CV',
    'mode.expert.desc': 'Riscrittura completa (Autonomo). Bloccato sui fatti & Strategico.',
    'mode.assistant.title': 'Assistente CV',
    'mode.assistant.desc': 'Rifinire & Lucidare. Editing narrativo interattivo.',
    'mode.validator.title': 'Validatore ATS',
    'mode.validator.desc': 'Simulazione & Punteggio. Analisi del rischio di parsing.',
    'auth.login': 'Accedi',
    'auth.register': 'Registrati',
    'auth.logout': 'Esci',
  },
  es: {
    'hero.title': 'Arquitecto Estratégico de Reclutamiento',
    'hero.subtitle': 'Diseña aplicaciones "Fact-Locked™" con Multi-Agent RAG para traducir experiencia en impacto alineado con la industria.',
    'hero.cta.primary': 'Iniciar Arquitectura',
    'hero.cta.secondary': 'Ver Logic Stack',
    'layer.knowledge.title': 'Capa de Conocimiento (RAG)',
    'layer.knowledge.desc': 'Consulta Estándares Ivy League, Competencias Fortune 500 y datos O*NET.',
    'layer.security.title': 'Capa de Seguridad (Sentinel)',
    'layer.security.desc': 'Fact-Lock™ & Auditoría DEI. Cero Alucinaciones.',
    'layer.strategic.title': 'Capa Estratégica',
    'layer.strategic.desc': 'Alineación North Star a la Misión del Producto Objetivo.',
    'nav.profiles': 'Mis Perfiles',
    'nav.applications': 'Aplicaciones',
    'nav.ats': 'Informes ATS',
    'nav.settings': 'Configuración',
    'mode.expert.title': 'Experto en Escritura CV',
    'mode.expert.desc': 'Reescritura completa (Autónomo). Bloqueado en hechos & Estratégico.',
    'mode.assistant.title': 'Asistente CV',
    'mode.assistant.desc': 'Refinar & Pulir. Edición narrativa interactiva.',
    'mode.validator.title': 'Validador ATS',
    'mode.validator.desc': 'Simulación & Puntuación. Análisis de riesgo de análisis.',
    'auth.login': 'Iniciar sesión',
    'auth.register': 'Registrarse',
    'auth.logout': 'Cerrar sesión',
  },
  zh: {
    'hero.title': '战略招聘架构师',
    'hero.subtitle': '使用多智能体RAG工程化"事实锁定™"应用，将经验转化为行业对齐的影响力。',
    'hero.cta.primary': '开始架构',
    'hero.cta.secondary': '查看逻辑堆栈',
    'layer.knowledge.title': '知识层（RAG）',
    'layer.knowledge.desc': '查询常春藤联盟标准、财富500强能力和O*NET数据。',
    'layer.security.title': '安全层（哨兵）',
    'layer.security.desc': 'Fact-Lock™和DEI审计。零幻觉。',
    'layer.strategic.title': '战略层',
    'layer.strategic.desc': '北极星对齐目标产品使命。',
    'nav.profiles': '我的资料',
    'nav.applications': '申请',
    'nav.ats': 'ATS报告',
    'nav.settings': '设置',
    'mode.expert.title': '简历写作专家',
    'mode.expert.desc': '全面重写（自主）。事实锁定与战略性。',
    'mode.assistant.title': '简历助手',
    'mode.assistant.desc': '精炼与润色。互动式叙事编辑。',
    'mode.validator.title': 'ATS验证器',
    'mode.validator.desc': '模拟与评分。解析风险分析。',
    'auth.login': '登录',
    'auth.register': '注册',
    'auth.logout': '登出',
  },
  ja: {
    'hero.title': '戦略的採用アーキテクト',
    'hero.subtitle': 'マルチエージェントRAGを使用して「Fact-Locked™」アプリケーションを設計し、経験を業界に合わせた影響力に変換します。',
    'hero.cta.primary': 'アーキテクチャを開始',
    'hero.cta.secondary': 'ロジックスタックを表示',
    'layer.knowledge.title': '知識層（RAG）',
    'layer.knowledge.desc': 'アイビーリーグ基準、フォーチュン500コンピテンシー、O*NETデータを照会。',
    'layer.security.title': 'セキュリティ層（センチネル）',
    'layer.security.desc': 'Fact-Lock™とDEI監査。ゼロ幻覚。',
    'layer.strategic.title': '戦略層',
    'layer.strategic.desc': 'ターゲット製品ミッションへのノーススターアライメント。',
    'nav.profiles': 'マイプロファイル',
    'nav.applications': '応募',
    'nav.ats': 'ATSレポート',
    'nav.settings': '設定',
    'mode.expert.title': 'CV執筆エキスパート',
    'mode.expert.desc': '完全書き換え（自律）。事実ロック済み＆戦略的。',
    'mode.assistant.title': '履歴書アシスタント',
    'mode.assistant.desc': '洗練＆磨き。インタラクティブな物語編集。',
    'mode.validator.title': 'ATSバリデーター',
    'mode.validator.desc': 'シミュレーション＆スコアリング。解析リスク分析。',
    'auth.login': 'ログイン',
    'auth.register': '登録',
    'auth.logout': 'ログアウト',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
