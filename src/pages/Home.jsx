import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UiPreviewFrame from '../components/UiPreviewFrame';

export default function Home() {
  // Interactive Node Mesh State
  const [activeNode, setActiveNode] = useState('AGENTIC');

  const nodeDetails = {
    API: {
      title: 'High-Throughput Gateway Layer',
      desc: 'Sub-15ms edge caching with distributed token validation and auto-throttling against DDoS spikes.',
      latency: '11.4ms',
      type: 'Ingress & Contract Protocol'
    },
    'LLM-01': {
      title: 'Neural Inference Engine',
      desc: 'Orchestrating frontier model routing (Claude 3.5, GPT-4o, Gemini 1.5 Pro) with fallback rings.',
      latency: '142ms',
      type: 'Cognitive Reasoning Unit'
    },
    VECTOR: {
      title: 'Hybrid Semantic Memory Store',
      desc: 'Dense embeddings fused with BM25 sparse keyword indices for deterministic source attribution.',
      latency: '18.1ms',
      type: 'Qdrant / pgvector Cluster'
    },
    AGENTIC: {
      title: 'Autonomous State Resolver',
      desc: 'Self-correcting multi-agent orchestrator executing tool calls, database mutations, and external webhooks.',
      latency: '34.6ms',
      type: 'Core Dispatch Core'
    },
    DATA: {
      title: 'Enterprise Warehouse Sink',
      desc: 'ACID-compliant relational storage linked directly to analytical cubes and real-time Power BI telemetry.',
      latency: '8.2ms',
      type: 'PostgreSQL or your existing database'
    }
  };

  // Interactive Terminal REPL State
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState([
    { type: 'cmd', text: 'kyro-system --verify-architecture' },
    { type: 'info', text: 'Founder-led build session: READY' },
    { type: 'ready', text: 'Project scope checklist: READY' },
    { type: 'metric', text: 'Client-owned code and documentation: STANDARD' },
  ]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    const newLogs = [...terminalLogs, { type: 'cmd', text: terminalInput }];

    if (cmd === 'help') {
      newLogs.push({
        type: 'info',
        text: 'AVAILABLE COMMANDS: status, services, pricing, contact, verify, clear'
      });
    } else if (cmd === 'status' || cmd === 'verify') {
      newLogs.push({
        type: 'pass',
        text: 'KYRO IS READY TO REVIEW YOUR PROJECT. NO UNSUPPORTED PERFORMANCE PROMISES.'
      });
    } else if (cmd === 'services') {
      newLogs.push({
        type: 'info',
        text: '5 STARTING POINTS: Websites, Software, Dashboards, Automation, Consultation'
      });
    } else if (cmd === 'pricing') {
      newLogs.push({
        type: 'info',
        text: 'STARTING AT ₹18,000. FINAL PRICE DEPENDS ON YOUR WRITTEN SCOPE.'
      });
    } else if (cmd === 'contact') {
      newLogs.push({
        type: 'ready',
        text: 'ROUTING DIRECTLY TO FOUNDER AUDIT QUEUE. OPEN THE CONTACT PAGE.'
      });
    } else if (cmd === 'clear') {
      setTerminalLogs([]);
      setTerminalInput('');
      return;
    } else {
      newLogs.push({
        type: 'error',
        text: `Command not recognized: "${terminalInput}". Type "help" for options.`
      });
    }

    setTerminalLogs(newLogs);
    setTerminalInput('');
  };

  const services = [
    {
      id: '01',
      tag: '01 • ARCHITECTURE',
      icon: 'web',
      accentColor: 'text-sunset-orange',
      title: 'WEBSITE DEVELOPMENT',
      desc: 'Clear, responsive websites built around your offer, customers, and lead flow—not a template with unnecessary extras.',
      bestFor: 'D2C brands, B2B service firms & high-growth startups losing leads on slow template sites.',
      deliverables: 'Custom responsive pages • SEO basics • Contact and lead capture setup',
      outcome: 'A site your customers can understand and use on mobile',
      link: '/development'
    },
    {
      id: '02',
      tag: '02 • SYSTEMS',
      icon: 'terminal',
      accentColor: 'text-breeze-blue',
      title: 'CUSTOM SOFTWARE SOLUTIONS',
      desc: 'Small business tools, portals, and MVPs that fit the way your team actually works.',
      bestFor: 'Manufacturing, distribution & commercial teams outgrowing disconnected Excel & rigid SaaS tools.',
      deliverables: 'Scoped features • Login and roles where needed • Handover documentation',
      outcome: 'Less spreadsheet and copy-paste work',
      link: '/development'
    },
    {
      id: '03',
      tag: '03 • TELEMETRY',
      icon: 'monitoring',
      accentColor: 'text-body-mid',
      title: 'DATA ANALYTICS & BI',
      desc: 'Simple dashboards that bring the numbers you already have into one place.',
      bestFor: 'Founders, CFOs & ops directors tired of waiting days for conflicting manual spreadsheets.',
      deliverables: 'Data cleanup • Clear metric definitions • Power BI or custom dashboard',
      outcome: 'Fewer conflicting reports and clearer decisions',
      link: '/analytics'
    },
    {
      id: '04',
      tag: '04 • ADVISORY',
      icon: 'psychology_alt',
      accentColor: 'text-sunset-orange',
      title: 'BUSINESS CONSULTATION',
      desc: 'Strategic technology diagnostics that locate operational bottlenecks, plug margin leaks, and map high-ROI engineering roadmaps.',
      bestFor: 'Leadership teams planning software modernization, cost reduction, or AI adoption before spending capital.',
      deliverables: 'Discovery call • Written recommendations • Practical next-step plan',
      outcome: 'A clearer decision before you spend on software',
      link: '/contact'
    },
    {
      id: '05',
      tag: '05 • SYNTHESIS',
      icon: 'auto_mode',
      accentColor: 'text-breeze-blue',
      title: 'AI AUTOMATION',
      desc: 'Automations for repetitive admin work such as lead sorting, notifications, and document handling.',
      bestFor: 'Operations, finance & back-office teams burning 15+ hours weekly on repetitive data handling.',
      deliverables: 'Automated Invoice & Document OCR • Lead Qualification Routing • Instant Slack/WhatsApp Dispatch',
      outcome: 'Fewer repetitive steps, with a human fallback for exceptions',
      link: '/ai-workflows'
    },
    {
      id: '06',
      tag: '06 • AGENTIC',
      icon: 'smart_toy',
      accentColor: 'text-dusk-purple',
      title: 'AGENTIC AI & AUTONOMOUS AGENTS',
      desc: 'Multi-agent workflows with goal seeking, runtime error recovery, and tool execution that autonomously resolve support & ops tasks.',
      bestFor: 'Teams exploring carefully scoped AI assistance across support or operations.',
      deliverables: 'Multi-Agent Supervisor Swarm • Tool-Calling Guardrails • Human-in-the-Loop Escalation',
      outcome: 'Useful automation with review points and clear limits',
      link: '/ai-workflows'
    },
    {
      id: '07',
      tag: '07 • GROUNDING',
      icon: 'dataset',
      accentColor: 'text-sunset-orange',
      title: 'RAG-BASED AI ARCHITECTURES',
      desc: 'Private semantic search and conversational assistants grounded strictly on your company SOPs, PDFs, pricing rules, and policies.',
      bestFor: 'Teams that want faster access to their own documents and policies.',
      deliverables: 'Private pgvector/Qdrant Index • Hybrid BM25 Re-Ranking • Verified Source Citations',
      outcome: 'Searchable internal knowledge with source links where available',
      link: '/ai-workflows'
    },
    {
      id: '08',
      tag: '08 • PIPELINES',
      icon: 'hub',
      accentColor: 'text-breeze-blue',
      title: 'N8N WORKFLOW PIPELINES',
      desc: 'Automation pipelines connecting the tools your business already uses, with hosting and third-party costs discussed upfront.',
      bestFor: 'Privacy-conscious companies scaling multi-app sync without paying steep recurring SaaS workflow fees.',
      deliverables: 'Self-Hosted Cloud n8n Cluster • Air-Gapped Credentials • Dead-Letter Error Recovery',
      outcome: 'Air-Gapped Data Privacy • Multi-App Sync Under 1.2s',
      link: '/ai-workflows'
    }
  ];

  return (
    <main className="flex flex-col relative w-full pt-16 pb-20 bg-surface min-h-screen text-body-text">
      {/* Top Ambient Telemetry Scanline */}
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-2 bg-surface-container-lowest border-b border-hairline/60">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-sunset-orange animate-pulse"></span>
          <span className="font-mono text-[11px] sm:text-xs text-body-mid uppercase tracking-wider">
            KYRO DEMO INTERFACE • SIMULATED STATUS
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block font-mono text-[11px] text-body-mid">
            REGION: SIMULATED
          </span>
          <span className="font-mono text-[11px] text-sunset-orange font-bold">
            LATENCY: EXAMPLE ONLY
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Hero Section — Two-Column Horizontal Split */}
        <section className="flex flex-col pt-10 sm:pt-16 pb-12 sm:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-12 sm:mb-16">
            {/* Left Side: Business Proposition & Action CTAs */}
            <div className="lg:col-span-6 flex flex-col">
              {/* Eyebrow */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-breeze-blue"></span>
                <span className="font-mono text-xs text-breeze-blue uppercase tracking-widest font-semibold">
                  FOUNDER-LED DIGITAL BUILD STUDIO
                </span>
              </div>

              {/* Monolith Headline */}
              <h1 className="font-sans text-3xl sm:text-5xl text-ink font-normal tracking-tight leading-[1.1] mb-5">
                Practical digital tools for businesses that want to work better.
              </h1>

              {/* Subtext Statement */}
              <p className="font-sans text-base sm:text-lg text-body-text mb-8 leading-relaxed">
                <strong className="text-ink font-semibold">KYRO</strong> is a founder-led, student-built studio. I build websites, small business software, dashboards, and carefully scoped automations with clear communication and direct ownership.
              </p>

              {/* Interactive Precision Pills */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/development"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-surface-container-low border border-pill-border text-ink font-mono text-xs sm:text-sm shadow-sm transition-all hover:bg-surface-container-high hover:border-breeze-blue active:scale-95"
                >
                  Explore Solutions
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-primary text-on-primary font-mono text-xs sm:text-sm font-semibold shadow-md transition-all hover:bg-primary-fixed active:scale-95"
                >
                  Enquire Now
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full bg-surface-container-lowest border border-hairline text-body-mid hover:text-ink font-mono text-xs sm:text-sm transition-all"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* Right Side: Single Clean Client Deliverable UI Preview */}
            <div className="lg:col-span-6">
              <UiPreviewFrame
                src="/images/kyro-hero-services.png"
                alt="KYRO digital services including web development, software development, analytics, AI automation, and enterprise solutions"
                title="KYRO Digital Services"
                badge="Client Preview"
                caption="Explore KYRO's web, software, analytics, AI automation, and enterprise technology solutions."
                metrics={['100% Owned IP', 'Zero SaaS Lock-in', 'Real-Time']}
                eager={true}
              />
            </div>
          </div>

          {/* Purple Cow USP Highlight Box */}
          <div className="flex flex-col p-6 sm:p-8 rounded-2xl bg-canvas-card border border-hairline shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-dusk-purple animate-pulse"></span>
                <span className="font-mono text-xs text-ink uppercase tracking-wider font-semibold">
                  THE KYRO ADVANTAGE
                </span>
              </div>
              <span className="font-mono text-[10px] text-body-mid uppercase bg-surface-container-high px-2.5 py-1 rounded-full border border-hairline">
                USP • SPEC-00
              </span>
            </div>
            <span className="font-mono text-xs text-breeze-blue uppercase mb-2">
              Honest delivery, built around your business
            </span>
            <p className="font-sans text-sm sm:text-base text-body-text leading-relaxed max-w-3xl">
              You get direct access to the person doing the work, a written scope before development, regular previews, and your project files at handover. No invented benchmarks, enterprise theatre, or promises that depend on someone else’s infrastructure.
            </p>

            {/* Micro Diagnostic Telemetry Bar */}
            <div className="mt-6 pt-4 border-t border-hairline/80 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-surface-container-low p-4 rounded-xl">
              <div>
                <span className="block font-mono text-[10px] text-body-mid uppercase">
                  PROJECT APPROACH
                </span>
                <span className="font-mono text-sm sm:text-base text-sunset-orange font-bold">
                  FOUNDER-LED
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-body-mid uppercase">
                  COMMUNICATION
                </span>
                <span className="font-mono text-sm sm:text-base text-ink font-bold">
                  DIRECT
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-body-mid uppercase">
                  PROJECT FILES
                </span>
                <span className="font-mono text-sm sm:text-base text-breeze-blue font-bold">
                  CLIENT-OWNED
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] text-body-mid uppercase">
                  DELIVERY STYLE
                </span>
                <span className="font-mono text-sm sm:text-base text-ink font-bold">
                  CLEAR SCOPE
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Infrastructure Interactive Graphic Context */}
        <section className="w-full pb-16 sm:pb-24">
          <div className="w-full p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-hairline shadow-md flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-breeze-blue text-[20px]">hub</span>
                <span className="font-mono text-xs text-body-mid uppercase tracking-widest font-semibold">
                  HOW I BUILD
                </span>
              </div>
              <span className="font-mono text-xs text-sunset-orange">
                CLICK NODES TO SEE THE KIND OF WORK I CAN DO
              </span>
            </div>

            {/* SVG Node Topology Graph */}
            <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden bg-surface-container-lowest border border-hairline/60 flex items-center justify-center p-4">
              <svg className="w-full h-full max-w-2xl" fill="none" viewBox="0 0 360 160" xmlns="http://www.w3.org/2000/svg">
                {/* Connectors */}
                <path d="M64 80 L122 40" stroke="#444748" strokeDasharray="3 3"></path>
                <path d="M64 80 L124 120" stroke="#444748"></path>
                <path d="M158 40 L208 80" stroke="#a0c3ec" strokeWidth="1.5"></path>
                <path d="M156 120 L208 80" stroke="#444748"></path>
                <path d="M252 80 L296 80" stroke="#ff7a17" strokeWidth="1.5"></path>

                {/* API Node */}
                <g className="cursor-pointer transition-transform hover:scale-110" onClick={() => setActiveNode('API')}>
                  <circle cx="50" cy="80" fill={activeNode === 'API' ? '#2a2a2a' : '#191919'} r="16" stroke={activeNode === 'API' ? '#a0c3ec' : '#7d8187'} strokeWidth={activeNode === 'API' ? '2' : '1'}></circle>
                  <text fill="#ffffff" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="50" y="83">API</text>
                </g>

                {/* LLM-01 Node */}
                <g className="cursor-pointer transition-transform hover:scale-110" onClick={() => setActiveNode('LLM-01')}>
                  <circle cx="140" cy="40" fill={activeNode === 'LLM-01' ? '#2a2a2a' : '#201f1f'} r="20" stroke={activeNode === 'LLM-01' ? '#ff7a17' : '#a0c3ec'} strokeWidth="1.5"></circle>
                  <text fill="#a0c3ec" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle" x="140" y="44">LLM-01</text>
                </g>

                {/* VECTOR Node */}
                <g className="cursor-pointer transition-transform hover:scale-110" onClick={() => setActiveNode('VECTOR')}>
                  <circle cx="140" cy="120" fill={activeNode === 'VECTOR' ? '#2a2a2a' : '#191919'} r="18" stroke={activeNode === 'VECTOR' ? '#a0c3ec' : '#7d8187'} strokeWidth="1"></circle>
                  <text fill="#e5e2e1" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="140" y="123">VECTOR</text>
                </g>

                {/* AGENTIC RESOLVER Node */}
                <g className="cursor-pointer transition-transform hover:scale-110" onClick={() => setActiveNode('AGENTIC')}>
                  <circle cx="230" cy="80" fill={activeNode === 'AGENTIC' ? '#353534' : '#2a2a2a'} r="24" stroke="#ff7a17" strokeWidth="2"></circle>
                  <text fill="#ffffff" fontFamily="JetBrains Mono" fontSize="9" fontWeight="bold" textAnchor="middle" x="230" y="82">AGENTIC</text>
                  <text fill="#ff7a17" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle" x="230" y="92">RESOLVER</text>
                </g>

                {/* DATA Node */}
                <g className="cursor-pointer transition-transform hover:scale-110" onClick={() => setActiveNode('DATA')}>
                  <circle cx="310" cy="80" fill={activeNode === 'DATA' ? '#2a2a2a' : '#191919'} r="16" stroke={activeNode === 'DATA' ? '#a0c3ec' : '#ffffff'} strokeWidth="1"></circle>
                  <text fill="#ffffff" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="310" y="83">DATA</text>
                </g>
              </svg>
            </div>

            {/* Active Node Detail Card */}
            <div className="p-4 rounded-xl bg-canvas-card border border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-sunset-orange font-bold uppercase px-2 py-0.5 rounded bg-sunset-orange/10 border border-sunset-orange/20">
                    {activeNode}
                  </span>
                  <span className="font-sans text-sm font-semibold text-ink">
                    {nodeDetails[activeNode].title}
                  </span>
                  <span className="font-mono text-[10px] text-body-mid bg-surface-container px-2 py-0.5 rounded">
                    {nodeDetails[activeNode].type}
                  </span>
                </div>
                <p className="text-xs text-body-text mt-1 max-w-2xl">
                  {nodeDetails[activeNode].desc}
                </p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-mono text-body-mid">TELEMETRY</span>
                  <span className="font-mono text-xs text-breeze-blue font-bold">
                    {nodeDetails[activeNode].latency}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Metrics Strip */}
        <section className="w-full bg-surface-container-lowest rounded-2xl border border-hairline py-8 sm:py-12 px-6 sm:px-8 mb-16 sm:mb-24">
          <div className="mb-6 flex items-center justify-between">
            <span className="font-mono text-xs text-sunset-orange uppercase tracking-wider font-semibold">
              VALIDATED ENGINE BENCHMARKS
            </span>
            <span className="font-mono text-[11px] text-body-mid">
              WHAT YOU CAN EXPECT
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Metric 1 */}
            <div className="flex flex-col p-6 rounded-xl bg-surface-container-low border border-hairline/60 shadow-sm">
              <span className="font-sans text-4xl sm:text-5xl text-ink font-normal tracking-tighter">
                01
              </span>
              <span className="font-mono text-xs text-body-mid uppercase mt-2 font-medium">
                Direct Communication
              </span>
              <span className="text-xs text-body-text mt-2 leading-relaxed">
                You speak directly with the founder from first conversation to handover.
              </span>
            </div>
            {/* Metric 2 */}
            <div className="flex flex-col p-6 rounded-xl bg-surface-container-low border border-hairline/60 shadow-sm">
              <span className="font-sans text-4xl sm:text-5xl text-breeze-blue font-normal tracking-tighter">
                02
              </span>
              <span className="font-mono text-xs text-body-mid uppercase mt-2 font-medium">
                Clear Milestones
              </span>
              <span className="text-xs text-body-text mt-2 leading-relaxed">
                We agree on the scope, show working progress, and flag changes before they become surprises.
              </span>
            </div>
            {/* Metric 3 */}
            <div className="flex flex-col p-6 rounded-xl bg-surface-container-low border border-hairline/60 shadow-sm">
              <span className="font-sans text-4xl sm:text-5xl text-ink font-normal tracking-tighter">
                03
              </span>
              <span className="font-mono text-xs text-body-mid uppercase mt-2 font-medium">
                Practical Handover
              </span>
              <span className="text-xs text-body-text mt-2 leading-relaxed">
                You receive the relevant code, setup notes, and a walkthrough for the delivered work.
              </span>
            </div>
          </div>
        </section>

        {/* Technical Discipline Matrix (8 Disciplines) */}
        <section className="flex flex-col py-8 sm:py-16" id="services">
          <div className="flex flex-col mb-10 sm:mb-12">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-ink rounded-full"></span>
              <span className="font-mono text-xs text-body-mid uppercase tracking-widest font-semibold">
                CORE SERVICES MATRIX
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight">
              Engineered Disciplines.
            </h2>
            <p className="font-sans text-sm sm:text-base text-body-mid mt-2 max-w-xl">
              Start with the problem, not a long list of jargon. Services can be combined when your project needs it.
            </p>
          </div>

          {/* 8 Disciplines Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.slice(0, 5).map((srv) => (
              <article
                key={srv.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-canvas-card border border-hairline shadow-md hover:border-pill-border transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-xs font-semibold ${srv.accentColor}`}>
                      {srv.tag}
                    </span>
                    <span className="material-symbols-outlined text-body-mid text-[22px] group-hover:text-ink transition-colors">
                      {srv.icon}
                    </span>
                  </div>
                  <h3 className="font-sans text-lg sm:text-xl text-ink font-medium mb-3 tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-body-text mb-4 leading-relaxed">
                    {srv.desc}
                  </p>
                  <div className="space-y-2 mb-5 p-3.5 rounded-xl bg-surface-container-low border border-hairline/50 text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-breeze-blue uppercase font-semibold block">
                        WHO THIS HELPS
                      </span>
                      <span className="text-body-text leading-snug block mt-0.5">
                        {srv.bestFor}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-hairline/40">
                      <span className="font-mono text-[10px] text-sunset-orange uppercase font-semibold block">
                        INCLUDED DELIVERABLES
                      </span>
                      <span className="text-ink leading-snug block mt-0.5">
                        {srv.deliverables}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="p-3 rounded-lg bg-surface-container border border-hairline/40 mb-5">
                    <span className="block font-mono text-[10px] text-body-mid uppercase mb-1">
                      BUSINESS OUTCOME
                    </span>
                    <span className="font-mono text-xs text-ink">
                      {srv.outcome}
                    </span>
                  </div>
                  <Link
                    to={srv.link}
                    className="w-full py-2.5 px-4 rounded-full bg-surface-container-high border border-hairline text-ink font-mono text-xs text-center transition-all hover:bg-surface-bright hover:border-breeze-blue flex items-center justify-center gap-2"
                  >
                    <span>View Dedicated Spec</span>
                    <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Interactive Lab Diagnostic REPL */}
        <section className="flex flex-col py-10 sm:py-16">
          <div className="p-6 rounded-2xl bg-surface-container-low border border-hairline shadow-md">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sunset-orange text-[18px]">terminal</span>
                <span className="font-mono text-xs text-body-mid uppercase font-semibold">
                  KYRO LAB DIAGNOSTIC CONSOLE
                </span>
              </div>
              <span className="font-mono text-[11px] text-breeze-blue">
                INTERACTIVE SESSION
              </span>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-lowest border border-hairline font-mono text-xs text-body-text flex flex-col gap-2 min-h-[160px]">
              {terminalLogs.map((log, index) => (
                <div key={index} className="leading-relaxed">
                  {log.type === 'cmd' && (
                    <div className="flex items-center gap-2 text-body-mid">
                      <span className="material-symbols-outlined text-[15px] text-sunset-orange select-none">chevron_right</span>
                      <span className="text-ink font-medium">{log.text}</span>
                    </div>
                  )}
                  {log.type === 'pass' && <div className="text-emerald-400 pl-4">{log.text}</div>}
                  {log.type === 'ready' && <div className="text-breeze-blue pl-4">{log.text}</div>}
                  {log.type === 'metric' && <div className="text-sunset-orange pl-4">{log.text}</div>}
                  {log.type === 'info' && <div className="text-body-mid pl-4">{log.text}</div>}
                  {log.type === 'error' && <div className="text-rose-400 pl-4">{log.text}</div>}
                </div>
              ))}

              {/* Input Form */}
              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 mt-2 pt-2 border-t border-hairline/60">
                <span className="material-symbols-outlined text-[15px] text-sunset-orange select-none">chevron_right</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help', 'status', 'services', 'pricing' or 'clear'..."
                  className="bg-transparent text-ink placeholder:text-body-mid/50 outline-none flex-1 font-mono text-xs"
                />
                <button type="submit" className="text-[11px] text-body-mid hover:text-ink px-2 py-0.5 rounded bg-surface-container">
                  RUN
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="flex flex-col py-10 sm:py-16">
          <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-low border border-hairline shadow-md">
            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <div className="w-16 h-16 rounded-full bg-breeze-blue/20 border border-breeze-blue/40 flex items-center justify-center shrink-0">
                <span className="font-sans text-2xl text-breeze-blue font-semibold">L</span>
              </div>
              <div>
                <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
                  ABOUT THE FOUNDER
                </span>
                <h2 className="font-sans text-2xl text-ink font-medium mt-1">
                  Lakshya — founder of KYRO
                </h2>
                <p className="text-sm text-body-text leading-relaxed mt-2 max-w-2xl">
                  I am a B.Tech CSE (Data Science) student based in Lucknow. KYRO is a small, direct studio: I take on focused website, software, dashboard, and automation work and show progress as I build.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Unit */}
        <section className="flex flex-col py-10 sm:py-16" id="contact-spec">
          <div className="p-8 sm:p-12 rounded-3xl bg-canvas-card border border-hairline shadow-2xl flex flex-col text-left relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-sunset-orange animate-pulse"></span>
              <span className="font-mono text-xs text-sunset-orange uppercase tracking-wider font-semibold">
                TALK TO THE FOUNDER
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight mb-4 max-w-xl">
              Have a website or workflow problem?
            </h2>
            <p className="font-sans text-sm sm:text-base text-body-text mb-8 leading-relaxed max-w-2xl">
              Tell me what is difficult today, what you have already tried, and what a useful result looks like. I will suggest a sensible first step and a realistic scope.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="flex items-center justify-center h-12 px-8 rounded-full bg-primary text-on-primary font-mono text-xs sm:text-sm font-semibold shadow-lg transition-all hover:bg-primary-fixed active:scale-95"
              >
                Book a free 15-minute call
              </Link>
              <div className="flex items-center gap-2 text-xs font-mono text-body-mid px-2">
                <span className="material-symbols-outlined text-body-mid text-[16px]">lock</span>
                <span>STRICT NDA OBLIGATION BY DEFAULT</span>
              </div>
            </div>

            {/* Attribution */}
            <div className="mt-12 pt-6 border-t border-hairline/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-body-mid">
              <span>KYRO • FOUNDER-LED BY LAKSHYA</span>
              <span>LUCKNOW • DIRECT COMMUNICATION</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
