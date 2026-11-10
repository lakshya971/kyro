import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AiWorkflows() {
  // Active Interactive Architecture Tab
  const [activeArchTab, setActiveArchTab] = useState('multistep');

  // Dedicated End-to-End Delivery Workflow State (n8n-inspired)
  const [activeDeliveryStep, setActiveDeliveryStep] = useState(0);

  const deliveryWorkflowNodes = [
    {
      id: 'ai-step-01',
      stage: 'STAGE 01',
      type: 'ROUTINE INGRESS',
      badgeColor: 'text-sunset-orange border-sunset-orange/30 bg-sunset-orange/10',
      icon: 'troubleshoot',
      title: 'Routine Ingestion & Friction Audit',
      subtitle: 'Capturing manual bottlenecks & repetitive tasks',
      status: 'AUDIT COMPLETE',
      latency: '0ms',
      inputData: 'Manual operational routines, document processing backlogs (invoices, PDF agreements, customer queries), and cross-tool data synchronization lag.',
      kyroProcess: '48-Hour Workflow Audit: Decomposing manual routines into deterministic state transitions, calculating hourly staffing burn, and defining tool execution endpoints.',
      businessOutput: 'Comprehensive Automation Blueprint: Isolates high-yield workflows with guaranteed 75%+ manual hours reclaimed and fixed implementation flat fees.',
      sla: '48 Hours to Formal Blueprint',
      guarantee: 'Zero fee if less than 15 productive hours/week saved.'
    },
    {
      id: 'ai-step-02',
      stage: 'STAGE 02',
      type: 'SOVEREIGN INFRA',
      badgeColor: 'text-breeze-blue border-breeze-blue/30 bg-breeze-blue/10',
      icon: 'dns',
      title: 'Air-Gapped Sovereign Cluster Setup',
      subtitle: 'Private self-hosted n8n & vector database instances',
      status: 'AIR-GAPPED READY',
      latency: '14ms',
      inputData: 'Client cloud cluster credentials (AWS / GCP / Bare Metal) and internal data compliance policies.',
      kyroProcess: 'Deploying self-hosted, private n8n node clusters and pgvector / Qdrant instances inside client VPC with zero third-party external data leaks.',
      businessOutput: '100% Data-Sovereign Environment: Credentials, API tokens, internal databases, and execution logs remain completely inside your network with ₹0 SaaS fees.',
      sla: '3-5 Business Days',
      guarantee: '100% data sovereignty. Zero data used for public LLM training.'
    },
    {
      id: 'ai-step-03',
      stage: 'STAGE 03',
      type: 'AGENT PROTOCOL',
      badgeColor: 'text-purple-400 border-purple-500/30 bg-purple-500/10',
      icon: 'smart_toy',
      title: 'Multi-Agent DAG & Grammar Binding',
      subtitle: 'Self-healing orchestrator with JSON grammar guards',
      status: '99.4% BENCHMARK',
      latency: '34ms',
      inputData: 'Target business software endpoints: SAP, Salesforce, PostgreSQL, WhatsApp API, Slack, Stripe.',
      kyroProcess: 'Engineering autonomous multi-agent state machines with strict JSON schema validation, sandboxed Python/JS execution, and deterministic consensus voting on critical actions.',
      businessOutput: 'Self-healing multi-agent DAGs that execute complex business goals, handle tool-calling errors gracefully, and enforce zero-hallucination boundaries.',
      sla: '7-10 Business Days',
      guarantee: '99.4% deterministic benchmark across 1,200+ test sessions.'
    },
    {
      id: 'ai-step-04',
      stage: 'STAGE 04',
      type: 'RAG GROUNDING',
      badgeColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      icon: 'dataset',
      title: 'Hybrid Vector RAG & Policy Grounding',
      subtitle: 'Dense embeddings + BM25 keyword search indices',
      status: 'ZERO DRIFT PASS',
      latency: '18ms',
      inputData: 'Proprietary enterprise SOPs, technical documents, company policies, and historical customer interactions.',
      kyroProcess: 'Ingesting and indexing documentation into hybrid dense vector + sparse keyword search spaces with cross-encoder reranking and source citation enforcement.',
      businessOutput: 'Grounded enterprise intelligence layer delivering audited markdown source citations with 0% fabricated answers.',
      sla: '3 Business Days',
      guarantee: '100% sourced citations with strict hallucination boundaries.'
    },
    {
      id: 'ai-step-05',
      stage: 'STAGE 05',
      type: 'AUTONOMOUS HANDOVER',
      badgeColor: 'text-sunset-orange border-sunset-orange/30 bg-sunset-orange/10',
      icon: 'bolt',
      title: 'Production Launch & Monitored Autonomy',
      subtitle: '24/7 self-healing runtime with exception dead-letters',
      status: '24/7 ACTIVE',
      latency: '12ms',
      inputData: 'Live production transactions, inbound webhooks, and customer communication channels.',
      kyroProcess: 'Gradual production rollout with dead-letter queue exception traps, automated Slack/WhatsApp failure alerts, and automated transactional rollback protection.',
      businessOutput: 'Autonomous production engine running 24/7, reclaiming 120+ hours monthly, complete operator runbooks, staff training workshops, and 90-Day SLA maintenance warranty.',
      sla: 'Continuous 24/7 Autonomy',
      guarantee: '90-Day Production SLA & Free Pipeline Monitoring.'
    }
  ];

  // Live Agent Stream Simulation
  const [streamIndex, setStreamIndex] = useState(0);
  const [streamLogs] = useState([
    'ToolCall: query_erp_inventory — Status: OK, Latency: 42ms',
    'AgentReflect: Evaluating delta vs safety constraints (99.4%)',
    'Dispatching self-healing workflow node via n8n orchestrator...',
    'RAG Retrieval: Grounded vector query over 42k enterprise docs — Score: 0.988',
    'Multi-agent consensus achieved. Submitting transaction receipt to ledger.'
  ]);

  // Tab 1: Interactive Multi-Step Pipeline State (Inspired by n8n multi-step reference)
  const [activeStep, setActiveStep] = useState(0);
  const workflowSteps = [
    {
      id: 'step-webhook',
      name: 'Webhook Ingress',
      icon: 'webhook',
      badge: 'TRIGGER',
      desc: 'Instant HTTP POST listener catching inbound payload from CRM, Stripe, or web forms in under 14ms.',
      samplePayload: '{\n  "event": "lead.qualified",\n  "company": "Apex Dynamics",\n  "tier": "enterprise"\n}'
    },
    {
      id: 'step-set',
      name: 'Set & Normalize',
      icon: 'edit_note',
      badge: 'TRANSFORM',
      desc: 'Custom in-memory JavaScript node reshaping and validating fields against strict Zod/Pydantic schemas.',
      samplePayload: '{\n  "accountId": "ACC-90412",\n  "sanitizedEmail": "contact@apex.in",\n  "normalized": true\n}'
    },
    {
      id: 'step-sheets',
      name: 'Sheets / Database',
      icon: 'table_view',
      badge: 'PERSISTENCE',
      desc: 'Synchronous atomic mutation into PostgreSQL or Google Sheets ledger with automated duplicate prevention.',
      samplePayload: '{\n  "status": "INSERTED",\n  "rowId": 8421,\n  "table": "enterprise_inbound"\n}'
    },
    {
      id: 'step-slack',
      name: 'Slack Notification',
      icon: 'forum',
      badge: 'ALERT',
      desc: 'Rich interactive block message dispatched to dedicated account executive channel with 1-click action buttons.',
      samplePayload: '{\n  "channel": "#deal-alerts",\n  "dispatched": "200 OK",\n  "latency": "38ms"\n}'
    },
    {
      id: 'step-email',
      name: 'Send Email',
      icon: 'mail',
      badge: 'DISPATCH',
      desc: 'Personalized transactional confirmation email triggered via SendGrid / Resend with audit tracking hash.',
      samplePayload: '{\n  "messageId": "msg_01h89x",\n  "delivery": "DELIVERED",\n  "openTracking": true\n}'
    }
  ];

  // Tab 2: Complex DAG State (Inspired by n8n enterprise pipeline reference)
  const [selectedDagNode, setSelectedDagNode] = useState('validate');
  const dagNodes = {
    form: {
      title: 'Farmer Registration Form (Webhook)',
      type: 'Ingress Webhook',
      status: '200 OK (8ms)',
      desc: 'Listens for verified identity registrations. Captures identity credentials, GPS polygon coordinates, and bank details.',
      outbound: 'Validate Farmer Data',
      icon: 'contact_page'
    },
    validate: {
      title: 'Validate Farmer Data (In-Memory JS)',
      type: 'Schema Sanitizer',
      status: 'Deterministic Pass (12ms)',
      desc: 'Validates government tax IDs, mobile hashes, and crop profiles. Rejects non-conformant payloads before DB hits.',
      outbound: 'Check Existing Farmer',
      icon: 'fact_check'
    },
    check_db: {
      title: 'Check Existing Farmer (PostgreSQL)',
      type: 'Relational Query',
      status: 'Query Executed (18ms)',
      desc: 'Runs parameterized index lookup on primary cluster. Checks active registration status, duplicate accounts, and KYC tier.',
      outbound: 'Determine Registration Type',
      icon: 'database'
    },
    branch: {
      title: 'Determine Registration Type (Conditional Router)',
      type: 'Logic Router',
      status: 'Branch Evaluated (2ms)',
      desc: 'Evaluates boolean flag. If new entity: routes to LLM Welcome + DB Insert. If existing entity: routes to Profile Update & Link Channel.',
      outbound: 'Generate Welcome Message OR Update Profile',
      icon: 'alt_route'
    },
    llm_welcome: {
      title: 'Generate Welcome Message (Self-Hosted LLM)',
      type: 'Grounded LLM Agent',
      status: 'Inference 184ms',
      desc: 'Generates localized vernacular onboarding instructions personalized to farmer crop calendar and regional water tables.',
      outbound: 'Create New Farmer & Return Response',
      icon: 'neurology'
    }
  };

  // Tab 3: Visual Canvas Palette State (Inspired by n8n workflow canvas reference)
  const [selectedPaletteCategory, setSelectedPaletteCategory] = useState('ai');
  const [searchPaletteQuery, setSearchPaletteQuery] = useState('');
  const paletteCategories = {
    ai: {
      label: 'Advanced AI',
      icon: 'smart_toy',
      items: [
        { name: 'AI Autonomous Agent', desc: 'Reasoning loop with dynamic tool calling', latency: '42ms' },
        { name: 'Vector Store (pgvector / Qdrant)', desc: 'Hybrid dense + BM25 search index', latency: '18ms' },
        { name: 'Document Summarizer & OCR', desc: 'Multi-lingual document parser', latency: '120ms' },
        { name: 'Semantic Output Validator', desc: 'Zod JSON schema enforcement', latency: '6ms' }
      ]
    },
    app: {
      label: 'Action in an App',
      icon: 'apps',
      items: [
        { name: 'PostgreSQL / Supabase', desc: 'Execute prepared queries & migrations', latency: '14ms' },
        { name: 'Google Sheets / Drive', desc: 'Append rows, create sheets, backup data', latency: '35ms' },
        { name: 'Slack / Telegram / WhatsApp', desc: 'Dispatch rich interactive alert cards', latency: '28ms' },
        { name: 'Stripe / Razorpay Billing', desc: 'Listen to invoice payments & webhooks', latency: '19ms' }
      ]
    },
    transform: {
      label: 'Data Transformation',
      icon: 'transform',
      items: [
        { name: 'Code (JS / Python Sandbox)', desc: 'High-speed in-memory data manipulation', latency: '8ms' },
        { name: 'Edit Fields (Set)', desc: 'Map, sanitize, and cast payload values', latency: '2ms' },
        { name: 'Item Lists (Aggregate / Split)', desc: 'Batch array processing & chunking', latency: '11ms' }
      ]
    },
    flow: {
      label: 'Flow & Branching',
      icon: 'alt_route',
      items: [
        { name: 'IF / Switch Router', desc: 'Multi-path conditional evaluation', latency: '3ms' },
        { name: 'Loop On Items', desc: 'Iterate over records with concurrency control', latency: '15ms' },
        { name: 'Merge & Consensus', desc: 'Wait for parallel branches to converge', latency: '7ms' }
      ]
    },
    core: {
      label: 'Core & Triggers',
      icon: 'hub',
      items: [
        { name: 'HTTP Webhook Trigger', desc: 'Catch incoming JSON payloads instantly', latency: '1ms' },
        { name: 'Cron Schedule Trigger', desc: 'Precise interval-based executions', latency: '1ms' },
        { name: 'Error Trigger (Dead-letter)', desc: 'Automated self-healing failure recovery', latency: '4ms' }
      ]
    }
  };

  // Tab 4: Agent Orchestration Swarm State (Inspired by Claude Code agent dashboard reference)
  const subagentRoles = [
    { name: 'General-Purpose', count: 50, color: 'border-emerald-500/40 text-emerald-400 bg-emerald-950/30', desc: 'Task coordination, planning, and goal decomposition' },
    { name: 'Documentation', count: 50, color: 'border-breeze-blue/40 text-breeze-blue bg-blue-950/30', desc: 'Codebase indexing, docstring verification, and API reference synthesis' },
    { name: 'Explore & Recon', count: 45, color: 'border-sunset-orange/40 text-sunset-orange bg-orange-950/30', desc: 'Codebase symbol graph traversal and dependency resolution' },
    { name: 'Technical-Research', count: 22, color: 'border-dusk-purple/40 text-dusk-purple bg-purple-950/30', desc: 'Grounded vector retrieval across proprietary docs and RFCs' },
    { name: 'DevOps & Tool Runner', count: 10, color: 'border-emerald-400/40 text-emerald-300 bg-emerald-950/30', desc: 'Sandboxed bash execution, container restarts, and test runner' },
    { name: 'Compaction Engine', count: 7, color: 'border-cyan-400/40 text-cyan-300 bg-cyan-950/30', desc: 'Token pruning and lossless context compression prevents overflow' }
  ];

  // Tab 5: Interactive Conversational AI Support Sandbox State (Inspired by Horizon reference)
  const [chatMessages, setChatMessages] = useState([
    {
      role: 'user',
      text: 'What is KYRO and what automation do you engineer?'
    },
    {
      role: 'assistant',
      text: 'KYRO is a frontier technological laboratory. We engineer autonomous multi-agent systems, air-gapped n8n pipelines, and high-clarity data architectures that replace manual routines with deterministic commercial advantage.'
    },
    {
      role: 'user',
      text: 'How do your AI agents eliminate hallucinations?'
    },
    {
      role: 'assistant',
      text: 'We utilize strict hybrid vector RAG (dense + BM25 keyword search), formal JSON grammar validation, sandboxed execution runtimes, and multi-agent consensus voting before committing mutations.'
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedPrompts = [
    'How does KYRO deploy air-gapped n8n workflows?',
    'What is the typical deployment timeline for an autonomous agent?',
    'Can KYRO agents integrate directly with SAP or PostgreSQL?'
  ];

  const handleSendPrompt = (promptText) => {
    if (!promptText.trim()) return;
    const userMsg = { role: 'user', text: promptText };
    setChatMessages((prev) => [...prev, userMsg]);
    setChatInput('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = '';
      const lower = promptText.toLowerCase();
      if (lower.includes('n8n') || lower.includes('air-gapped')) {
        reply =
          'We deploy self-hosted n8n instances on sovereign client clusters (Docker/Kubernetes). All webhooks, database credentials, and execution logs remain 100% inside your network boundary with ₹0 recurring third-party SaaS fees.';
      } else if (lower.includes('timeline') || lower.includes('deployment')) {
        reply =
          'Standard deterministic n8n workflows deploy in 5-7 business days. Complex multi-agent swarms with custom tool contracts deploy in 10-14 days under strict milestone SLAs.';
      } else if (lower.includes('sap') || lower.includes('postgresql') || lower.includes('database')) {
        reply =
          'Yes. We build native REST/GraphQL bridges, Kafka stream taps, and direct relational database drivers with transaction rollback protection for zero data loss.';
      } else {
        reply =
          'Our autonomous pipelines map your existing friction points into formal state machines. Every tool call and external webhook is logged with sub-second auditability.';
      }
      setChatMessages((prev) => [...prev, { role: 'assistant', text: reply }]);
      setIsTyping(false);
    }, 600);
  };

  // Interactive ROI Calculator State
  const [teamSize, setTeamSize] = useState(15);
  const [hoursPerWeek, setHoursPerWeek] = useState(8);
  const hourlyRateINR = 850;
  const totalHoursSavedMonthly = teamSize * hoursPerWeek * 4 * 0.75;
  const monthlyCostSavedINR = Math.round(totalHoursSavedMonthly * hourlyRateINR);

  // Auto-stream logs rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setStreamIndex((prev) => (prev + 1) % streamLogs.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [streamLogs.length]);

  const capabilities = [
    {
      id: '01',
      title: 'AI-Powered Business Automation',
      icon: 'psychology',
      desc: 'Deterministic business tasks delegated to neural pipelines. High-throughput ingestion, categorization, and validation without human intervention.',
      metric: '85% Manual Drop'
    },
    {
      id: '02',
      title: 'Agentic AI & Autonomous Workflows',
      icon: 'smart_toy',
      desc: 'Multi-agent swarms with goal seeking, runtime error recovery, external tool execution, and deterministic consensus voting on critical actions.',
      metric: 'Self-Correcting DAG'
    },
    {
      id: '03',
      title: 'Grounded Enterprise RAG Systems',
      icon: 'dataset',
      desc: 'Strict hybrid vector + sparse keyword search over enterprise knowledge bases with strict markdown citations and zero hallucination boundaries.',
      metric: '100% Sourced Citations'
    },
    {
      id: '04',
      title: 'Self-Hosted n8n Orchestrations',
      icon: 'hub',
      desc: 'Air-gapped, sovereign webhook pipelines connecting internal databases, payment gateways, CRM events, and alerting channels without data leakage.',
      metric: '100% Data Sovereignty'
    },
    {
      id: '05',
      title: 'Intelligent Document Processing & OCR',
      icon: 'description',
      desc: 'Automated invoice parsing, unstructured legal document synthesis, table extraction, and structured JSON output mapping with 99.7% field fidelity.',
      metric: 'Sub-second Parsing'
    },
    {
      id: '06',
      title: 'Multi-App API Semantic Bridges',
      icon: 'sync_alt',
      desc: 'Unified semantic bridges connecting SAP, Salesforce, custom PostgreSQL stores, WhatsApp Business API, Slack channels, and payment pipelines.',
      metric: 'Zero Manual Sync'
    }
  ];

  const currentDeliveryNode = deliveryWorkflowNodes[activeDeliveryStep];

  return (
    <main className="flex flex-col relative w-full pt-16 pb-20 bg-surface min-h-screen text-body-text">
      {/* Top Breadcrumb & Status */}
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-2 bg-surface-container-lowest border-b border-hairline/60">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-sunset-orange animate-pulse"></span>
          <span className="font-mono text-[11px] sm:text-xs text-body-mid uppercase tracking-wider">
            KYRO • AGENTIC LABS & AUTOMATION • 02
          </span>
        </div>
        <span className="font-mono text-[11px] text-emerald-400 font-semibold">
          STATE: SYNTHESIZING • 99.4% BENCHMARK
        </span>
      </div>

      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col pt-10 sm:pt-16 pb-10 sm:pb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
              SERVICE CAPABILITY 02
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl lg:text-6xl text-ink font-normal tracking-tight leading-[1.12] mb-5 max-w-4xl">
            Autonomous Agentic AI & Enterprise Automation
          </h1>

          <p className="font-sans text-base sm:text-lg text-body-mid leading-relaxed mb-8 max-w-3xl">
            At <strong className="text-ink font-semibold">KYRO</strong>, we architect high-integrity agentic swarms, deterministic n8n pipelines, and self-hosted automation infrastructure engineered for institutional precision, zero hallucination, and direct operational velocity.
          </p>

          {/* Operational Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-canvas-card border border-hairline p-5 rounded-2xl shadow-sm">
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-ink font-normal tracking-tight">
                99.4%
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                Agent Success Rate
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-breeze-blue font-normal tracking-tight">
                -84.2%
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                Manual Latency Drop
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-sunset-orange font-normal tracking-tight">
                Zero
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                Hallucination Guardrail
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-2xl sm:text-3xl text-ink font-normal tracking-tight">
                100%
              </span>
              <span className="font-mono text-[10px] sm:text-xs text-body-mid uppercase mt-1">
                Data Sovereignty (Air-Gapped)
              </span>
            </div>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="#ai-delivery-workflow"
              className="inline-flex items-center justify-center gap-1.5 h-11 px-6 rounded-full bg-surface-container-high border border-pill-border text-ink hover:bg-surface-bright font-mono text-xs transition-all shadow-sm"
            >
              <span>View Client Delivery Process Workflow</span>
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>
            <a
              href="#ai-workflow-cockpit"
              className="inline-flex items-center justify-center gap-1.5 h-11 px-6 rounded-full bg-surface-container-low border border-hairline text-body-mid hover:text-ink font-mono text-xs transition-all shadow-sm"
            >
              <span>Test Interactive Automation Engine</span>
              <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-on-primary hover:bg-primary-fixed font-mono text-xs font-semibold transition-all shadow-md"
            >
              Request Automation Audit
            </Link>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTION: N8N-INSPIRED CLIENT PROCESS WORKFLOW             */}
        {/* (How organizations & businesses get output from KYRO)     */}
        {/* ========================================================= */}
        <section id="ai-delivery-workflow" className="py-10 sm:py-16 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sunset-orange animate-pulse"></span>
                <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
                  END-TO-END AUTOMATION DELIVERY WORKFLOW
                </span>
              </div>
              <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight">
                How Your Organization Receives Autonomous AI Systems
              </h2>
              <p className="font-sans text-sm text-body-mid mt-1 max-w-2xl leading-relaxed">
                An n8n-inspired visual state machine illustrating how manual operational friction is transformed into 24/7 monitored autonomy. Step through each node to see concrete inputs, transformation logic, and deliverables.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono bg-surface-container-low px-4 py-2 rounded-full border border-hairline shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>ZERO VENDOR LOCK-IN • ₹0 SAAS FEES</span>
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
                  KYRO_AI_ORCHESTRATION_PIPELINE.DAG
                </span>
                <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                  STATE: ACTIVE • 14MS
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
        {/* SECTION: NATIVE AI ARCHITECTURE & WORKFLOW COCKPIT        */}
        {/* (Built with deep detailing inspired by reference UIs)     */}
        {/* ========================================================= */}
        <section id="ai-workflow-cockpit" className="py-10 sm:py-16 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sunset-orange animate-pulse"></span>
                <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
                  DEPLOYED WORKFLOW & AGENT SYSTEMS
                </span>
              </div>
              <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight">
                Interactive Automation & Agentic Engine
              </h2>
              <p className="font-sans text-sm text-body-mid mt-1 max-w-xl">
                Test and inspect KYRO's native workflow engines. Switch between multi-step pipelines, complex enterprise DAG state machines, node palettes, agent swarm topologies, and conversational AI sandboxes.
              </p>
            </div>
            <span className="font-mono text-xs text-emerald-400 bg-surface-container-low px-3 py-1.5 rounded-full border border-hairline shrink-0">
              REALTIME DAG VERIFICATION: PASS
            </span>
          </div>

          {/* Workflow View Switcher Tabs */}
          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-3 mb-6 border-b border-hairline/60">
            {[
              { id: 'multistep', label: 'Multi-Step Pipeline Builder' },
              { id: 'enterprise-dag', label: 'Complex Enterprise DAG' },
              { id: 'visual-canvas', label: 'Node Ecosystem & Palette' },
              { id: 'agent-swarm', label: 'Agent Swarm Topology' },
              { id: 'conversational-ai', label: 'Conversational AI Sandbox' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveArchTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeArchTab === tab.id
                    ? 'bg-surface-container-high border border-pill-border text-ink font-bold shadow-md'
                    : 'bg-surface-container-low border border-hairline text-body-mid hover:text-ink hover:bg-surface-container'
                }`}
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Active Workflow Panel Container */}
          <div className="bg-canvas-card border border-hairline rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col gap-8 transition-all">

            {/* VIEW 1: MULTI-STEP PIPELINE BUILDER */}
            {activeArchTab === 'multistep' && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-hairline/60">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-sunset-orange uppercase font-bold">
                      DETERMINISTIC STATE CHAIN
                    </span>
                    <h3 className="font-sans text-2xl font-semibold text-ink">
                      Building Multi-Step Workflows with Zero-Loss Logic
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-body-mid">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>400+ Native Connectors Supported</span>
                  </div>
                </div>

                {/* Step Chain Interactive Graph */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {workflowSteps.map((step, sIdx) => {
                    const isActive = activeStep === sIdx;
                    return (
                      <div
                        key={step.id}
                        onClick={() => setActiveStep(sIdx)}
                        className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between gap-3 ${
                          isActive
                            ? 'bg-surface-container-high border-sunset-orange text-ink shadow-lg scale-[1.02]'
                            : 'bg-surface-container-low border-hairline text-body-text hover:bg-surface-container hover:border-pill-border'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="material-symbols-outlined text-[24px] text-sunset-orange">
                            {step.icon}
                          </span>
                          <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-surface-container font-bold text-body-mid">
                            {step.badge}
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-mono text-[10px] text-body-mid font-semibold">
                            STAGE 0{sIdx + 1}
                          </span>
                          <span className="font-sans text-sm font-semibold text-ink mt-0.5">
                            {step.name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[11px] font-mono text-breeze-blue">
                          <span>Inspect Node</span>
                          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Active Step Payload & Execution Inspector */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-surface-container-lowest p-6 rounded-2xl border border-hairline">
                  <div className="flex flex-col justify-between gap-4">
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-sunset-orange font-bold uppercase">
                          STAGE 0{activeStep + 1} — {workflowSteps[activeStep].name}
                        </span>
                        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                          DETERMINISTIC • PASS
                        </span>
                      </div>
                      <h4 className="font-sans text-xl text-ink font-medium">
                        {workflowSteps[activeStep].name} Execution Contract
                      </h4>
                      <p className="text-xs sm:text-sm text-body-text leading-relaxed">
                        {workflowSteps[activeStep].desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-body-mid pt-3 border-t border-hairline/60">
                      <span>EXECUTION: 14MS</span>
                      <span>IDEMPOTENCY: GUARANTEED</span>
                      <span>RETRY: EXPONENTIAL</span>
                    </div>
                  </div>

                  <div className="flex flex-col bg-surface-container-low rounded-xl border border-hairline overflow-hidden">
                    <div className="px-4 py-2 bg-surface-container border-b border-hairline flex items-center justify-between text-[11px] font-mono text-body-mid">
                      <span>RUNTIME PAYLOAD SCHEMA</span>
                      <span className="text-sunset-orange">JSON VALIDATED</span>
                    </div>
                    <pre className="p-4 font-mono text-xs text-breeze-blue overflow-x-auto leading-relaxed">
                      {workflowSteps[activeStep].samplePayload}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 2: COMPLEX ENTERPRISE DAG ORCHESTRATION */}
            {activeArchTab === 'enterprise-dag' && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-hairline/60">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-breeze-blue uppercase font-bold">
                      MULTI-BRANCH STATE MACHINE
                    </span>
                    <h3 className="font-sans text-2xl font-semibold text-ink">
                      Admin Registration & Verification Pipeline
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-body-mid bg-surface-container px-3 py-1 rounded-full border border-hairline">
                    Conditional Branching: IF/ELSE + Database Check
                  </span>
                </div>

                {/* Node Selector Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                  {Object.keys(dagNodes).map((nodeKey, nIdx) => {
                    const node = dagNodes[nodeKey];
                    const isSelected = selectedDagNode === nodeKey;
                    return (
                      <button
                        key={nodeKey}
                        onClick={() => setSelectedDagNode(nodeKey)}
                        className={`p-4 rounded-2xl border text-left flex flex-col justify-between gap-2 transition-all ${
                          isSelected
                            ? 'bg-surface-container-high border-breeze-blue text-ink shadow-lg scale-[1.02]'
                            : 'bg-surface-container-low border-hairline text-body-text hover:bg-surface-container'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] text-body-mid uppercase font-bold">
                            NODE 0{nIdx + 1}
                          </span>
                          <span className="material-symbols-outlined text-[18px] text-breeze-blue">
                            {node.icon}
                          </span>
                        </div>
                        <span className="font-sans text-xs font-semibold text-ink line-clamp-1">
                          {node.title.split('(')[0]}
                        </span>
                        <span className="font-mono text-[10px] text-breeze-blue">
                          {node.type}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Node Detail Box */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-breeze-blue font-bold uppercase">
                        {dagNodes[selectedDagNode].title}
                      </span>
                      <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                        {dagNodes[selectedDagNode].status}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-body-text leading-relaxed max-w-3xl">
                      {dagNodes[selectedDagNode].desc}
                    </p>
                  </div>
                  <div className="flex flex-col shrink-0 text-xs font-mono text-body-mid border-l-0 md:border-l border-hairline md:pl-6">
                    <span className="text-[10px] text-sunset-orange uppercase font-bold">NEXT TRANSITION</span>
                    <span className="text-ink font-semibold">{dagNodes[selectedDagNode].outbound}</span>
                  </div>
                </div>

                {/* Flow Graph Representation */}
                <div className="p-5 rounded-2xl bg-surface-container-low border border-hairline flex flex-col gap-4">
                  <span className="font-mono text-xs text-body-mid uppercase font-semibold">
                    Visual DAG State Flow Map
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-mono">
                    <span className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-ink border border-hairline font-bold">
                      1. Form Ingress
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-sunset-orange">arrow_forward</span>
                    <span className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-ink border border-hairline font-bold">
                      2. Validate Data
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-sunset-orange">arrow_forward</span>
                    <span className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-ink border border-hairline font-bold">
                      3. DB Check
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-sunset-orange">arrow_forward</span>
                    <span className="px-3 py-1.5 rounded-lg bg-breeze-blue/20 text-breeze-blue border border-breeze-blue/40 font-bold">
                      4. Determine Type (IF/ELSE)
                    </span>
                    <span className="material-symbols-outlined text-[16px] text-sunset-orange">arrow_forward</span>
                    <span className="px-3 py-1.5 rounded-lg bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 font-bold">
                      5. LLM Welcome & Multi-Channel Response
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 3: NODE ECOSYSTEM & PALETTE SIMULATOR */}
            {activeArchTab === 'visual-canvas' && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-hairline/60">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-emerald-400 uppercase font-bold">
                      NODE ECOSYSTEM & PALETTE
                    </span>
                    <h3 className="font-sans text-2xl font-semibold text-ink">
                      "What Happens Next?" Palette Simulator
                    </h3>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      value={searchPaletteQuery}
                      onChange={(e) => setSearchPaletteQuery(e.target.value)}
                      placeholder="Search nodes..."
                      className="px-3 py-1.5 rounded-xl bg-surface-container text-ink font-mono text-xs border border-hairline outline-none focus:border-emerald-400"
                    />
                  </div>
                </div>

                {/* Category Switcher */}
                <div className="flex flex-wrap gap-2">
                  {Object.keys(paletteCategories).map((catKey) => {
                    const cat = paletteCategories[catKey];
                    const isCatSelected = selectedPaletteCategory === catKey;
                    return (
                      <button
                        key={catKey}
                        onClick={() => setSelectedPaletteCategory(catKey)}
                        className={`px-4 py-2 rounded-xl font-mono text-xs flex items-center gap-2 transition-all ${
                          isCatSelected
                            ? 'bg-surface-container-high border border-pill-border text-ink font-bold shadow-sm'
                            : 'bg-surface-container-low border border-hairline text-body-mid hover:text-ink'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px] text-sunset-orange">
                          {cat.icon}
                        </span>
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Palette Items Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {paletteCategories[selectedPaletteCategory].items
                    .filter((item) => item.name.toLowerCase().includes(searchPaletteQuery.toLowerCase()))
                    .map((item, itmIdx) => (
                      <div
                        key={itmIdx}
                        className="bg-surface-container-lowest border border-hairline p-5 rounded-2xl flex flex-col justify-between gap-3 hover:border-pill-border transition-all shadow-sm"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-sans text-sm font-semibold text-ink">
                            {item.name}
                          </span>
                          <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded">
                            {item.latency}
                          </span>
                        </div>
                        <p className="text-xs text-body-mid leading-relaxed">
                          {item.desc}
                        </p>
                        <div className="pt-2 border-t border-hairline/60 flex items-center justify-between text-[11px] font-mono text-breeze-blue">
                          <span>Ready for Ingestion</span>
                          <span>+ Add to Graph</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* VIEW 4: AGENT SWARM TOPOLOGY & TELEMETRY */}
            {activeArchTab === 'agent-swarm' && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-hairline/60">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-dusk-purple uppercase font-bold">
                      AGENTIC SWARM INTELLIGENCE
                    </span>
                    <h3 className="font-sans text-2xl font-semibold text-ink">
                      Subagent Swarm Topology & Execution Benchmark
                    </h3>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-emerald-400 font-bold bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full">
                      SUCCESS RATE: 99.4%
                    </span>
                  </div>
                </div>

                {/* Subagent Roles Matrix */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {subagentRoles.map((role, rIdx) => (
                    <div
                      key={rIdx}
                      className={`p-3.5 rounded-xl border flex flex-col justify-between gap-2 ${role.color}`}
                    >
                      <span className="font-mono text-[10px] uppercase font-bold">
                        {role.name}
                      </span>
                      <span className="font-sans text-2xl font-bold">
                        {role.count} Units
                      </span>
                      <p className="text-[10px] text-body-mid leading-tight line-clamp-2">
                        {role.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Sankey Flow Representation */}
                <div className="p-6 rounded-2xl bg-surface-container-lowest border border-hairline flex flex-col gap-5 shadow-sm">
                  <span className="font-mono text-xs text-body-mid uppercase font-semibold">
                    Sankey Orchestration Graph Breakdown
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
                    <div className="p-4 rounded-xl bg-surface-container border border-hairline flex flex-col justify-between">
                      <span className="text-body-mid text-[10px] uppercase">ORIGIN</span>
                      <span className="text-ink font-sans text-2xl font-bold mt-1">920 Sessions</span>
                      <span className="text-body-mid text-[11px] mt-1">Inbound tasks</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container border border-hairline flex flex-col justify-between">
                      <span className="text-body-mid text-[10px] uppercase">MAIN AGENT</span>
                      <span className="text-breeze-blue font-sans text-2xl font-bold mt-1">920 Dispatch</span>
                      <span className="text-body-mid text-[11px] mt-1">Reasoning core</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container border border-hairline flex flex-col justify-between">
                      <span className="text-body-mid text-[10px] uppercase">SUBAGENTS</span>
                      <span className="text-sunset-orange font-sans text-2xl font-bold mt-1">7+ Roles</span>
                      <span className="text-body-mid text-[11px] mt-1">Specialized swarms</span>
                    </div>

                    <div className="p-4 rounded-xl bg-surface-container border border-hairline flex flex-col justify-between">
                      <span className="text-body-mid text-[10px] uppercase">OUTCOMES</span>
                      <span className="text-emerald-400 font-sans text-2xl font-bold mt-1">1,200+ Done</span>
                      <span className="text-rose-400 text-[11px] mt-1">Only 7 errors (99.4%)</span>
                    </div>
                  </div>
                </div>

                {/* Continuous Execution Monoliths */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-surface-container-low p-5 rounded-2xl border border-hairline text-xs font-mono">
                  <div>
                    <span className="text-body-mid block text-[10px] uppercase">AVG CONTINUOUS AUTONOMY</span>
                    <span className="text-ink font-sans text-xl font-bold">6h 21m</span>
                    <span className="text-body-mid block text-[10px]">Zero supervisor drop</span>
                  </div>
                  <div>
                    <span className="text-body-mid block text-[10px] uppercase">MOST COMMON FLOW</span>
                    <span className="text-breeze-blue font-sans text-xl font-bold">Bash to Edit</span>
                    <span className="text-body-mid block text-[10px]">Deterministic tool chain</span>
                  </div>
                  <div>
                    <span className="text-body-mid block text-[10px] uppercase">CONTEXT COMPACTION</span>
                    <span className="text-sunset-orange font-sans text-xl font-bold">Zero Loss</span>
                    <span className="text-body-mid block text-[10px]">Prevents context drift</span>
                  </div>
                  <div>
                    <span className="text-body-mid block text-[10px] uppercase">TRANSACTION RECOVERY</span>
                    <span className="text-emerald-400 font-sans text-xl font-bold">Automated</span>
                    <span className="text-body-mid block text-[10px]">Sub-second self heal</span>
                  </div>
                </div>
              </div>
            )}

            {/* VIEW 5: CONVERSATIONAL AI SANDBOX */}
            {activeArchTab === 'conversational-ai' && (
              <div className="flex flex-col gap-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-hairline/60">
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-pink-400 uppercase font-bold">
                      CONVERSATIONAL INTELLIGENCE SUITE
                    </span>
                    <h3 className="font-sans text-2xl font-semibold text-ink">
                      Solve Customer Queries, Intelligently.
                    </h3>
                  </div>
                  <span className="font-mono text-xs text-body-mid">
                    Grounded RAG • Vector Index Active
                  </span>
                </div>

                {/* Live Chat Simulator Box */}
                <div className="w-full max-w-3xl mx-auto flex flex-col bg-surface-container-low border border-hairline rounded-2xl shadow-xl overflow-hidden">
                  <div className="p-4 bg-surface-container border-b border-hairline flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="font-sans text-sm font-semibold text-ink">
                        KYRO Grounded Knowledge Assistant
                      </span>
                      <span className="font-mono text-[10px] text-body-mid bg-surface-container-highest px-2 py-0.5 rounded">
                        RAG ACTIVE
                      </span>
                    </div>
                    <span className="font-mono text-xs text-breeze-blue">
                      LATENCY: 42MS
                    </span>
                  </div>

                  <div className="p-5 flex flex-col gap-4 max-h-[320px] overflow-y-auto font-sans text-sm">
                    {chatMessages.map((msg, mIdx) => (
                      <div
                        key={mIdx}
                        className={`flex flex-col ${
                          msg.role === 'user' ? 'items-end' : 'items-start'
                        }`}
                      >
                        <div
                          className={`max-w-[85%] sm:max-w-[75%] p-4 rounded-2xl leading-relaxed ${
                            msg.role === 'user'
                              ? 'bg-primary text-on-primary font-medium rounded-br-none shadow-md'
                              : 'bg-surface-container-lowest border border-hairline text-ink rounded-bl-none shadow-sm'
                          }`}
                        >
                          {msg.text}
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex items-center gap-1.5 text-xs text-breeze-blue font-mono p-2">
                        <span className="w-2 h-2 rounded-full bg-breeze-blue animate-bounce"></span>
                        <span className="w-2 h-2 rounded-full bg-breeze-blue animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-2 h-2 rounded-full bg-breeze-blue animate-bounce [animation-delay:0.4s]"></span>
                        <span className="ml-2">Synthesizing grounded response...</span>
                      </div>
                    )}
                  </div>

                  {/* Predefined Quick Prompt Chips */}
                  <div className="p-3 bg-surface-container-lowest border-t border-hairline flex overflow-x-auto no-scrollbar gap-2">
                    {predefinedPrompts.map((p, pIdx) => (
                      <button
                        key={pIdx}
                        onClick={() => handleSendPrompt(p)}
                        className="px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container border border-hairline font-mono text-[11px] text-body-mid hover:text-ink whitespace-nowrap transition-colors"
                      >
                        "{p}"
                      </button>
                    ))}
                  </div>

                  {/* Input Bar */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendPrompt(chatInput);
                    }}
                    className="p-3 bg-surface-container border-t border-hairline flex items-center gap-2"
                  >
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Ask a technical query about KYRO automation..."
                      className="w-full bg-surface-container-lowest text-ink font-sans text-xs sm:text-sm rounded-full px-4 py-2.5 outline-none border border-hairline focus:border-breeze-blue transition-colors placeholder:text-body-mid/50"
                    />
                    <button
                      type="submit"
                      className="w-9 h-9 rounded-full bg-primary hover:bg-primary-fixed text-on-primary flex items-center justify-center shrink-0 shadow-md transition-all"
                      aria-label="Send message"
                    >
                      <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Live Execution Stream Simulation Section */}
        <section className="py-8 sm:py-12">
          <div className="p-6 sm:p-8 rounded-3xl bg-surface-container-low border border-hairline shadow-md flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-breeze-blue text-[20px]">terminal</span>
                <span className="font-mono text-xs text-body-mid uppercase tracking-widest font-semibold">
                  REASONING MATRIX STREAM • DAG EXECUTION 8041
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] text-sunset-orange">REALTIME EXECUTION</span>
                <span className="font-mono text-[10px] bg-surface-container px-2 py-0.5 rounded text-breeze-blue">
                  00:00:14.28
                </span>
              </div>
            </div>

            {/* Simulated Stream Box */}
            <div className="rounded-2xl bg-surface-container-lowest border border-hairline p-5 font-mono text-xs flex flex-col gap-2.5">
              <div className="text-[11px] text-body-mid pb-2 border-b border-hairline/60 flex items-center justify-between">
                <span>MULTI-AGENT ORCHESTRATOR — PRIMARY NODE</span>
                <span className="text-emerald-400">STATUS: CONVERGED</span>
              </div>

              {streamLogs.map((log, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2.5 transition-all duration-300 ${
                    i === streamIndex
                      ? 'text-ink font-semibold pl-1 border-l-2 border-sunset-orange'
                      : 'text-body-mid opacity-70'
                  }`}
                >
                  <span className="material-symbols-outlined text-[14px] text-sunset-orange select-none mt-0.5">chevron_right</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Core Capabilities Breakdown */}
        <section className="py-10 sm:py-16">
          <div className="flex flex-col mb-8">
            <span className="font-mono text-xs uppercase text-sunset-orange tracking-widest font-semibold mb-2">
              CORE CAPABILITIES
            </span>
            <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight">
              Engineered Capabilities Breakdown
            </h2>
            <p className="font-sans text-sm sm:text-base text-body-mid mt-2 max-w-xl">
              Modular neural layers deployed into sovereign client clouds with air-gapped guarantees and strict transactional rollbacks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((cap) => (
              <article
                key={cap.id}
                className="bg-canvas-card border border-hairline p-6 rounded-2xl flex flex-col justify-between hover:border-pill-border transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="material-symbols-outlined text-[24px] text-body-mid group-hover:text-ink transition-colors">
                      {cap.icon}
                    </span>
                    <span className="font-mono text-xs text-body-mid">{cap.id}</span>
                  </div>
                  <h3 className="font-sans text-lg text-ink font-medium mb-2">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-body-text leading-relaxed mb-4">
                    {cap.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-hairline/60 flex items-center justify-between">
                  <span className="font-mono text-[11px] text-body-mid uppercase">BENCHMARK</span>
                  <span className="font-mono text-xs text-breeze-blue font-semibold">
                    {cap.metric}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: Interactive ROI Calculator */}
        <section className="py-10 sm:py-16 bg-surface-container-lowest rounded-3xl border border-hairline p-6 sm:p-10 mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-semibold">
              INTERACTIVE ROI SIMULATOR
            </span>
          </div>

          <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight mb-2">
            Calculate Your Technological Leverage
          </h2>
          <p className="font-sans text-xs sm:text-sm text-body-mid max-w-2xl mb-8 leading-relaxed">
            Estimate direct monthly savings generated by replacing manual data processing, spreadsheet reconcilement, and routine workflows with KYRO autonomous pipelines.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Sliders */}
            <div className="flex flex-col gap-6 bg-canvas-card border border-hairline p-6 rounded-2xl">
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="font-mono text-xs text-body-text uppercase">
                    Team Members Handling Manual Routines
                  </label>
                  <span className="font-mono text-base text-ink font-bold">
                    {teamSize} People
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-sunset-orange cursor-pointer"
                />
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <label className="font-mono text-xs text-body-text uppercase">
                    Weekly Hours Spent Per Person on Repetitive Tasks
                  </label>
                  <span className="font-mono text-base text-sunset-orange font-bold">
                    {hoursPerWeek} Hours / Wk
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-sunset-orange cursor-pointer"
                />
              </div>
            </div>

            {/* Output Display */}
            <div className="p-6 sm:p-8 rounded-2xl bg-surface-container-high border border-pill-border flex flex-col justify-between shadow-xl">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-body-mid uppercase tracking-wider">
                    ESTIMATED RECOVERED CAPACITY
                  </span>
                  <span className="font-mono text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                    75% AUTOMATION DELTA
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="font-sans text-4xl sm:text-5xl text-ink font-normal tracking-tight">
                    {totalHoursSavedMonthly.toLocaleString()} hrs
                  </span>
                  <span className="font-mono text-xs text-body-mid uppercase mt-1">
                    Productive Hours Reclaimed Monthly
                  </span>
                </div>

                <div className="pt-4 border-t border-hairline/80 flex flex-col">
                  <span className="font-mono text-xs text-body-mid uppercase">
                    ESTIMATED ANNUAL VALUE RECOVERY
                  </span>
                  <span className="font-sans text-3xl sm:text-4xl text-sunset-orange font-semibold mt-1">
                    ₹{(monthlyCostSavedINR * 12).toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] text-body-mid mt-1">
                    Based on blended ₹850/hr operational staffing benchmark.
                  </span>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-6 w-full py-3 rounded-full bg-primary text-on-primary font-mono text-xs text-center font-bold uppercase tracking-wider shadow-md hover:bg-primary-fixed transition-colors"
              >
                Request Custom Architecture Audit
              </Link>
            </div>
          </div>
        </section>

        {/* Section 4: The KYRO Advantage vs Wrappers */}
        <section className="py-10 sm:py-16">
          <div className="bg-canvas-card border border-hairline p-8 sm:p-10 rounded-3xl flex flex-col relative overflow-hidden">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-sunset-orange"></span>
              <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
                THE DISTINCT ADVANTAGE
              </span>
            </div>
            <h2 className="font-sans text-2xl sm:text-4xl text-ink font-normal tracking-tight mb-4">
              Beyond generic prompting and shallow wrappers.
            </h2>
            <p className="font-sans text-sm sm:text-base text-body-text leading-relaxed mb-8 max-w-3xl">
              Most automation projects fail in production because of unbounded token variance and hallucinated state. At KYRO, we engineer formal grammar enforcement, sandboxed execution runtimes, and local tool contracts that eliminate drift.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest border border-hairline p-5 rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 text-rose-400 font-mono text-xs font-semibold">
                  <span className="material-symbols-outlined text-[18px]">close</span>
                  <span>Generic Commercial Wrappers</span>
                </div>
                <p className="text-xs text-body-mid leading-relaxed">
                  Vulnerable to prompt injection, uncontrolled model billing spikes, non-deterministic outputs, and silent API degradation under load.
                </p>
              </div>

              <div className="bg-surface-container-lowest border border-pill-border p-5 rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 text-breeze-blue font-mono text-xs font-semibold">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span>KYRO Engineered Pipelines</span>
                </div>
                <p className="text-xs text-ink leading-relaxed">
                  Deterministic schema validation, local sandbox execution, formal grammar enforcement, and automatic transaction rollback on edge errors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Action Callout */}
        <section className="pt-8 pb-16 sm:pb-24 flex flex-col items-center text-center">
          <div className="w-full flex flex-col items-center bg-canvas-card border border-hairline p-8 sm:p-12 rounded-3xl shadow-xl">
            <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold mb-2">
              DEPLOY AUTONOMOUS INTELLIGENCE
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl text-ink font-normal tracking-tight mb-3">
              Automate Mission-Critical Business Logic
            </h3>
            <p className="font-sans text-xs sm:text-sm text-body-mid max-w-md mb-6 leading-relaxed">
              Schedule an architecture call to evaluate your workflows and receive a technical implementation blueprint.
            </p>
            <Link
              to="/contact"
              className="h-12 px-8 rounded-full bg-surface-container-lowest hover:bg-surface-container-high border border-pill-border transition-all flex items-center justify-center gap-2 text-ink font-mono text-xs sm:text-sm font-semibold shadow-sm"
            >
              <span>Schedule Workflow Audit</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}