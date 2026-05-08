import React, { useEffect, useRef, useState } from 'react';
import {
  FiAward,
  FiBriefcase,
  FiBook,
  FiCode,
  FiDownload,
  FiGithub,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiPhone,
  FiTrendingUp,
  FiX,
} from 'react-icons/fi';

// ─── DATA ─────────────────────────────────────────────────────────────────────

const resumeUrl = '/Parth_Joshi_Resume_May_2026.pdf';

const profile = {
  name: 'Parth Joshi',
  location: 'Noida, Uttar Pradesh',
  email: 'joshiparthjoshi12@gmail.com',
  phone: '+91 9012061051',
  summary:
    'AI Engineer and Full Stack Developer with 2.5+ years of production experience at Grant Thornton Bharat LLP, delivering enterprise technology solutions in a Big-5 consulting environment. Specialises in agentic AI systems, RAG pipelines, and LLM application development using LangChain and LangGraph, complemented by strong full-stack engineering across React, Node.js, FastAPI, and PostgreSQL. IBM Certified in RAG and Agentic AI (2026). Proven ability to architect scalable multi-tenant systems, lead client-facing delivery, and translate complex business requirements into production AI solutions.',
  linkedIn: 'https://www.linkedin.com/in/parth-j-59021089/',
  github: 'https://github.com/ParthJoshi-2024',
};

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const heroStats = [
  { label: 'Years Delivering', end: 2.5, suffix: '+', decimals: 1 },
  { label: 'Production Uptime', end: 99.9, suffix: '%', decimals: 1 },
  { label: 'API Endpoints', end: 200, suffix: '+', decimals: 0 },
  { label: 'Tickets Resolved', end: 500, suffix: '+', decimals: 0 },
];

const skills = [
  {
    title: 'AI Engineering',
    color: 'violet',
    items: [
      'LangChain', 'LangGraph', 'Agentic AI Systems', 'RAG Pipelines',
      'Multi-Agent Orchestration (CrewAI, AutoGen)', 'Prompt Engineering',
      'OpenAI API', 'Gemini API', 'Hugging Face Transformers',
      'Vector Databases (FAISS, Chroma DB)', 'Model Context Protocol (MCP)', 'Google ADK',
    ],
  },
  {
    title: 'Frontend',
    color: 'cyan',
    items: [
      'React.js', 'TypeScript', 'JavaScript', 'Redux Toolkit', 'Zustand',
      'TanStack Query', 'Tailwind CSS', 'Bootstrap', 'Material-UI', 'Recharts', 'ChartJS',
      'React Hook Form', 'HTML5 / CSS3',
    ],
  },
  {
    title: 'Backend',
    color: 'emerald',
    items: [
      'Node.js', 'Express.js', 'FastAPI', 'RESTful API Design',
      'Async Programming', 'JWT Authentication', 'Keycloak', 'SSE Streaming',
      'Yup', 'Joi', 'Sharp',
    ],
  },
  {
    title: 'Databases',
    color: 'sky',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'SQLAlchemy', 'Alembic'],
  },
  {
    title: 'DevOps & Tools',
    color: 'amber',
    items: [
      'Git', 'GitHub', 'Azure DevOps', 'CI/CD Pipelines', 'Docker', 'Nginx',
      'AWS S3', 'Razorpay', 'Bitbucket', 'Postman', 'VS Code', 'Cursor', 'WindSurf',
    ],
  },
  {
    title: 'Consulting Skills',
    color: 'rose',
    items: [
      'Stakeholder Management', 'Technical Proposals', 'Requirements Analysis',
      'Solution Architecture', 'FDD/TDD Docs', 'Agile Delivery',
      'Production Support', 'Jira / Trello',
    ],
  },
];

const experience = [
  {
    role: 'Senior Associate: AI Engineer & Full Stack Developer',
    company: 'Grant Thornton Bharat LLP',
    period: 'Sep 2023 – Present',
    location: 'Noida, Uttar Pradesh',
    overview:
      'Delivered end-to-end technology solutions across 3 enterprise client engagements within a top-premium consulting environment, combining full-stack engineering with client-facing delivery. Contributed to proposal development, solution architecture, client demos, and steering committee presentations alongside core development work.',
    bullets: [
      'Engineered 200+ RESTful endpoints and a 500+ component React library across high-value supply chain and ticketing engagements.',
      'Built Azure DevOps CI/CD pipelines from scratch; reduced release cycle from 2 days to 4 hours, cutting effort by 40%.',
      'Maintained 99.9% platform uptime over 12 months with SLA obligations; resolved 500+ production tickets, avg. resolution under 4 hours.',
      'Reduced recurring incident frequency by 60% through root cause analysis and permanent platform fixes.',
      'Delivered real-time KPI dashboards to 3k+ daily business users, replacing manual Excel reporting and saving 3+ hours/week per stakeholder.',
      'Conducted weekly code reviews; established standards that reduced post-deployment bugs by 30%.',
      'Presented technical architectures and demos to C-level and Operations Directors; contributed to successful client renewals.',
    ],
  },
];

const aiProject = {
  title: 'QueryAI',
  subtitle: 'Natural Language BI Platform',
  timeframe: 'Mar 2026 – Present',
  type: 'Independent Project',
  tag: 'Agentic AI · NL2SQL',
  description:
    'Independently designed and delivered a production-grade, multi-tenant natural language Business Intelligence platform. Any user can connect a PostgreSQL database or upload a CSV, ask business questions in plain English, and receive a professional interactive dashboard with charts, KPI cards, and AI-generated insights, all in real time.',
  highlights: [
    {
      metric: '6-node Pipeline',
      detail:
        'LangGraph 0.2+ StateGraph with query router, SQL generation agent, ReAct reasoning, Reflection validator, chart selector, and anomaly detection. Each node maintains typed state via TypedDict.',
    },
    {
      metric: 'Live Reasoning Trace',
      detail:
        'Real-time collapsible UI streaming every AI decision step (routing, SQL generated, reflection verdict, chart selected) as it happens, delivering production-level AI transparency.',
    },
    {
      metric: 'SSE Streaming',
      detail:
        'Token-by-token display of agent reasoning via FastAPI async backend to React 18 frontend, with response experience comparable to production AI products.',
    },
    {
      metric: 'Multi-tenant Security',
      detail:
        'Complete user data isolation at DB query level, httpOnly JWT cookie auth, parameterised SQL execution throughout (zero string-formatted queries), Pydantic v2 validation on all endpoints.',
    },
    {
      metric: 'Secondary Features',
      detail:
        'Schema-aware prompt suggestions on DB connect, conversational follow-up memory via LangGraph shared state, anomaly detection cards, one-click PDF dashboard export, full query audit log.',
    },
  ],
  stack: [
    'React 18', 'TypeScript', 'FastAPI', 'LangChain 0.3+', 'LangGraph 0.2+',
    'OpenAI GPT-4o-mini', 'PostgreSQL', 'SQLAlchemy 2.0 async',
    'Alembic', 'Pydantic v2', 'Recharts', 'Tailwind CSS',
  ],
};

const pharmacyProject = {
  title: 'Pharmacy E-Commerce Platform',
  subtitle: 'Full Stack · Production-Ready',
  timeframe: 'Feb 2026 – May 2026',
  type: 'Independent Project',
  tag: 'Full Stack · E-Commerce',
  description:
    'Independently designed and delivered a production-grade, full-stack pharmacy e-commerce platform from scratch. Built a multi-role system across four distinct portals in a single codebase, integrated live payment processing, DLT-compliant transactional SMS, automated cloud backups, and a unified online + offline CRM, deployed on a self-managed Docker + Nginx cloud infrastructure.',
  highlights: [
    {
      metric: 'Multi-Role Architecture',
      detail:
        'Four scoped portals in one codebase: customer storefront, admin dashboard, offline CRM, and pharmacist portal, each with isolated access control, separate UI flows, and role-specific API surface.',
    },
    {
      metric: 'Payment & Security',
      detail:
        'Full Razorpay integration with HMAC-SHA256 webhook signature verification and server-side cart re-validation on payment as a price manipulation defence; manual refund workflow included.',
    },
    {
      metric: 'Self-Managed Infrastructure',
      detail:
        "Dockerised 4-container stack (DB, backend, frontend, Nginx) on a self-managed Ubuntu cloud VM with Let's Encrypt SSL; automated daily pg_dump compressed backups to AWS S3 with 5-backup retention.",
    },
    {
      metric: 'DLT-Compliant SMS + Email',
      detail:
        "Navigated India's telecom DLT registration end-to-end (brand, sender ID, 7 template approvals); MSG91 Campaign API for 7 event-based SMS flows and ZeptoMail SMTP for 10 transactional HTML email templates.",
    },
    {
      metric: 'Offline CRM Integration',
      detail:
        'Admin uploads Excel exports from offline billing software; system validates, deduplicates, and imports customer and transaction history for a unified online/offline revenue view with win-back campaign tooling.',
    },
    {
      metric: 'Scale',
      detail:
        '25+ screens, 40+ API endpoints, 22+ DB tables, 5 third-party integrations (Razorpay, MSG91, ZeptoMail, AWS S3, cloud hosting), 10 email templates, 7 SMS campaign events.',
    },
  ],
  stack: [
    'React 18', 'Node.js', 'Express.js', 'PostgreSQL 16', 'Redux Toolkit',
    'TanStack Query', 'Bootstrap 5', 'Recharts', 'Docker', 'Nginx', 'AWS S3',
    'Razorpay', 'MSG91', 'ZeptoMail', 'Sharp', 'JWT',
  ],
};

const workProjects = [
  {
    title: 'Supply Chain Traceability Platform',
    role: 'Full Stack Developer',
    tag: 'Enterprise · Supply Chain',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redux Toolkit', 'Bootstrap', 'Material-UI', 'Yup', 'Joi', 'Chart.js', 'Keycloak', 'Azure DevOps', 'REST APIs'],
    bullets: [
      'Architected and delivered a scalable visibility platform tracking product movement across 4 stakeholder groups (manufacturers, suppliers, vendors, and enterprise clients) in a high-traffic production environment.',
      'Owned full API architecture; engineered 200+ RESTful endpoints enabling secure, real-time data exchange across all supply chain modules.',
      'Built a reusable React component library of 500+ components with dynamic forms and multi-layer validation, reducing frontend dev time for new features by 35%.',
      'Engineered Azure DevOps CI/CD pipeline from scratch across 3 environments; reduced release cycle from 2 days to 4 hours and cut release effort by 40%.',
      'Delivered real-time KPI dashboards to 3k+ business users daily, replacing manual Excel reporting and saving 3+ hours per stakeholder per week.',
      'Presented technical architecture and delivery progress directly to Operations Directors and C-level stakeholders across client engagements.',
    ],
  },
  {
    title: 'Supply Chain Platform: Production Support',
    role: 'Support Engineer',
    tag: 'Mission-Critical · SLA',
    stack: ['React', 'Node.js', 'MySQL', 'Stored Procedures', 'Production Monitoring'],
    bullets: [
      'Served as primary technical point of contact for a live enterprise supply chain platform with mission-critical SLA obligations.',
      'Achieved 99.9% platform uptime over 12 months through proactive health monitoring, pre-emptive incident response, and rapid triage.',
      'Resolved 500+ production tickets with avg. resolution time under 4 hours, consistently meeting SLA and preventing client escalations.',
      'Executed complex MySQL stored procedures for real-time platform demands; authored daily operational logs and performance summaries for senior management.',
      'Delivered root cause analysis reports for major incidents; permanent fixes reduced recurring incident frequency by 60%.',
    ],
  },
  {
    title: 'Enterprise Ticketing System',
    role: 'Full Stack Developer',
    tag: 'Multi-tenant SaaS',
    stack: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
    bullets: [
      'Led requirement analysis workshops and integration scoping before development commenced.',
      'Engineered the complete full-stack solution (React frontend with Node.js + PostgreSQL backend), covering the entire ticket lifecycle end-to-end.',
      'Architected for multi-tenant SaaS deployment from day one, enabling white-labelled replication across future enterprise clients with zero re-engineering.',
      'Analysed 6 months of support trend data to identify top 5 recurring issue patterns; pre-emptive fixes reduced incoming ticket volume by 20% (~80 to ~64/month).',
      'Designed and documented RESTful APIs for the full ticket lifecycle (creation, assignment, escalation, closure); served as technical contract for client integration teams.',
    ],
  },
];

const achievements = [
  { metric: '2×', detail: 'Spot Award winner (Mar 2025 & Sep 2025) for consistent high-quality delivery and technical excellence.' },
  { metric: '99.9%', detail: 'Platform uptime maintained over 12 months in mission-critical production with SLA obligations.' },
  { metric: '500+', detail: 'Production tickets resolved with avg. resolution time under 4 hours, consistently meeting SLA.' },
  { metric: '80%', detail: 'Release cycle reduction from 2 days to 4 hours via CI/CD pipeline implementation.' },
  { metric: '60%', detail: 'Decrease in recurring incident frequency through root cause analysis and permanent fixes.' },
  { metric: '20%', detail: 'Reduction in incoming ticket volume through pre-emptive platform improvements.' },
  { metric: '3k+', detail: 'Business users benefiting from real-time dashboards, saving 3+ hours per stakeholder per week.' },
  { metric: '30%', detail: 'Fewer post-deployment bugs after implementing structured coding standards and review processes.' },
];

const certifications = [
  { name: 'IBM RAG and Agentic AI Professional Certificate (Coursera / IBM)', year: '2026' },
  { name: 'Google ADK (Well Authentic YouTube Channel)', year: '2026' },
  { name: "Ed Donner's AI Engineering Core Track: LLM Engineering, RAG, QLoRA, Agents", year: 'Udemy' },
  { name: "Ed Donner's AI Engineering Agentic Task: The Complete Agent & MCP Course", year: 'Udemy' },
  { name: 'MERN Stack Development', year: 'Brain Mentors' },
  { name: 'TypeScript Masterclass', year: 'Code with Mosh' },
  { name: 'Python Bootcamp: Industry Ready', year: 'Code with Harry' },
  { name: 'SQL Certification', year: 'Simplilearn & Great Learning' },
  { name: 'Python Programming', year: 'Coding Ninjas' },
  { name: 'Java Programming', year: 'Coding Ninjas' },
];

const education = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'Dr. APJ Abdul Kalam Technical University, Lucknow',
  years: '2019 – 2023',
  grade: 'GPA: 8.4 / 10.0',
};

const coreCompetencies = [
  'Multi-tenant SaaS Architecture',
  'Agentic AI & LLM Integration',
  'Real-time Data Processing',
  'Production Support & Incident Mgmt',
  'Client-Facing Technical Delivery',
  'Supply Chain Technology',
  'Business Intelligence Platforms',
  'API Design & Microservices',
  'Database Design & Optimization',
  'CI/CD Pipeline Development',
  'Code Review & Quality Assurance',
  'Stakeholder Communication',
  'Agile Development Practices',
];

// ─── SKILL BADGE COLORS ───────────────────────────────────────────────────────

const skillColors: Record<string, { badge: string; header: string }> = {
  violet: {
    badge: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-900/30 dark:text-violet-300 dark:border-violet-700/50',
    header: 'text-violet-600 dark:text-violet-400',
  },
  cyan: {
    badge: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700/50',
    header: 'text-cyan-600 dark:text-cyan-400',
  },
  emerald: {
    badge: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-700/50',
    header: 'text-emerald-600 dark:text-emerald-400',
  },
  sky: {
    badge: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-700/50',
    header: 'text-sky-600 dark:text-sky-400',
  },
  amber: {
    badge: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700/50',
    header: 'text-amber-600 dark:text-amber-400',
  },
  rose: {
    badge: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-900/30 dark:text-rose-300 dark:border-rose-700/50',
    header: 'text-rose-600 dark:text-rose-400',
  },
};

// ─── HOOKS ────────────────────────────────────────────────────────────────────

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

function useShowAfterScroll(threshold = 400) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > threshold);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return show;
}


function useCountUp(end: number, suffix = '', decimals = 0, duration = 1800) {
  const [value, setValue] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setTriggered(true); obs.disconnect(); }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!triggered) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // ease-out quart
      setValue(eased * end);
      if (progress < 1) requestAnimationFrame(animate);
      else setValue(end);
    };
    requestAnimationFrame(animate);
  }, [triggered, end, duration]);

  const display = (decimals > 0 ? value.toFixed(decimals) : Math.floor(value).toString()) + suffix;
  return { ref, display };
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

/** Scroll-triggered fade-up reveal for a single block */
function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        filter: visible ? 'blur(0)' : 'blur(4px)',
        transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1), filter 0.7s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      {children}
    </div>
  );
}

/** Scroll-triggered reveal with staggered children */
function RevealStagger({ children, className = '', stagger = 70 }: { children: React.ReactNode; className?: string; stagger?: number }) {
  const { ref, visible } = useScrollReveal();
  const items = React.Children.toArray(children);
  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            filter: visible ? 'blur(0)' : 'blur(3px)',
            transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${i * stagger}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i * stagger}ms, filter 0.5s ease ${i * stagger}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

function SectionTitle({
  title,
  icon: Icon,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500 dark:bg-cyan-400/10 dark:text-cyan-400">
        <Icon className="h-4 w-4" />
      </span>
      <h2 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-lg">
        {title}
      </h2>
      <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800" />
    </div>
  );
}

function SubLabel({ children, accent }: { children: React.ReactNode; accent?: string }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <div
        className="shrink-0 rounded-md border-l-[3px] px-3 py-1.5"
        style={accent ? {
          borderLeftColor: accent,
          backgroundColor: `${accent}12`,
          borderTopColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent',
        } : undefined}
      >
        <span
          className={`text-xs font-bold tracking-wide ${accent ? '' : 'text-slate-600 dark:text-slate-300'}`}
          style={accent ? { color: accent } : undefined}
        >
          {children}
        </span>
      </div>
      <div className="h-px flex-1" style={{ backgroundColor: accent ? `${accent}30` : undefined }} />
    </div>
  );
}

function StatCard({ label, end, suffix, decimals = 0 }: { label: string; end: number; suffix: string; decimals?: number }) {
  const { ref, display } = useCountUp(end, suffix, decimals);
  return (
    <div
      ref={ref}
      className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/80 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-cyan-700/60"
    >
      <p className="text-[1.6rem] font-bold leading-none tracking-tight text-cyan-500 dark:text-cyan-400">
        {display}
      </p>
      <p className="mt-1.5 text-[11px] leading-4 text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const scrollProgress = useScrollProgress();
  const showBackToTop = useShowAfterScroll(400);

  useEffect(() => {
    // Track all sections except contact via IntersectionObserver
    const ids = ['about', 'experience', 'projects', 'skills'];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-20% 0px -50% 0px' }
      );
      obs.observe(el);
      return obs;
    });

    // Contact section: activate when user scrolls near the bottom of the page,
    // OR when the contact section itself is visible in the upper viewport.
    const contactEl = document.getElementById('contact');
    let contactObs: IntersectionObserver | null = null;
    if (contactEl) {
      contactObs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection('contact'); },
        { rootMargin: '0px 0px -10% 0px' } // fires as soon as contact enters lower 90% of viewport
      );
      contactObs.observe(contactEl);
    }

    const onScroll = () => {
      const atBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 80;
      if (atBottom) setActiveSection('contact');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
      contactObs?.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">

      {/* ── NAVBAR ─────────────────────────────────────────────────────────── */}
      {/* ── SCROLL PROGRESS BAR ─────────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 z-[60] h-[2px] bg-cyan-500 transition-all duration-100" style={{ width: `${scrollProgress}%` }} />

      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl transition-colors dark:border-slate-800/80 dark:bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
          <a href="#about" className="flex min-w-0 items-center gap-3 group">
            {/* PJ monogram */}
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-xs font-extrabold tracking-tight text-cyan-400 transition-colors group-hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:group-hover:bg-white">
              PJ
            </span>
            {/* Name + role */}
            <div className="min-w-0">
              <p className="truncate text-sm font-bold leading-tight text-slate-900 dark:text-slate-100 sm:text-[0.9375rem]">
                Parth Joshi
              </p>
              <p className="hidden truncate text-[11px] text-slate-500 dark:text-slate-400 sm:block">
                AI Engineer · Full Stack Developer
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 text-sm font-medium md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-cyan-500 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isActive
                      ? 'text-cyan-600 after:scale-x-100 dark:text-cyan-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={resumeUrl}
              download
              className="hidden items-center gap-1.5 rounded-lg bg-cyan-500 px-3.5 py-2 text-xs font-semibold text-slate-950 transition-all duration-200 hover:bg-cyan-400 active:scale-95 sm:inline-flex"
            >
              <FiDownload className="h-3.5 w-3.5" /> Resume
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 md:hidden dark:border-slate-700 dark:text-slate-300"
            >
              {menuOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950 md:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-900"
                >
                  {link.label}
                </a>
              ))}
              <a href={resumeUrl} download className="mt-1 flex items-center gap-2 rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-slate-950">
                <FiDownload className="h-4 w-4" /> Download Resume
              </a>
            </nav>
          </div>
        )}
      </header>

      <div className="mx-auto max-w-6xl px-4 pb-16 md:px-6">

        {/* ── HERO ───────────────────────────────────────────────────────────── */}
        <section id="about" className="py-8 md:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr] lg:items-start">

            {/* Left */}
            <div className="space-y-5">
              <span className="hero-in inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-400" style={{ animationDelay: '0ms' }}>
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                Open to Full-time Opportunities
              </span>

              <div className="hero-in space-y-4" style={{ animationDelay: '120ms' }}>
                <h1 className="text-[2rem] font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  Parth Joshi
                </h1>
                <div className="flex flex-wrap gap-2">
                  {['Full Stack Developer', 'AI Engineer', 'Consulting Technology'].map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              <p className="hero-in max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-[0.9375rem] sm:leading-8" style={{ animationDelay: '240ms' }}>
                {profile.summary}
              </p>

              <div className="hero-in grid grid-cols-2 gap-3 sm:grid-cols-4" style={{ animationDelay: '360ms' }}>
                {heroStats.map((stat) => (
                  <StatCard key={stat.label} {...stat} />
                ))}
              </div>

            </div>

            {/* Right: contact card */}
            <div
              className="hero-in overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
              style={{ animationDelay: '200ms' }}
            >
              {/* Card header */}
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800">
                <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-cyan-500/10" />
                <div className="absolute bottom-0 left-0 h-16 w-16 rounded-full bg-blue-500/5" />
                <div className="relative flex items-center gap-3.5">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-500/30 bg-cyan-500/15 text-sm font-extrabold tracking-tight text-cyan-400">
                    PJ
                  </span>
                  <div>
                    <p className="font-bold leading-tight text-white">{profile.name}</p>
                    <p className="mt-0.5 text-[11px] text-slate-400">Senior Associate @ Grant Thornton</p>
                  </div>
                </div>
                <div className="relative mt-3.5 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Open to Full-time Roles
                </div>
              </div>

              {/* Contact rows */}
              <div className="space-y-1 p-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-slate-50 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-cyan-400"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500">
                    <FiMail className="h-3.5 w-3.5" />
                  </span>
                  <span className="truncate">{profile.email}</span>
                </a>
                <a
                  href={`tel:${profile.phone}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors duration-150 hover:bg-slate-50 hover:text-cyan-600 dark:text-slate-300 dark:hover:bg-slate-800/70 dark:hover:text-cyan-400"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500">
                    <FiPhone className="h-3.5 w-3.5" />
                  </span>
                  {profile.phone}
                </a>
                <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-500">
                    <FiMapPin className="h-3.5 w-3.5" />
                  </span>
                  {profile.location}
                </div>
              </div>

              {/* Social buttons */}
              <div className="grid grid-cols-2 gap-2 px-4 pb-3">
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-cyan-600 dark:hover:text-cyan-400"
                >
                  <FiLinkedin className="h-4 w-4" /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-cyan-600 dark:hover:text-cyan-400"
                >
                  <FiGithub className="h-4 w-4" /> GitHub
                </a>
              </div>

              {/* CTA buttons */}
              <div className="grid grid-cols-2 gap-2 border-t border-slate-100 px-4 py-3 dark:border-slate-800">
                <a
                  href={resumeUrl}
                  download
                  className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:bg-cyan-400 active:scale-95"
                >
                  <FiDownload className="h-4 w-4" /> Download Resume
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-sm font-medium text-slate-700 transition-all duration-200 hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-cyan-600 dark:hover:text-cyan-400 active:scale-95"
                >
                  <FiMail className="h-4 w-4" /> Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-4 md:space-y-6">

          {/* ── EXPERIENCE ───────────────────────────────────────────────────── */}
          <Reveal>
            <section id="experience" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5 md:p-6">
              <SectionTitle title="Experience" icon={FiBriefcase} />
              {experience.map((job) => (
                <div key={job.company} className="relative pl-6">
                  <div className="absolute inset-y-0 left-0 w-[1.5px] bg-slate-200 dark:bg-slate-700" />
                  <div className="absolute left-[-4px] top-[7px] h-[9px] w-[9px] rounded-full bg-cyan-500 shadow-[0_0_0_3px_white] dark:shadow-[0_0_0_3px_#0f172a]" />

                  <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                        {job.role}
                      </h3>
                      <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">
                        {job.company} · {job.location}
                      </p>
                    </div>
                    <span className="self-start rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 dark:border-cyan-800/60 dark:bg-cyan-950/40 dark:text-cyan-400">
                      {job.period}
                    </span>
                  </div>

                  <p className="mb-4 text-sm leading-7 text-slate-600 dark:text-slate-400 italic">
                    {job.overview}
                  </p>

                  <ul className="space-y-2.5">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </Reveal>

          {/* ── PROJECTS ─────────────────────────────────────────────────────── */}
          <Reveal>
            <section id="projects" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5 md:p-6">
              <SectionTitle title="Projects" icon={FiCode} />

              {/* Personal Projects */}
              <SubLabel accent="#6AA13C">Personal Projects</SubLabel>
              <div className="mb-10 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="h-1" style={{ backgroundColor: '#6AA13C' }} />
                <div className="p-4 sm:p-5">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {aiProject.title}
                        <span className="ml-2 text-base font-normal text-slate-500 dark:text-slate-400">
                          · {aiProject.subtitle}
                        </span>
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {aiProject.type} · {aiProject.timeframe}
                      </p>
                    </div>
                    <span className="self-start rounded-full border px-3 py-1 text-xs font-medium" style={{ color: '#6AA13C', borderColor: '#6AA13C55', backgroundColor: '#6AA13C11' }}>
                      {aiProject.tag}
                    </span>
                  </div>

                  <p className="mb-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {aiProject.description}
                  </p>

                  <RevealStagger className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={60}>
                    {aiProject.highlights.map((h) => (
                      <div key={h.metric} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                        <p className="text-[0.8rem] font-bold" style={{ color: '#6AA13C' }}>{h.metric}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">{h.detail}</p>
                      </div>
                    ))}
                  </RevealStagger>

                  <div className="flex flex-wrap gap-1.5">
                    {aiProject.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pharmacy Project */}
              <div className="mb-10 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                <div className="h-1" style={{ backgroundColor: '#6AA13C' }} />
                <div className="p-4 sm:p-5">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                        {pharmacyProject.title}
                        <span className="ml-2 text-base font-normal text-slate-500 dark:text-slate-400">
                          · {pharmacyProject.subtitle}
                        </span>
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {pharmacyProject.type} · {pharmacyProject.timeframe}
                      </p>
                    </div>
                    <span className="self-start rounded-full border px-3 py-1 text-xs font-medium" style={{ color: '#6AA13C', borderColor: '#6AA13C55', backgroundColor: '#6AA13C11' }}>
                      {pharmacyProject.tag}
                    </span>
                  </div>

                  <p className="mb-5 text-sm leading-7 text-slate-700 dark:text-slate-300">
                    {pharmacyProject.description}
                  </p>

                  <RevealStagger className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={60}>
                    {pharmacyProject.highlights.map((h) => (
                      <div key={h.metric} className="rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                        <p className="text-[0.8rem] font-bold" style={{ color: '#6AA13C' }}>{h.metric}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-600 dark:text-slate-400">{h.detail}</p>
                      </div>
                    ))}
                  </RevealStagger>

                  <div className="flex flex-wrap gap-1.5">
                    {pharmacyProject.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Work Projects */}
              <SubLabel accent="#0891b2">Enterprise Projects @ Grant Thornton Bharat LLP</SubLabel>
              <div className="space-y-4">
                {workProjects.map((project, idx) => (
                  <Reveal key={project.title}>
                    <article className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700">
                      <div className={`h-0.5 ${idx === 0 ? 'bg-emerald-400' : idx === 1 ? 'bg-amber-400' : 'bg-violet-400'}`} />
                      <div className="p-4 sm:p-5">
                        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 sm:text-lg">
                                {project.title}
                              </h3>
                              <span className="shrink-0 rounded-full border border-cyan-200 bg-cyan-50 px-2 py-0.5 text-[10px] font-semibold text-cyan-700 dark:border-cyan-800/50 dark:bg-cyan-950/30 dark:text-cyan-400">
                                Enterprise
                              </span>
                            </div>
                            <span className="mt-1 inline-block rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                              {project.role}
                            </span>
                          </div>
                          <span className="self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                            {project.tag}
                          </span>
                        </div>

                        <ul className="mb-4 space-y-2">
                          {project.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                              <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        {project.stack && (
                          <div className="flex flex-wrap gap-1.5">
                            {project.stack.map((tech) => (
                              <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          </Reveal>

          {/* ── SKILLS ───────────────────────────────────────────────────────── */}
          <Reveal>
            <section id="skills" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5 md:p-6">
              <SectionTitle title="Technical Skills" icon={FiLayers} />

              {/*
                Row-based layout: category label pill (left) + skill badges (right).
                No card grid → no height mismatch. Every skill visible, instantly scannable.
              */}
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {skills.map((cat, i) => {
                  const colors = skillColors[cat.color];
                  return (
                    <div
                      key={cat.title}
                      className="flex flex-col gap-2 py-3 first:pt-0 last:pb-0 sm:flex-row sm:items-start sm:gap-5"
                      style={{
                        opacity: 0,
                        animation: `skillRowIn 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms both`,
                      }}
                    >
                      {/* Category label */}
                      <div className="sm:w-[7.5rem] sm:shrink-0 sm:pt-0.5">
                        <span className={`inline-block rounded-md border px-2.5 py-1 text-[11px] font-semibold leading-tight ${colors.badge}`}>
                          {cat.title}
                        </span>
                      </div>
                      {/* Skill badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {cat.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {/* Core Competencies — same row style, neutral grey label */}
                <div
                  className="flex flex-col gap-2 py-3 last:pb-0 sm:flex-row sm:items-start sm:gap-5"
                  style={{
                    opacity: 0,
                    animation: `skillRowIn 0.5s cubic-bezier(0.16,1,0.3,1) ${skills.length * 60}ms both`,
                  }}
                >
                  <div className="sm:w-[7.5rem] sm:shrink-0 sm:pt-0.5">
                    <span className="inline-block rounded-md border border-slate-200 bg-slate-100 px-2.5 py-1 text-[11px] font-semibold leading-tight text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      Competencies
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {coreCompetencies.map((comp) => (
                      <span
                        key={comp}
                        className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ── ACHIEVEMENTS ─────────────────────────────────────────────────── */}
          <Reveal>
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5 md:p-6">
              <SectionTitle title="Key Achievements" icon={FiTrendingUp} />
              <RevealStagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" stagger={55}>
                {achievements.map((a) => (
                  <div
                    key={a.metric}
                    className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800/60 dark:hover:border-cyan-700/40"
                  >
                    <p className="text-2xl font-bold tracking-tight text-cyan-500 dark:text-cyan-400">{a.metric}</p>
                    <p className="mt-1.5 text-xs leading-5 text-slate-600 dark:text-slate-400">{a.detail}</p>
                  </div>
                ))}
              </RevealStagger>
            </section>
          </Reveal>

          {/* ── CERTIFICATIONS ────────────────────────────────────────────────── */}
          <Reveal>
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5 md:p-6">
              <SectionTitle title="Certifications" icon={FiAward} />
              <ul className="grid gap-2 sm:grid-cols-2">
                {certifications.map((cert) => (
                  <li
                    key={cert.name}
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/60"
                  >
                    <span className="text-sm text-slate-700 dark:text-slate-300">{cert.name}</span>
                    <span className="shrink-0 rounded-full bg-cyan-100 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-400">
                      {cert.year}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* ── EDUCATION ─────────────────────────────────────────────────────── */}
          <Reveal>
            <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5 md:p-6">
              <SectionTitle title="Education" icon={FiBook} />
              <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 dark:border-slate-700 dark:bg-slate-800/60 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-slate-900 dark:text-slate-100">{education.degree}</p>
                  <p className="mt-0.5 text-sm text-slate-600 dark:text-slate-400">{education.institution}</p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{education.years}</span>
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-400">
                    {education.grade}
                  </span>
                </div>
              </div>
            </section>
          </Reveal>

          {/* ── CONTACT ──────────────────────────────────────────────────────── */}
          <Reveal>
            <section id="contact" className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-5 md:p-6">
              <SectionTitle title="Get in Touch" icon={FiMail} />
              <div className="grid gap-5 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/60">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Open to the right full-time opportunity.
                  </h3>
                  <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Currently a Senior Associate at Grant Thornton, actively considering senior roles in AI engineering and full-stack development. I bring 2.5+ years of production experience building agentic AI systems, RAG pipelines, and enterprise SaaS: the kind that ships, scales, and stays running.
                  </p>
                </div>
                <div className="space-y-3">
                  <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm transition-all hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-cyan-600">
                    <FiMail className="h-4 w-4 shrink-0 text-cyan-500" />
                    <span className="text-slate-700 dark:text-slate-300">{profile.email}</span>
                  </a>
                  <a href={`tel:${profile.phone}`} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm transition-all hover:border-cyan-400 dark:border-slate-700 dark:bg-slate-800/50 dark:hover:border-cyan-600">
                    <FiPhone className="h-4 w-4 shrink-0 text-cyan-500" />
                    <span className="text-slate-700 dark:text-slate-300">{profile.phone}</span>
                  </a>
                  <div className="grid grid-cols-2 gap-3">
                    <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-medium text-slate-700 transition-all hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-cyan-600 dark:hover:text-cyan-400">
                      <FiLinkedin className="h-4 w-4" /> LinkedIn
                    </a>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-sm font-medium text-slate-700 transition-all hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-cyan-600 dark:hover:text-cyan-400">
                      <FiGithub className="h-4 w-4" /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>
        </div>
      </div>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer className="border-t border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row md:px-6">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © 2026 Parth Joshi · Built with React & TypeScript
          </p>
          <div className="flex gap-4">
            <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-cyan-500">
              <FiLinkedin className="h-4 w-4" />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="text-slate-400 transition hover:text-cyan-500">
              <FiGithub className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.email}`} className="text-slate-400 transition hover:text-cyan-500">
              <FiMail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* ── BACK TO TOP ─────────────────────────────────────────────────────── */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-md transition-all duration-300 hover:border-cyan-400 hover:text-cyan-500 hover:shadow-cyan-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-cyan-600 dark:hover:text-cyan-400"
        style={{ opacity: showBackToTop ? 1 : 0, transform: showBackToTop ? 'translateY(0)' : 'translateY(12px)', pointerEvents: showBackToTop ? 'auto' : 'none' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>
    </div>
  );
}

export default App;
