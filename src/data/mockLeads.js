export const INITIAL_LEADS = [
  {
    id: "lead-001",
    companyName: "Apex Logistics & Supply Solutions",
    domain: "apexlogistics-us.com",
    industry: "Third-Party Logistics & Freight",
    naicsCode: "488510",
    geography: "Dallas, TX",
    annualRevenue: "$14.2M",
    ebitda: "$2.8M",
    employeeCount: 68,
    founderAge: 59,
    retirementRisk: "High (Founder Retiring)",
    techStack: ["Legacy AS400", "QuickBooks Desktop", "Excel Spreadsheets", "WordPress"],
    aiReadinessScore: 32, // Out of 100
    ebitdaUpsidePotential: "+ $1.15M / yr",
    enrichmentStatus: "Enriched",
    keyContacts: [
      { name: "Robert Miller", title: "Founder & CEO", email: "rmiller@apexlogistics-us.com", linkedin: "linkedin.com/in/robert-miller-apex" },
      { name: "Sarah Jenkins", title: "VP Operations", email: "sjenkins@apexlogistics-us.com", linkedin: "linkedin.com/in/sarah-jenkins-ops" }
    ],
    buyingIntentSignal: "High (Hiring Freeze in Back Office, Manual Dispatch Bottlenecks)",
    aiAutomationOpportunities: [
      "Automated Freight Rate Scraping & Dynamic Dispatch Routing",
      "AI OCR Invoice & Bill of Lading Processing",
      "Predictive Fleet Maintenance & AI Dispatcher Bot"
    ],
    matchScore: 96
  },
  {
    id: "lead-002",
    companyName: "Vanguard HVAC & Facility Services",
    domain: "vanguardhvac-service.com",
    industry: "Commercial Facility Maintenance",
    naicsCode: "238220",
    geography: "Columbus, OH",
    annualRevenue: "$8.7M",
    ebitda: "$1.6M",
    employeeCount: 42,
    founderAge: 62,
    retirementRisk: "High (No Succession Plan)",
    techStack: ["ServiceTitan (Basic)", "Excel", "Paper Work Orders", "GSuite"],
    aiReadinessScore: 45,
    ebitdaUpsidePotential: "+ $720K / yr",
    enrichmentStatus: "Enriched",
    keyContacts: [
      { name: "Dave Vance", title: "President & Owner", email: "dave@vanguardhvac-service.com", linkedin: "linkedin.com/in/dave-vance-hvac" }
    ],
    buyingIntentSignal: "Medium (Seeking M&A Advisor Advisory)",
    aiAutomationOpportunities: [
      "AI Technician Route Optimization & Job Estimator",
      "Automated Customer Re-booking & Maintenance Reminder AI Engine",
      "AI Parts Inventory Forecasting"
    ],
    matchScore: 92
  },
  {
    id: "lead-003",
    companyName: "Precision CNC Machining Corp",
    domain: "precisioncnc-mfg.com",
    industry: "Industrial Manufacturing",
    naicsCode: "332710",
    geography: "Milwaukee, WI",
    annualRevenue: "$22.5M",
    ebitda: "$4.1M",
    employeeCount: 110,
    founderAge: 56,
    retirementRisk: "Medium",
    techStack: ["Global Shop Solutions ERP", "Legacy CAD/CAM", "Outlook 2016"],
    aiReadinessScore: 28,
    ebitdaUpsidePotential: "+ $1.85M / yr",
    enrichmentStatus: "Enriched",
    keyContacts: [
      { name: "Gary Higgins", title: "Managing Partner", email: "ghiggins@precisioncnc-mfg.com", linkedin: "linkedin.com/in/gary-higgins-cnc" },
      { name: "Elena Rostova", title: "Head of Manufacturing", email: "erostova@precisioncnc-mfg.com", linkedin: "linkedin.com/in/elena-rostova-mfg" }
    ],
    buyingIntentSignal: "High (Private Equity Inquiry Recorded)",
    aiAutomationOpportunities: [
      "AI Quality Control Vision Inspection",
      "Automated RFQ & Material Cost Estimator",
      "Predictive Machine Failure Analytics"
    ],
    matchScore: 94
  },
  {
    id: "lead-004",
    companyName: "Horizon Health IT Solutions",
    domain: "horizonhealth-tech.io",
    industry: "Healthcare Software & Billing",
    naicsCode: "541512",
    geography: "Tampa, FL",
    annualRevenue: "$6.2M",
    ebitda: "$1.9M",
    employeeCount: 28,
    founderAge: 48,
    retirementRisk: "Low (Burnout/Exit Seeking)",
    techStack: ["React", "PostgreSQL", "AWS S3", "Stripe", "HubSpot"],
    aiReadinessScore: 78,
    ebitdaUpsidePotential: "+ $610K / yr",
    enrichmentStatus: "Enriched",
    keyContacts: [
      { name: "Dr. Marcus Thorne", title: "Founder & CTO", email: "mthorne@horizonhealth-tech.io", linkedin: "linkedin.com/in/marcusthorne-md" }
    ],
    buyingIntentSignal: "High (Expressed Exit Interest on MicroAcquire)",
    aiAutomationOpportunities: [
      "AI Medical Billing Claim Denials Auto-Resubmission",
      "HIPAA Compliant Patient Intake Agent"
    ],
    matchScore: 89
  },
  {
    id: "lead-005",
    companyName: "Crestview Commercial Property Mgmt",
    domain: "crestviewpm-group.com",
    industry: "Real Estate Services",
    naicsCode: "531312",
    geography: "Phoenix, AZ",
    annualRevenue: "$11.4M",
    ebitda: "$2.2M",
    employeeCount: 54,
    founderAge: 64,
    retirementRisk: "Critical (Imminent Retirement)",
    techStack: ["Yardi Breeze", "AppFolio", "Zendesk", "Basic Excel"],
    aiReadinessScore: 38,
    ebitdaUpsidePotential: "+ $980K / yr",
    enrichmentStatus: "Enriched",
    keyContacts: [
      { name: "Charles Crestview", title: "Owner & CEO", email: "charles@crestviewpm-group.com", linkedin: "linkedin.com/in/charles-crestview" }
    ],
    buyingIntentSignal: "High (Son declined taking over business)",
    aiAutomationOpportunities: [
      "24/7 AI Tenant Support & Maintenance Triage Bot",
      "Lease Audit & Automated Escalation Tracker",
      "AI Rent Collection & Delinquency Follow-up Workflow"
    ],
    matchScore: 97
  }
];

export const SCRAPING_DOMAINS_SAMPLE = [
  { domain: "sunbelt-machining.com", industry: "Manufacturing", location: "Charlotte, NC", estRevenue: "$9.5M" },
  { domain: "tri-state-freight.com", industry: "Logistics", location: "Cincinnati, OH", estRevenue: "$18.1M" },
  { domain: "midwest-facility-care.com", industry: "Facility Mgmt", location: "Indianapolis, IN", estRevenue: "$7.4M" },
  { domain: "delta-waterworks-inc.com", industry: "Utility Contracting", location: "Memphis, TN", estRevenue: "$12.0M" },
  { domain: "oakridge-distribution.com", industry: "Wholesale Dist", location: "Kansas City, MO", estRevenue: "$15.6M" }
];
