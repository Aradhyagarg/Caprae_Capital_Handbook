import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LeadScraperTab from './components/LeadScraperTab';
import AiReadinessAuditTab from './components/AiReadinessAuditTab';
import PipelineAnalyticsTab from './components/PipelineAnalyticsTab';
import ArchitectureTab from './components/ArchitectureTab';
import BusinessAnswersTab from './components/BusinessAnswersTab';
import { INITIAL_LEADS } from './data/mockLeads';

export default function App() {
  const [activeTab, setActiveTab] = useState('scraper');
  const [leads, setLeads] = useState(INITIAL_LEADS);

  const handleAddLead = (newLead) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  // CSV Export Utility
  const handleExportCSV = () => {
    const headers = [
      'Company Name',
      'Domain',
      'Industry',
      'NAICS',
      'Geography',
      'Annual Revenue',
      'EBITDA',
      'Founder Age',
      'Retirement Risk',
      'Tech Stack',
      'Match Score',
      'Post-Acq EBITDA Upside'
    ];

    const rows = leads.map((l) => [
      `"${l.companyName}"`,
      `"${l.domain}"`,
      `"${l.industry}"`,
      `"${l.naicsCode}"`,
      `"${l.geography}"`,
      `"${l.annualRevenue}"`,
      `"${l.ebitda}"`,
      l.founderAge,
      `"${l.retirementRisk}"`,
      `"${l.techStack.join(', ')}"`,
      `${l.matchScore}%`,
      `"${l.ebitdaUpsidePotential}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `SaaSquatch_Caprae_Leads_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-[#07090e] text-slate-100 font-sans">
      {/* Background Glow Mesh */}
      <div className="bg-mesh" />

      {/* Header Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        totalLeads={leads.length}
        onExportCSV={handleExportCSV}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {activeTab === 'scraper' && (
          <LeadScraperTab leads={leads} onAddLead={handleAddLead} />
        )}
        {activeTab === 'ai-audit' && <AiReadinessAuditTab />}
        {activeTab === 'pipeline' && <PipelineAnalyticsTab leads={leads} />}
        {activeTab === 'architecture' && <ArchitectureTab />}
        {activeTab === 'answers' && <BusinessAnswersTab />}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0a0e17] py-6 mt-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white">Caprae Capital Partners</span>
            <span>•</span>
            <span>SaaSquatch AI LeadGen Engine v2.4</span>
          </div>
          <div className="flex items-center space-x-4">
            <button onClick={() => setActiveTab('architecture')} className="hover:text-emerald-400 transition-colors">Architecture</button>
            <button onClick={() => setActiveTab('answers')} className="hover:text-cyan-400 transition-colors">Q&A Written Response</button>
            <span className="text-slate-600">|</span>
            <span className="text-emerald-400 font-mono">Status: Ready for Interview Screening</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
