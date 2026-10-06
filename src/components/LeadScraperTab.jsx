import React, { useState } from 'react';
import { Search, Filter, RefreshCw, Cpu, CheckCircle2, UserCheck, AlertTriangle, Building2, MapPin, DollarSign, Layers, ExternalLink, Zap, ChevronRight, Sparkles } from 'lucide-react';
import { SCRAPING_DOMAINS_SAMPLE } from '../data/mockLeads';

export default function LeadScraperTab({ leads, onAddLead }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedRisk, setSelectedRisk] = useState('All');
  const [minMatchScore, setMinMatchScore] = useState(80);

  // Live Scraping simulator states
  const [scrapingDomain, setScrapingDomain] = useState('');
  const [isScraping, setIsScraping] = useState(false);
  const [scrapingStep, setScrapingStep] = useState('');
  const [activeModalLead, setActiveModalLead] = useState(null);

  // Industry filters
  const industries = ['All', 'Third-Party Logistics & Freight', 'Commercial Facility Maintenance', 'Industrial Manufacturing', 'Healthcare Software & Billing', 'Real Estate Services'];

  // Filter leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.geography.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.naicsCode.includes(searchTerm);
    const matchesIndustry = selectedIndustry === 'All' || lead.industry === selectedIndustry;
    const matchesRisk = selectedRisk === 'All' || lead.retirementRisk.includes(selectedRisk);
    const matchesScore = lead.matchScore >= minMatchScore;

    return matchesSearch && matchesIndustry && matchesRisk && matchesScore;
  });

  // Scraping handler simulation
  const handleScrapeDomain = (domainToScrape) => {
    const domain = domainToScrape || scrapingDomain || 'sunbelt-machining.com';
    setScrapingDomain(domain);
    setIsScraping(true);
    setScrapingStep('Bypassing Cloudflare protection & establishing headless browser session...');

    setTimeout(() => {
      setScrapingStep('Parsing DOM structure, metadata & extracting Tech Stack (Detected: WordPress + Legacy ERP)...');
    }, 1200);

    setTimeout(() => {
      setScrapingStep('Scraping WHOIS, LinkedIn corporate graph & verifying key decision-maker emails...');
    }, 2400);

    setTimeout(() => {
      setScrapingStep('Running AI EBITDA Upside Engine & Founder Retirement Propensity Model...');
    }, 3600);

    setTimeout(() => {
      setIsScraping(false);
      setScrapingStep('');
      
      const newLead = {
        id: `lead-scraped-${Date.now()}`,
        companyName: domain.split('.')[0].replace(/-/g, ' ').toUpperCase() + ' INC',
        domain: domain,
        industry: 'Industrial Services & Manufacturing',
        naicsCode: '332710',
        geography: 'Charlotte, NC',
        annualRevenue: '$10.8M',
        ebitda: '$2.1M',
        employeeCount: 48,
        founderAge: 61,
        retirementRisk: 'High (No Internal Successor)',
        techStack: ['QuickBooks Desktop', 'Legacy AS400', 'Paper Dispatch'],
        aiReadinessScore: 35,
        ebitdaUpsidePotential: '+ $890K / yr',
        enrichmentStatus: 'Enriched',
        keyContacts: [
          { name: 'Arthur Pendelton', title: 'Founder & CEO', email: `apendelton@${domain}`, linkedin: `linkedin.com/in/arthur-pendelton` },
          { name: 'Mark Gable', title: 'Director of Operations', email: `mgable@${domain}`, linkedin: `linkedin.com/in/mark-gable-ops` }
        ],
        buyingIntentSignal: 'Critical (Active Domain Listing / M&A Inquiries)',
        aiAutomationOpportunities: [
          'Automated Order Intake & Invoice OCR',
          'AI Maintenance Scheduler & Route Optimizer'
        ],
        matchScore: 95
      };

      onAddLead(newLead);
      setActiveModalLead(newLead);
      setScrapingDomain('');
    }, 4800);
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-panel p-6 relative overflow-hidden border-emerald-500/30">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
          <div>
            <div className="flex items-center space-x-2">
              <span className="badge badge-emerald">5-Hour Feature Upgrade</span>
              <span className="text-xs text-slate-400 font-mono">ENRICHMENT ENGINE v2.4</span>
            </div>
            <h2 className="text-2xl font-bold text-white mt-2">
              Proprietary AI Lead Scraping & Founder Retirement Signal Engine
            </h2>
            <p className="text-sm text-slate-300 mt-1 max-w-3xl">
              Extract off-market lower-middle-market (LMM) target companies, auto-detect legacy tech stacks, compute founder retirement risk, and calculate immediate EBITDA upside for Caprae deal sourcing.
            </p>
          </div>
          <div className="flex items-center space-x-4 shrink-0 bg-slate-900/80 p-3 rounded-xl border border-white/10">
            <div className="text-right">
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Target Match Rate</p>
              <p className="text-xl font-extrabold text-emerald-400 font-mono">94.2%</p>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="text-right">
              <p className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">Avg EBITDA Expansion</p>
              <p className="text-xl font-extrabold text-cyan-400 font-mono">+$1.1M</p>
            </div>
          </div>
        </div>
      </div>

      {/* Live AI Web Scraping Console Section */}
      <div className="glass-panel p-6 border-emerald-500/30 bg-slate-950 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-5 h-5 text-emerald-400 animate-pulse" />
            <h3 className="text-base font-bold text-white">Live AI Multi-Source Web Scraper & Tech Stack Auditor</h3>
          </div>
          <span className="text-xs text-slate-400 font-mono">Headless Chromium + WHOIS + AI Proxy API</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-8 flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Enter target domain (e.g. sunbelt-machining.com)..."
              value={scrapingDomain}
              onChange={(e) => setScrapingDomain(e.target.value)}
              disabled={isScraping}
              className="glass-input flex-1 font-mono text-sm"
            />
            <button
              type="button"
              onClick={() => handleScrapeDomain()}
              disabled={isScraping}
              className="btn-primary whitespace-nowrap shrink-0"
            >
              {isScraping ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Scraping & Enriching...</span>
                </>
              ) : (
                <>
                  <Zap className="w-4 h-4" />
                  <span>Scrape & Enrich Target</span>
                </>
              )}
            </button>
          </div>

          {/* Quick sample target pills */}
          <div className="lg:col-span-4 flex flex-wrap items-center gap-2">
            <span className="text-slate-400 text-xs font-medium">Quick Targets:</span>
            {SCRAPING_DOMAINS_SAMPLE.slice(0, 3).map((sample) => (
              <button
                key={sample.domain}
                type="button"
                onClick={() => handleScrapeDomain(sample.domain)}
                disabled={isScraping}
                className="quick-target-btn"
              >
                + {sample.domain}
              </button>
            ))}
          </div>
        </div>

        {/* Scraping Progress Indicator */}
        {isScraping && (
          <div className="p-4 rounded-xl bg-black/80 border border-emerald-500/40 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-emerald-400 font-mono font-semibold flex items-center gap-2">
                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                {scrapingStep}
              </span>
              <span className="text-slate-400 font-mono">Status: Processing...</span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-500 animate-pulse w-4/5 transition-all duration-500" />
            </div>
          </div>
        )}
      </div>

      {/* Filter and Search Bar */}
      <div className="glass-panel p-5 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
            <input
              type="text"
              placeholder="Search leads by company, domain, NAICS code, or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass-input pl-9 w-full"
            />
          </div>

          {/* Industry Filter */}
          <div className="md:col-span-3">
            <label className="text-slate-400 text-xs font-medium block mb-1">Industry Sector</label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="glass-input w-full py-2 text-xs bg-[#0c121e]"
            >
              {industries.map((ind) => (
                <option key={ind} value={ind}>{ind}</option>
              ))}
            </select>
          </div>

          {/* Retirement Risk Filter */}
          <div className="md:col-span-2">
            <label className="text-slate-400 text-xs font-medium block mb-1">Founder Risk</label>
            <select
              value={selectedRisk}
              onChange={(e) => setSelectedRisk(e.target.value)}
              className="glass-input w-full py-2 text-xs bg-[#0c121e]"
            >
              <option value="All">All Risk Levels</option>
              <option value="High">High Risk (58+)</option>
              <option value="Critical">Critical Exit</option>
              <option value="Medium">Medium Risk</option>
            </select>
          </div>

          {/* Min Match Score */}
          <div className="md:col-span-2">
            <label className="text-slate-400 text-xs font-medium block mb-1">
              Min Match: <span className="text-emerald-400 font-mono font-bold">{minMatchScore}%</span>
            </label>
            <input
              type="range"
              min="50"
              max="98"
              value={minMatchScore}
              onChange={(e) => setMinMatchScore(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer mt-1"
            />
          </div>
        </div>
      </div>

      {/* Leads Table View */}
      <div className="glass-panel overflow-hidden">
        <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-slate-900/70">
          <div className="flex items-center space-x-2">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <h3 className="text-sm font-bold text-white">Target Lead Directory ({filteredLeads.length} Matches)</h3>
          </div>
          <span className="text-xs text-slate-400">Click any company row to view full contact details & AI roadmap</span>
        </div>

        <div className="overflow-x-auto">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Company & Domain</th>
                <th>NAICS / Industry</th>
                <th>Revenue & EBITDA</th>
                <th>Founder Age & Risk</th>
                <th>Tech Stack</th>
                <th>EBITDA Upside</th>
                <th>Match Score</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr
                  key={lead.id}
                  onClick={() => setActiveModalLead(lead)}
                  className="cursor-pointer hover:bg-white/[0.04] transition-colors"
                >
                  <td className="min-w-[220px]">
                    <div className="space-y-1">
                      <div className="font-bold text-white flex items-center space-x-2">
                        <span className="hover:text-emerald-400 transition-colors">{lead.companyName}</span>
                        {lead.enrichmentStatus === 'Enriched' && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" title="Verified AI Enriched" />
                        )}
                      </div>
                      <div className="text-xs text-slate-400 flex items-center space-x-2 font-mono">
                        <span className="text-cyan-400">{lead.domain}</span>
                        <span>•</span>
                        <span className="flex items-center text-slate-400">
                          <MapPin className="w-3 h-3 mr-1 text-slate-500" />
                          {lead.geography}
                        </span>
                      </div>
                    </div>
                  </td>

                  <td className="min-w-[180px]">
                    <div className="space-y-1">
                      <span className="font-mono text-[11px] bg-white/5 px-2 py-0.5 rounded text-slate-300 border border-white/10">
                        NAICS {lead.naicsCode}
                      </span>
                      <div className="text-xs text-slate-400 truncate max-w-[170px]">{lead.industry}</div>
                    </div>
                  </td>

                  <td className="min-w-[140px]">
                    <div className="space-y-0.5">
                      <div className="font-mono font-bold text-white text-xs">{lead.annualRevenue} Rev</div>
                      <div className="font-mono text-xs text-emerald-400 font-semibold">{lead.ebitda} EBITDA</div>
                    </div>
                  </td>

                  <td className="min-w-[160px]">
                    <div className="space-y-1">
                      <div className="text-xs font-semibold text-slate-200">Age {lead.founderAge} yrs</div>
                      <span className={`badge text-[10px] ${
                        lead.retirementRisk.includes('High') || lead.retirementRisk.includes('Critical')
                          ? 'badge-amber'
                          : 'badge-indigo'
                      }`}>
                        {lead.retirementRisk}
                      </span>
                    </div>
                  </td>

                  <td className="min-w-[200px]">
                    <div className="flex flex-wrap gap-1.5 items-center">
                      {lead.techStack.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="text-[11px] px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 font-mono whitespace-nowrap">
                          {tech}
                        </span>
                      ))}
                      {lead.techStack.length > 2 && (
                        <span className="text-[11px] px-1.5 py-0.5 rounded-md bg-slate-800 text-slate-400 border border-white/10 font-mono">
                          +{lead.techStack.length - 2}
                        </span>
                      )}
                    </div>
                  </td>

                  <td className="min-w-[130px]">
                    <div className="font-mono text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/25 inline-block">
                      {lead.ebitdaUpsidePotential}
                    </div>
                  </td>

                  <td>
                    <span className="font-mono text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                      {lead.matchScore}%
                    </span>
                  </td>

                  <td className="text-right">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveModalLead(lead);
                      }}
                      className="btn-secondary py-1 px-3 text-xs"
                    >
                      <span>View</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Lead Detail Modal */}
      {activeModalLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative border-emerald-500/40 shadow-2xl space-y-6">
            <button
              type="button"
              onClick={() => setActiveModalLead(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl font-bold p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              ✕
            </button>

            {/* Modal Header */}
            <div className="border-b border-white/10 pb-4 space-y-1">
              <div className="flex items-center space-x-3">
                <h3 className="text-xl font-extrabold text-white">{activeModalLead.companyName}</h3>
                <span className="badge badge-emerald font-mono">Score: {activeModalLead.matchScore}% Match</span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-400 font-mono">
                <span className="text-cyan-400">{activeModalLead.domain}</span>
                <span>•</span>
                <span>{activeModalLead.geography}</span>
                <span>•</span>
                <span>NAICS {activeModalLead.naicsCode}</span>
              </div>
            </div>

            {/* Grid metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[11px] text-slate-400">Annual Revenue</p>
                <p className="text-base font-bold text-white font-mono">{activeModalLead.annualRevenue}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[11px] text-slate-400">Current EBITDA</p>
                <p className="text-base font-bold text-emerald-400 font-mono">{activeModalLead.ebitda}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                <p className="text-[11px] text-slate-400">Founder Age</p>
                <p className="text-base font-bold text-amber-400 font-mono">{activeModalLead.founderAge} yrs</p>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <p className="text-[11px] text-emerald-300 font-medium">Post-Acq EBITDA Upside</p>
                <p className="text-base font-bold text-emerald-400 font-mono">{activeModalLead.ebitdaUpsidePotential}</p>
              </div>
            </div>

            {/* Contacts & Tech Stack Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Decision Makers */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-3">
                <div className="flex items-center space-x-2 text-sm font-bold text-white border-b border-white/10 pb-2">
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span>Key Decision Maker Contacts</span>
                </div>
                {activeModalLead.keyContacts.map((contact, i) => (
                  <div key={i} className="text-xs p-3 rounded-lg bg-white/5 border border-white/5 space-y-1">
                    <p className="font-bold text-white">{contact.name} — <span className="text-slate-300 font-normal">{contact.title}</span></p>
                    <p className="text-cyan-400 font-mono">{contact.email}</p>
                    <p className="text-slate-400 font-mono text-[11px]">{contact.linkedin}</p>
                  </div>
                ))}
              </div>

              {/* Detected Tech Stack & Intent */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 space-y-3">
                <div className="flex items-center space-x-2 text-sm font-bold text-white border-b border-white/10 pb-2">
                  <Layers className="w-4 h-4 text-purple-400" />
                  <span>Detected Legacy Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModalLead.techStack.map((tech, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/25 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-2 border-t border-white/10 space-y-1">
                  <p className="text-xs font-bold text-amber-400">Buying Intent & Exit Signal:</p>
                  <p className="text-xs text-slate-300">{activeModalLead.buyingIntentSignal}</p>
                </div>
              </div>
            </div>

            {/* AI Value-Creation Roadmap */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 border border-emerald-500/30 space-y-2">
              <div className="flex items-center space-x-2 text-sm font-bold text-emerald-300">
                <Cpu className="w-4 h-4 text-emerald-400" />
                <span>Caprae AI Post-Acquisition EBITDA Expansion Roadmap</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                {activeModalLead.aiAutomationOpportunities.map((opp, idx) => (
                  <li key={idx} className="text-emerald-200">{opp}</li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className="flex justify-end space-x-3 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={() => setActiveModalLead(null)}
                className="btn-secondary text-xs"
              >
                Close Window
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(`Lead ${activeModalLead.companyName} saved to Caprae Pipeline CRM!`);
                  setActiveModalLead(null);
                }}
                className="btn-primary text-xs"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Save to Active M&A Pipeline</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
