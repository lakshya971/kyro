import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UiPreviewFrame from '../components/UiPreviewFrame';

export default function Development() {
  const [activeSoftwareTab, setActiveSoftwareTab] = useState('erp');
  const [copied, setCopied] = useState(false);

  // Dedicated End-to-End Delivery Workflow State (n8n-inspired)
  const [activeDeliveryStep, setActiveDeliveryStep] = useState(0);

  const deliveryWorkflowNodes = [
    {
      id: 'step-01',
      stage: 'STAGE 01',
      type: 'INGRESS TRIGGER',
      badgeColor: 'text-sunset-orange border-sunset-orange/30 bg-sunset-orange/10',
      icon: 'input',
      title: 'Client Specification Ingress',
      subtitle: 'Capturing business goals, constraints & user stories',
      status: '200 OK (0ms)',
      latency: '0ms',
      inputData: 'Business operational friction, desired feature scope, concurrency targets, existing database schemas or legacy stack.',
      kyroProcess: '48-Hour Technical Reconnaissance: We decompose requirements into architectural constraints, data latency budgets, and security boundaries.',
      businessOutput: 'Formal Architectural RFC (Request for Comments) Document with milestone breakdown, fixed flat fee, and deterministic delivery SLA.',
      sla: '48 Hours to Formal RFC',
      guarantee: 'Fixed price. Zero scope creep surprises.'
    },
    {
      id: 'step-02',
      stage: 'STAGE 02',
      type: 'SCHEMA CONTRACT',
      badgeColor: 'text-breeze-blue border-breeze-blue/30 bg-breeze-blue/10',
      icon: 'schema',
      title: 'Schema Contracts & Prototype Rig',
      subtitle: 'OpenAPI specs, database ERDs & UI interaction rig',
      status: 'SCHEMAS VALIDATED',
      latency: '14ms',
      inputData: 'RFC approval and brand asset / design token preferences.',
      kyroProcess: 'We design typed database schemas (PostgreSQL / ClickHouse), formal OpenAPI / GraphQL contract schemas, and an interactive frontend UI component rig.',
      businessOutput: 'Clickable interactive prototype in code + typed contract specifications ensuring frontend and backend teams have zero ambiguity.',
      sla: '5 Business Days',
      guarantee: '100% accessible, WCAG AA conformant, mobile-first design.'
    },
    {
      id: 'step-03',
      stage: 'STAGE 03',
      type: 'CONCURRENT SPRINT',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      icon: 'terminal',
      title: 'Full-Stack Microservice Engineering',
      subtitle: 'React 18 frontend + Go/Node microservice development',
      status: 'CI/CD PASSING',
      latency: '24ms',
      inputData: 'Milestone sign-off on prototype and contract schemas.',
      kyroProcess: 'Clean-code sprint execution: Lightweight React/Next.js interface development, high-throughput backend services, Redis caching, and automated CI/CD unit testing.',
      businessOutput: 'Private staging sandbox deployment updated with every git push, allowing client stakeholders to test real workflows as they are built.',
      sla: 'Weekly Milestone Deployments',
      guarantee: '95%+ automated test coverage across all critical paths.'
    },
    {
      id: 'step-04',
      stage: 'STAGE 04',
      type: 'AUDIT & VERIFY',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      icon: 'verified_user',
      title: 'Stress Benchmark & Penetration Audit',
      subtitle: 'Load testing to 50k req/s & OWASP security scan',
      status: 'P99 UNDER 18MS PASS',
      latency: '18ms',
      inputData: 'Staged production release candidate.',
      kyroProcess: 'Simulating peak traffic spikes (up to 50,000 concurrent req/sec), memory leak profiling, database index query analysis, and rigorous OWASP security auditing.',
      businessOutput: 'Comprehensive Cryptographic Audit Certificate certifying sub-15ms database query times and 99+ Core Web Vitals score.',
      sla: '72 Hours Final Audit Window',
      guarantee: 'Zero unaddressed high or critical security vulnerabilities.'
    },
    {
      id: 'step-05',
      stage: 'STAGE 05',
      type: 'SOVEREIGN HANDOVER',
      badgeColor: 'text-sunset-orange border-sunset-orange/30 bg-sunset-orange/10',
      icon: 'rocket_launch',
      title: 'Sovereign IP & Production Delivery',
      subtitle: 'Zero-downtime cluster launch & full IP transfer',
      status: '100% TRANSFERRED',
      latency: '11ms',
      inputData: 'Client acceptance and target production cloud credentials (AWS / GCP / Bare Metal).',
      kyroProcess: 'Zero-downtime rolling deployment, SSL / DNS routing, production database migration, and complete cryptographic repo handover.',
      businessOutput: '100% Intellectual Property ownership assigned to client, production Docker container images, full clean Git repo history, OpenAPI docs, and 90-Day Full Code Warranty.',
      sla: 'Immediate Launch on Approval',
      guarantee: '90-Day Bug-Free Warranty & Free Critical Hotfix Support.'
    }
  ];

  // ERP Interactive Simulator State
  const [erpInvoiceFilter, setErpInvoiceFilter] = useState('all');
  const erpInvoices = [
    { id: 'INV-2024-001', customer: 'Apex Industrial Corp', date: 'Jul 24, 2024', due: 'Aug 23, 2024', amount: '$45,000.00', status: 'Paid' },
    { id: 'INV-2024-002', customer: 'Vanguard Systems', date: 'Jul 22, 2024', due: 'Aug 21, 2024', amount: '$28,500.00', status: 'Pending' },
    { id: 'INV-2024-003', customer: 'Helios Logistics', date: 'Jul 21, 2024', due: 'Aug 20, 2024', amount: '$18,200.00', status: 'Overdue' },
    { id: 'INV-2024-004', customer: 'Starlight Medical', date: 'Jul 19, 2024', due: 'Aug 18, 2024', amount: '$62,000.00', status: 'Paid' },
    { id: 'INV-2024-005', customer: 'Boreal Dynamics', date: 'Jul 18, 2024', due: 'Aug 17, 2024', amount: '$14,000.00', status: 'Pending' }
  ];

  const filteredInvoices = erpInvoices.filter((inv) =>
    erpInvoiceFilter === 'all' ? true : inv.status.toLowerCase() === erpInvoiceFilter.toLowerCase()
  );

  const erpInventory = [
    { code: 'SKU-8041', name: 'Hydraulic Actuator Unit', category: 'Heavy Machinery', onHand: 520, available: 480, reorder: 100, status: 'In Stock' },
    { code: 'SKU-8042', name: 'Micro-Controller V2 PCB', category: 'Electronics', onHand: 320, available: 280, reorder: 100, status: 'In Stock' },
    { code: 'SKU-8043', name: 'Titanium Grade-5 Rods', category: 'Metallurgy', onHand: 150, available: 120, reorder: 50, status: 'Low Stock' },
    { code: 'SKU-8044', name: 'Carbon Fiber Pre-Preg', category: 'Composites', onHand: 80, available: 70, reorder: 30, status: 'Low Stock' },
    { code: 'SKU-8045', name: 'Precision Ceramic Bearing', category: 'Mechanical', onHand: 60, available: 40, reorder: 20, status: 'Reorder' }
  ];

  // CRM Interactive Simulator State
  const [selectedRep, setSelectedRep] = useState('Devon');
  const [loggedActivity, setLoggedActivity] = useState(false);
  const [activityStats, setActivityStats] = useState({ calls: 342, emails: 567, meetings: 42 });

  const handleLogActivity = (type) => {
    setActivityStats((prev) => ({
      ...prev,
      [type]: prev[type] + 1
    }));
    setLoggedActivity(true);
    setTimeout(() => setLoggedActivity(false), 2000);
  };

  const salesReps = [
    { name: 'Devon', revenue: '$4.1M', height: '95%', color: 'bg-sunset-orange', deals: 92, target: '124%' },
    { name: 'Robert', revenue: '$3.2M', height: '74%', color: 'bg-sunset-orange/80', deals: 75, target: '108%' },
    { name: 'Fox', revenue: '$2.8M', height: '65%', color: 'bg-sunset-orange/70', deals: 64, target: '96%' },
    { name: 'Henry', revenue: '$1.5M', height: '38%', color: 'bg-sunset-orange/60', deals: 42, target: '82%' },
    { name: 'Arlene', revenue: '$0.9M', height: '22%', color: 'bg-sunset-orange/40', deals: 28, target: '65%' }
  ];

  const copySpecs = () => {
    navigator.clipboard?.writeText('npx @kyro/verify-production-spec');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const softwareSuites = {
    erp: {
      id: 'erp',
      title: 'Enterprise ERP Suite & Operational Systems',
      subtitle: 'Multi-Entity Financial Ledger, Inventory Velocity & Invoicing Architecture',
      badge: 'ENTERPRISE ERP ARCHITECTURE',
      badgeColor: 'text-sunset-orange border-sunset-orange/30 bg-sunset-orange/10',
      description:
        'Mission-critical enterprise software built for manufacturing, distribution, and commercial firms. Unifies financial accounting, real-time inventory control, invoice lifecycle state machines, and purchasing pipelines into a single high-throughput cockpit.',
      metrics: [
        { label: 'Core Modules', val: '12+', sub: 'Finance, Banking, Sales, Inventory, HR' },
        { label: 'Query Latency', val: 'Under 15ms', sub: 'Indexed PostgreSQL + ClickHouse' },
        { label: 'ACID Compliance', val: '100%', sub: 'Zero ledger divergence / Strict locking' },
        { label: 'Security Model', val: 'RBAC', sub: 'Role-based access + full audit trail' }
      ],
      features: [
        {
          title: 'Real-Time Financial & Revenue Ledger',
          desc: 'Automated tracking of Total Revenue, Expenses, Net Profit, and Accounts Payable/Receivable with instant monthly comparisons.'
        },
        {
          title: 'Inventory & Supply-Chain Optimization',
          desc: 'SKU-level stock tracking, automated reorder thresholds, and warehouse allocation across multi-region depots.'
        },
        {
          title: 'Sales Invoicing & Automated Billing Pipeline',
          desc: 'Dynamic invoice status state machines (Paid, Pending, Overdue), automated recurring invoicing, and tax compliance calculation.'
        },
        {
          title: 'Modular Full-Stack Extensibility',
          desc: 'Built on clean Go/Node microservices with typed GraphQL/REST APIs ready for external CRM, bank feed, and ERP integrations.'
        }
      ],
      stack: ['React 18', 'TypeScript', 'Node.js / Go', 'PostgreSQL', 'Redis', 'Docker', 'ClickHouse']
    },
    crm: {
      id: 'crm',
      title: 'Enterprise CRM & Executive Sales Systems',
      subtitle: 'Pipeline Telemetry, Salesperson Quotas, Activity Tracking & Radar Analytics',
      badge: 'EXECUTIVE CRM SYSTEM',
      badgeColor: 'text-breeze-blue border-breeze-blue/30 bg-breeze-blue/10',
      description:
        'High-velocity commercial software engineered for high-growth B2B sales teams. Tracks deals, multi-stage pipelines, sales rep quota attainment, omnichannel activity logging (calls, emails, meetings), and conversion split probability.',
      metrics: [
        { label: 'Pipeline Monitored', val: '$400k+', sub: '+12% YoY Sales Velocity' },
        { label: 'Active Contacts', val: '10k+', sub: 'Instant full-text semantic search' },
        { label: 'Conversion Lift', val: '+18.4%', sub: 'Accelerated stage progression' },
        { label: 'Sync Latency', val: 'Realtime', sub: 'Websocket-powered live board' }
      ],
      features: [
        {
          title: 'Sales Revenue & Executive KPIs',
          desc: 'Real-time revenue monitoring, new customer acquisition velocity, and profit margin analysis in an executive cockpit.'
        },
        {
          title: 'Top Revenue Per Salesperson Waterfall',
          desc: 'Individual representative volume tracking, deal closing velocity, and historical target achievement comparison.'
        },
        {
          title: 'Conversion Split Radar & Deal Health',
          desc: 'Multi-dimensional radar charts analyzing deal progression, converted ratios, and active opportunity health.'
        },
        {
          title: 'Omnichannel Activity Counter',
          desc: 'Live tracking of calls, emails, and meetings with automatic logging directly to customer contact timelines.'
        }
      ],
      stack: ['Next.js / React', 'TanStack Query', 'FastAPI / Python', 'PostgreSQL', 'WebSockets', 'Tailwind CSS']
    }
  };

  const currentSoftware = softwareSuites[activeSoftwareTab];

  const capabilities = [
    {
      id: '01.01',
      tag: '01.01 • WEB & COMMERCE',
      icon: 'speed',
      title: 'Website Design & High-Conversion Engineering',
      desc: 'Fast, responsive web platforms engineered for search engine dominance, high paid-ad conversion rates, and effortless buyer journeys without bloated page builders.',
      idealFor: 'D2C Brands, B2B Companies & High-Growth Firms',
      painSolved: 'Eliminates slow 5s+ WordPress/Wix pages that waste 40–60% of paid marketing traffic.',
      timeline: '5–14 Days Delivery',
      deliverable: 'Core Web Vitals 99+ • Sub-200ms TTFB Global Edge'
    },
    {
      id: '01.02',
      tag: '01.02 • ERP, CRM & PORTALS',
      icon: 'database',
      title: 'Custom Enterprise Software & Internal Portals',
      desc: 'Bespoke ERPs, CRM systems, multi-warehouse stock control, dealer ordering portals, and billing ledgers tailored 100% around your company operations.',
      idealFor: 'Manufacturing, Wholesale, Logistics & Service Teams',
      painSolved: 'Replaces error-prone Excel sheets & expensive ₹15k–₹80k/mo per-user SaaS subscriptions.',
      timeline: '2–4 Weeks Milestone Sprints',
      deliverable: 'Zero Vendor Lock-in • Full Relational Ledger & RBAC'
    },
    {
      id: '01.03',
      tag: '01.03 • INTEGRATIONS',
      icon: 'api',
      title: 'Business API Bridges & Payment Webhooks',
      desc: 'Automated two-way connections syncing your website or ERP with Tally, Razorpay/Stripe, Shiprocket, WhatsApp Business notifications, and GST tax engines.',
      idealFor: 'Businesses running disconnected billing, shipping & CRM apps',
      painSolved: 'Eliminates manual double-entry between finance, warehouse, and customer teams.',
      timeline: '5–10 Days Integration Window',
      deliverable: 'P99 Under 18ms Latency • Automatic Rollback Safety'
    },
    {
      id: '01.04',
      tag: '01.04 • CLOUD & SECURITY',
      icon: 'cloud_done',
      title: 'Cloud Infrastructure & Sovereign Deployment',
      desc: 'Production hosting on AWS, Google Cloud, or your private cloud with SSL, daily encrypted database backups, access logs, and zero-downtime releases.',
      idealFor: 'Organizations requiring audit compliance & complete IP security',
      painSolved: 'Removes single-point-of-failure outages and protects confidential company records.',
      timeline: 'Continuous Zero-Downtime Pipeline',
      deliverable: '99.98% Service Uptime • 100% Client IP Assignment'
    }
  ];

  const serviceClarificationTracks = [
    {
      track: 'TRACK 01',
      title: 'Business Websites & E-Commerce Engines',
      bottleneck: 'Slow template websites hurt Google SEO rankings, lose mobile shoppers, and require recurring paid plugins.',
      whatYouGet: 'Custom responsive UI built in React & Tailwind CSS, interactive product/quote flows, SEO schema, CRM lead webhooks, and sub-second load speeds.',
      businessOutcome: '+35% to +60% higher mobile inquiry/checkout conversion with zero plugin license fees.'
    },
    {
      track: 'TRACK 02',
      title: 'Custom Internal ERP & Operations Suites',
      bottleneck: 'Disconnected Excel files across accounts, inventory, and sales cause stockouts, delayed invoicing, and revenue leaks.',
      whatYouGet: 'Unified central cockpit covering Sales Invoices, Purchase Orders, Warehouse SKUs, Low-Stock Reorder Alerts, Staff Approvals, and Expense Ledgers.',
      businessOutcome: 'Real-time visibility across every branch and warehouse from a single browser login.'
    },
    {
      track: 'TRACK 03',
      title: 'Commercial SaaS Products & Customer Portals',
      bottleneck: 'Off-the-shelf software forces your team and customers to work around rigid templates that block scaling.',
      whatYouGet: 'Production multi-tenant SaaS application with secure role-based login, Razorpay/Stripe subscription billing, self-serve customer portals, and clean APIs.',
      businessOutcome: 'Own your proprietary software asset 100%—ready to onboard thousands of paying users.'
    },
    {
      track: 'TRACK 04',
      title: 'Legacy Software Modernization & Sync',
      bottleneck: 'Aging desktop software or siloed ERPs force staff to manually export CSVs into accounting, WhatsApp, and courier portals.',
      whatYouGet: 'Modern cloud web layers and fault-tolerant API connectors bridging GST/Tally billing, courier tracking, and WhatsApp order status updates automatically.',
      businessOutcome: 'Zero manual copy-paste operations and instant live status updates for management & clients.'
    }
  ];

  const currentDeliveryNode = deliveryWorkflowNodes[activeDeliveryStep];

  return (
    <main className="flex flex-col relative w-full pt-16 pb-20 bg-surface min-h-screen text-body-text">
      {/* Top Status Header */}
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-2 bg-surface-container-lowest border-b border-hairline/60">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-sunset-orange animate-pulse"></span>
          <span className="font-mono text-[11px] sm:text-xs text-body-mid uppercase tracking-wider">
            KYRO • ENGINEERING LABS & SOFTWARE • 01
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-emerald-400 font-semibold">
            STATUS: PIPELINE VERIFIED
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Hero Section — Two-Column Horizontal Split */}
        <section className="flex flex-col pt-10 sm:pt-16 pb-10 sm:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
            {/* Left Side: Hero Copy & Quick Navigation */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
                  SERVICE CAPABILITY 01
                </span>
              </div>

              <h1 className="font-sans text-3xl sm:text-5xl text-ink font-normal tracking-tight leading-[1.12] mb-5">
                Website Development & Custom Software Engineering
              </h1>

              <p className="font-sans text-base sm:text-lg text-body-mid leading-relaxed mb-7">
                At <strong className="text-ink font-semibold">KYRO</strong>, we build fast business websites, custom ERPs, CRM systems, and client portals tailored to your workflows—with full source-code ownership, zero recurring SaaS seat taxes, and sub-second performance.
              </p>

              {/* Quick Nav Anchors */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-on-primary hover:bg-primary-fixed font-mono text-xs font-semibold transition-all shadow-md"
                >
                  Request Architecture Scope
                </Link>
                <a
                  href="#software-architecture-showcase"
                  className="inline-flex items-center justify-center gap-1.5 h-11 px-5 rounded-full bg-surface-container-high border border-pill-border text-ink hover:bg-surface-bright font-mono text-xs transition-all shadow-sm"
                >
                  <span>Inspect Software Suites</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </a>
                <a
                  href="#software-delivery-workflow"
                  className="inline-flex items-center justify-center gap-1.5 h-11 px-5 rounded-full bg-surface-container-low border border-hairline text-body-mid hover:text-ink font-mono text-xs transition-all shadow-sm"
                >
                  <span>Delivery Workflow</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </a>
              </div>
            </div>

            {/* Right Side: Single Clean Deliverable Visual Preview */}
            <div className="lg:col-span-6">
              <UiPreviewFrame
                src="/images/kyro-development-hero.png"
                alt="KYRO AI-powered business automation website design"
                title="Client Deliverable Preview • AI-Powered Business Automation"
                badge="Digital Systems"
                caption="Visual preview of a high-converting, AI-powered business website engineered to automate workflows and scale operations."
                metrics={['100% Owned IP', 'Role-Based Access', 'ACID Ledger']}
                eager={true}
              />
            </div>
          </div>

          {/* Operational Metrics Monoliths */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-canvas-card border border-hairline p-5 rounded-2xl shadow-sm">
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-ink font-normal tracking-tight">
                99+
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                Lighthouse Score
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-sunset-orange font-normal tracking-tight">
                Under 15ms
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                DB Query Execution
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-breeze-blue font-normal tracking-tight">
                0%
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                CMS / Plugin Bloat
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-ink font-normal tracking-tight">
                90 Days
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                Full Code Warranty
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION: N8N-INSPIRED CLIENT PROCESS WORKFLOW             */}
        {/* (How organizations & businesses get output from KYRO)     */}
        {/* ========================================================= */}
        <section id="software-delivery-workflow" className="py-10 sm:py-16 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sunset-orange animate-pulse"></span>
                <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
                  END-TO-END DELIVERY WORKFLOW PIPELINE
                </span>
              </div>
              <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight">
                How Your Organization Receives Production Software
              </h2>
              <p className="font-sans text-sm text-body-mid mt-1 max-w-2xl leading-relaxed">
                An n8n-inspired execution state machine tracking your project from initial specification to sovereign IP transfer. Every stage delivers tangible, verified business artifacts.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono bg-surface-container-low px-4 py-2 rounded-full border border-hairline shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>GUARANTEE: 100% IP ASSIGNMENT</span>
            </div>
          </div>

          {/* Visual n8n-style Workflow Canvas Container */}
          <div className="bg-canvas-card border border-hairline rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col gap-8">
            {/* Canvas Ambient Dot-Grid Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>

            {/* Canvas Top Bar */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-hairline/60">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-ink uppercase tracking-wide">
                  KYRO_SOFTWARE_PIPELINE.DAG
                </span>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  STATE: ACTIVE
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-body-mid">
                <span>CLICK ANY NODE TO INSPECT OUTPUT DELIVERABLE</span>
              </div>
            </div>

            {/* n8n-Style Horizontal Node Pipeline Flow */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-5 gap-3">
              {deliveryWorkflowNodes.map((node, idx) => {
                const isSelected = activeDeliveryStep === idx;
                return (
                  <div
                    key={node.id}
                    onClick={() => setActiveDeliveryStep(idx)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between gap-3 relative group ${
                      isSelected
                        ? 'bg-surface-container-high border-sunset-orange text-ink shadow-xl scale-[1.02]'
                        : 'bg-surface-container-low border-hairline text-body-text hover:bg-surface-container hover:border-pill-border'
                    }`}
                  >
                    {/* Node Header Row */}
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-surface-container-highest border border-hairline flex items-center justify-center">
                        <span className="material-symbols-outlined text-[18px] text-sunset-orange">
                          {node.icon}
                        </span>
                      </div>
                      <span className={`px-2 py-0.5 rounded font-mono text-[9px] uppercase font-bold border ${node.badgeColor}`}>
                        {node.type}
                      </span>
                    </div>

                    {/* Node Title & Subtitle */}
                    <div className="flex flex-col">
                      <span className="font-mono text-[10px] text-body-mid font-semibold">
                        {node.stage}
                      </span>
                      <h4 className="font-sans text-sm font-semibold text-ink mt-0.5 line-clamp-1">
                        {node.title}
                      </h4>
                      <p className="text-[11px] text-body-mid line-clamp-2 mt-1 leading-snug">
                        {node.subtitle}
                      </p>
                    </div>

                    {/* Node Status Badge */}
                    <div className="pt-2 border-t border-hairline/40 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-emerald-400 font-semibold">{node.status}</span>
                      <span className="text-body-mid">{node.latency}</span>
                    </div>

                    {/* Visual Connector Dot on right (desktop) */}
                    {idx < deliveryWorkflowNodes.length - 1 && (
                      <div className="hidden md:flex absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-surface-container-highest border border-hairline z-20 text-sunset-orange items-center justify-center">
                        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Active Node Deep Inspector: Input -> Process -> Business Output */}
            <div className="relative z-10 bg-surface-container-lowest border border-hairline rounded-2xl p-6 sm:p-8 flex flex-col gap-6 shadow-inner">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-hairline/60">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-sunset-orange font-bold uppercase">
                    {currentDeliveryNode.stage} — {currentDeliveryNode.title}
                  </span>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    SLA: {currentDeliveryNode.sla}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    disabled={activeDeliveryStep === 0}
                    onClick={() => setActiveDeliveryStep((prev) => Math.max(0, prev - 1))}
                    className="px-3 py-1 rounded-lg bg-surface-container text-xs font-mono text-body-mid hover:text-ink disabled:opacity-30 disabled:cursor-not-allowed inline-flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[14px]">arrow_back</span>
                    <span>Previous Node</span>
                  </button>
                  <button
                    disabled={activeDeliveryStep === deliveryWorkflowNodes.length - 1}
                    onClick={() => setActiveDeliveryStep((prev) => Math.min(deliveryWorkflowNodes.length - 1, prev + 1))}
                    className="px-3 py-1 rounded-lg bg-surface-bright text-xs font-mono text-ink font-semibold hover:bg-primary-fixed disabled:opacity-30 disabled:cursor-not-allowed inline-flex items-center gap-1"
                  >
                    <span>Next Stage</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>

              {/* 3-Column Inspection Matrix */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column 1: What Business Provides (Input) */}
                <div className="p-5 rounded-xl bg-surface-container-low border border-hairline flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-breeze-blue font-mono text-xs font-bold uppercase">
                    <span className="material-symbols-outlined text-[16px]">file_upload</span>
                    <span>1. Client Provides (Input)</span>
                  </div>
                  <p className="text-xs text-body-text leading-relaxed">
                    {currentDeliveryNode.inputData}
                  </p>
                </div>

                {/* Column 2: What KYRO Engineers (Process) */}
                <div className="p-5 rounded-xl bg-surface-container-low border border-hairline flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-sunset-orange font-mono text-xs font-bold uppercase">
                    <span className="material-symbols-outlined text-[16px]">memory</span>
                    <span>2. KYRO Engineers (Process)</span>
                  </div>
                  <p className="text-xs text-body-text leading-relaxed">
                    {currentDeliveryNode.kyroProcess}
                  </p>
                </div>

                {/* Column 3: What Organization Receives (Concrete Deliverable Output) */}
                <div className="p-5 rounded-xl bg-surface-container-high border border-emerald-500/30 flex flex-col gap-2.5">
                  <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                    <span className="material-symbols-outlined text-[16px]">verified</span>
                    <span>3. Tangible Output Received</span>
                  </div>
                  <p className="text-xs text-ink font-medium leading-relaxed">
                    {currentDeliveryNode.businessOutput}
                  </p>
                </div>
              </div>

              {/* Bottom Guarantee Banner */}
              <div className="p-3 bg-surface-container rounded-xl flex items-center justify-between text-xs font-mono">
                <span className="text-body-mid">
                  DELIVERY COMMITMENT: <strong className="text-ink">{currentDeliveryNode.guarantee}</strong>
                </span>
                <Link
                  to="/contact"
                  className="text-sunset-orange hover:underline font-bold text-[11px] inline-flex items-center gap-1"
                >
                  <span>Initiate This Stage Now</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION: NATIVE ENTERPRISE SOFTWARE INTERACTIVE COCKPIT   */}
        {/* (Built with deep detailing inspired by reference UIs)     */}
        {/* ========================================================= */}
        <section id="software-architecture-showcase" className="py-10 sm:py-16 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sunset-orange animate-pulse"></span>
                <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
                  PRODUCTION SOFTWARE SYSTEMS
                </span>
              </div>
              <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight">
                Live Enterprise Software Interface
              </h2>
              <p className="font-sans text-sm text-body-mid mt-1 max-w-xl">
                Interact with KYRO's native enterprise software engines. Toggle between the multi-entity ERP operational suite and executive CRM sales intelligence cockpit.
              </p>
            </div>
            <span className="font-mono text-xs text-emerald-400 bg-surface-container-low px-3 py-1.5 rounded-full border border-hairline shrink-0">
              SUB-20MS ACID TRANSACTIONS
            </span>
          </div>

          {/* Software Suite Switcher Tabs */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-3 mb-6 border-b border-hairline/60">
            <button
              onClick={() => setActiveSoftwareTab('erp')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                activeSoftwareTab === 'erp'
                  ? 'bg-surface-container-high border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-surface-container-low border border-hairline text-body-mid hover:text-ink hover:bg-surface-container'
              }`}
            >
              <span className="material-symbols-outlined text-[16px] text-sunset-orange">inventory_2</span>
              <span>Enterprise ERP & Operational Suite</span>
            </button>

            <button
              onClick={() => setActiveSoftwareTab('crm')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                activeSoftwareTab === 'crm'
                  ? 'bg-surface-container-high border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-surface-container-low border border-hairline text-body-mid hover:text-ink hover:bg-surface-container'
              }`}
            >
              <span className="material-symbols-outlined text-[16px] text-breeze-blue">monitoring</span>
              <span>Custom Enterprise CRM & Sales System</span>
            </button>
          </div>

          {/* Active Software Suite Interactive Cockpit */}
          <div className="bg-canvas-card border border-hairline rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-8 transition-all">

            {/* COCKPIT 1: ENTERPRISE ERP OPERATIONAL SUITE */}
            {activeSoftwareTab === 'erp' && (
              <div className="flex flex-col gap-8">
                {/* ERP Header Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-surface-container-low border border-hairline text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full font-bold text-sunset-orange bg-sunset-orange/10 border border-sunset-orange/30">
                      ENTERPRISE ERP
                    </span>
                    <span className="font-sans text-sm font-semibold text-ink">
                      Operational Ledger & Inventory Cockpit
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-body-mid text-[11px]">100% ACID Compliant • Zero Ledger Drift</span>
                  </div>
                </div>

                {/* Two-Column Visual Blueprint + Business Clarity */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-surface-container-lowest border border-hairline">
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <span className="font-mono text-[11px] text-sunset-orange uppercase font-bold tracking-wider">
                      WHY CUSTOM ERP OUTPERFORMS SPREADSHEETS
                    </span>
                    <h3 className="font-sans text-xl font-semibold text-ink">
                      One Live Workspace for Finance, Sales & Warehouse Inventory
                    </h3>
                    <p className="text-xs sm:text-sm text-body-mid leading-relaxed">
                      Instead of paying recurring per-user licenses for bloated software your staff barely uses, KYRO engineers a fast, custom ERP fitted to your billing rules, warehouse SKUs, and approval hierarchy.
                    </p>
                    <ul className="space-y-2 text-xs text-body-text pt-1">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-sunset-orange text-[16px] shrink-0">check_circle</span>
                        <span>Automated invoicing status tracking (Paid, Pending, Overdue) & GST ledger sync</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-sunset-orange text-[16px] shrink-0">check_circle</span>
                        <span>Real-time stock alerts preventing warehouse stockouts before orders stall</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-sunset-orange text-[16px] shrink-0">check_circle</span>
                        <span>Zero per-seat fee expansion as you add 10 or 500 staff accounts</span>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:col-span-7">
                    <UiPreviewFrame
                      src="/images/erp-enterprise-software.jpg"
                      alt="Enterprise ERP Operational Interface"
                      title="Enterprise ERP Suite • Finance, Banking & Inventory Control"
                      badge="ERP UI Spec"
                      caption="Full operational control plane designed for multi-branch operations."
                    />
                  </div>
                </div>

                {/* 6 Top Financial & Operational Metric Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Total Revenue</span>
                    <span className="font-sans text-xl sm:text-2xl font-bold text-ink">$58.4M</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">▲ 12.5% vs MoM</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Total Expenses</span>
                    <span className="font-sans text-xl sm:text-2xl font-bold text-ink">$18.9M</span>
                    <span className="font-mono text-[10px] text-sunset-orange font-semibold">▲ 8.2% vs MoM</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Net Profit</span>
                    <span className="font-sans text-xl sm:text-2xl font-bold text-emerald-400">$42.5M</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">▲ 15.3% Margin</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Inventory Value</span>
                    <span className="font-sans text-xl sm:text-2xl font-bold text-ink">$80.0M</span>
                    <span className="font-mono text-[10px] text-breeze-blue font-semibold">▲ 7.1% Velocity</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Accounts Rec.</span>
                    <span className="font-sans text-xl sm:text-2xl font-bold text-ink">$48.0M</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">▲ 9.4% On Schedule</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Accounts Pay.</span>
                    <span className="font-sans text-xl sm:text-2xl font-bold text-sunset-orange">$30.0M</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">▼ 3.6% Aging Drop</span>
                  </div>
                </div>

                {/* ERP Two-Column Data Modules */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left: Interactive Sales Invoices Table */}
                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-4 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-hairline/60">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-sm font-semibold text-ink">
                          Sales Invoices Ledger
                        </span>
                        <span className="font-mono text-[10px] text-body-mid bg-surface-container px-2 py-0.5 rounded">
                          {filteredInvoices.length} entries
                        </span>
                      </div>
                      <div className="flex items-center gap-1 font-mono text-xs">
                        {['all', 'paid', 'pending', 'overdue'].map((st) => (
                          <button
                            key={st}
                            onClick={() => setErpInvoiceFilter(st)}
                            className={`px-2.5 py-1 rounded-lg capitalize text-[11px] transition-colors ${
                              erpInvoiceFilter === st
                                ? 'bg-surface-bright text-ink font-bold'
                                : 'text-body-mid hover:text-ink'
                            }`}
                          >
                            {st}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-mono text-xs">
                        <thead>
                          <tr className="text-body-mid border-b border-hairline/40 text-[11px]">
                            <th className="py-2 px-2.5">INVOICE #</th>
                            <th className="py-2 px-2.5">CUSTOMER</th>
                            <th className="py-2 px-2.5">DUE DATE</th>
                            <th className="py-2 px-2.5">AMOUNT</th>
                            <th className="py-2 px-2.5">STATUS</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-hairline/30">
                          {filteredInvoices.map((inv) => (
                            <tr key={inv.id} className="hover:bg-surface-container/50 transition-colors">
                              <td className="py-2 px-2.5 text-breeze-blue font-semibold">{inv.id}</td>
                              <td className="py-2 px-2.5 text-ink font-medium">{inv.customer}</td>
                              <td className="py-2 px-2.5 text-body-mid">{inv.due}</td>
                              <td className="py-2 px-2.5 text-ink font-semibold">{inv.amount}</td>
                              <td className="py-2 px-2.5">
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                    inv.status === 'Paid'
                                      ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                                      : inv.status === 'Pending'
                                      ? 'bg-amber-950/60 text-amber-300 border border-amber-500/30'
                                      : 'bg-rose-950/60 text-rose-400 border border-rose-500/30'
                                  }`}
                                >
                                  {inv.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Right: Interactive Inventory Stock Table */}
                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-4 shadow-sm">
                    <div className="flex items-center justify-between pb-3 border-b border-hairline/60">
                      <div className="flex items-center gap-2">
                        <span className="font-sans text-sm font-semibold text-ink">
                          Inventory SKU Velocity
                        </span>
                        <span className="font-mono text-[10px] text-body-mid bg-surface-container px-2 py-0.5 rounded">
                          Multi-Depot
                        </span>
                      </div>
                      <span className="font-mono text-xs text-sunset-orange">Auto-Reorder Active</span>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-mono text-xs">
                        <thead>
                          <tr className="text-body-mid border-b border-hairline/40 text-[11px]">
                            <th className="py-2 px-2.5">SKU CODE</th>
                            <th className="py-2 px-2.5">ITEM NAME</th>
                            <th className="py-2 px-2.5">ON HAND</th>
                            <th className="py-2 px-2.5">AVAILABLE</th>
                            <th className="py-2 px-2.5">STATUS</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-hairline/30">
                          {erpInventory.map((item) => (
                            <tr key={item.code} className="hover:bg-surface-container/50 transition-colors">
                              <td className="py-2 px-2.5 text-ink font-semibold">{item.code}</td>
                              <td className="py-2 px-2.5 text-body-text">{item.name}</td>
                              <td className="py-2 px-2.5 text-ink">{item.onHand}</td>
                              <td className="py-2 px-2.5 text-breeze-blue font-semibold">{item.available}</td>
                              <td className="py-2 px-2.5">
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                    item.status === 'In Stock'
                                      ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                                      : item.status === 'Low Stock'
                                      ? 'bg-amber-950/60 text-amber-300 border border-amber-500/30'
                                      : 'bg-rose-950/60 text-rose-400 border border-rose-500/30'
                                  }`}
                                >
                                  {item.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* COCKPIT 2: CUSTOM ENTERPRISE CRM & SALES SYSTEM */}
            {activeSoftwareTab === 'crm' && (
              <div className="flex flex-col gap-8">
                {/* CRM Header Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-surface-container-low border border-hairline text-xs font-mono">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-0.5 rounded-full font-bold text-breeze-blue bg-breeze-blue/10 border border-breeze-blue/30">
                      EXECUTIVE CRM
                    </span>
                    <span className="font-sans text-sm font-semibold text-ink">
                      Sales Rep Telemetry & Pipeline Velocity Cockpit
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-body-mid text-[11px]">Realtime WebSocket Pipeline Monitored</span>
                  </div>
                </div>

                {/* Two-Column Visual Blueprint + Business Clarity */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-surface-container-lowest border border-hairline">
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <span className="font-mono text-[11px] text-breeze-blue uppercase font-bold tracking-wider">
                      REVENUE CLARITY FOR B2B SALES TEAMS
                    </span>
                    <h3 className="font-sans text-xl font-semibold text-ink">
                      Track Deals, Rep Quotas & Daily Client Activities Without Seat Fees
                    </h3>
                    <p className="text-xs sm:text-sm text-body-mid leading-relaxed">
                      Generic SaaS CRMs charge steeply per sales representative while burying simple follow-up accountability. KYRO builds proprietary CRM pipelines matched directly to your sales stages, quotes, and commission rules.
                    </p>
                    <ul className="space-y-2 text-xs text-body-text pt-1">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-breeze-blue text-[16px] shrink-0">check_circle</span>
                        <span>Visual deal waterfall showing top closers, pipeline bottlenecks & conversion split</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-breeze-blue text-[16px] shrink-0">check_circle</span>
                        <span>Omnichannel logging linking client calls, emails, and meetings automatically</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-breeze-blue text-[16px] shrink-0">check_circle</span>
                        <span>Direct handoff from closed deals into invoicing and project onboarding</span>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:col-span-7">
                    <UiPreviewFrame
                      src="/images/crm-executive-software.jpg"
                      alt="Custom Enterprise CRM Sales Dashboard Preview"
                      title="Custom CRM Suite • Executive Sales, Deals & Rep Leaderboard"
                      badge="CRM UI Spec"
                      caption="High-velocity B2B sales dashboard built with zero recurring seat charges."
                    />
                  </div>
                </div>

                {/* 4 CRM Metric Cards with Mini Sparklines */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-xs text-body-mid uppercase font-semibold">Sales Revenue</span>
                    <span className="font-sans text-3xl font-bold text-ink mt-1">$400k</span>
                    <span className="font-mono text-xs text-emerald-400 mt-1">▲ +12% vs Last Year</span>
                    <div className="w-full h-4 mt-2">
                      <svg className="w-full h-full text-emerald-400" fill="none" viewBox="0 0 100 20">
                        <path d="M0 16 Q 30 14, 60 8 T 100 2" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-xs text-body-mid uppercase font-semibold">New Customers</span>
                    <span className="font-sans text-3xl font-bold text-ink mt-1">450</span>
                    <span className="font-mono text-xs text-purple-400 mt-1">▲ +8.2% vs Last Year</span>
                    <div className="w-full h-4 mt-2">
                      <svg className="w-full h-full text-purple-400" fill="none" viewBox="0 0 100 20">
                        <path d="M0 18 Q 30 12, 60 9 T 100 3" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-xs text-body-mid uppercase font-semibold">Target Achievement</span>
                    <span className="font-sans text-3xl font-bold text-sunset-orange mt-1">68%</span>
                    <span className="font-mono text-xs text-rose-400 mt-1">▼ -1.2% vs Last Year</span>
                    <div className="w-full h-4 mt-2">
                      <svg className="w-full h-full text-sunset-orange" fill="none" viewBox="0 0 100 20">
                        <path d="M0 6 Q 30 10, 60 14 T 100 16" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-xs text-body-mid uppercase font-semibold">Profit Margin</span>
                    <span className="font-sans text-3xl font-bold text-breeze-blue mt-1">40%</span>
                    <span className="font-mono text-xs text-emerald-400 mt-1">▲ +1.2% vs Last Year</span>
                    <div className="w-full h-4 mt-2">
                      <svg className="w-full h-full text-breeze-blue" fill="none" viewBox="0 0 100 20">
                        <path d="M0 15 Q 35 12, 70 8 T 100 4" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* CRM Activity Counters & Sales Rep Leaderboard */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left: Interactive Omnichannel Activity Counter */}
                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm font-semibold text-ink">
                        Omnichannel Activity Count
                      </span>
                      {loggedActivity && (
                        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                          + Activity Logged!
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 font-mono text-xs">
                      <div className="p-3 rounded-xl bg-surface-container flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-[18px] text-emerald-400">call</span>
                          <span className="text-ink">Logged Calls</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-ink text-sm">{activityStats.calls}</span>
                          <button
                            onClick={() => handleLogActivity('calls')}
                            className="px-2 py-0.5 rounded bg-surface-bright text-body-mid hover:text-ink text-[10px]"
                          >
                            +1
                          </button>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-surface-container flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-[18px] text-purple-400">mail</span>
                          <span className="text-ink">Outbound Emails</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-ink text-sm">{activityStats.emails}</span>
                          <button
                            onClick={() => handleLogActivity('emails')}
                            className="px-2 py-0.5 rounded bg-surface-bright text-body-mid hover:text-ink text-[10px]"
                          >
                            +1
                          </button>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-surface-container flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <span className="material-symbols-outlined text-[18px] text-breeze-blue">groups</span>
                          <span className="text-ink">Held Meetings</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-ink text-sm">{activityStats.meetings}</span>
                          <button
                            onClick={() => handleLogActivity('meetings')}
                            className="px-2 py-0.5 rounded bg-surface-bright text-body-mid hover:text-ink text-[10px]"
                          >
                            +1
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="pt-2 border-t border-hairline/60 text-[11px] font-mono text-body-mid flex justify-between">
                      <span>Conversion Split:</span>
                      <span className="text-emerald-400 font-bold">58% Converted</span>
                      <span className="text-body-mid">42% On Progress</span>
                    </div>
                  </div>

                  {/* Center & Right: Top Revenue per Salesperson Waterfall */}
                  <div className="lg:col-span-2 p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-4 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-hairline/60">
                      <div className="flex flex-col">
                        <span className="font-sans text-sm font-semibold text-ink">
                          Top Revenue per Salesperson (Last 6 Months)
                        </span>
                        <span className="font-mono text-xs text-body-mid">
                          Click representative column to inspect quota attainment.
                        </span>
                      </div>
                      <span className="font-mono text-xs text-sunset-orange font-bold">
                        Selected: {selectedRep}
                      </span>
                    </div>

                    {/* Interactive Waterfall Bar Chart */}
                    <div className="flex items-end justify-between gap-4 h-44 pt-6 px-4">
                      {salesReps.map((rep) => {
                        const isSelected = selectedRep === rep.name;
                        return (
                          <div
                            key={rep.name}
                            onClick={() => setSelectedRep(rep.name)}
                            className="flex-1 flex flex-col items-center gap-2 h-full justify-end cursor-pointer group"
                          >
                            <span
                              className={`text-[11px] font-mono transition-colors ${
                                isSelected ? 'text-sunset-orange font-bold scale-110' : 'text-body-mid'
                              }`}
                            >
                              {rep.revenue}
                            </span>
                            <div className="w-full max-w-[48px] bg-surface-container rounded-t-lg overflow-hidden h-full flex items-end">
                              <div
                                className={`w-full rounded-t-lg transition-all group-hover:brightness-125 ${
                                  rep.color
                                } ${isSelected ? 'ring-2 ring-sunset-orange' : ''}`}
                                style={{ height: rep.height }}
                              ></div>
                            </div>
                            <span
                              className={`text-[11px] font-mono transition-colors ${
                                isSelected ? 'text-ink font-bold' : 'text-body-mid'
                              }`}
                            >
                              {rep.name}
                            </span>
                          </div>
                        );
                      })}
                    </div>

                    {/* Active Rep Quick Stats Bar */}
                    <div className="p-3 rounded-xl bg-surface-container border border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                      <span className="text-body-mid">
                        REPRESENTATIVE: <strong className="text-ink">{selectedRep}</strong> (Quota Attainment: 124%)
                      </span>
                      <span className="text-emerald-400 font-semibold">
                        TOP DEALS CLOSED: 100 DEALS • ACCELERATED SALES CYCLE
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Detailed Features & Architecture Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
              <div className="flex flex-col gap-4 bg-surface-container-lowest p-6 rounded-2xl border border-hairline">
                <div className="flex items-center gap-2 text-sunset-orange">
                  <span className="material-symbols-outlined text-[20px]">layers</span>
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Engineered System Capabilities
                  </span>
                </div>

                <div className="flex flex-col gap-3.5">
                  {currentSoftware.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-breeze-blue text-[18px] shrink-0 mt-0.5">
                        check_circle
                      </span>
                      <div className="flex flex-col">
                        <span className="font-sans text-sm text-ink font-medium">
                          {feat.title}
                        </span>
                        <span className="text-xs text-body-mid leading-relaxed mt-0.5">
                          {feat.desc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col justify-between gap-4 bg-surface-container-lowest p-6 rounded-2xl border border-hairline">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-breeze-blue">
                    <span className="material-symbols-outlined text-[20px]">terminal</span>
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                      Full-Stack Infrastructure Baseline
                    </span>
                  </div>

                  <p className="text-xs text-body-text leading-relaxed">
                    {currentSoftware.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {currentSoftware.stack.map((item, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-full bg-surface-container-high border border-hairline font-mono text-xs text-on-surface"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-container-high border border-sunset-orange/30">
                  <span className="font-mono text-[10px] text-sunset-orange uppercase font-bold block mb-1">
                    SOVEREIGN ENTERPRISE IP
                  </span>
                  <p className="text-xs text-ink leading-relaxed">
                    All software deliverables include 100% intellectual property assignment, clean OpenAPI schemas, and automated migration files. Zero vendor lock-in.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Core Engineering Capabilities & Business Clarification */}
        <section className="py-10 sm:py-16">
          <div className="flex flex-col mb-8">
            <span className="font-mono text-xs uppercase text-sunset-orange tracking-widest font-semibold mb-2">
              ARCHITECTURE CAPABILITIES & BUSINESS SCOPE
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight">
              Disciplined Full-Stack Software Systems
            </h2>
            <p className="font-sans text-sm sm:text-base text-body-mid mt-2 max-w-2xl">
              Clear specifications written for both founders and technical teams: understand what we build, who it helps, and which business bottleneck each engineering discipline eliminates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {capabilities.map((cap) => (
              <div
                key={cap.id}
                className="bg-canvas-card border border-hairline p-6 sm:p-8 rounded-2xl flex flex-col justify-between hover:border-pill-border transition-all group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="material-symbols-outlined text-[24px] text-body-mid group-hover:text-ink transition-colors">
                      {cap.icon}
                    </span>
                    <span className="font-mono text-xs text-sunset-orange font-semibold">
                      {cap.tag}
                    </span>
                  </div>
                  <h3 className="font-sans text-xl text-ink font-medium mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-body-text leading-relaxed mb-5">
                    {cap.desc}
                  </p>

                  {/* Deep Business Clarification Box */}
                  <div className="space-y-2.5 p-4 rounded-xl bg-surface-container-lowest border border-hairline/70 mb-5 text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-breeze-blue uppercase font-semibold block">
                        IDEAL FOR BUSINESSES
                      </span>
                      <span className="text-ink leading-snug block mt-0.5">
                        {cap.idealFor}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-hairline/40">
                      <span className="font-mono text-[10px] text-sunset-orange uppercase font-semibold block">
                        BOTTLENECK ELIMINATED
                      </span>
                      <span className="text-body-mid leading-snug block mt-0.5">
                        {cap.painSolved}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-hairline/40 flex items-center justify-between">
                      <span className="font-mono text-[10px] text-body-mid uppercase">DELIVERY CADENCE</span>
                      <span className="font-mono text-[11px] text-emerald-400 font-semibold">{cap.timeline}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-hairline/60 flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-body-mid uppercase shrink-0">BENCHMARK</span>
                  <span className="font-mono text-xs text-breeze-blue font-semibold text-right">
                    {cap.deliverable}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated Business Clarification Guide */}
          <div className="bg-surface-container-lowest border border-hairline rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-hairline/60">
              <div>
                <span className="font-mono text-xs text-breeze-blue uppercase tracking-wider font-semibold">
                  BUSINESS CLARITY GUIDE
                </span>
                <h3 className="font-sans text-xl sm:text-2xl text-ink font-medium mt-1">
                  Which Software Track Matches Your Exact Business Goal?
                </h3>
              </div>
              <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-3 py-1 rounded-full shrink-0">
                100% Client IP Ownership Across All Tracks
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceClarificationTracks.map((item) => (
                <div
                  key={item.track}
                  className="p-5 rounded-2xl bg-canvas-card border border-hairline flex flex-col justify-between gap-3"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] text-sunset-orange font-bold uppercase">
                      {item.track} • {item.title}
                    </span>
                    <div className="text-xs text-body-mid leading-relaxed">
                      <strong className="text-rose-300 font-medium">Problem Solved: </strong>
                      {item.bottleneck}
                    </div>
                    <div className="text-xs text-body-text leading-relaxed">
                      <strong className="text-breeze-blue font-medium">What KYRO Builds: </strong>
                      {item.whatYouGet}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-hairline/50 text-xs font-mono text-emerald-400">
                    Outcome: {item.businessOutcome}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verification Command Box */}
        <section className="py-8">
          <div className="p-4 rounded-xl bg-surface-container border border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono shadow-sm">
            <span className="text-body-mid flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-sunset-orange">terminal</span>
              <span>npx @kyro/verify-production-spec</span>
            </span>
            <button
              onClick={copySpecs}
              className="px-4 py-1.5 rounded-full bg-surface-bright text-ink hover:text-white border border-hairline transition-colors shrink-0"
            >
              {copied ? 'Copied Command' : 'Copy Verification Command'}
            </button>
          </div>
        </section>

        {/* Callout CTA */}
        <section className="pt-8 pb-16 sm:pb-24 flex flex-col items-center text-center">
          <div className="w-full flex flex-col items-center bg-canvas-card border border-hairline p-8 sm:p-12 rounded-3xl shadow-xl">
            <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold mb-2">
              INITIALIZE YOUR REPOSITORY
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl text-ink font-normal tracking-tight mb-3">
              Ready to Architect Your Core Software?
            </h3>
            <p className="font-sans text-xs sm:text-sm text-body-mid max-w-md mb-6 leading-relaxed">
              Book a 30-minute technical discovery session with KYRO lead engineers. No salespeople—direct architecture review.
            </p>
            <Link
              to="/contact"
              className="h-12 px-8 rounded-full bg-surface-container-lowest hover:bg-surface-container-high border border-pill-border transition-all flex items-center justify-center gap-2 text-ink font-mono text-xs sm:text-sm font-semibold shadow-sm"
            >
              <span>Schedule Technical Discovery</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}