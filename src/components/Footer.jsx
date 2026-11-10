import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-hairline py-12 px-4 sm:px-6 lg:px-8 text-body-text mb-16 md:mb-0">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-3.5 md:col-span-1">
            <Link to="/" className="inline-block group" aria-label="KYRO Home">
              <img
                src="/kyro-logo.png"
                alt="KYRO"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain group-hover:scale-105 transition-transform duration-300 filter drop-shadow-[0_2px_12px_rgba(255,255,255,0.08)]"
              />
            </Link>
            <p className="text-xs text-body-mid leading-relaxed">
              Engineering high-throughput digital systems, autonomous agentic intelligence, and high-clarity data architecture for measurable commercial advantage.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-body-mid mt-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>GLOBAL CLUSTER: ONLINE • 14MS</span>
            </div>
          </div>

          {/* Col 2: Core Disciplines */}
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
              DISCIPLINES
            </span>
            <ul className="flex flex-col gap-2 text-xs font-mono text-body-mid">
              <li>
                <Link to="/development" className="hover:text-ink transition-colors">
                  01. Website Architecture
                </Link>
              </li>
              <li>
                <Link to="/development" className="hover:text-ink transition-colors">
                  02. Custom Software & APIs
                </Link>
              </li>
              <li>
                <Link to="/ai-workflows" className="hover:text-ink transition-colors">
                  03. AI Automation Systems
                </Link>
              </li>
              <li>
                <Link to="/ai-workflows" className="hover:text-ink transition-colors">
                  04. Agentic AI & Swarms
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="hover:text-ink transition-colors">
                  05. Power BI & Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
              PLATFORM
            </span>
            <ul className="flex flex-col gap-2 text-xs font-mono text-body-mid">
              <li>
                <Link to="/" className="hover:text-ink transition-colors">
                  System Core (Home)
                </Link>
              </li>
              <li>
                <Link to="/development" className="hover:text-ink transition-colors">
                  Full-Stack Engineering
                </Link>
              </li>
              <li>
                <Link to="/ai-workflows" className="hover:text-ink transition-colors">
                  Autonomous AI Workflows
                </Link>
              </li>
              <li>
                <Link to="/analytics" className="hover:text-ink transition-colors">
                  Executive Intelligence
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-ink transition-colors">
                  Transparent Investment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-ink transition-colors">
                  Technical Engagement
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Standard */}
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs uppercase tracking-wider text-ink font-semibold">
              INSTITUTIONAL AUDIT
            </span>
            <div className="bg-canvas-card border border-hairline rounded-lg p-3 flex flex-col gap-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono text-body-mid">STRICT COMPLIANCE</span>
                <span className="text-[10px] font-mono text-breeze-blue">STANDARD</span>
              </div>
              <p className="text-[11px] text-body-mid leading-relaxed">
                Every project executed under strict NDA obligation. Zero vendor lock-in with direct client IP ownership.
              </p>
              <Link
                to="/contact"
                className="mt-1 inline-flex items-center justify-center py-1.5 px-3 rounded-full bg-surface-container-high hover:bg-surface-bright text-ink text-[11px] font-mono transition-colors"
              >
                Request Spec Brief
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 border-t border-hairline/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-body-mid">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} KYRO ARCHITECTURES.</span>
            <span>All technical rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>STITCH ID: 12480665539141793349</span>
            <span>ZERO BLOAT PROTOCOL</span>
            <span className="text-sunset-orange">PRODUCTION BUILD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
