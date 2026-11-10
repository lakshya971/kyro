import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [filter, setFilter] = useState('all');
  const [activeFaq, setActiveFaq] = useState(null);

  // Custom Scope Estimator State
  const [selectedAddons, setSelectedAddons] = useState([]);

  const packages = [
    {
      id: 'pkg-01',
      domain: 'web',
      category: 'Web Architecture',
      title: 'Starter Web Architecture',
      price: '₹18,000',
      numericPrice: 18000,
      period: 'one-time fixed',
      sla: '5-7 Day SLA',
      desc: 'Engineered fast, semantic, and high-converting 5-page custom responsive web platform. Optimized for sub-second load times on 4G/5G mobile carriers.',
      bottleneck: 'Eliminates sluggish WordPress/Wix bloat that loses 60%+ mobile visitors. Zero recurring plugin license fees.',
      inclusions: [
        'Up to 5 production-ready pages (Home, Services, About, Specs, Contact)',
        'Tailwind CSS semantic tokens with zero external CSS overhead',
        'Sub-250ms Core Web Vitals score 99+',
        'Automated lead capture webhook to email / CRM',
        '30-day post-launch code warranty'
      ]
    },
    {
      id: 'pkg-02',
      domain: 'web',
      category: 'Web Architecture',
      title: 'Growth Business Platform',
      price: '₹35,000',
      numericPrice: 35000,
      period: 'one-time fixed',
      sla: '10-14 Day SLA',
      desc: 'Dynamic 10-12 page digital engine with headless CMS, interactive quote calculator, dynamic resources, and integrated telemetry funnel.',
      bottleneck: 'Bridges the gap between static brochure sites and enterprise SaaS, turning passive traffic into qualified inbound pipeline.',
      inclusions: [
        'Up to 12 production-ready pages with custom layouts',
        'Headless CMS integration for effortless client publishing',
        'Interactive calculation widget / lead qualification flow',
        'Full SEO metadata, OpenGraph, and structured schema markup',
        '60-day post-launch code warranty & operator walkthrough'
      ]
    },
    {
      id: 'pkg-03',
      domain: 'software',
      category: 'Software & MVP',
      title: 'Custom Software / SaaS MVP',
      price: '₹65,000',
      numericPrice: 65000,
      period: 'one-time fixed',
      sla: '2-3 Weeks SLA',
      desc: 'Full-stack production application built on React, Node/Go, and PostgreSQL. Multi-tenant database schema, authentication, and payment gateway.',
      bottleneck: 'Eliminates unmaintainable no-code platform constraints when scaling to your first 5,000 active transactional users.',
      inclusions: [
        'Complete React frontend + Node/Go microservices backend',
        'PostgreSQL database with Prisma/Drizzle migrations',
        'Secure JWT / Session auth with Role-Based Access Control (RBAC)',
        'Stripe / Razorpay payment gateway integration',
        'Docker containerization + 90-day defect warranty'
      ]
    },
    {
      id: 'pkg-04',
      domain: 'ai',
      category: 'AI & n8n Workflows',
      title: 'n8n Workflow Automation Engine',
      price: '₹24,000',
      numericPrice: 24000,
      period: 'one-time fixed',
      sla: '5-7 Day SLA',
      desc: 'Self-hosted high-security node pipelines connecting CRM, databases, payment gateways, and communications with zero external SaaS fees.',
      bottleneck: 'Eliminates ₹15,000+/mo recurring Zapier/Make subscription costs and manual copy-paste errors across disparate internal apps.',
      inclusions: [
        'Dedicated self-hosted n8n installation on your cloud',
        'Up to 5 custom multi-step end-to-end workflows',
        'Webhook error-trapping with instant Telegram/Slack alerts',
        'Data sovereignty: 100% internal network containment',
        'Operator training session & comprehensive runbooks'
      ]
    },
    {
      id: 'pkg-05',
      domain: 'ai',
      category: 'AI & n8n Workflows',
      title: 'Agentic AI Autonomous System',
      price: '₹55,000',
      numericPrice: 55000,
      period: 'one-time fixed',
      sla: '10-14 Day SLA',
      desc: 'Multi-agent autonomous workflow unit with goal seeking, tool execution capabilities, vector RAG grounding, and deterministic error recovery.',
      bottleneck: 'Replaces expensive, error-prone manual triage with 24/7 autonomous agents that execute multi-step database actions with zero hallucinations.',
      inclusions: [
        'Multi-agent topology graph (Orchestrator + Specialist Nodes)',
        'Hybrid Vector Database setup (Qdrant/pgvector + BM25 keywords)',
        'Strict schema guardrails with formal grammar validation',
        'Automated human-in-the-loop escalation nodes for edge cases',
        'Comprehensive unit test harness & regression tests'
      ]
    },
    {
      id: 'pkg-06',
      domain: 'analytics',
      category: 'Power BI & Insights',
      title: 'Power BI Executive Intelligence Suite',
      price: '₹32,000',
      numericPrice: 32000,
      period: 'one-time fixed',
      sla: '7-10 Day SLA',
      desc: 'High-velocity executive telemetry suite uniting fragmented databases into real-time KPI observation, cohort retention, and margin analysis.',
      bottleneck: 'Ends conflicting departmental spreadsheets and delayed executive reporting with an unambiguous single source of truth.',
      inclusions: [
        'Automated ETL pipelines connecting CRM, accounting, and databases',
        'DAX semantic metric model with single-source CAC/LTV/EBITDA formulas',
        '3 customized responsive desktop & mobile dashboards',
        'Automated scheduled refreshes and statistical threshold alerts',
        'Executive training memo and dashboard documentation'
      ]
    },
    {
      id: 'pkg-07',
      domain: 'software',
      category: 'Software & MVP',
      title: 'Enterprise Fractional CTO & Retainer',
      price: '₹48,000',
      numericPrice: 48000,
      period: 'per month',
      sla: 'Continuous SLA',
      desc: 'High-stakes technological leadership, continuous code reviews, sprint architecture, security audits, and dedicated priority engineering allocation.',
      bottleneck: 'Provides institutional-grade technical leadership and senior execution without ₹30L+ full-time executive salary overhead.',
      inclusions: [
        'Bi-weekly technical architecture & sprint steering reviews',
        'Priority code auditing, pull request reviews, and security hardening',
        'Direct founder Slack/WhatsApp access with 4-hour SLA response',
        'Emergency outage escalation & failover intervention',
        'Ongoing technological roadmap calibration'
      ]
    }
  ];

  const addons = [
    { id: 'ad-01', name: 'WhatsApp Business API Integration', price: 8000 },
    { id: 'ad-02', name: 'Multi-Region High-Availability Cluster', price: 14000 },
    { id: 'ad-03', name: 'Advanced Payment Gateway Split Routing', price: 12000 },
    { id: 'ad-04', name: 'Extended 180-Day Full Code Warranty', price: 9000 },
  ];

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculateAddonTotal = () => {
    return selectedAddons.reduce((acc, id) => {
      const addon = addons.find((a) => a.id === id);
      return acc + (addon ? addon.price : 0);
    }, 0);
  };

  const faqs = [
    {
      q: 'Are there any hidden recurring fees or monthly maintenance charges?',
      a: 'None. All our fixed projects are delivered with 100% source code ownership and full documentation. You only pay for your own cloud infrastructure (AWS/Cloudflare/Hetzner), which typically costs less than ₹1,500/month for standard systems.'
    },
    {
      q: 'How does KYRO prevent scope creep and project delays?',
      a: 'We work on strict technical RFCs and engineering specifications agreed upon before code is written. Every milestone has a deterministic timeline and unambiguous deliverables, guaranteeing on-time delivery without unexpected invoices.'
    },
    {
      q: 'Do I own the intellectual property and code repository?',
      a: 'Yes, 100%. Upon completion and payment settlement, all intellectual property, repository commits, and infrastructure credentials are fully assigned to your enterprise.'
    },
    {
      q: 'How are payments structured?',
      a: 'Standard commercial projects operate on a 50% technical deposit upon specification approval, and 50% upon final production deployment and acceptance testing. GST invoicing provided for all Indian businesses.'
    }
  ];

  const filteredPackages =
    filter === 'all' ? packages : packages.filter((p) => p.domain === filter);

  return (
    <main className="flex flex-col relative w-full pt-16 pb-20 bg-surface min-h-screen text-body-text">
      {/* Top Breadcrumb & Status */}
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-2 bg-surface-container-lowest border-b border-hairline/60">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-sunset-orange animate-pulse"></span>
          <span className="font-mono text-[11px] sm:text-xs text-body-mid uppercase tracking-wider">
            KYRO • INVESTMENT MATRIX • TRANSPARENT SPEC
          </span>
        </div>
        <span className="font-mono text-[11px] text-emerald-400 font-semibold">
          FLAT INR PRICING
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col pt-10 sm:pt-16 pb-10 sm:pb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
              TRANSPARENT INVESTMENT MATRIX
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl text-ink font-normal tracking-tight leading-[1.15] mb-5 max-w-4xl">
            Commercial Architecture Without Ambiguity
          </h1>

          <p className="font-sans text-base sm:text-lg text-body-mid leading-relaxed mb-8 max-w-2xl">
            Fixed investment milestones with institutional-grade rigor. Flat pricing, direct founder scoping, and zero accumulated technical debt.
          </p>

          {/* Key Market Context Banner */}
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-body-mid">
            <span className="px-3 py-1.5 rounded-full bg-surface-container border border-hairline text-breeze-blue">
              ₹ INR Invoicing (GST Compliant)
            </span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container border border-hairline text-ink">
              Direct Founder Architecture Scoping
            </span>
            <span className="px-3 py-1.5 rounded-full bg-surface-container border border-hairline text-sunset-orange">
              Zero Tech Debt Guarantee
            </span>
          </div>
        </section>

        {/* Filter Chips */}
        <section className="pb-8 flex flex-col gap-3">
          <span className="font-mono text-xs text-body-mid uppercase tracking-wider font-semibold">
            SELECT DOMAIN FOCUS
          </span>
          <div className="flex overflow-x-auto no-scrollbar gap-2 py-1">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all flex items-center gap-2 shrink-0 ${
                filter === 'all'
                  ? 'bg-canvas-card border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-canvas-soft border border-hairline text-body-mid hover:text-ink'
              }`}
            >
              <span className="material-symbols-outlined text-[16px] text-breeze-blue">all_inclusive</span>
              <span>All Packages ({packages.length})</span>
            </button>

            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all flex items-center gap-2 shrink-0 ${
                filter === 'web'
                  ? 'bg-canvas-card border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-canvas-soft border border-hairline text-body-mid hover:text-ink'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">language</span>
              <span>Web Architecture</span>
            </button>

            <button
              onClick={() => setFilter('software')}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all flex items-center gap-2 shrink-0 ${
                filter === 'software'
                  ? 'bg-canvas-card border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-canvas-soft border border-hairline text-body-mid hover:text-ink'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">terminal</span>
              <span>Software & MVP</span>
            </button>

            <button
              onClick={() => setFilter('ai')}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all flex items-center gap-2 shrink-0 ${
                filter === 'ai'
                  ? 'bg-canvas-card border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-canvas-soft border border-hairline text-body-mid hover:text-ink'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">smart_toy</span>
              <span>AI & n8n Workflows</span>
            </button>

            <button
              onClick={() => setFilter('analytics')}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all flex items-center gap-2 shrink-0 ${
                filter === 'analytics'
                  ? 'bg-canvas-card border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-canvas-soft border border-hairline text-body-mid hover:text-ink'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">query_stats</span>
              <span>Power BI & Insights</span>
            </button>
          </div>
        </section>

        {/* Detailed Service Packages List */}
        <section className="flex flex-col gap-6 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="bg-canvas-card border border-hairline rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-pill-border transition-all shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs text-breeze-blue uppercase tracking-widest font-semibold">
                      {pkg.category}
                    </span>
                    <span className="px-3 py-1 rounded-full font-mono text-[11px] text-body-mid bg-surface-container border border-hairline">
                      {pkg.sla}
                    </span>
                  </div>

                  <h2 className="font-sans text-xl sm:text-2xl text-ink font-medium mb-3">
                    {pkg.title}
                  </h2>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-sans text-3xl sm:text-4xl text-ink font-normal tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="font-mono text-xs text-body-mid uppercase">
                      {pkg.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-body-text leading-relaxed mb-5">
                    {pkg.desc}
                  </p>

                  {/* Problem Solved Callout */}
                  <div className="p-4 rounded-xl bg-surface-container-low border border-hairline/60 mb-5">
                    <div className="flex items-center gap-2 text-sunset-orange mb-1">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      <span className="font-mono text-[11px] uppercase font-semibold">
                        Critical Bottleneck Solved
                      </span>
                    </div>
                    <p className="text-xs text-body-text leading-relaxed">
                      {pkg.bottleneck}
                    </p>
                  </div>

                  {/* Inclusions List */}
                  <div className="mb-6">
                    <span className="font-mono text-[11px] text-body-mid uppercase tracking-wider block mb-2 font-semibold">
                      Included In Scope
                    </span>
                    <ul className="space-y-2 text-xs text-body-text">
                      {pkg.inclusions.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-breeze-blue text-[16px] shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-hairline/60">
                  <Link
                    to="/contact"
                    className="w-full py-3 rounded-full bg-surface-container-high hover:bg-surface-bright border border-pill-border text-ink font-mono text-xs text-center font-bold uppercase tracking-wider transition-all block"
                  >
                    Lock In Spec & SLA
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Interactive Scope Customizer / Add-ons */}
        <section className="py-10 sm:py-16 bg-surface-container-lowest rounded-3xl border border-hairline p-6 sm:p-10 mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-sunset-orange text-[20px]">tune</span>
            <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
              MODULAR SPECIFICATION CUSTOMIZER
            </span>
          </div>

          <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight mb-2">
            Add-on Engineering Capabilities
          </h2>
          <p className="font-sans text-xs sm:text-sm text-body-mid max-w-2xl mb-8 leading-relaxed">
            Attach dedicated architectural modules to your contract. Flat pricing with full integration testing included.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {addons.map((add) => {
              const isSelected = selectedAddons.includes(add.id);
              return (
                <div
                  key={add.id}
                  onClick={() => toggleAddon(add.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-canvas-card border-sunset-orange text-ink shadow-md'
                      : 'bg-surface-container-low border-hairline text-body-text hover:bg-surface-container'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[20px] text-sunset-orange">
                      {isSelected ? 'check_box' : 'check_box_outline_blank'}
                    </span>
                    <span className="font-sans text-sm font-medium">
                      {add.name}
                    </span>
                  </div>
                  <span className="font-mono text-sm text-ink font-semibold">
                    +₹{add.price.toLocaleString('en-IN')}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Add-on Summary */}
          <div className="p-6 rounded-2xl bg-canvas-card border border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-xs text-body-mid uppercase">
                SELECTED ADD-ON VALUE
              </span>
              <span className="font-sans text-2xl text-sunset-orange font-bold mt-0.5">
                +₹{calculateAddonTotal().toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-body-mid">
                {selectedAddons.length} architectural modules toggled
              </span>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-full bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-wider text-center shadow-md hover:bg-primary-fixed transition-colors"
            >
              Request Custom Bundle Quote
            </Link>
          </div>
        </section>

        {/* Transparent Pricing FAQ Accordion */}
        <section className="py-8 sm:py-12 mb-16 sm:mb-20">
          <div className="flex flex-col mb-8">
            <span className="font-mono text-xs uppercase tracking-widest text-breeze-blue font-semibold mb-2">
              INSTITUTIONAL TRANSPARENCY
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight">
              Frequently Clarified Technical Terms
            </h2>
          </div>

          <div className="flex flex-col gap-3 max-w-4xl">
            {faqs.map((faq, i) => {
              const isOpen = activeFaq === i;
              return (
                <div key={i} className="bg-canvas-card border border-hairline rounded-2xl overflow-hidden transition-all">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left hover:bg-surface-container-high transition-colors"
                  >
                    <span className="font-sans text-base text-ink font-medium pr-4">
                      {faq.q}
                    </span>
                    <span className="material-symbols-outlined text-body-mid text-[20px] shrink-0">
                      {isOpen ? 'remove' : 'add'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-xs sm:text-sm text-body-text leading-relaxed border-t border-hairline/40">
                      <p className="mt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
