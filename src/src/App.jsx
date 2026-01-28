import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Globe } from 'lucide-react';

export default function NorhAI() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [language, setLanguage] = useState('en');
  const [showLangs, setShowLangs] = useState(false);

  useEffect(() => {
    const handleMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const translations = {
    en: { nav: { cap: "Capabilities", sol: "Solutions", res: "Results", start: "Get Started" }, hero: { t1: "AI for", t2: "Enterprise", sub: "Transform operations, accelerate revenue, and unlock competitive advantage through applied artificial intelligence", c1: "Schedule Consultation", c2: "View Case Studies →" }, stats: [{ n: "$10M+", l: "Revenue Generated" }, { n: "150+", l: "Projects Delivered" }, { n: "89%", l: "Average ROI" }, { n: "50+", l: "Enterprise Clients" }], cap: { title: "Capabilities", sub: "Enterprise-grade AI solutions", items: [{ t: "Enterprise Intelligence", d: "Transform raw data into strategic insights with AI-powered analytics", m: "3x faster" }, { t: "Workflow Automation", d: "Eliminate manual processes with intelligent automation", m: "60% cost cut" }, { t: "Advanced Analytics", d: "Predictive models for market trends and behavior", m: "89% accuracy" }, { t: "Custom AI Systems", d: "Bespoke ML solutions for your business", m: "10M+ impact" }] }, ind: { title: "Industry Solutions", items: [{ n: "Financial Services", d: "Risk & fraud detection" }, { n: "Healthcare", d: "Diagnostics & operations" }, { n: "Manufacturing", d: "Predictive maintenance" }, { n: "Retail", d: "Demand forecasting" }, { n: "Technology", d: "Product automation" }, { n: "Professional", d: "Knowledge extraction" }] }, cta: { t: "Ready to begin?", s: "Schedule consultation with our AI specialists", b: "Get Started" }, foot: "© 2025 All rights reserved" },
    tr: { nav: { cap: "Yetenekler", sol: "Çözümler", res: "Sonuçlar", start: "Başlayın" }, hero: { t1: "Kurumsal", t2: "Yapay Zeka", sub: "Uygulamalı yapay zeka ile operasyonları dönüştürün, geliri hızlandırın", c1: "Danışmanlık İsteyin", c2: "Vaka Çalışmaları →" }, stats: [{ n: "10M+$", l: "Gelir" }, { n: "150+", l: "Proje" }, { n: "%89", l: "ROI" }, { n: "50+", l: "Müşteri" }], cap: { title: "Yetenekler", sub: "Kurumsal AI çözümleri", items: [{ t: "Kurumsal Zeka", d: "AI destekli analitik ile veriyi içgörüye dönüştürün", m: "3x hızlı" }, { t: "İş Akışı Otomasyonu", d: "Akıllı otomasyon ile manuel süreçleri kaldırın", m: "%60 düşüş" }, { t: "Gelişmiş Analitik", d: "Pazar trendlerini öngören modeller", m: "%89 doğru" }, { t: "Özel AI Sistemleri", d: "İşinize özel makine öğrenimi", m: "10M+ etki" }] }, ind: { title: "Sektör Çözümleri", items: [{ n: "Finans", d: "Risk ve dolandırıcılık" }, { n: "Sağlık", d: "Teşhis desteği" }, { n: "İmalat", d: "Öngörücü bakım" }, { n: "Perakende", d: "Talep tahmini" }, { n: "Teknoloji", d: "Ürün otomasyonu" }, { n: "Profesyonel", d: "Bilgi çıkarımı" }] }, cta: { t: "Hazır mısınız?", s: "AI uzmanlarımızla danışma planlayın", b: "Başlayın" }, foot: "© 2025 Tüm haklar saklı" },
    es: { nav: { cap: "Capacidades", sol: "Soluciones", res: "Resultados", start: "Comenzar" }, hero: { t1: "IA para", t2: "Empresas", sub: "Transforme operaciones y acelere ingresos con IA aplicada", c1: "Agendar Consulta", c2: "Ver Casos →" }, stats: [{ n: "$10M+", l: "Ingresos" }, { n: "150+", l: "Proyectos" }, { n: "89%", l: "ROI" }, { n: "50+", l: "Clientes" }], cap: { title: "Capacidades", sub: "Soluciones empresariales", items: [{ t: "Inteligencia", d: "Insights estratégicos con análisis IA", m: "3x rápido" }, { t: "Automatización", d: "Elimine procesos manuales", m: "60% menos" }, { t: "Análisis Avanzado", d: "Modelos predictivos", m: "89% preciso" }, { t: "Sistemas IA", d: "ML personalizado", m: "10M+ impacto" }] }, ind: { title: "Soluciones", items: [{ n: "Finanzas", d: "Riesgo y fraude" }, { n: "Salud", d: "Diagnóstico" }, { n: "Manufactura", d: "Mantenimiento" }, { n: "Comercio", d: "Pronósticos" }, { n: "Tecnología", d: "Automatización" }, { n: "Profesional", d: "Conocimiento" }] }, cta: { t: "¿Listo?", s: "Consulta con especialistas", b: "Comenzar" }, foot: "© 2025 Derechos reservados" },
    ar: { nav: { cap: "القدرات", sol: "الحلول", res: "النتائج", start: "ابدأ" }, hero: { t1: "الذكاء الاصطناعي", t2: "للمؤسسات", sub: "تحويل العمليات وتسريع الإيرادات", c1: "حجز استشارة", c2: "← دراسات" }, stats: [{ n: "+10م$", l: "إيرادات" }, { n: "+150", l: "مشروع" }, { n: "89%", l: "ROI" }, { n: "+50", l: "عميل" }], cap: { title: "القدرات", sub: "حلول مؤسسية", items: [{ t: "الذكاء المؤسسي", d: "رؤى استراتيجية بالذكاء الاصطناعي", m: "3x أسرع" }, { t: "أتمتة العمل", d: "إزالة العمليات اليدوية", m: "60% أقل" }, { t: "تحليلات متقدمة", d: "نماذج تنبؤية", m: "89% دقة" }, { t: "أنظمة AI", d: "تعلم آلي مخصص", m: "10م+ تأثير" }] }, ind: { title: "الحلول", items: [{ n: "المالية", d: "مخاطر واحتيال" }, { n: "الصحة", d: "تشخيص" }, { n: "التصنيع", d: "صيانة" }, { n: "التجزئة", d: "توقعات" }, { n: "التقنية", d: "أتمتة" }, { n: "المهنية", d: "معرفة" }] }, cta: { t: "مستعد؟", s: "استشارة مع متخصصين", b: "ابدأ" }, foot: "© 2025 جميع الحقوق" },
    de: { nav: { cap: "Fähigkeiten", sol: "Lösungen", res: "Ergebnisse", start: "Starten" }, hero: { t1: "KI für", t2: "Unternehmen", sub: "Transformieren Sie Abläufe und beschleunigen Sie Umsätze", c1: "Beratung", c2: "Fallstudien →" }, stats: [{ n: "10M+$", l: "Einnahmen" }, { n: "150+", l: "Projekte" }, { n: "89%", l: "ROI" }, { n: "50+", l: "Kunden" }], cap: { title: "Fähigkeiten", sub: "Unternehmens-KI", items: [{ t: "Intelligenz", d: "Strategische Erkenntnisse mit KI", m: "3x schneller" }, { t: "Automatisierung", d: "Manuelle Prozesse beseitigen", m: "60% weniger" }, { t: "Erweiterte Analytik", d: "Vorhersagemodelle", m: "89% genau" }, { t: "KI-Systeme", d: "Individuelle ML-Lösungen", m: "10M+ Wirkung" }] }, ind: { title: "Lösungen", items: [{ n: "Finanzen", d: "Risiko & Betrug" }, { n: "Gesundheit", d: "Diagnose" }, { n: "Fertigung", d: "Wartung" }, { n: "Einzelhandel", d: "Prognosen" }, { n: "Technologie", d: "Automatisierung" }, { n: "Professionell", d: "Wissensextraktion" }] }, cta: { t: "Bereit?", s: "Beratung mit KI-Spezialisten", b: "Starten" }, foot: "© 2025 Alle Rechte" }
  };

  const t = translations[language];
  const isRTL = language === 'ar';
  const stars = Array.from({ length: 150 }, (_, i) => ({ id: i, x: Math.random() * 100, y: Math.random() * 100, size: Math.random() * 2 + 0.5, opacity: Math.random() * 0.8 + 0.2, dur: Math.random() * 3 + 2 }));
  const langs = [{ c: 'en', n: 'English', f: '🇬🇧' }, { c: 'tr', n: 'Türkçe', f: '🇹🇷' }, { c: 'es', n: 'Español', f: '🇪🇸' }, { c: 'ar', n: 'العربية', f: '🇸🇦' }, { c: 'de', n: 'Deutsch', f: '🇩🇪' }];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0 pointer-events-none">
        {stars.map(s => (
          <div key={s.id} className="absolute" style={{ left: `${s.x}%`, top: `${s.y}%`, width: `${s.size}px`, height: `${s.size}px`, opacity: s.opacity, animation: `twinkle ${s.dur}s infinite` }}>
            <svg width={s.size} height={s.size} viewBox="0 0 10 10"><path d="M5 0 L6 4 L10 5 L6 6 L5 10 L4 6 L0 5 L4 4 Z" fill="white" opacity={s.opacity} /></svg>
          </div>
        ))}
      </div>
      <style>{`@keyframes twinkle { 0%, 100% { opacity: 0.2; } 50% { opacity: 1; } }`}</style>
      <div className="fixed inset-0 bg-gradient-to-b from-indigo-950/30 via-transparent to-violet-950/30 pointer-events-none" />
      <div className="fixed w-[600px] h-[600px] rounded-full blur-3xl opacity-10 bg-gradient-to-r from-indigo-600 to-violet-600 pointer-events-none transition-all duration-1000" style={{ left: `${mousePosition.x / 15}px`, top: `${mousePosition.y / 15}px`, transform: `translate(-50%, -50%)` }} />

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className={`flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-3`}>
              <svg width="28" height="28" viewBox="0 0 40 40"><path d="M20 5 L35 15 L35 25 L20 35 L5 25 L5 15 Z" fill="none" stroke="url(#g)" strokeWidth="2"/><circle cx="20" cy="20" r="5" fill="url(#g)"/><defs><linearGradient id="g"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient></defs></svg>
              <span className="text-lg font-semibold">Norh AI</span>
            </div>
            <div className={`hidden md:flex items-center ${isRTL ? 'space-x-reverse' : ''} space-x-8 text-sm`}>
              <a href="#capabilities" className="text-gray-400 hover:text-white transition">{t.nav.cap}</a>
              <a href="#solutions" className="text-gray-400 hover:text-white transition">{t.nav.sol}</a>
              <a href="#results" className="text-gray-400 hover:text-white transition">{t.nav.res}</a>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <button onClick={() => setShowLangs(!showLangs)} className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 transition text-sm">
                  <Globe className="w-4 h-4" />
                  <span>{langs.find(l => l.c === language)?.f}</span>
                </button>
                {showLangs && (
                  <div className="absolute top-12 right-0 bg-black/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 min-w-[160px]">
                    {langs.map((l) => (
                      <button key={l.c} onClick={() => { setLanguage(l.c); setShowLangs(false); }} className={`w-full text-left px-4 py-2 rounded-lg hover:bg-white/10 transition flex items-center gap-3 ${language === l.c ? 'bg-white/10' : 'text-gray-400'}`}>
                        <span>{l.f}</span><span className="text-sm">{l.n}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="text-sm px-5 py-2 rounded-full bg-white text-black hover:bg-gray-200 transition font-medium">{t.nav.start}</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
        <div className="text-center z-10 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-8 leading-none tracking-tight">{t.hero.t1}<br /><span className="font-semibold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">{t.hero.t2}</span></h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">{t.hero.sub}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-black rounded-full text-base font-medium hover:bg-gray-200 transition flex items-center gap-2">{t.hero.c1}<ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} /></button>
            <button className="px-8 py-4 text-base font-medium text-gray-300 hover:text-white transition">{t.hero.c2}</button>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce opacity-40"><ChevronDown className="w-6 h-6" /></div>
      </section>

      <section id="results" className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {t.stats.map((s, i) => (<div key={i} className="text-center group"><div className="text-5xl md:text-6xl font-light mb-2 group-hover:text-indigo-400 transition">{s.n}</div><div className="text-sm text-gray-500 font-light">{s.l}</div></div>))}
        </div>
      </section>

      <section id="capabilities" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-6 text-center">{t.cap.title}</h2>
          <p className="text-xl text-gray-400 text-center mb-20 font-light">{t.cap.sub}</p>
          <div className="grid md:grid-cols-2 gap-6">
            {t.cap.items.map((c, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all">
                <div className="flex items-start justify-between mb-4"><h3 className="text-2xl font-light">{c.t}</h3><span className="text-xs text-indigo-400 px-3 py-1 rounded-full bg-indigo-400/10 whitespace-nowrap">{c.m}</span></div>
                <p className="text-gray-400 leading-relaxed font-light">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light mb-20 text-center">{t.ind.title}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {t.ind.items.map((ind, i) => (<div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-all"><h3 className="text-xl font-light mb-2">{ind.n}</h3><p className="text-sm text-gray-500 font-light">{ind.d}</p></div>))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-6xl md:text-7xl font-light mb-6">{t.cta.t}</h2>
          <p className="text-xl text-gray-400 mb-12 font-light">{t.cta.s}</p>
          <button className="px-10 py-5 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-200 transition">{t.cta.b}</button>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 40 40"><path d="M20 5 L35 15 L35 25 L20 35 L5 25 L5 15 Z" fill="none" stroke="url(#f)" strokeWidth="2"/><circle cx="20" cy="20" r="5" fill="url(#f)"/><defs><linearGradient id="f"><stop offset="0%" stopColor="#6366f1"/><stop offset="100%" stopColor="#8b5cf6"/></linearGradient></defs></svg>
            <span className="text-sm font-light">Norh AI Solutions</span>
          </div>
          <div className="text-sm text-gray-600 font-light">{t.foot}</div>
        </div>
      </footer>
    </div>
  );
}
