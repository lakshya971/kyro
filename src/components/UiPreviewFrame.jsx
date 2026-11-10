import React from 'react';

/**
 * Renders a single framed UI deliverable preview window so clients can inspect
 * how finished KYRO software, automation workflows, and BI dashboards look.
 */
export default function UiPreviewFrame({
  src,
  alt,
  title,
  badge = 'Live System Preview',
  caption,
  metrics = [],
  eager = false
}) {
  return (
    <div className="w-full rounded-2xl bg-canvas-card border border-hairline shadow-2xl overflow-hidden flex flex-col">
      {/* Minimal Obsidian Window Header */}
      <div className="px-4 py-2.5 bg-surface-container-low border-b border-hairline flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-surface-bright"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-surface-bright"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-sunset-orange"></span>
          </div>
          <span className="font-mono text-[11px] text-ink font-medium truncate">
            {title}
          </span>
        </div>
        <span className="font-mono text-[10px] text-breeze-blue bg-breeze-blue/10 border border-breeze-blue/30 px-2.5 py-0.5 rounded-full shrink-0 uppercase tracking-wide">
          {badge}
        </span>
      </div>

      {/* Single Framed Image Container */}
      <div className="p-2 sm:p-2.5 bg-surface-container-lowest">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto rounded-xl border border-hairline/70 shadow-inner block object-cover"
          loading={eager ? 'eager' : 'lazy'}
        />
      </div>

      {/* Optional Clarification Caption & Bottom Spec Pills */}
      {(caption || metrics.length > 0) && (
        <div className="px-4 py-3 bg-surface-container-low border-t border-hairline/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          {caption && (
            <span className="text-xs text-body-mid leading-snug">
              {caption}
            </span>
          )}
          {metrics.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              {metrics.map((m, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[10px] text-ink bg-surface-container-high border border-hairline px-2 py-0.5 rounded-md"
                >
                  {m}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
