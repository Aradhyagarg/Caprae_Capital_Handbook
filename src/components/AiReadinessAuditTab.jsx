import React, { useState } from 'react';
import { Cpu, DollarSign, TrendingUp, Sparkles, CheckSquare, Square, Shield, ArrowUpRight, Award, Zap, RefreshCw } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

export default function AiReadinessAuditTab() {
  const [revenue, setRevenue] = useState(12.5); // $12.5M
  const [ebitdaMargin, setEbitdaMargin] = useState(18); // 18%
  const [employeeCount, setEmployeeCount] = useState(55);
  const [entryMultiple, setEntryMultiple] = useState(5.5);

  // Selected AI Value-Add Modules
  const [selectedModules, setSelectedModules] = useState(['backoffice', 'pricing', 'support']);

  const aiModules = [
    {
      id: 'backoffice',
      name: 'AI Back-Office & Invoice OCR Automation',
      description: 'Replaces manual data entry, AP/AR processing, and paper logistics documentation.',
      ebitdaBoost: 2.4, // +2.4% margin boost
      annualCostSavings: '$180,000 / yr',
      implementationWeeks: 4
    },
    {
      id: 'pricing',
      name: 'AI Dynamic Pricing & Instant RFQ Estimator',
      description: 'Algorithmic dynamic pricing engine boosting gross margins on high-demand orders.',
      ebitdaBoost: 3.2,
      annualCostSavings: '$320,000 / yr',
      implementationWeeks: 6
    },
    {
      id: 'support',
      name: '24/7 Autonomous AI Voice & Chat Support Agent',
      description: 'Resolves customer service inquiries and dispatches work orders without hiring extra staff.',
      ebitdaBoost: 1.8,
      annualCostSavings: '$140,000 / yr',
      implementationWeeks: 3
    },
    {
      id: 'predictive',
      name: 'AI Predictive Fleet & Equipment Maintenance',
      description: 'Reduces equipment downtime and extends asset lifecycle using IoT/telematics AI models.',
      ebitdaBoost: 2.1,
      annualCostSavings: '$210,000 / yr',
      implementationWeeks: 8
    }
  ];

  const toggleModule = (id) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // Calculations
  const currentEbitda = (revenue * (ebitdaMargin / 100));
  const currentValuation = currentEbitda * entryMultiple;

  const totalModuleBoostPercent = selectedModules.reduce((acc, modId) => {
    const mod = aiModules.find((m) => m.id === modId);
    return acc + (mod ? mod.ebitdaBoost : 0);
  }, 0);

  const postAcqEbitdaMargin = ebitdaMargin + totalModuleBoostPercent;
  const postAcqEbitda = (revenue * (postAcqEbitdaMargin / 100));
  const annualEbitdaGain = postAcqEbitda - currentEbitda;

  // Exit multiple re-rating because company transformed into tech-enabled SaaS/MaaS player
  const exitMultiple = entryMultiple + 2.5;
  const year7Valuation = postAcqEbitda * 1.35 * exitMultiple; // assuming 5% organic CAGR + AI boost

  // 7-Year Projection Data for Chart
  const chartData = [
    { year: 'Entry (Y0)', BaselineEBITDA: Number(currentEbitda.toFixed(2)), CapraeAiEBITDA: Number(currentEbitda.toFixed(2)) },
    { year: 'Year 1', BaselineEBITDA: Number((currentEbitda * 1.03).toFixed(2)), CapraeAiEBITDA: Number((currentEbitda + annualEbitdaGain * 0.4).toFixed(2)) },
    { year: 'Year 2', BaselineEBITDA: Number((currentEbitda * 1.06).toFixed(2)), CapraeAiEBITDA: Number((currentEbitda + annualEbitdaGain * 0.8).toFixed(2)) },
    { year: 'Year 3', BaselineEBITDA: Number((currentEbitda * 1.09).toFixed(2)), CapraeAiEBITDA: Number((postAcqEbitda * 1.05).toFixed(2)) },
    { year: 'Year 4', BaselineEBITDA: Number((currentEbitda * 1.12).toFixed(2)), CapraeAiEBITDA: Number((postAcqEbitda * 1.12).toFixed(2)) },
    { year: 'Year 5', BaselineEBITDA: Number((currentEbitda * 1.15).toFixed(2)), CapraeAiEBITDA: Number((postAcqEbitda * 1.20).toFixed(2)) },
    { year: 'Year 6', BaselineEBITDA: Number((currentEbitda * 1.18).toFixed(2)), CapraeAiEBITDA: Number((postAcqEbitda * 1.28).toFixed(2)) },
    { year: 'Exit (Y7)', BaselineEBITDA: Number((currentEbitda * 1.22).toFixed(2)), CapraeAiEBITDA: Number((postAcqEbitda * 1.35).toFixed(2)) }
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="glass-panel p-6 border-cyan-500/30 bg-gradient-to-r from-[#0a0e17] via-[#0f172a] to-[#07090e] relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2">
              <span className="badge badge-cyan">Caprae 7-Year MaaS Blueprint</span>
              <span className="text-xs text-slate-400 font-mono">POST-ACQUISITION VALUE CREATION</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white mt-2">
              Caprae AI Post-Acquisition EBITDA Expansion & Re-rating Simulator
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl">
              At Caprae Capital, M&A is a 7-year journey. Model how implementing proprietary AI tools (SaaS/MaaS) post-acquisition expands EBITDA margins and elevates exit multiples.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-center">
            <p className="text-xs text-cyan-300 uppercase font-semibold">Total 7-Yr Equity Value Created</p>
            <p className="text-3xl font-extrabold text-cyan-400 font-mono mt-1">
              +${(year7Valuation - currentValuation).toFixed(2)}M
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Target Inputs & Module Selector */}
        <div className="lg:col-span-5 space-y-6">
          {/* Target Financial Inputs */}
          <div className="glass-panel p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <span>Target Acquisition Baseline</span>
              </h3>
              <span className="text-xs text-slate-400 font-mono">Entry Multiple: {entryMultiple}x</span>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Annual Revenue</span>
                  <span className="text-emerald-400 font-mono font-bold">${revenue}M</span>
                </div>
                <input
                  type="range"
                  min="3.0"
                  max="40.0"
                  step="0.5"
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Baseline EBITDA Margin</span>
                  <span className="text-emerald-400 font-mono font-bold">{ebitdaMargin}% (${currentEbitda.toFixed(2)}M)</span>
                </div>
                <input
                  type="range"
                  min="8"
                  max="30"
                  step="1"
                  value={ebitdaMargin}
                  onChange={(e) => setEbitdaMargin(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Headcount</span>
                  <span className="text-slate-200 font-mono">{employeeCount} Employees</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="200"
                  step="5"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* AI Value Creation Modules Selector */}
          <div className="glass-panel p-5 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center justify-between border-b border-white/10 pb-3">
              <span className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Caprae AI & SaaS Plug-in Modules</span>
              </span>
              <span className="badge badge-cyan">+{totalModuleBoostPercent.toFixed(1)}% EBITDA Margin</span>
            </h3>

            <div className="space-y-2">
              {aiModules.map((mod) => {
                const isSelected = selectedModules.includes(mod.id);
                return (
                  <div
                    key={mod.id}
                    onClick={() => toggleModule(mod.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? 'bg-cyan-950/30 border-cyan-500/40 shadow-sm'
                        : 'bg-white/5 border-white/5 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="mt-0.5 text-cyan-400">
                        {isSelected ? <CheckSquare className="w-4 h-4" /> : <Square className="w-4 h-4 text-slate-500" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-bold text-white">{mod.name}</p>
                          <span className="text-[11px] font-mono text-emerald-400 font-bold">+{mod.ebitdaBoost}% EBITDA</span>
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">{mod.description}</p>
                        <div className="flex items-center space-x-3 mt-2 text-[10px] text-slate-300 font-mono">
                          <span>Est. Savings: {mod.annualCostSavings}</span>
                          <span>•</span>
                          <span>Deploy: {mod.implementationWeeks} wks</span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Projections & Chart */}
        <div className="lg:col-span-7 space-y-6">
          {/* Key Metric Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="glass-panel p-4 border-emerald-500/20 bg-emerald-950/20">
              <p className="text-xs text-slate-400">Expanded EBITDA Margin</p>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-extrabold text-emerald-400 font-mono">{postAcqEbitdaMargin.toFixed(1)}%</span>
                <span className="text-xs text-emerald-300 font-mono">({ebitdaMargin}% baseline)</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">New EBITDA: ${postAcqEbitda.toFixed(2)}M / yr</p>
            </div>

            <div className="glass-panel p-4 border-cyan-500/20 bg-cyan-950/20">
              <p className="text-xs text-slate-400">Annual EBITDA Gain</p>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-extrabold text-cyan-400 font-mono">+${annualEbitdaGain.toFixed(2)}M</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Pure post-acquisition expansion</p>
            </div>

            <div className="glass-panel p-4 border-purple-500/20 bg-purple-950/20">
              <p className="text-xs text-slate-400">Multiple Expansion Re-rating</p>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl font-extrabold text-purple-300 font-mono">{entryMultiple}x → {exitMultiple}x</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">SaaS/MaaS Valuation Premium</p>
            </div>
          </div>

          {/* 7-Year EBITDA Expansion Chart */}
          <div className="glass-panel p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  <span>7-Year EBITDA Expansion Trajectory ($ Millions)</span>
                </h3>
                <p className="text-xs text-slate-400">Comparing un-transformed traditional business vs Caprae AI-enabled operation</p>
              </div>
              <div className="flex items-center space-x-3 text-xs font-mono">
                <span className="flex items-center"><span className="w-3 h-3 rounded bg-emerald-500 mr-1" /> Caprae AI</span>
                <span className="flex items-center"><span className="w-3 h-3 rounded bg-slate-600 mr-1" /> Baseline</span>
              </div>
            </div>

            <div className="h-72 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorCaprae" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#64748b" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#64748b" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="year" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                  <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                  <Area type="monotone" dataKey="CapraeAiEBITDA" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorCaprae)" name="Caprae AI EBITDA ($M)" />
                  <Area type="monotone" dataKey="BaselineEBITDA" stroke="#64748b" strokeWidth={2} strokeDasharray="4 4" fillOpacity={1} fill="url(#colorBaseline)" name="Baseline EBITDA ($M)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Strategic Narrative / Caprae Culture Fit Note */}
          <div className="glass-panel p-5 border-amber-500/30 bg-amber-950/10 space-y-2">
            <div className="flex items-center space-x-2 text-sm font-bold text-amber-400">
              <Award className="w-4 h-4" />
              <span>Why Post-Acquisition AI Transformation Wins (The Caprae Horsepower Model)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Traditional PE firms focus solely on leverage and financial engineering during year 1. Caprae Capital operates as a founder-first operator. By instantly deploying custom AI OCR, predictive routing, and autonomous customer agents within the first 90 days, we expand EBITDA by 250-400 bps without increasing debt or headcount.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
