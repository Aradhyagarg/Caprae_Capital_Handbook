import React from 'react';
import { Sparkles, Database, TrendingUp, Cpu, BookOpen, Download, Zap } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, totalLeads, onExportCSV }) {
  const tabs = [
    { id: 'scraper', label: 'AI Scraping & Lead Enrichment', icon: Database, badge: '5h Upgrade' },
    { id: 'ai-audit', label: 'Post-Acquisition AI Audit', icon: Cpu, badge: 'MaaS Engine' },
    { id: 'pipeline', label: 'Pipeline & Deal Analytics', icon: TrendingUp },
    { id: 'architecture', label: 'Technical Architecture', icon: Zap },
    { id: 'answers', label: 'Caprae Business Q&A', icon: BookOpen, badge: 'Required' },
  ];

  return (
    <header className="border-b border-white/10 bg-[#0a0e17] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Brand Logo & Title */}
          <div className="flex items-center space-x-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-cyan-500 to-indigo-600 p-[2px] shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-[#07090e] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-emerald-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg tracking-tight text-white">SaaSquatch <span className="text-emerald-400 font-mono">AI Pro</span></span>
                <span className="badge badge-emerald text-[10px]">Caprae ETA Edition</span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">Proprietary Lead Scraping & EBITDA Upside Platform</p>
            </div>
          </div>

          {/* Desktop Nav Tabs */}
          <nav className="hidden lg:flex items-center space-x-1.5 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                    isActive ? 'nav-tab-active' : 'nav-tab-inactive'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span className="whitespace-nowrap">{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive ? 'bg-emerald-500/30 text-emerald-300' : 'bg-slate-800 text-slate-400 border border-white/10'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions & Live Status */}
          <div className="flex items-center space-x-3 shrink-0">
            <div className="hidden xl:flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 font-mono font-semibold">{totalLeads} Verified Leads</span>
            </div>

            <button
              type="button"
              onClick={onExportCSV}
              className="btn-primary py-2 px-3 text-xs"
              title="Export leads to CSV"
            >
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Bar */}
        <div className="flex lg:hidden overflow-x-auto py-2.5 space-x-2 border-t border-white/5 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${
                  isActive ? 'nav-tab-active' : 'nav-tab-inactive'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
