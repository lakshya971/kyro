import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UiPreviewFrame from '../components/UiPreviewFrame';

export default function Analytics() {
  // Active Interactive Console View Tab
  const [activeConsoleTab, setActiveConsoleTab] = useState('sales');

  // Dedicated End-to-End Delivery Workflow State (n8n-inspired)
  const [activeDeliveryStep, setActiveDeliveryStep] = useState(0);

  const deliveryWorkflowNodes = [
    {
      id: 'analytics-step-01',
      stage: 'STAGE 01',
      type: 'SILO AUDIT',
      badgeColor: 'text-sunset-orange border-sunset-orange/30 bg-sunset-orange/10',
      icon: 'sync_alt',
      title: 'Silo Reconnaissance & Schema Ingress',
      subtitle: 'Mapping fragmented data across ERP, CRM & Billing',
      status: '18/18 SILOS MAPPED',
      latency: '0ms',
      inputData: 'Read-only connection strings or API keys for PostgreSQL, SAP, Salesforce, Stripe, Shopify, Google Ads, or custom data stores.',
      kyroProcess: '48-Hour Silo Audit: Scanning schema drift, identifying duplicate records, mapping entity relationships, and isolating cross-currency timezone reconciliation bugs.',
      businessOutput: 'Unified Data Architecture Inventory: Exposes hidden reporting lags and reveals exact points of commercial margin leakage across business divisions.',
      sla: '48 Hours to Formal Audit',
      guarantee: 'Zero fee if less than ₹20L in margin leak or reporting latency identified.'
    },
    {
      id: 'analytics-step-02',
      stage: 'STAGE 02',
      type: 'DBT MODELING',
      badgeColor: 'text-breeze-blue border-breeze-blue/30 bg-breeze-blue/10',
      icon: 'warehouse',
      title: 'Automated ELT & dbt Warehouse Modeling',
      subtitle: 'Dimensional star/snowflake modeling with daily CI/CD',
      status: 'dbt COMPILED',
      latency: '14ms',
      inputData: 'Raw transactional tables, webhook event streams, and historical accounting data dumps.',
      kyroProcess: 'Architecting clean relational schemas in Snowflake, ClickHouse, or PostgreSQL with automated incremental dbt models, deduplication, and automated data quality tests.',
      businessOutput: 'Production Dimensional Warehouse: Structured tables with continuous automated tests (uniqueness, referential integrity, zero nulls) and zero storage waste.',
      sla: '5 Business Days',
      guarantee: '100% test coverage across all dimensional tables.'
    },
    {
      id: 'analytics-step-03',
      stage: 'STAGE 03',
      type: 'SEMANTIC LAYER',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      icon: 'functions',
      title: 'DAX & Semantic Metric Standardization',
      subtitle: 'Formal single-source-of-truth calculations',
      status: 'TRUTH LOCK PASS',
      latency: '6ms',
      inputData: 'Conflicting departmental definitions of CAC, LTV, EBITDA margin, active accounts, and retention.',
      kyroProcess: 'Mathematical standardization of single-source-of-truth formulas in DAX semantic models and dbt metric layers, eliminating conflicting executive figures.',
      businessOutput: 'Single Source of Truth Layer: Centralized metric contracts ensuring finance, marketing, and sales leadership view identical, verified numbers.',
      sla: '3-5 Business Days',
      guarantee: 'Zero departmental metric divergence across the organization.'
    },
    {
      id: 'analytics-step-04',
      stage: 'STAGE 04',
      type: 'COCKPIT WIRING',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      icon: 'dashboard',
      title: 'Cockpit Engineering & DirectQuery Wiring',
      subtitle: 'Power BI & custom React executive visualization',
      status: 'SUB-SECOND LIVE',
      latency: '18ms',
      inputData: 'Standardized semantic models & executive KPI reporting priorities.',
      kyroProcess: 'Developing responsive Power BI and custom embedded React dashboards optimized for sub-second DirectQuery caching with handheld mobile-first responsiveness.',
      businessOutput: 'High-Clarity Executive Cockpits: Real-time cohort retention heatmaps, division variance waterfalls, sub-category sales, and live order ledgers.',
      sla: '5 Business Days',
      guarantee: 'Sub-second DirectQuery response on desktop and mobile.'
    },
    {
      id: 'analytics-step-05',
      stage: 'STAGE 05',
      type: 'GOVERNANCE OUTPUT',
      badgeColor: 'text-sunset-orange border-sunset-orange/30 bg-sunset-orange/10',
      icon: 'insights',
      title: 'Anomaly Alerting & Governance Handover',
      subtitle: 'Webhook triggers, scheduled reports & strategy memos',
      status: 'SYNCHRONIZED COMMAND',
      latency: '11ms',
      inputData: 'Live production transaction streams and operational telemetry.',
      kyroProcess: 'Configuring automated webhook alerts on statistical margin/churn anomalies, scheduling daily closing summaries, and establishing executive data governance.',
      businessOutput: 'Turnkey Executive Command System: 24/7 mobile and desktop telemetry, automated Slack/WhatsApp exception alerts, 100% DAX model ownership, and quarterly strategy reviews.',
      sla: 'Immediate Launch with Live Telemetry',
      guarantee: '90-Day Telemetry SLA & Free Metric Re-Calibration.'
    }
  ];

  // Sales Cockpit State (Tab 1)
  const [orderFilterStatus, setOrderFilterStatus] = useState('all');
  const [orderSearchQuery, setOrderSearchQuery] = useState('');

  const liveOrders = [
    { id: 'US-2024-05-31-1234', time: '10:15:23 AM', customer: 'Amazon', segment: 'Corporate', category: 'Technology', sales: '$2,349.00', profit: '$352.35', status: 'Completed', region: 'West' },
    { id: 'US-2024-05-31-1233', time: '10:12:45 AM', customer: 'Staples', segment: 'Corporate', category: 'Office Supplies', sales: '$1,129.50', profit: '$169.43', status: 'Completed', region: 'East' },
    { id: 'US-2024-05-31-1232', time: '10:09:31 AM', customer: 'Walmart', segment: 'Consumer', category: 'Furniture', sales: '$929.99', profit: '$139.50', status: 'Processing', region: 'South' },
    { id: 'US-2024-05-31-1231', time: '10:07:18 AM', customer: 'Best Buy', segment: 'Consumer', category: 'Technology', sales: '$1,499.00', profit: '$224.85', status: 'Completed', region: 'West' },
    { id: 'US-2024-05-31-1230', time: '10:05:02 AM', customer: 'Target', segment: 'Consumer', category: 'Office Supplies', sales: '$299.99', profit: '$44.50', status: 'Processing', region: 'Central' },
    { id: 'US-2024-05-31-1229', time: '09:58:14 AM', customer: 'Costco', segment: 'Corporate', category: 'Technology', sales: '$3,840.00', profit: '$576.00', status: 'Completed', region: 'West' },
    { id: 'US-2024-05-31-1228', time: '09:52:40 AM', customer: 'Home Depot', segment: 'Corporate', category: 'Furniture', sales: '$1,875.50', profit: '$281.33', status: 'Completed', region: 'East' },
  ];

  const filteredOrders = liveOrders.filter((order) => {
    const matchesStatus = orderFilterStatus === 'all' || order.status.toLowerCase() === orderFilterStatus.toLowerCase();
    const matchesSearch =
      order.customer.toLowerCase().includes(orderSearchQuery.toLowerCase()) ||
      order.category.toLowerCase().includes(orderSearchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(orderSearchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Cohort Heatmap Data (Tab 2)
  const cohortRows = [
    { month: 'Jan 20', values: ['100%', '66.4%', '55.7%', '46.8%', '40.5%', '34.5%', '29.2%', '23.4%', '18.7%', '13.5%', '8.8%', '3.6%'] },
    { month: 'Feb 20', values: ['100%', '64.8%', '53.7%', '45.5%', '38.3%', '31.9%', '25.2%', '19.9%', '14.9%', '9.5%', '3.9%'] },
    { month: 'Mar 20', values: ['100%', '61.9%', '51.3%', '42.7%', '34.7%', '27.9%', '21.8%', '16.1%', '10.2%', '4.3%'] },
    { month: 'Apr 20', values: ['100%', '59.7%', '47.5%', '38.3%', '30.4%', '23.5%', '17.0%', '11.0%', '5.0%'] },
    { month: 'May 20', values: ['100%', '57.7%', '45.4%', '34.7%', '26.6%', '19.5%', '12.2%', '4.9%'] },
    { month: 'Jun 20', values: ['100%', '53.1%', '40.0%', '30.3%', '21.7%', '14.3%', '6.0%'] },
    { month: 'Jul 20', values: ['100%', '49.5%', '37.2%', '27.1%', '17.7%', '8.0%'] },
    { month: 'Aug 20', values: ['100%', '45.2%', '32.7%', '21.5%', '9.7%'] },
    { month: 'Sep 20', values: ['100%', '40.6%', '27.7%', '13.4%'] },
    { month: 'Oct 20', values: ['100%', '35.6%', '17.2%'] },
    { month: 'Nov 20', values: ['100%', '24.1%'] }
  ];

  const getCohortColor = (pctStr) => {
    if (!pctStr) return 'bg-transparent text-transparent';
    const val = parseFloat(pctStr);
    if (val >= 90) return 'bg-indigo-600/90 text-white font-bold';
    if (val >= 60) return 'bg-purple-600/80 text-white';
    if (val >= 45) return 'bg-purple-700/70 text-purple-100';
    if (val >= 30) return 'bg-fuchsia-700/60 text-fuchsia-100';
    if (val >= 20) return 'bg-pink-700/50 text-pink-100';
    if (val >= 10) return 'bg-orange-700/40 text-orange-200';
    return 'bg-amber-800/30 text-amber-300';
  };

  // Executive Variance State (Tab 3)
  const [selectedDivision, setSelectedDivision] = useState('Commercial');
  const [selectedRegion, setSelectedRegion] = useState('APAC');

  // Financial Performance State (Tab 4)
  const [selectedFinancialKpi, setSelectedFinancialKpi] = useState('Revenue');

  // Sales Pipeline & Deal Risk State (Tab 5)
  const [selectedDealRegion, setSelectedDealRegion] = useState('All');

  // Interactive Metric Mode Switcher State
  const [activeMetricMode, setActiveMetricMode] = useState('revenue');

  const metricModes = {
    revenue: {
      label: 'Revenue Run-Rate',
      badge: 'CAGR: +44.2%',
      value: '₹4.82 Cr',
      period: 'ARR Projected',
      change: '+18.4% MoM',
      color: 'text-breeze-blue',
      path: 'M0 65 Q 40 50, 80 58 T 160 30 T 240 45 T 320 12',
      fill: 'M0 65 Q 40 50, 80 58 T 160 30 T 240 45 T 320 12 L 320 80 L 0 80 Z',
      dotY: 12
    },
    churn: {
      label: 'Predictive Churn Risk',
      badge: 'RISK: MINIMAL',
      value: '0.84%',
      period: 'Monthly Net Volatility',
      change: '-0.32% Delta',
      color: 'text-emerald-400',
      path: 'M0 25 Q 40 35, 80 30 T 160 55 T 240 60 T 320 72',
      fill: 'M0 25 Q 40 35, 80 30 T 160 55 T 240 60 T 320 72 L 320 80 L 0 80 Z',
      dotY: 72
    },
    pipeline: {
      label: 'Pipeline Throughput',
      badge: 'VELOCITY: 14MS',
      value: '42.8k',
      period: 'Tx / Second Sustained',
      change: '+142% vs Baseline',
      color: 'text-sunset-orange',
      path: 'M0 70 Q 50 60, 100 45 T 180 20 T 250 15 T 320 8',
      fill: 'M0 70 Q 50 60, 100 45 T 180 20 T 250 15 T 320 8 L 320 80 L 0 80 Z',
      dotY: 8
    },
    margin: {
      label: 'Gross Unit Margins',
      badge: 'EBITDA POSITIVE',
      value: '76.4%',
      period: 'Blended Margin Yield',
      change: '+6.1% Optimization',
      color: 'text-ink',
      path: 'M0 50 Q 60 55, 120 40 T 200 35 T 270 25 T 320 18',
      fill: 'M0 50 Q 60 55, 120 40 T 200 35 T 270 25 T 320 18 L 320 80 L 0 80 Z',
      dotY: 18
    }
  };

  const systems = [
    {
      id: '01',
      tag: 'SYSTEM 01',
      icon: 'sync_alt',
      title: 'Data Ingestion & Automated Cleaning',
      desc: 'Turnkey ELT pipelines extracting raw orders, invoices, ad spend, and CRM logs into one structured warehouse with duplicate and error protection.',
      sourcesUnified: 'Tally, Zoho Books, PostgreSQL, Razorpay, Shopify, Google Ads',
      questionAnswered: 'How do we stop manual Excel exports and mismatched team reports?',
      tags: ['dbt Core', 'Apache Airflow', 'Kafka', 'Auto-Quarantine']
    },
    {
      id: '02',
      tag: 'SYSTEM 02',
      icon: 'dashboard_customize',
      title: 'Interactive Power BI & Web Dashboards',
      desc: 'Executive reporting interfaces displaying daily revenue, regional profits, AOV, and live SLA fulfillment across desktop and mobile.',
      sourcesUnified: 'Power BI Service, DirectQuery SQL, Custom Web Portals',
      questionAnswered: 'What happened in sales, gross profit, and unit margins yesterday or this hour?',
      tags: ['DAX Advanced Models', 'Embedded React Visuals', 'Live Telemetry']
    },
    {
      id: '03',
      tag: 'SYSTEM 03',
      icon: 'trending_up',
      title: 'Sales & Revenue Trajectory Modeling',
      desc: 'Granular cohort retention triangles, repeat purchase curves, CAC-to-LTV payback windows, and monthly actual vs budget variance models.',
      sourcesUnified: 'Billing Ledgers, Subscription Logs & Acquisition Channels',
      questionAnswered: 'Which customer cohorts churn fastest and which products drive real EBITDA?',
      tags: ['Cohort Retention Math', 'EBITDA Leak Tracking', 'Predictive LTV']
    },
    {
      id: '04',
      tag: 'SYSTEM 04',
      icon: 'route',
      title: 'Sales Pipeline & Customer Journey Analytics',
      desc: 'Stage-by-stage deal conversion velocity, salesperson quota contributions, forecast risk scoring, and funnel drop-off diagnostics.',
      sourcesUnified: 'CRM Opportunities, Call Logs, Checkout Events & Ads',
      questionAnswered: 'Where are deals stalling in our pipeline and what revenue will realistically close?',
      tags: ['Pipeline Velocity', 'Forecast Scoring', 'Funnel Heatmaps']
    },
    {
      id: '05',
      tag: 'SYSTEM 05',
      icon: 'precision_manufacturing',
      title: 'Operational & Margin Diagnostics',
      desc: 'Warehouse inventory turnover monitoring, supplier fulfillment lag tracking, refund/return cost analysis, and branch-level unit economics.',
      sourcesUnified: 'ERP Stock Logs, Courier Webhooks & Manufacturing Cost Sheets',
      questionAnswered: 'Where is working capital trapped in slow stock or silent fulfillment delays?',
      tags: ['Inventory Velocity', 'Unit Cost Variance', 'Bottleneck Scans']
    },
    {
      id: '06',
      tag: 'SYSTEM 06',
      icon: 'military_tech',
      title: 'Actionable Strategic BI Consultation',
      desc: 'Monthly executive interpretation turning dashboard patterns into decisive pricing changes, budget reallocations, and retention plays.',
      sourcesUnified: 'Executive Board Packets, Unit P&Ls & Strategic Roadmaps',
      questionAnswered: 'Exactly what management decisions should we execute next Monday to lift margins?',
      tags: ['Executive Memos', '90-Day Priority Roadmaps', 'Founder Sprints']
    }
  ];

  const businessClarityRoles = [
    {
      role: 'FOR FOUNDERS & CEOS',
      question: 'Are we beating budget, growing cash margins, and retaining customers across regions?',
      clarityDelivered: 'Single morning executive view combining Revenue vs Budget variance, division margins, and proactive churn warnings.',
      sourcesConnected: 'Accounting, Sales, Bank Balance & Ads'
    },
    {
      role: 'FOR CFOS & FINANCE TEAMS',
      question: 'Why do commercial numbers look strong while EBITDA or APAC cash flow misses forecast?',
      clarityDelivered: 'Exact bridge variance dissecting Actual vs Budget EBITDA, gross margin percentage shifts, and business unit deficits.',
      sourcesConnected: 'Tally / Zoho / SAP, Invoices & Payroll'
    },
    {
      role: 'FOR SALES & REVENUE HEADS',
      question: 'Which rep stages or territories are stalling deals and skewing our quarterly forecast?',
      clarityDelivered: 'Deal velocity per stage, weighted forecast accuracy, senior vs AE contributions, and live customer retention cohorts.',
      sourcesConnected: 'CRM Pipelines, Quotes & Closed Orders'
    }
  ];

  const techStack = [
    'Microsoft Power BI',
    'DAX Advanced Models',
    'dbt Core',
    'Snowflake',
    'ClickHouse',
    'PostgreSQL',
    'Apache Airflow',
    'Python Pandas / NumPy',
    'Tableau Server',
    'React Embedded Visuals'
  ];

  const current = metricModes[activeMetricMode];
  const currentDeliveryNode = deliveryWorkflowNodes[activeDeliveryStep];

  return (
    <main className="flex flex-col relative w-full pt-16 pb-20 bg-surface min-h-screen text-body-text">
      {/* Top Breadcrumb & Status */}
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-2 bg-surface-container-lowest border-b border-hairline/60">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-sunset-orange animate-pulse"></span>
          <span className="font-mono text-[11px] sm:text-xs text-body-mid uppercase tracking-wider">
            KYRO • BUSINESS INTELLIGENCE & TELEMETRY • 03
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-emerald-400 font-semibold">
            TELEMETRY: SYNCHRONIZED • 14MS
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Hero Section — Two-Column Horizontal Split */}
        <section className="flex flex-col pt-10 sm:pt-16 pb-10 sm:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center mb-10">
            {/* Left Side: Hero Content & CTAs */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
                  ENTERPRISE DATA INTELLIGENCE & ANALYTICS
                </span>
              </div>

              <h1 className="font-sans text-3xl sm:text-5xl text-ink font-normal tracking-tight leading-[1.12] mb-5">
                Data Analytics & Executive Intelligence Systems
              </h1>

              <p className="font-sans text-base sm:text-lg text-body-mid leading-relaxed mb-7">
                At <strong className="text-ink font-semibold">KYRO</strong>, we unite scattered spreadsheets, accounting software, ad channels, and ERP databases into live Power BI and custom executive dashboards—so leadership sees real profit, retention, and sales velocity in real time.
              </p>

              {/* Quick CTA Pills */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-on-primary hover:bg-primary-fixed font-mono text-xs font-semibold transition-all shadow-md"
                >
                  Request Data Diagnostic
                </Link>
                <a
                  href="#interactive-cockpit"
                  className="inline-flex items-center justify-center gap-1.5 h-11 px-5 rounded-full bg-surface-container-high border border-pill-border text-ink hover:bg-surface-bright font-mono text-xs transition-all shadow-sm"
                >
                  <span>Inspect BI Dashboards</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                </a>
                <a
                  href="#analytics-delivery-workflow"
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
                src="/images/powerbi-sales-analytics.jpg"
                alt="Power BI Executive Sales & Profit Analytics Dashboard Preview"
                title="Client Deliverable Preview • Power BI Executive Sales & Profit Suite"
                badge="BI Deliverable"
                caption="Visual preview of the automated executive dashboard: live revenue KPIs, regional splits, customer segments, and profit margins."
                metrics={['Power BI & SQL', 'DirectQuery Live', 'Single Truth']}
                eager={true}
              />
            </div>
          </div>

          {/* Operational Metrics Monoliths */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-canvas-card border border-hairline p-5 rounded-2xl shadow-sm">
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-ink font-normal tracking-tight">
                1.2s
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                Ingestion Latency
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-sunset-orange font-normal tracking-tight">
                +4.8x
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                Decision Velocity
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-breeze-blue font-normal tracking-tight">
                99.98%
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                Schema Parity
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-ink font-normal tracking-tight">
                Zero
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                Data Silos
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION: N8N-INSPIRED CLIENT PROCESS WORKFLOW             */}
        {/* (How organizations & businesses get output from KYRO)     */}
        {/* ========================================================= */}
        <section id="analytics-delivery-workflow" className="py-10 sm:py-16 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sunset-orange animate-pulse"></span>
                <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
                  END-TO-END DATA DELIVERY WORKFLOW PIPELINE
                </span>
              </div>
              <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight">
                How Your Organization Receives Live Executive Telemetry
              </h2>
              <p className="font-sans text-sm text-body-mid mt-1 max-w-2xl leading-relaxed">
                An n8n-inspired visual state machine detailing the complete transformation from fragmented business silos to live C-suite command. Step through each node to see inputs, transformations, and deliverables.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono bg-surface-container-low px-4 py-2 rounded-full border border-hairline shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>100% MODEL & REPO OWNERSHIP</span>
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
                  KYRO_ANALYTICS_PIPELINE.DAG
                </span>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  STATE: ACTIVE • DIRECTQUERY
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
        {/* SECTION: NATIVE INTERACTIVE BI TELEMETRY CONSOLE          */}
        {/* (Built with deep detailing inspired by reference UIs)     */}
        {/* ========================================================= */}
        <section id="interactive-cockpit" className="py-10 sm:py-16 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sunset-orange animate-pulse"></span>
                <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
                  DEPLOYED TELEMETRY CONSOLE
                </span>
              </div>
              <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight">
                Live Enterprise Analytical Cockpit
              </h2>
              <p className="font-sans text-sm text-body-mid mt-1 max-w-xl">
                Interact with KYRO's native telemetry engine. Toggle between omnichannel sales, statistical cohort retention decay, and executive variance accounting.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="font-mono text-xs text-emerald-400 font-semibold">
                STREAMING DIRECTQUERY ACTIVE
              </span>
            </div>
          </div>

          {/* Console View Switcher Tabs */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-3 mb-6 border-b border-hairline/60">
            <button
              onClick={() => setActiveConsoleTab('sales')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                activeConsoleTab === 'sales'
                  ? 'bg-surface-container-high border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-surface-container-low border border-hairline text-body-mid hover:text-ink hover:bg-surface-container'
              }`}
            >
              <span className="text-sunset-orange font-bold">01</span>
              <span>Omnichannel Sales & Orders</span>
            </button>

            <button
              onClick={() => setActiveConsoleTab('cohort')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                activeConsoleTab === 'cohort'
                  ? 'bg-surface-container-high border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-surface-container-low border border-hairline text-body-mid hover:text-ink hover:bg-surface-container'
              }`}
            >
              <span className="text-emerald-400 font-bold">02</span>
              <span>Cohort Retention & LTV</span>
            </button>

            <button
              onClick={() => setActiveConsoleTab('variance')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                activeConsoleTab === 'variance'
                  ? 'bg-surface-container-high border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-surface-container-low border border-hairline text-body-mid hover:text-ink hover:bg-surface-container'
              }`}
            >
              <span className="text-breeze-blue font-bold">03</span>
              <span>Executive Variance BI</span>
            </button>

            <button
              onClick={() => setActiveConsoleTab('financial')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                activeConsoleTab === 'financial'
                  ? 'bg-surface-container-high border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-surface-container-low border border-hairline text-body-mid hover:text-ink hover:bg-surface-container'
              }`}
            >
              <span className="text-sunset-orange font-bold">04</span>
              <span>Financial P&L & EBITDA</span>
            </button>

            <button
              onClick={() => setActiveConsoleTab('pipeline')}
              className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                activeConsoleTab === 'pipeline'
                  ? 'bg-surface-container-high border border-pill-border text-ink font-bold shadow-md'
                  : 'bg-surface-container-low border border-hairline text-body-mid hover:text-ink hover:bg-surface-container'
              }`}
            >
              <span className="text-purple-400 font-bold">05</span>
              <span>Deal Pipeline & Risk</span>
            </button>
          </div>

          {/* Active Console Panel Container */}
          <div className="bg-canvas-card border border-hairline rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-8 transition-all">

            {/* TAB 1: OMNICHANNEL SALES & ORDER COCKPIT */}
            {activeConsoleTab === 'sales' && (
              <div className="flex flex-col gap-8">
                {/* Cockpit Filter Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-surface-container-low border border-hairline text-xs font-mono">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-sans text-sm font-semibold text-ink">
                      Sales Analytics Dashboard
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-body-mid border border-hairline">
                      Date Range: May 1, 2024 - May 31, 2024
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-container-highest text-body-mid border border-hairline">
                      Region: Global (All)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-body-mid text-[11px]">
                      Last refresh: 10:30:45 AM (Real-time)
                    </span>
                  </div>
                </div>

                {/* Single Image Visual Clarity Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-surface-container-lowest border border-hairline">
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <span className="font-mono text-[11px] text-sunset-orange uppercase font-bold tracking-wider">
                      RETAIL, E-COMMERCE & B2B SALES CLARITY
                    </span>
                    <h3 className="font-sans text-xl font-semibold text-ink">
                      Monitor Daily Gross Sales, Net Profit Margins & Live Fulfillment
                    </h3>
                    <p className="text-xs sm:text-sm text-body-mid leading-relaxed">
                      Stop waiting until month-end to find out if ad spend eroded unit profit. This Power BI model tracks total sales, average order value, regional demand, top accounts, and live fulfillment statuses in one view.
                    </p>
                    <ul className="space-y-1.5 text-xs text-body-text pt-1">
                      <li>• Breaks revenue cleanly across Technology, Office Supplies & Furniture</li>
                      <li>• Compares Online vs Retail vs Distributor channel profitability live</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-7">
                    <UiPreviewFrame
                      src="/images/powerbi-sales-analytics.jpg"
                      alt="Power BI Sales Analytics Deliverable Dashboard"
                      title="Power BI Sales Analytics • Revenue, Margin & Geo Telemetry"
                      badge="Sales BI Spec"
                      caption="Full Power BI sales command built over live relational order tables."
                    />
                  </div>
                </div>

                {/* 6 Top KPI Cards with Sparklines */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-1 shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Total Sales</span>
                    <span className="font-sans text-2xl font-bold text-ink">$2.48M</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">▲ 15.6% vs MoM</span>
                    <div className="w-full h-4 mt-2">
                      <svg className="w-full h-full text-breeze-blue" fill="none" viewBox="0 0 100 20">
                        <path d="M0 16 Q 25 10, 50 12 T 100 4" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-1 shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Total Orders</span>
                    <span className="font-sans text-2xl font-bold text-ink">18,742</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">▲ 12.3% Velocity</span>
                    <div className="w-full h-4 mt-2">
                      <svg className="w-full h-full text-emerald-400" fill="none" viewBox="0 0 100 20">
                        <path d="M0 18 Q 30 14, 60 8 T 100 2" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-1 shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Avg Order Value</span>
                    <span className="font-sans text-2xl font-bold text-sunset-orange">$132.46</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">▲ 8.7% Margin Exp</span>
                    <div className="w-full h-4 mt-2">
                      <svg className="w-full h-full text-sunset-orange" fill="none" viewBox="0 0 100 20">
                        <path d="M0 15 Q 35 12, 70 6 T 100 3" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-1 shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Gross Profit</span>
                    <span className="font-sans text-2xl font-bold text-ink">$842.3K</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">▲ 14.2% Yield</span>
                    <div className="w-full h-4 mt-2">
                      <svg className="w-full h-full text-purple-400" fill="none" viewBox="0 0 100 20">
                        <path d="M0 16 Q 25 15, 60 9 T 100 2" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-1 shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Profit Margin</span>
                    <span className="font-sans text-2xl font-bold text-emerald-400">33.9%</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">▲ 2.6% Optimization</span>
                    <div className="w-full h-4 mt-2">
                      <svg className="w-full h-full text-emerald-400" fill="none" viewBox="0 0 100 20">
                        <path d="M0 14 Q 40 12, 70 8 T 100 4" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-1 shadow-sm">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">Units Sold</span>
                    <span className="font-sans text-2xl font-bold text-ink">24,873</span>
                    <span className="font-mono text-[10px] text-emerald-400 font-semibold">▲ 10.8% Inbound</span>
                    <div className="w-full h-4 mt-2">
                      <svg className="w-full h-full text-pink-400" fill="none" viewBox="0 0 100 20">
                        <path d="M0 17 Q 30 11, 65 7 T 100 2" stroke="currentColor" strokeWidth="2"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Analytical Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Sales by Category & Channel */}
                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase text-body-mid font-semibold">
                        Sales by Category
                      </span>
                      <span className="font-mono text-xs text-sunset-orange">$2.48M Total</span>
                    </div>

                    <div className="flex flex-col gap-3">
                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-ink">Technology</span>
                          <span className="text-breeze-blue">$1.02M (41.1%)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                          <div className="h-full bg-breeze-blue rounded-full" style={{ width: '41.1%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-ink">Office Supplies</span>
                          <span className="text-emerald-400">$0.75M (30.3%)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                          <div className="h-full bg-emerald-400 rounded-full" style={{ width: '30.3%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-ink">Furniture</span>
                          <span className="text-sunset-orange">$0.71M (28.6%)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container overflow-hidden">
                          <div className="h-full bg-sunset-orange rounded-full" style={{ width: '28.6%' }}></div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-hairline/60 flex items-center justify-between text-xs font-mono">
                      <span className="text-body-mid">Channel Split:</span>
                      <span className="text-emerald-400 font-semibold">Online 54.4%</span>
                      <span className="text-body-mid">Retail 30.2%</span>
                      <span className="text-body-mid">Distributor 15.4%</span>
                    </div>
                  </div>

                  {/* Top Customer Segments & Volume */}
                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase text-body-mid font-semibold">
                        Sales by Customer Segment
                      </span>
                      <span className="font-mono text-xs text-breeze-blue">Volume Breakdown</span>
                    </div>

                    <div className="flex items-end justify-between gap-4 h-36 pt-4 px-2">
                      <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                        <span className="text-[11px] font-mono text-ink font-bold">$1.25M</span>
                        <div className="w-full bg-breeze-blue rounded-t-lg" style={{ height: '85%' }}></div>
                        <span className="text-[10px] font-mono text-body-mid">Consumer</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                        <span className="text-[11px] font-mono text-ink font-bold">$0.76M</span>
                        <div className="w-full bg-emerald-500 rounded-t-lg" style={{ height: '52%' }}></div>
                        <span className="text-[10px] font-mono text-body-mid">Corporate</span>
                      </div>
                      <div className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                        <span className="text-[11px] font-mono text-ink font-bold">$0.47M</span>
                        <div className="w-full bg-sunset-orange rounded-t-lg" style={{ height: '32%' }}></div>
                        <span className="text-[10px] font-mono text-body-mid">Home Office</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-hairline/60 text-xs font-mono text-body-mid flex justify-between">
                      <span>Top Account: Staples ($78k)</span>
                      <span className="text-emerald-400">Amazon ($67k)</span>
                    </div>
                  </div>

                  {/* Sub-Category Revenue Ranking */}
                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase text-body-mid font-semibold">
                        Top Sub-Categories
                      </span>
                      <span className="font-mono text-xs text-emerald-400">Indexed Run-Rate</span>
                    </div>

                    <div className="flex flex-col gap-2 text-xs font-mono">
                      {[
                        { name: 'Phones', val: '$0.45M', pct: '90%' },
                        { name: 'Chairs', val: '$0.32M', pct: '64%' },
                        { name: 'Storage', val: '$0.28M', pct: '56%' },
                        { name: 'Tables', val: '$0.21M', pct: '42%' },
                        { name: 'Binders', val: '$0.18M', pct: '36%' },
                        { name: 'Machines', val: '$0.17M', pct: '34%' }
                      ].map((item, iIdx) => (
                        <div key={iIdx} className="flex items-center gap-2">
                          <span className="w-16 text-body-mid">{item.name}</span>
                          <div className="flex-1 h-1.5 bg-surface-container rounded-full overflow-hidden">
                            <div className="h-full bg-breeze-blue rounded-full" style={{ width: item.pct }}></div>
                          </div>
                          <span className="w-14 text-right text-ink font-semibold">{item.val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Live Recent Orders Interactive Table */}
                <div className="flex flex-col gap-3 bg-surface-container-lowest p-5 rounded-2xl border border-hairline shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-hairline/60">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span className="font-sans text-sm font-semibold text-ink">
                        Recent Orders (Live Stream)
                      </span>
                      <span className="font-mono text-[10px] text-body-mid bg-surface-container px-2 py-0.5 rounded">
                        {filteredOrders.length} records found
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={orderSearchQuery}
                        onChange={(e) => setOrderSearchQuery(e.target.value)}
                        placeholder="Search customer, ID..."
                        className="px-3 py-1.5 rounded-lg bg-surface-container text-ink font-mono text-xs border border-hairline outline-none focus:border-breeze-blue"
                      />
                      <select
                        value={orderFilterStatus}
                        onChange={(e) => setOrderFilterStatus(e.target.value)}
                        className="px-3 py-1.5 rounded-lg bg-surface-container text-ink font-mono text-xs border border-hairline outline-none cursor-pointer"
                      >
                        <option value="all">Status: All</option>
                        <option value="completed">Completed</option>
                        <option value="processing">Processing</option>
                      </select>
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-mono text-xs">
                      <thead>
                        <tr className="text-body-mid border-b border-hairline/40 text-[11px]">
                          <th className="py-2.5 px-3">ORDER ID</th>
                          <th className="py-2.5 px-3">TIME</th>
                          <th className="py-2.5 px-3">CUSTOMER</th>
                          <th className="py-2.5 px-3">SEGMENT</th>
                          <th className="py-2.5 px-3">CATEGORY</th>
                          <th className="py-2.5 px-3">SALES</th>
                          <th className="py-2.5 px-3">PROFIT</th>
                          <th className="py-2.5 px-3">STATUS</th>
                          <th className="py-2.5 px-3">REGION</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-hairline/30">
                        {filteredOrders.map((ord) => (
                          <tr key={ord.id} className="hover:bg-surface-container/50 transition-colors">
                            <td className="py-2.5 px-3 text-breeze-blue font-semibold">{ord.id}</td>
                            <td className="py-2.5 px-3 text-body-mid">{ord.time}</td>
                            <td className="py-2.5 px-3 text-ink font-medium">{ord.customer}</td>
                            <td className="py-2.5 px-3 text-body-mid">{ord.segment}</td>
                            <td className="py-2.5 px-3 text-body-text">{ord.category}</td>
                            <td className="py-2.5 px-3 text-ink font-semibold">{ord.sales}</td>
                            <td className="py-2.5 px-3 text-emerald-400 font-semibold">{ord.profit}</td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  ord.status === 'Completed'
                                    ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                                    : 'bg-amber-950/60 text-amber-300 border border-amber-500/30'
                                }`}
                              >
                                {ord.status}
                              </span>
                            </td>
                            <td className="py-2.5 px-3 text-body-mid">{ord.region}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CUSTOMER COHORT RETENTION & LTV MATRIX */}
            {activeConsoleTab === 'cohort' && (
              <div className="flex flex-col gap-8">
                {/* Single Image Visual Clarity Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-surface-container-lowest border border-hairline">
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <span className="font-mono text-[11px] text-emerald-400 uppercase font-bold tracking-wider">
                      RETENTION & REPEAT PURCHASE CLARITY
                    </span>
                    <h3 className="font-sans text-xl font-semibold text-ink">
                      Discover Exactly When Customers Drop Off & How to Recover Lifetime Value
                    </h3>
                    <p className="text-xs sm:text-sm text-body-mid leading-relaxed">
                      Acquisition costs rise every quarter; real profit lives in repeat retention. This cohort dashboard tracks every monthly customer batch from Month 0 to Month 11 alongside Average Lifetime Revenue curves.
                    </p>
                    <ul className="space-y-1.5 text-xs text-body-text pt-1">
                      <li>• Pinpoints exact drop-off months (e.g., Month 1 to Month 3) for targeted offers</li>
                      <li>• Reveals true LTV payback speed per marketing acquisition cohort</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-7">
                    <UiPreviewFrame
                      src="/images/cohort-retention-analytics.jpg"
                      alt="Customer Retention Cohort Triangle & Lifetime Revenue Analytics"
                      title="Cohort Retention Analytics • Heatmap Matrix & LTV Curve"
                      badge="Cohort UI Spec"
                      caption="Full cohort diagnostic view built to expose customer churn decay and repeat purchase strength."
                    />
                  </div>
                </div>

                {/* Cohort Header & Macro KPIs */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-xs text-body-mid uppercase font-semibold">Cohort Revenue</span>
                    <span className="font-sans text-3xl font-bold text-ink mt-1">$955,203</span>
                    <span className="font-mono text-xs text-rose-400 mt-1">$-418k (-30% vs prior mo)</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-xs text-body-mid uppercase font-semibold">Cohort Orders</span>
                    <span className="font-sans text-3xl font-bold text-ink mt-1">31,636</span>
                    <span className="font-mono text-xs text-rose-400 mt-1">-13,957 (-31% vs prior mo)</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-xs text-body-mid uppercase font-semibold">Avg Order Value (AOV)</span>
                    <span className="font-sans text-3xl font-bold text-emerald-400 mt-1">$3,020.03</span>
                    <span className="font-mono text-xs text-emerald-400 mt-1">+$8.03 (+0.27% MoM)</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between shadow-sm">
                    <span className="font-mono text-xs text-body-mid uppercase font-semibold">New Customer Size</span>
                    <span className="font-sans text-3xl font-bold text-sunset-orange mt-1">11,244</span>
                    <span className="font-mono text-xs text-body-mid mt-1">Acquisition Batch</span>
                  </div>
                </div>

                {/* Customer Retention Triangular Heatmap Matrix */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col gap-4 shadow-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-hairline/60">
                    <div className="flex flex-col">
                      <span className="font-sans text-base font-semibold text-ink">
                        Customer Retention by Cohort Triangle
                      </span>
                      <span className="font-mono text-xs text-body-mid">
                        Decomposing retention decay across 12 consecutive months since initial acquisition.
                      </span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[11px] text-body-mid">
                      <span className="w-3 h-3 rounded bg-indigo-600 inline-block"></span>
                      <span>High Retention</span>
                      <span className="w-3 h-3 rounded bg-amber-800 inline-block ml-2"></span>
                      <span>Decay Point</span>
                    </div>
                  </div>

                  {/* Triangular Heatmap Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-center font-mono text-xs border-collapse">
                      <thead>
                        <tr className="text-body-mid text-[11px] border-b border-hairline/60">
                          <th className="py-2 px-3 text-left">Cohort</th>
                          {[...Array(12)].map((_, mIdx) => (
                            <th key={mIdx} className="py-2 px-2.5">
                              Mo {mIdx}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {cohortRows.map((row, rIdx) => (
                          <tr key={rIdx} className="border-b border-hairline/20">
                            <td className="py-2 px-3 text-left font-semibold text-ink whitespace-nowrap">
                              {row.month}
                            </td>
                            {[...Array(12)].map((_, cIdx) => {
                              const val = row.values[cIdx];
                              return (
                                <td key={cIdx} className="p-1">
                                  {val ? (
                                    <div
                                      className={`py-1.5 px-2 rounded font-mono text-[11px] transition-all hover:scale-105 cursor-pointer ${getCohortColor(
                                        val
                                      )}`}
                                      title={`${row.month} Month ${cIdx} Retention: ${val}`}
                                    >
                                      {val}
                                    </div>
                                  ) : (
                                    <div className="py-1.5 px-2 text-transparent">-</div>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-xl bg-surface-container border border-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                    <span className="text-body-mid">
                      MATHEMATICAL SIGNATURE: STEEP INITIAL DROP (100% TO 66.4%) FOLLOWED BY STABILIZING LONG-TAIL PLATEAU (34.5% AT MO 5).
                    </span>
                    <span className="text-emerald-400 font-semibold">
                      ACTION: AUTOMATED EMAIL NURTURE AT MONTH 3 RECOVERS +14.8% LTV
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: C-SUITE VARIANCE & REVENUE TRAJECTORY */}
            {activeConsoleTab === 'variance' && (
              <div className="flex flex-col gap-8">
                {/* Single Image Visual Clarity Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-surface-container-lowest border border-hairline">
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <span className="font-mono text-[11px] text-breeze-blue uppercase font-bold tracking-wider">
                      BOARDROOM VARIANCE & STRATEGY
                    </span>
                    <h3 className="font-sans text-xl font-semibold text-ink">
                      Spot Budget Misses & Growth Engines Across Divisions Immediately
                    </h3>
                    <p className="text-xs sm:text-sm text-body-mid leading-relaxed">
                      Executive leadership needs answers, not raw tables. This cockpit compares Actual Revenue, EBITDA, and Gross Margins against budget, pairing variance bars with written executive commentary.
                    </p>
                    <ul className="space-y-1.5 text-xs text-body-text pt-1">
                      <li>• Highlights exact variance drivers by Commercial, Tech & Ops divisions</li>
                      <li>• Pinpoints regional concentration risks across AMER, EMEA & APAC</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-7">
                    <UiPreviewFrame
                      src="/images/executive-summary-bi.jpg"
                      alt="Executive Summary Group Performance & Variance Dashboard"
                      title="Executive Summary Cockpit • Actual vs Budget Variance"
                      badge="Executive BI"
                      caption="High-clarity C-suite boardroom view uniting revenue, EBITDA, headcount & risk."
                    />
                  </div>
                </div>

                {/* Executive Cockpit Header & Division/Region Selectors */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-surface-container-low border border-hairline">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs text-breeze-blue uppercase font-bold">
                      C-Suite Governance Overview
                    </span>
                    <h3 className="font-sans text-xl font-semibold text-ink">
                      Group Performance & Budget Variance Telemetry
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex items-center gap-1 bg-surface-container p-1 rounded-xl border border-hairline">
                      {['Commercial', 'Operations', 'Technology'].map((div) => (
                        <button
                          key={div}
                          onClick={() => setSelectedDivision(div)}
                          className={`px-3 py-1 rounded-lg font-mono text-xs transition-colors ${
                            selectedDivision === div
                              ? 'bg-primary text-on-primary font-bold shadow-sm'
                              : 'text-body-mid hover:text-ink'
                          }`}
                        >
                          {div}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-1 bg-surface-container p-1 rounded-xl border border-hairline">
                      {['AMER', 'APAC', 'EMEA'].map((reg) => (
                        <button
                          key={reg}
                          onClick={() => setSelectedRegion(reg)}
                          className={`px-3 py-1 rounded-lg font-mono text-xs transition-colors ${
                            selectedRegion === reg
                              ? 'bg-surface-bright text-ink font-bold shadow-sm'
                              : 'text-body-mid hover:text-ink'
                          }`}
                        >
                          {reg}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Macro Performance Monoliths */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">REVENUE</span>
                    <span className="font-sans text-2xl font-bold text-ink mt-1">$7.5B</span>
                    <span className="font-mono text-[10px] text-rose-400 mt-1">vs Bgt -$665.2M (-8.1%)</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">EBITDA</span>
                    <span className="font-sans text-2xl font-bold text-ink mt-1">$1.8B</span>
                    <span className="font-mono text-[10px] text-rose-400 mt-1">vs Bgt -$155.1M (-8.1%)</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">GROSS MARGIN</span>
                    <span className="font-sans text-2xl font-bold text-emerald-400 mt-1">49.8%</span>
                    <span className="font-mono text-[10px] text-rose-400 mt-1">vs Bgt -4.8pp (Budget: 54.7%)</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">HEADCOUNT</span>
                    <span className="font-sans text-2xl font-bold text-ink mt-1">423.4K</span>
                    <span className="font-mono text-[10px] text-emerald-400 mt-1">Controlled (+1.2%)</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between">
                    <span className="font-mono text-[10px] text-body-mid uppercase font-semibold">ACTIVE CUSTOMERS</span>
                    <span className="font-sans text-2xl font-bold text-ink mt-1">1.3M</span>
                    <span className="font-mono text-[10px] text-rose-400 mt-1">Target: 1.5M (-8.0%)</span>
                  </div>
                </div>

                {/* Division & Regional Variance Progress Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left: Division Variance */}
                  <div className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-5">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm font-semibold text-ink">
                        Revenue Variance vs Budget by Division
                      </span>
                      <span className="font-mono text-xs text-sunset-orange">SURPLUS / DEFICIT</span>
                    </div>

                    <div className="flex flex-col gap-4 font-mono text-xs">
                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-ink font-semibold">Technology</span>
                          <span className="text-emerald-400 font-bold">+$803.5M (+12.2%)</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-ink font-semibold">Operations</span>
                          <span className="text-emerald-400 font-bold">+$99.1M (+2.1%)</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-ink font-semibold">Commercial</span>
                          <span className="text-rose-400 font-bold">-$665.2M (-8.1%)</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                          <div className="h-full bg-rose-500 rounded-full" style={{ width: '45%' }}></div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-body-mid leading-relaxed pt-2 border-t border-hairline/60">
                      Commercial division shortfall driven by extended sales cycles in enterprise retail. Technology overdelivered on cloud API licensing.
                    </p>
                  </div>

                  {/* Right: Regional Variance */}
                  <div className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-5">
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-sm font-semibold text-ink">
                        Revenue Variance vs Budget by Region
                      </span>
                      <span className="font-mono text-xs text-breeze-blue">GEOGRAPHIC SPREAD</span>
                    </div>

                    <div className="flex flex-col gap-4 font-mono text-xs">
                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-ink font-semibold">AMER (Americas)</span>
                          <span className="text-emerald-400 font-bold">+$124.4M (+6.8%)</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                          <div className="h-full bg-emerald-500 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-ink font-semibold">EMEA (Europe, Middle East)</span>
                          <span className="text-rose-400 font-bold">-$206.3M (-5.6%)</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                          <div className="h-full bg-rose-500 rounded-full" style={{ width: '55%' }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-1.5">
                          <span className="text-ink font-semibold">APAC (Asia-Pacific)</span>
                          <span className="text-rose-400 font-bold">-$583.3M (-21.9%)</span>
                        </div>
                        <div className="w-full h-2.5 rounded-full bg-surface-container overflow-hidden">
                          <div className="h-full bg-rose-500 rounded-full" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-body-mid leading-relaxed pt-2 border-t border-hairline/60">
                      APAC represents the primary concentration risk for full-year targets. Automated telemetry flags immediate re-allocation of commercial accounts.
                    </p>
                  </div>
                </div>

                {/* Executive Commentary Memo Strip */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-surface-container border border-hairline text-xs">
                    <span className="font-mono text-[10px] text-sunset-orange uppercase font-bold block mb-1">
                      EXECUTIVE TAKEAWAY 01
                    </span>
                    <p className="text-body-text leading-relaxed">
                      Nexoria Group delivered $1.0B in revenue for Mar 2026, beating budget by +$12.7M (+1.3%). EBITDA and gross margins are both ahead of plan.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container border border-hairline text-xs">
                    <span className="font-mono text-[10px] text-breeze-blue uppercase font-bold block mb-1">
                      EXECUTIVE TAKEAWAY 02
                    </span>
                    <p className="text-body-text leading-relaxed">
                      Technology overdelivered +$41.5M (+12.4%) while APAC fell short by -$50.7M (-15.7%). These forces intersect directly at APAC Commercial.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container border border-hairline text-xs">
                    <span className="font-mono text-[10px] text-emerald-400 uppercase font-bold block mb-1">
                      EXECUTIVE TAKEAWAY 03
                    </span>
                    <p className="text-body-text leading-relaxed">
                      Revenue grew continuously from $926.6M in Dec '25 to $1.0B in Mar '26, representing a six-month run-rate acceleration of +8.0%.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: FINANCIAL PERFORMANCE, EBITDA & GROSS MARGIN */}
            {activeConsoleTab === 'financial' && (
              <div className="flex flex-col gap-8">
                {/* Single Image Visual Clarity Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-surface-container-lowest border border-hairline">
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <span className="font-mono text-[11px] text-sunset-orange uppercase font-bold tracking-wider">
                      CFO FINANCIAL & MARGIN CLARITY
                    </span>
                    <h3 className="font-sans text-xl font-semibold text-ink">
                      Track Actual vs Budget Revenue, EBITDA & Business Unit Profitability
                    </h3>
                    <p className="text-xs sm:text-sm text-body-mid leading-relaxed">
                      Built for founders and finance heads to spot unit margin pressure early. Compare monthly actual performance against budget across every division and geography without merging CSVs.
                    </p>
                    <ul className="space-y-1.5 text-xs text-body-text pt-1">
                      <li>• Switch KPIs seamlessly between Revenue, EBITDA & Gross Margin %</li>
                      <li>• Highlights losing business units (+13.0% Platform vs -8.9% Marketing variance)</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-7">
                    <UiPreviewFrame
                      src="/images/financial-performance-bi.jpg"
                      alt="Financial Performance Revenue EBITDA & Gross Margin Dashboard"
                      title="Financial Performance BI • Actual vs Budget & Business Unit Variance"
                      badge="Financial P&L"
                      caption="Monthly actual-vs-budget performance view for finance controllers and board reviews."
                    />
                  </div>
                </div>

                {/* Interactive KPI Mode Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-surface-container-low border border-hairline">
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-sm font-semibold text-ink">
                      Interactive P&L Variance Monitor
                    </span>
                    <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                      100% Budget Achieved
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-container p-1 rounded-xl border border-hairline">
                    {['Revenue', 'EBITDA', 'Gross Margin'].map((kpi) => (
                      <button
                        key={kpi}
                        onClick={() => setSelectedFinancialKpi(kpi)}
                        className={`px-3 py-1 rounded-lg font-mono text-xs transition-colors ${
                          selectedFinancialKpi === kpi
                            ? 'bg-primary text-on-primary font-bold shadow-sm'
                            : 'text-body-mid hover:text-ink'
                        }`}
                      >
                        {kpi}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Financial Summary Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col gap-1">
                    <span className="font-mono text-[11px] text-body-mid uppercase font-semibold">
                      {selectedFinancialKpi === 'Revenue' ? 'ACTUAL REVENUE (YTD)' : selectedFinancialKpi === 'EBITDA' ? 'ACTUAL EBITDA (YTD)' : 'BLENDED GROSS MARGIN'}
                    </span>
                    <span className="font-sans text-3xl font-bold text-ink">
                      {selectedFinancialKpi === 'Revenue' ? '$10.21B' : selectedFinancialKpi === 'EBITDA' ? '$2.48B' : '54.2%'}
                    </span>
                    <span className="font-mono text-xs text-emerald-400">
                      {selectedFinancialKpi === 'Revenue' ? '+$117.8M (+1.17% vs Budget)' : selectedFinancialKpi === 'EBITDA' ? '+$48.4M (+1.98% vs Budget)' : '+1.4pp ahead of forecast'}
                    </span>
                  </div>
                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col gap-1">
                    <span className="font-mono text-[11px] text-body-mid uppercase font-semibold">
                      TOP PERFORMING UNIT
                    </span>
                    <span className="font-sans text-3xl font-bold text-breeze-blue">Platform</span>
                    <span className="font-mono text-xs text-emerald-400">+13.0% over budget plan</span>
                  </div>
                  <div className="p-5 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col gap-1">
                    <span className="font-mono text-[11px] text-body-mid uppercase font-semibold">
                      PRIMARY FOCUS ALERT
                    </span>
                    <span className="font-sans text-3xl font-bold text-sunset-orange">APAC Region</span>
                    <span className="font-mono text-xs text-rose-400">-14.4% budget variance</span>
                  </div>
                </div>

                {/* Business Unit Variance Breakdown */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-hairline/60 pb-3">
                    <span className="font-sans text-sm font-semibold text-ink">
                      Actual vs Budget Delta by Business Unit ({selectedFinancialKpi})
                    </span>
                    <span className="font-mono text-xs text-body-mid">Annual Performance Split</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 font-mono text-xs">
                    {[
                      { unit: 'Platform Systems', delta: '+13.0%', positive: true, width: '82%' },
                      { unit: 'Data Products', delta: '+11.7%', positive: true, width: '74%' },
                      { unit: 'Delivery Services', delta: '+2.2%', positive: true, width: '35%' },
                      { unit: 'Customer Success', delta: '+1.9%', positive: true, width: '30%' },
                      { unit: 'Sales Division', delta: '-8.1%', positive: false, width: '48%' },
                      { unit: 'Marketing Spend', delta: '-8.9%', positive: false, width: '54%' }
                    ].map((row) => (
                      <div key={row.unit} className="p-3.5 rounded-xl bg-surface-container border border-hairline flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="text-ink font-semibold">{row.unit}</span>
                          <span className={row.positive ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                            {row.delta}
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-surface-container-lowest overflow-hidden">
                          <div
                            className={`h-full rounded-full ${row.positive ? 'bg-breeze-blue' : 'bg-rose-500'}`}
                            style={{ width: row.width }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: SALES PIPELINE & DEAL RISK ANALYTICS */}
            {activeConsoleTab === 'pipeline' && (
              <div className="flex flex-col gap-8">
                {/* Single Image Visual Clarity Split */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center p-5 rounded-2xl bg-surface-container-lowest border border-hairline">
                  <div className="lg:col-span-5 flex flex-col gap-3">
                    <span className="font-mono text-[11px] text-purple-400 uppercase font-bold tracking-wider">
                      REVENUE FORECAST & DEAL VELOCITY
                    </span>
                    <h3 className="font-sans text-xl font-semibold text-ink">
                      Audit Open Deals, Cycle Length & Forecast Accuracy in Real Time
                    </h3>
                    <p className="text-xs sm:text-sm text-body-mid leading-relaxed">
                      Never get blindsided by optimistic sales forecasts again. This BI model measures every stage from Lead In through Closing, isolates slow sales cycles, and tracks win/loss velocity by role and region.
                    </p>
                    <ul className="space-y-1.5 text-xs text-body-text pt-1">
                      <li>• Exposes weighted forecast value vs optimistic total pipeline</li>
                      <li>• Breaks contribution across Account Executives, Enterprise AE & CS</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-7">
                    <UiPreviewFrame
                      src="/images/sales-pipeline-analytics.jpg"
                      alt="Sales Pipeline & Deal Risk Analytics Preview"
                      title="Deal Pipeline & Risk Cockpit • Stage Velocity & Geo Contribution"
                      badge="Pipeline BI"
                      caption="Enterprise sales analytics mapping open deals, stage efficiency & regional deal density."
                    />
                  </div>
                </div>

                {/* Regional Pipeline Filter Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-surface-container-low border border-hairline">
                  <div className="flex flex-col">
                    <span className="font-sans text-sm font-semibold text-ink">
                      Pipeline Velocity & Weighted Forecast Explorer
                    </span>
                    <span className="font-mono text-[11px] text-body-mid">
                      Active Deals: 6,769 • Avg Cycle: 137.7 Days • Won: 2,999
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 bg-surface-container p-1 rounded-xl border border-hairline">
                    {['All', 'Europe', 'North America', 'Asia-Pacific', 'Latin America'].map((reg) => (
                      <button
                        key={reg}
                        onClick={() => setSelectedDealRegion(reg)}
                        className={`px-3 py-1 rounded-lg font-mono text-xs transition-colors ${
                          selectedDealRegion === reg
                            ? 'bg-purple-500/20 text-purple-300 border border-purple-400/40 font-bold'
                            : 'text-body-mid hover:text-ink'
                        }`}
                      >
                        {reg}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pipeline Stage Funnel & Region KPI */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 p-6 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col gap-4">
                    <div className="flex items-center justify-between pb-2 border-b border-hairline/60">
                      <span className="font-sans text-sm font-semibold text-ink">
                        Pipeline Stage Distribution ({selectedDealRegion})
                      </span>
                      <span className="font-mono text-xs text-purple-300 font-bold">Total: €1.02bn</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs">
                      {[
                        { stage: '01. Lead In', val: '€289.25M', share: '28%' },
                        { stage: '02. Qualified', val: '€230.11M', share: '23%' },
                        { stage: '03. Proposal', val: '€204.34M', share: '20%' },
                        { stage: '04. Negotiation', val: '€173.38M', share: '17%' },
                        { stage: '05. Contracting', val: '€82.83M', share: '8%' },
                        { stage: '06. Closing', val: '€42.79M', share: '4%' }
                      ].map((st) => (
                        <div key={st.stage} className="p-3.5 rounded-xl bg-surface-container border border-hairline flex flex-col gap-1">
                          <span className="text-[11px] text-body-mid">{st.stage}</span>
                          <span className="font-sans text-lg font-bold text-ink">{st.val}</span>
                          <span className="text-[10px] text-purple-300">{st.share} of pipeline</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col justify-between gap-4 font-mono text-xs">
                    <div>
                      <span className="text-[11px] text-body-mid uppercase font-semibold block mb-3">
                        Contribution by Sales Role
                      </span>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-ink">Account Executive</span>
                          <span className="text-purple-300 font-bold">47.78%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ink">Enterprise AE</span>
                          <span className="text-breeze-blue font-bold">28.11%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-ink">Customer Success</span>
                          <span className="text-emerald-400 font-bold">10.26%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-body-mid">Partner & Others</span>
                          <span className="text-body-mid font-bold">13.85%</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-surface-container border border-hairline">
                      <span className="text-[10px] text-sunset-orange uppercase font-bold block">
                        WEIGHTED FORECAST VALUE
                      </span>
                      <span className="font-sans text-xl font-bold text-ink block mt-0.5">
                        €429.08M
                      </span>
                      <span className="text-[11px] text-body-mid">
                        Regional Share ({selectedDealRegion}): {selectedDealRegion === 'Europe' ? '56.47%' : selectedDealRegion === 'Asia-Pacific' ? '17.06%' : selectedDealRegion === 'North America' ? '16.48%' : selectedDealRegion === 'Latin America' ? '9.99%' : '100% Global'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION: INTERACTIVE TELEMETRY HUD (SVG Sparkline Stream) */}
        {/* ========================================================= */}
        <section className="py-8 sm:py-12">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-hairline shadow-md flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-breeze-blue text-[20px]">insights</span>
                <span className="font-mono text-xs text-body-mid uppercase tracking-widest font-semibold">
                  REALTIME TELEMETRY STREAM SIMULATOR
                </span>
              </div>
              <span className="font-mono text-xs text-emerald-400">
                LIVE KERNEL TELEMETRY
              </span>
            </div>

            {/* Mode Selector Chips */}
            <div className="flex flex-wrap gap-2">
              {Object.keys(metricModes).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveMetricMode(key)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all ${
                    activeMetricMode === key
                      ? 'bg-surface-container-highest text-ink border border-pill-border font-bold shadow-sm'
                      : 'bg-surface-container text-body-mid hover:text-ink'
                  }`}
                >
                  {metricModes[key].label}
                </button>
              ))}
            </div>

            {/* Metric Display & Realtime SVG Graph */}
            <div className="bg-canvas-card border border-hairline p-6 rounded-2xl flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-breeze-blue animate-pulse"></span>
                  <span className="font-mono text-sm text-ink font-semibold">
                    {current.label}
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-surface-container text-body-mid">
                    {current.badge}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-body-mid">
                  SYNCED: 14MS AGO
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className={`font-sans text-4xl sm:text-5xl font-normal tracking-tight ${current.color}`}>
                  {current.value}
                </span>
                <span className="font-mono text-xs text-body-mid">
                  {current.period}
                </span>
                <span className="font-mono text-xs text-emerald-400 font-semibold ml-auto">
                  {current.change}
                </span>
              </div>

              {/* Dynamic SVG Sparkline */}
              <div className="w-full h-32 flex items-end pt-4">
                <svg className="w-full h-full text-breeze-blue overflow-visible" fill="none" viewBox="0 0 320 80">
                  <path
                    d={current.path}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                  ></path>
                  <path
                    d={current.fill}
                    fill="currentColor"
                    fillOpacity="0.08"
                  ></path>
                  <circle
                    className="fill-current animate-ping opacity-75"
                    cx="320"
                    cy={current.dotY}
                    r="4"
                  ></circle>
                  <circle
                    className="fill-current text-ink"
                    cx="320"
                    cy={current.dotY}
                    r="2.5"
                  ></circle>
                </svg>
              </div>

              {/* Status Grid */}
              <div className="grid grid-cols-3 gap-3 pt-3 border-t border-hairline/60">
                <div className="bg-surface-container-lowest p-3 rounded-xl flex flex-col">
                  <span className="font-mono text-[10px] text-body-mid uppercase">Silos Linked</span>
                  <span className="font-mono text-xs sm:text-sm text-ink font-bold mt-0.5">18 / 18</span>
                </div>
                <div className="bg-surface-container-lowest p-3 rounded-xl flex flex-col">
                  <span className="font-mono text-[10px] text-body-mid uppercase">Anomalies Triaged</span>
                  <span className="font-mono text-xs sm:text-sm text-sunset-orange font-bold mt-0.5">00 Pending</span>
                </div>
                <div className="bg-surface-container-lowest p-3 rounded-xl flex flex-col">
                  <span className="font-mono text-[10px] text-body-mid uppercase">Model Drift</span>
                  <span className="font-mono text-xs sm:text-sm text-breeze-blue font-bold mt-0.5">±0.002%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION: SIX ENTERPRISE TELEMETRY DISCIPLINES             */}
        {/* ========================================================= */}
        <section className="py-10 sm:py-16">
          <div className="flex flex-col mb-8">
            <span className="font-mono text-xs uppercase text-sunset-orange tracking-widest font-semibold mb-2">
              INTELLIGENCE ARCHITECTURE & BUSINESS CLARITY
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight">
              Six Enterprise Telemetry Disciplines
            </h2>
            <p className="font-sans text-sm sm:text-base text-body-mid mt-2 max-w-2xl">
              End-to-end data engineering turning scattered business tools into synchronized executive command—written clearly for founders, finance controllers, and operational leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {systems.map((sys) => (
              <div
                key={sys.id}
                className="bg-canvas-card border border-hairline p-6 rounded-2xl flex flex-col justify-between hover:border-pill-border transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="material-symbols-outlined text-[24px] text-body-mid group-hover:text-ink transition-colors">
                      {sys.icon}
                    </span>
                    <span className="font-mono text-xs text-sunset-orange font-semibold">
                      {sys.tag}
                    </span>
                  </div>
                  <h3 className="font-sans text-lg text-ink font-medium mb-2">
                    {sys.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-body-text leading-relaxed mb-4">
                    {sys.desc}
                  </p>
                  <div className="space-y-2 p-3.5 rounded-xl bg-surface-container-lowest border border-hairline/70 mb-4 text-xs">
                    <div>
                      <span className="font-mono text-[10px] text-breeze-blue uppercase font-semibold block">
                        SYSTEMS CONNECTED
                      </span>
                      <span className="text-ink leading-snug block mt-0.5">
                        {sys.sourcesUnified}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-hairline/40">
                      <span className="font-mono text-[10px] text-sunset-orange uppercase font-semibold block">
                        BUSINESS QUESTION ANSWERED
                      </span>
                      <span className="text-body-mid leading-snug block mt-0.5">
                        {sys.questionAnswered}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-hairline/60 flex flex-wrap gap-1.5">
                  {sys.tags.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full bg-surface-container-high border border-hairline font-mono text-[10px] text-body-mid"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Executive Stakeholder Clarity Breakdown */}
          <div className="bg-surface-container-lowest border border-hairline rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-md">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-4 border-b border-hairline/60">
              <div>
                <span className="font-mono text-xs text-breeze-blue uppercase tracking-wider font-semibold">
                  STAKEHOLDER CLARITY MATRIX
                </span>
                <h3 className="font-sans text-xl sm:text-2xl text-ink font-medium mt-1">
                  Exact Business Clarity Unlocked Across Your Leadership Team
                </h3>
              </div>
              <span className="font-mono text-[11px] text-emerald-400 bg-surface-container px-3 py-1 rounded-full border border-hairline shrink-0">
                Single Source of Truth • Zero Conflicting Spreadsheets
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {businessClarityRoles.map((item) => (
                <div
                  key={item.role}
                  className="p-5 rounded-2xl bg-canvas-card border border-hairline flex flex-col justify-between gap-3"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[11px] text-sunset-orange font-bold uppercase">
                      {item.role}
                    </span>
                    <p className="text-xs font-medium text-ink leading-relaxed">
                      "{item.question}"
                    </p>
                    <p className="text-xs text-body-mid leading-relaxed">
                      {item.clarityDelivered}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-hairline/50 text-[11px] font-mono text-breeze-blue">
                    Sources: {item.sourcesConnected}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION: TECH STACK PILLS & CONSULTATION CTA              */}
        {/* ========================================================= */}
        <section className="py-10 sm:py-16 bg-surface-container-lowest rounded-3xl border border-hairline p-8 sm:p-12 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-col max-w-xl">
              <span className="font-mono text-xs uppercase text-sunset-orange tracking-widest font-semibold mb-2">
                ENTERPRISE STACK
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl text-ink font-normal tracking-tight mb-3">
                Tested Across Institutional Data Warehouses
              </h2>
              <p className="text-xs sm:text-sm text-body-mid leading-relaxed mb-6">
                We engineer pipelines natively into your existing storage layers. Zero proprietary lock-in. Full ownership of your DAX semantic models, dbt repositories, and SQL transformations.
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-surface-container border border-hairline font-mono text-xs text-ink"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 p-6 rounded-2xl bg-surface-container border border-pill-border shrink-0 md:max-w-xs shadow-lg">
              <span className="font-mono text-xs text-emerald-400 uppercase font-bold">
                AUDIT GUARANTEE
              </span>
              <p className="text-xs text-ink leading-relaxed">
                We conduct an initial 3-day data silo reconnaissance audit. If we cannot identify at least ₹20L in recoverable margin leak or reporting latency, our audit is completely free.
              </p>
              <Link
                to="/contact"
                className="mt-2 w-full py-2.5 rounded-full bg-primary text-on-primary font-mono text-xs text-center font-bold uppercase tracking-wider shadow-md hover:bg-primary-fixed transition-colors"
              >
                Request Data Audit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}