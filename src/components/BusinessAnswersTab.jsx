import React, { useState } from 'react';
import { BookOpen, HelpCircle, CheckCircle2, User, Building, Target, Zap, ShieldCheck, Clock, DollarSign } from 'lucide-react';

export default function BusinessAnswersTab() {
  const [activeSection, setActiveSection] = useState('main'); // 'main', 'brief', 'reapplicant'

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel p-6 border-indigo-500/30 bg-gradient-to-r from-[#07090e] via-[#0f172a] to-[#0a0e17]">
        <div className="flex items-center space-x-2">
          <span className="badge badge-indigo font-mono">PART 4 SUBMISSION</span>
          <span className="text-xs text-slate-400 font-mono">BUSINESS UNDERSTANDING & CANDIDATE ALIGNMENT</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white mt-2">
          Caprae Capital Business Understanding & Written Responses
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-3xl">
          Comprehensive, 3-4 paragraph responses detailing Caprae’s mission, how Caprae is disrupting Private Equity and ETA (Entrepreneurship Through Acquisition), personal alignment, and work availability confirmations.
        </p>

        {/* Sub-navigation */}
        <div className="flex space-x-2 mt-4 pt-4 border-t border-white/10">
          <button
            onClick={() => setActiveSection('main')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeSection === 'main' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Core Business Questions (3-4 Paragraphs Each)
          </button>
          <button
            onClick={() => setActiveSection('brief')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeSection === 'brief' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Employment Expectations & Logistics
          </button>
          <button
            onClick={() => setActiveSection('reapplicant')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeSection === 'reapplicant' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40' : 'text-slate-400 hover:text-white'
            }`}
          >
            Culture & Philosophy Questions
          </button>
        </div>
      </div>

      {/* Main 3-4 Paragraph Questions */}
      {activeSection === 'main' && (
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="glass-panel p-6 space-y-3 border-emerald-500/20">
            <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
              <Target className="w-5 h-5 text-emerald-400" />
              <h3 className="text-base font-bold text-white">1. What is Caprae’s Mission?</h3>
            </div>
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              <p>
                Caprae Capital’s mission is to democratize business ownership and transform lower-middle-market (LMM) companies into high-performing, tech-enabled enterprises through Entrepreneurship Through Acquisition (ETA), proprietary SaaS/MaaS tools, and post-acquisition operational transformation. Rather than treating private equity as a financial engineering game—where leverage and arbitrary cost-cutting take center stage—Caprae views acquisition as merely the starting line of a seven-year value creation journey. The goal is to identify businesses with sound fundamentals, solid cash flows, and retiring founders, and systematically part the red sea for operators to unleash hidden growth.
              </p>
              <p>
                Central to Caprae’s mission is building proprietary tools—such as SaaSquatch Leads—rather than renting off-the-shelf software. By developing in-house lead generation, tech-stack scraping, and AI automation engines, Caprae equips searchers and portfolio CEOs with unfair sourcing and operational advantages. Caprae doesn't just buy companies; it builds an ecosystem where software, M&A as a Service (MaaS), and practical artificial intelligence empower small-to-medium businesses to improve decision-making, streamline back-office workflows, and compete at a world-class level.
              </p>
              <p>
                Ultimately, Caprae is driven by a deep commitment to corporate governance, high-horsepower talent, and long-term legacy creation. Culture is paramount at Caprae because while companies and market cycles come and go, culture endures. By pairing ambitious independent thinkers who possess character, courage, creativity, and a relentless work ethic with traditional businesses ripe for digital evolution, Caprae seeks to build a lasting financial and technological institution that changes the world.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="glass-panel p-6 space-y-3 border-cyan-500/20">
            <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
              <User className="w-5 h-5 text-cyan-400" />
              <h3 className="text-base font-bold text-white">2. Why do you want to work at Caprae Capital?</h3>
            </div>
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              <p>
                I want to work at Caprae Capital because I am deeply inspired by Kevin Hong’s founder/operator-first philosophy and the firm's focus on raw "horsepower over mileage." Many traditional firms prioritize academic pedigrees and cookie-cutter resumes over independent thinking and raw execution power. Caprae’s belief in identifying elite talent before it is stamped on a resume resonates strongly with my personal drive to master my craft, build world-class products, and take on intense challenges with physical and mental stamina.
              </p>
              <p>
                Furthermore, as a full-stack engineer, the opportunity to build proprietary software like SaaSquatch that directly powers real-world M&A deals and drives post-acquisition AI transformation is extraordinarily exciting. Building internal tools that serve thousands of users and directly unlock millions of dollars in EBITDA upside is far more impactful than building incremental features for typical SaaS platforms. I thrive in high-speed, high-accountability environments where speed of communication, intensity, and intellectual honesty are rewarded.
              </p>
              <p>
                Caprae’s vision of M&A as a seven-year operational journey matches my conviction that artificial intelligence will create the largest wealth-generation window in SMB history. I want to be on the front lines with Caprae—engineering cutting-edge AI leadgen tools, optimizing operations, and proving that small teams with burning desire and world-class technology can out-compete multi-billion-dollar legacy private equity funds.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="glass-panel p-6 space-y-3 border-purple-500/20">
            <div className="flex items-center space-x-2 border-b border-white/10 pb-3">
              <Building className="w-5 h-5 text-purple-400" />
              <h3 className="text-base font-bold text-white">3. How is Caprae Changing the ETA Space and Broader PE?</h3>
            </div>
            <div className="text-xs text-slate-300 space-y-3 leading-relaxed">
              <p>
                Caprae Capital is fundamentally reshaping the ETA space and broader private equity by shifting the primary driver of value creation from financial engineering to post-acquisition operational and AI-driven expansion. Traditional PE funds rely on financial leverage, dividend recapitalizations, and multiple expansion driven by broader market cycles. Caprae turns this model on its head by treating M&A as a seven-year technology enablement journey. The real alpha is generated *after* closing the deal by plugging in proprietary AI modules, automating manual workflows, and implementing MaaS (M&A as a Service) systems.
              </p>
              <p>
                In the traditional search fund / ETA ecosystem, searchers spend up to 70% of their time manually scouring databases, sending generic broker emails, and wrestling with fragmented data. Caprae revolutionizes ETA sourcing by providing proprietary in-house tools like SaaSquatch. These tools automate off-market lead discovery, detect legacy tech stacks, measure founder retirement signals, and identify operational bottlenecks before an outreach email is even sent. This lowers the cost of deal acquisition and drastically increases deal conversion velocity for searchers.
              </p>
              <p>
                Finally, Caprae is redefining institutional PE culture. By replacing bureaucracy with high-speed communication, radical transparency, and a #BleedandBuild mentality, Caprae demonstrates that smaller, tech-empowered operator teams can execute faster than legacy funds. By proving that lower-middle-market SMBs can achieve SaaS-like margins through AI deployment, Caprae is establishing a blueprint for the future of private equity.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Brief Logistics & Employment Status Questions */}
      {activeSection === 'brief' && (
        <div className="glass-panel p-6 space-y-4">
          <h3 className="text-sm font-bold text-white border-b border-white/10 pb-3 flex items-center space-x-2">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Employment Status, Logistics & Expectations Confirmation</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-slate-400 font-medium">1. Current Working Status in the US:</span>
              <p className="text-white font-bold">Authorized to work in the US (US Citizen / Green Card / Standard US Employment Authorization).</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-slate-400 font-medium">2. Minimum 40 Hours/Week Availability:</span>
              <p className="text-emerald-400 font-bold">Yes, 100% committed to working 40+ hours per week full-time.</p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-1">
              <span className="text-slate-400 font-medium">3. Expected Salary:</span>
              <p className="text-white font-bold">Competitive Full-Stack Developer Rate ($90,000 - $130,000 / yr, negotiable based on role level & performance incentives).</p>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
              <span className="text-emerald-300 font-medium">4. Employment Expectations Confirmation:</span>
              <ul className="text-slate-300 space-y-1 list-disc list-inside">
                <li>Confirmed: 3-month probationary period.</li>
                <li>Confirmed: 9 AM - 6 PM EST training program (2-3 months).</li>
                <li>Confirmed: Available during off-hours (&lt;2 hrs/wk) for time-sensitive projects/emergencies.</li>
                <li>Confirmed: Ready to start immediately upon selection.</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Reapplicant & Philosophy Questions */}
      {activeSection === 'reapplicant' && (
        <div className="glass-panel p-6 space-y-4">
          <h3 className="text-sm font-bold text-white border-b border-white/10 pb-3 flex items-center space-x-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Caprae Culture & Philosophy Questions</span>
          </h3>

          <div className="space-y-4 text-xs text-slate-300">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
              <span className="font-bold text-amber-400 text-sm">Q: What do you think is Caprae’s unfair advantage?</span>
              <p className="leading-relaxed">
                Caprae’s unfair advantage lies in its proprietary software capability (e.g. SaaSquatch), paired with a post-acquisition AI/MaaS transformation model. While legacy PE firms rely on external brokers and third-party tools that everyone else uses, Caprae builds custom scrapers, AI enrichment pipelines, and internal tools. This allows Caprae to find off-market deals before they hit brokers and expand EBITDA margins by 200-400 bps immediately post-close.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
              <span className="font-bold text-cyan-400 text-sm">Q: What does “To become a legend, you must take down legends” mean to you?</span>
              <p className="leading-relaxed">
                To me, this quote represents the courage to reject conventional wisdom and challenge entrenched industry incumbents. In the context of Caprae, taking down legends means out-performing billion-dollar PE legacy funds not through size, but through superior software, insane speed of execution, raw horsepower, and AI automation. It means mastering your craft so thoroughly that your output eclipses long-established competitors.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-2">
              <span className="font-bold text-emerald-400 text-sm">Q: What do you think Caprae’s culture will be like?</span>
              <p className="leading-relaxed">
                Caprae’s culture is intense, transparent, fast-paced, and meritocratic. It operates like a high-performance sports team or elite tech startup (#BleedandBuild), where communication speed is paramount, excuses are eliminated, and high-horsepower individuals take extreme ownership of outcomes while maintaining humor and humility.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
