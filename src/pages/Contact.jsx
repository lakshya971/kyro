import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    brief: '',
  });

  const [selectedDisciplines, setSelectedDisciplines] = useState([
    'Web Development',
    'Custom Software'
  ]);

  const [selectedBudget, setSelectedBudget] = useState('₹50,000 - ₹1,50,000');
  const [selectedTimeline, setSelectedTimeline] = useState('Immediate (Within 14 Days)');

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const disciplinesList = [
    'Web Development',
    'Custom Software',
    'AI Automation',
    'Agentic AI',
    'RAG Systems',
    'n8n Workflows',
    'Data Analytics',
    'BI Consultation'
  ];

  const budgetOptions = [
    'Under ₹50,000',
    '₹50,000 - ₹1,50,000',
    '₹1,50,000 - ₹5,00,000',
    '₹5,00,000+'
  ];

  const timelineOptions = [
    'Immediate (Within 14 Days)',
    '30 Days Target',
    'Flexible Roadmap'
  ];

  const toggleDiscipline = (disc) => {
    setSelectedDisciplines((prev) =>
      prev.includes(disc) ? prev.filter((d) => d !== disc) : [...prev, disc]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API dispatch to founder queue
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <main className="flex flex-col relative w-full pt-16 pb-20 bg-surface min-h-screen text-body-text">
      {/* Top Breadcrumb & Status */}
      <div className="w-full flex items-center justify-between px-4 sm:px-8 py-2 bg-surface-container-lowest border-b border-hairline/60">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-sunset-orange animate-pulse"></span>
          <span className="font-mono text-[11px] sm:text-xs text-body-mid uppercase tracking-wider">
            KYRO • TECHNICAL ENGAGEMENT GATEWAY • 04
          </span>
        </div>
        <span className="font-mono text-[11px] text-emerald-400 font-semibold">
          QUEUE: UNRESTRICTED
        </span>
      </div>

      <div className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col pt-10 sm:pt-16 pb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-sunset-orange uppercase tracking-widest font-semibold">
              ARCHITECTURAL CONSULTATION
            </span>
          </div>

          <h1 className="font-sans text-3xl sm:text-5xl text-ink font-normal tracking-tight leading-[1.15] mb-4">
            Initiate Technical Engagement
          </h1>

          <p className="font-sans text-base sm:text-lg text-body-mid leading-relaxed mb-6">
            Direct scoping with senior systems architects. Zero sales reps, no arbitrary upselling—only technical feasibility assessments and clear execution blueprints.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-body-mid bg-surface-container-low p-3 rounded-xl border border-hairline max-w-md">
            <span className="material-symbols-outlined text-breeze-blue text-[18px]">verified_user</span>
            <span>All conversations governed by mutual non-disclosure by default.</span>
          </div>
        </section>

        {submitted ? (
          <section className="py-12 bg-canvas-card border border-pill-border p-8 sm:p-12 rounded-3xl text-center shadow-2xl flex flex-col items-center gap-5 my-8">
            <div className="w-16 h-16 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[32px]">check_circle</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl text-ink font-medium">
              Technical RFC Dispatched Successfully
            </h2>
            <p className="font-sans text-sm sm:text-base text-body-text max-w-lg leading-relaxed">
              Thank you, <strong className="text-ink">{formData.name || 'Engineer'}</strong>. Your project parameters and requested disciplines have been registered into our queue. A senior systems architect will respond to <strong className="text-breeze-blue">{formData.email}</strong> within 4 business hours.
            </p>
            <div className="p-4 rounded-xl bg-surface-container font-mono text-xs text-body-mid border border-hairline/60">
              SESSION REF: KYRO-ENG-{Math.floor(100000 + Math.random() * 900000)} • SLA ACTIVE
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-4 px-6 py-2.5 rounded-full bg-surface-container-high hover:bg-surface-bright text-ink font-mono text-xs transition-colors"
            >
              Submit Another Technical Scope
            </button>
          </section>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 pb-16">
            {/* Section 01: Identification */}
            <div className="bg-canvas-card border border-hairline rounded-3xl p-6 sm:p-8 flex flex-col gap-5 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-hairline/60">
                <span className="font-mono text-xs text-sunset-orange uppercase tracking-wider font-semibold">
                  SECTION 01 — IDENTIFICATION
                </span>
                <span className="font-mono text-[11px] text-body-mid">* REQUIRED</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-body-mid uppercase">
                    Full Name <span className="text-sunset-orange">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Vikram Mehta"
                    className="w-full bg-surface-container-lowest text-ink font-sans text-sm rounded-full px-5 py-3 outline-none border border-hairline focus:border-breeze-blue transition-colors placeholder:text-body-mid/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-body-mid uppercase">
                    Business Email <span className="text-sunset-orange">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. vikram@enterprise.in"
                    className="w-full bg-surface-container-lowest text-ink font-sans text-sm rounded-full px-5 py-3 outline-none border border-hairline focus:border-breeze-blue transition-colors placeholder:text-body-mid/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-body-mid uppercase">
                    Organization / Entity
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Apex Logix Private Ltd."
                    className="w-full bg-surface-container-lowest text-ink font-sans text-sm rounded-full px-5 py-3 outline-none border border-hairline focus:border-breeze-blue transition-colors placeholder:text-body-mid/50"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-xs text-body-mid uppercase">
                    Operational Role
                  </label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. Founder / CTO / Head of Product"
                    className="w-full bg-surface-container-lowest text-ink font-sans text-sm rounded-full px-5 py-3 outline-none border border-hairline focus:border-breeze-blue transition-colors placeholder:text-body-mid/50"
                  />
                </div>
              </div>
            </div>

            {/* Section 02: Service Disciplines (Multi-Select Tags) */}
            <div className="bg-canvas-card border border-hairline rounded-3xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-hairline/60">
                <span className="font-mono text-xs text-breeze-blue uppercase tracking-wider font-semibold">
                  SECTION 02 — SERVICE DISCIPLINES
                </span>
                <span className="font-mono text-xs text-breeze-blue font-bold">
                  {selectedDisciplines.length} SELECTED
                </span>
              </div>
              <p className="text-xs text-body-mid">
                Select applicable capability domains for cross-functional routing.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {disciplinesList.map((disc) => {
                  const isChecked = selectedDisciplines.includes(disc);
                  return (
                    <button
                      key={disc}
                      type="button"
                      onClick={() => toggleDiscipline(disc)}
                      className={`flex items-center gap-2 rounded-full px-4 py-2 font-mono text-xs transition-all ${
                        isChecked
                          ? 'bg-surface-container-highest border border-pill-border text-ink font-bold shadow-sm'
                          : 'bg-surface-container-lowest border border-hairline text-body-mid hover:text-ink'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full ${
                          isChecked ? 'bg-sunset-orange' : 'bg-body-mid'
                        }`}
                      ></span>
                      <span>{disc}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Section 03: Investment Parameters & Scope */}
            <div className="bg-canvas-card border border-hairline rounded-3xl p-6 sm:p-8 flex flex-col gap-6 shadow-sm">
              <div className="pb-3 border-b border-hairline/60">
                <span className="font-mono text-xs text-sunset-orange uppercase tracking-wider font-semibold">
                  SECTION 03 — INVESTMENT & TIMELINE
                </span>
              </div>

              {/* Budget */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-xs text-body-mid uppercase">
                  Target Capital Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedBudget(opt)}
                      className={`py-2.5 px-3 rounded-xl font-mono text-xs text-center transition-all ${
                        selectedBudget === opt
                          ? 'bg-surface-container-highest border border-sunset-orange text-ink font-bold'
                          : 'bg-surface-container-lowest border border-hairline text-body-mid hover:text-ink'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="flex flex-col gap-3">
                <label className="font-mono text-xs text-body-mid uppercase">
                  Target Delivery SLA
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {timelineOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedTimeline(opt)}
                      className={`py-2.5 px-3 rounded-xl font-mono text-xs text-center transition-all ${
                        selectedTimeline === opt
                          ? 'bg-surface-container-highest border border-breeze-blue text-ink font-bold'
                          : 'bg-surface-container-lowest border border-hairline text-body-mid hover:text-ink'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 04: Project Brief */}
            <div className="bg-canvas-card border border-hairline rounded-3xl p-6 sm:p-8 flex flex-col gap-4 shadow-sm">
              <div className="pb-3 border-b border-hairline/60 flex items-center justify-between">
                <span className="font-mono text-xs text-breeze-blue uppercase tracking-wider font-semibold">
                  SECTION 04 — ARCHITECTURAL REQUIREMENTS
                </span>
                <span className="font-mono text-[11px] text-body-mid">OPTIONAL DETAILS</span>
              </div>

              <textarea
                rows={4}
                value={formData.brief}
                onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                placeholder="Describe your current software baseline, manual bottleneck pain points, data systems, or required transaction throughput..."
                className="w-full bg-surface-container-lowest text-ink font-sans text-sm rounded-2xl p-4 outline-none border border-hairline focus:border-breeze-blue transition-colors placeholder:text-body-mid/50 leading-relaxed resize-none"
              ></textarea>
            </div>

            {/* Submit Button & Direct Channels */}
            <div className="flex flex-col gap-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-primary hover:bg-primary-fixed text-on-primary font-mono text-sm font-bold uppercase tracking-wider shadow-xl active:scale-98 transition-all flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>TRANSMITTING RFC PROTOCOL...</span>
                ) : (
                  <>
                    <span>Dispatch Architectural Scope</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </>
                )}
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-body-mid px-2 pt-2">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-emerald-400 text-[16px]">lock</span>
                  <span>STRICT MUTUAL NDA PROTECTED</span>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="mailto:founder@kyro.tech"
                    className="hover:text-ink transition-colors flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-[14px]">mail</span>
                    founder@kyro.tech
                  </a>
                  <a
                    href="https://wa.me/919999999999?text=Hello%20KYRO%20Team,%20I%20would%20like%20to%20discuss%20a%20project"
                    target="_blank"
                    rel="noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                  >
                    <span>WhatsApp Direct</span>
                  </a>
                </div>
              </div>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
