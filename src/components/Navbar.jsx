import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Core', path: '/', icon: 'grid_view' },
    { name: 'Dev', path: '/development', icon: 'terminal' },
    { name: 'AI Systems', path: '/ai-workflows', icon: 'memory' },
    { name: 'Analytics', path: '/analytics', icon: 'monitoring' },
    
  ];

  return (
    <>
      {/* Top Header */}
      <header className="fixed top-0 w-full z-50 pt-safe bg-surface/85 backdrop-blur-xl border-b border-hairline/60 shadow-[0_1px_8px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group py-1" aria-label="KYRO Home">
            <img
              src="/kyro-logo.png"
              alt="KYRO"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(255,255,255,0.08)]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full text-xs font-mono tracking-wide transition-all ${
                    isActive
                      ? 'bg-surface-container-high text-ink border border-pill-border shadow-sm'
                      : 'text-body-mid hover:text-ink hover:bg-surface-container-low'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/contact"
              className="flex h-9 px-4 items-center justify-center rounded-full bg-surface-container-low border border-pill-border text-ink hover:border-breeze-blue hover:text-breeze-blue hover:bg-surface-container-high transition-all text-xs font-mono font-medium shadow-sm"
            >
              <span className="uppercase text-breeze-blue mr-1.5">⚡</span>
              <span>ENGAGE</span>
            </Link>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full bg-surface-container-low border border-hairline flex items-center justify-center text-body-text hover:text-ink hover:bg-surface-container-high transition-colors"
              aria-label="Toggle navigation menu"
            >
              <span className="material-symbols-outlined text-[20px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface-container-lowest/95 backdrop-blur-2xl border-b border-hairline px-4 py-4 flex flex-col gap-2">
            <div className="text-[10px] font-mono text-body-mid uppercase tracking-wider px-2 pb-1 border-b border-hairline/40">
              NAVIGATION DIRECTORY
            </div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-mono transition-colors ${
                  location.pathname === item.path
                    ? 'bg-surface-container-high text-ink font-semibold'
                    : 'text-body-text hover:bg-surface-container-low hover:text-ink'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[18px] text-body-mid">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </div>
                <span className="material-symbols-outlined text-[16px] text-body-mid">arrow_forward</span>
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center py-2.5 rounded-full bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-wider shadow-md"
            >
              Initiate Project Scope
            </Link>
          </div>
        )}
      </header>

      {/* Fixed Mobile Bottom Bar (matching mobile_tab shell design from Stitch) */}
      <nav className="md:hidden fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl border-t border-hairline shadow-[0_-1px_12px_rgba(0,0,0,0.4)]">
        <div className="flex items-center justify-around h-16 px-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-2 py-1 rounded-full transition-colors ${
                isActive
                  ? 'text-ink bg-surface-container/80 border border-pill-border/40 font-medium'
                  : 'text-body-mid hover:text-ink'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">grid_view</span>
            <span className="font-eyebrow text-[10px] uppercase tracking-wider mt-0.5">Core</span>
          </NavLink>

          <NavLink
            to="/development"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-2 py-1 rounded-full transition-colors ${
                isActive
                  ? 'text-ink bg-surface-container/80 border border-pill-border/40 font-medium'
                  : 'text-body-mid hover:text-ink'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">terminal</span>
            <span className="font-eyebrow text-[10px] uppercase tracking-wider mt-0.5">Dev</span>
          </NavLink>

          <NavLink
            to="/ai-workflows"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-2 py-1 rounded-full transition-colors ${
                isActive
                  ? 'text-ink bg-surface-container/80 border border-pill-border/40 font-medium'
                  : 'text-body-mid hover:text-ink'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">memory</span>
            <span className="font-eyebrow text-[10px] uppercase tracking-wider mt-0.5">AI</span>
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-2 py-1 rounded-full transition-colors ${
                isActive
                  ? 'text-ink bg-surface-container/80 border border-pill-border/40 font-medium'
                  : 'text-body-mid hover:text-ink'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">monitoring</span>
            <span className="font-eyebrow text-[10px] uppercase tracking-wider mt-0.5">Metrics</span>
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-2 py-1 rounded-full transition-colors ${
                isActive
                  ? 'text-ink bg-surface-container/80 border border-pill-border/40 font-medium'
                  : 'text-body-mid hover:text-ink'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">layers</span>
            <span className="font-eyebrow text-[10px] uppercase tracking-wider mt-0.5">Tiers</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center min-w-[56px] min-h-[44px] px-2 py-1 rounded-full transition-colors ${
                isActive
                  ? 'text-sunset-orange bg-surface-container/80 border border-sunset-orange/40 font-medium'
                  : 'text-body-mid hover:text-sunset-orange'
              }`
            }
          >
            <span className="material-symbols-outlined text-[20px]">send</span>
            <span className="font-eyebrow text-[10px] uppercase tracking-wider mt-0.5">Contact</span>
          </NavLink>
        </div>
      </nav>
    </>
  );
}
