import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell, PieChart, Pie } from 'recharts';
import { TrendingUp, PieChart as PieIcon, Layers, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export default function PipelineAnalyticsTab({ leads }) {
  // Aggregate stats
  const totalLeads = leads.length;
  const totalEbitda = leads.reduce((acc, curr) => {
    const val = parseFloat(curr.ebitda.replace('$', '').replace('M', ''));
    return acc + (isNaN(val) ? 0 : val);
  }, 0);

  const avgMatchScore = (
    leads.reduce((acc, curr) => acc + curr.matchScore, 0) / totalLeads
  ).toFixed(1);

  const highRiskCount = leads.filter((l) => l.retirementRisk.includes('High') || l.retirementRisk.includes('Critical')).length;

  // Chart 1: Industry breakdown
  const industryCounts = {};
  leads.forEach((l) => {
    industryCounts[l.industry] = (industryCounts[l.industry] || 0) + 1;
  });

  const industryData = Object.keys(industryCounts).map((ind) => ({
    name: ind.length > 20 ? ind.substring(0, 18) + '...' : ind,
    count: industryCounts[ind]
  }));

  // Chart 2: Revenue & EBITDA comparison
  const dealFinancialsData = leads.map((l) => ({
    name: l.companyName.split(' ')[0],
    Revenue: parseFloat(l.annualRevenue.replace('$', '').replace('M', '')),
    EBITDA: parseFloat(l.ebitda.replace('$', '').replace('M', '')),
    Match: l.matchScore
  }));

  const COLORS = ['#10b981', '#06b6d4', '#6366f1', '#f59e0b', '#8b5cf6'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="badge badge-emerald">Caprae Sourcing Analytics</span>
            <h2 className="text-2xl font-bold text-white mt-1">
              Active Sourcing Pipeline & Deal Metrics
            </h2>
            <p className="text-sm text-slate-300">
              Real-time visualization of target LMM company valuations, founder retirement signals, and industry concentration.
            </p>
          </div>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <p className="text-xs text-slate-400">Total Scraped Leads</p>
            <p className="text-2xl font-extrabold text-white font-mono mt-1">{totalLeads}</p>
            <span className="text-[11px] text-emerald-400 font-mono">100% Verified Tech Stack</span>
          </div>

          <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
            <p className="text-xs text-slate-400">Total Pipeline EBITDA</p>
            <p className="text-2xl font-extrabold text-emerald-400 font-mono mt-1">${totalEbitda.toFixed(1)}M</p>
            <span className="text-[11px] text-slate-300">Avg EBITDA: ${(totalEbitda / totalLeads).toFixed(2)}M</span>
          </div>

          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/20">
            <p className="text-xs text-slate-400">High Retirement Risk Targets</p>
            <p className="text-2xl font-extrabold text-amber-400 font-mono mt-1">{highRiskCount}</p>
            <span className="text-[11px] text-amber-300">Founders Age 58+</span>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20">
            <p className="text-xs text-slate-400">Avg Target Match Score</p>
            <p className="text-2xl font-extrabold text-cyan-400 font-mono mt-1">{avgMatchScore}%</p>
            <span className="text-[11px] text-cyan-300">High Buy-Intent Index</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Industry Distribution Bar Chart */}
        <div className="glass-panel p-5 space-y-4">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Target Lead Distribution by Industry</h3>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={industryData} margin={{ top: 10, right: 10, left: -25, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 10 }} angle={-15} textAnchor="end" />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                <Bar dataKey="count" fill="#10b981" radius={[4, 4, 0, 0]}>
                  {industryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Revenue vs EBITDA Comparison Chart */}
        <div className="glass-panel p-5 space-y-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold text-white">Revenue vs EBITDA Breakdown ($ Millions)</h3>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dealFinancialsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <YAxis stroke="#94a3b8" tick={{ fontSize: 11 }} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '8px' }} />
                <Bar dataKey="Revenue" fill="#6366f1" name="Annual Revenue ($M)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="EBITDA" fill="#10b981" name="Current EBITDA ($M)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Target Pipeline Stage Summary */}
      <div className="glass-panel p-5 space-y-4">
        <h3 className="text-sm font-bold text-white border-b border-white/10 pb-3">
          Active ETA Sourcing Stages & Pipeline Status
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white">Stage 1: Cold Scraped & Enriched</span>
              <span className="badge badge-emerald">3 Deals</span>
            </div>
            <p className="text-xs text-slate-400">Initial tech stack audited, decision makers verified, founder retirement score &gt; 80%.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white">Stage 2: Proprietary Outreach</span>
              <span className="badge badge-cyan">2 Deals</span>
            </div>
            <p className="text-xs text-slate-400">Personalized cold outreach sent emphasizing 7-year exit partnership and founder legacy.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white">Stage 3: LOI & AI Audit Sandbox</span>
              <span className="badge badge-indigo">1 Deal</span>
            </div>
            <p className="text-xs text-slate-400">Post-acquisition AI EBITDA expansion plan calculated, entering preliminary due diligence.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
