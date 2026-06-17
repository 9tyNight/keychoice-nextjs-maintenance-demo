'use client'

import { useMemo, useState } from 'react'
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  CircleDot,
  Code2,
  Database,
  Gauge,
  GitPullRequestArrow,
  LayoutDashboard,
  ListChecks,
  MonitorSmartphone,
  PackageCheck,
  PanelsTopLeft,
  ShieldCheck,
  Sparkles,
  Wand2,
} from 'lucide-react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const navItems = [
  { label: 'Audit', icon: LayoutDashboard },
  { label: 'Figma', icon: MonitorSmartphone },
  { label: 'Pages', icon: PackageCheck },
  { label: 'Stack', icon: Database },
  { label: 'Handoff', icon: GitPullRequestArrow },
]

const velocity = [
  { phase: 'Audit', shipped: 4, reviewed: 7 },
  { phase: 'Figma', shipped: 7, reviewed: 10 },
  { phase: 'Pages', shipped: 10, reviewed: 12 },
  { phase: 'QA', shipped: 13, reviewed: 15 },
  { phase: 'Release', shipped: 16, reviewed: 18 },
]

const performance = [
  { name: 'Desktop', score: 95 },
  { name: 'Tablet', score: 92 },
  { name: 'Mobile', score: 94 },
  { name: 'SEO', score: 90 },
]

const features = [
  { name: 'Two-brand page template', type: 'Reusable layout', status: 'Ready', owner: 'Next.js' },
  { name: 'Figma spacing system', type: 'UI consistency', status: 'In QA', owner: 'React + CSS' },
  { name: 'Content update workflow', type: 'Maintenance', status: 'Next', owner: 'GitHub PRs' },
  { name: 'Forms and integrations check', type: 'Support', status: 'Scoped', owner: 'Node + AWS' },
]

const auditNotes = {
  ui: [
    'Translate approved Figma frames into responsive Next.js sections with matching spacing, typography, and component states.',
    'Reuse one page framework across both brands while preserving brand colors, content tone, and page-specific calls to action.',
    'Check desktop, tablet, and mobile breakpoints before handoff so layouts do not drift after content updates.',
  ],
  code: [
    'Map routes, shared components, Firebase reads, API calls, AWS touchpoints, and deployment flow before changing production paths.',
    'Ship small GitHub pull requests with screenshots, QA notes, and clear review scope for internal stakeholders.',
    'Create reusable templates only where they reduce repeated work across similar pages and future content changes.',
  ],
}

type IconType = typeof Activity

function MetricCard({ label, value, detail, icon: Icon }: { label: string; value: string; detail: string; icon: IconType }) {
  return (
    <section className="metric-card" aria-label={label}>
      <div className="metric-icon"><Icon size={18} /></div>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </section>
  )
}

export default function App() {
  const [activeAudit, setActiveAudit] = useState<'ui' | 'code'>('ui')
  const [selectedFeature, setSelectedFeature] = useState(features[0].name)
  const [lastReview, setLastReview] = useState('ready now')
  const notes = useMemo(() => auditNotes[activeAudit], [activeAudit])

  function runReview() {
    setActiveAudit((current) => (current === 'ui' ? 'code' : 'ui'))
    setLastReview(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
  }

  return (
    <main className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark"><PanelsTopLeft size={20} /></div>
          <div>
            <strong>Next.js Maintenance Desk</strong>
            <span>Figma-to-production proposal demo</span>
          </div>
        </div>

        <nav aria-label="Main navigation">
          {navItems.map(({ label, icon: Icon }) => (
            <button className={label === 'Audit' ? 'nav-item active' : 'nav-item'} key={label}>
              <Icon size={18} />
              {label}
            </button>
          ))}
        </nav>

        <div className="stack-card">
          <span>Built for this Upwork brief</span>
          <strong>React, Next.js, Node/Express, Firebase, AWS, GitHub</strong>
          <p>A compact demo of how I would maintain an existing site, implement Figma pages, and keep two brands consistent.</p>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            <h1>Existing Next.js websites, upgraded without drama.</h1>
            <p>Audit the current codebase, convert approved Figma designs into reusable responsive pages, update content carefully, and hand off clean GitHub pull requests.</p>
          </div>
          <div className="topbar-actions">
            <button className="ghost-button"><ShieldCheck size={16} /> Reviewable PRs</button>
            <button className="primary-button">Implementation plan <ArrowRight size={16} /></button>
          </div>
        </header>

        <section className="metrics-grid">
          <MetricCard label="Codebase audit" value="Route map" detail="pages, data, shared UI" icon={ListChecks} />
          <MetricCard label="Figma handoff" value="Pixel pass" detail="spacing, type, states" icon={MonitorSmartphone} />
          <MetricCard label="Two brands" value="Templates" detail="shared layouts, distinct content" icon={PackageCheck} />
          <MetricCard label="Quality gate" value="QA proof" detail="screenshots and notes" icon={Gauge} />
        </section>

        <section className="content-grid">
          <section className="panel audit-panel">
            <div className="panel-header">
              <div>
                <span className="section-label">Codebase intake</span>
                <h2>{activeAudit === 'ui' ? 'Figma implementation pass' : 'Existing code review pass'}</h2>
              </div>
              <button className="icon-button" onClick={runReview} aria-label="Switch review focus">
                <Wand2 size={17} />
              </button>
            </div>
            <div className="prompt-tabs">
              <button className={activeAudit === 'ui' ? 'selected' : ''} onClick={() => setActiveAudit('ui')}>Figma build</button>
              <button className={activeAudit === 'code' ? 'selected' : ''} onClick={() => setActiveAudit('code')}>Code map</button>
            </div>
            <div className="audit-output">
              {notes.map((line) => (
                <div className="audit-line" key={line}>
                  <CheckCircle2 size={17} />
                  <p>{line}</p>
                </div>
              ))}
            </div>
            <footer className="panel-footer">Review focus updated {lastReview}</footer>
          </section>

          <section className="panel velocity-panel">
            <div className="panel-header">
              <div>
                <span className="section-label">Stabilization flow</span>
                <h2>Structured work, visible progress</h2>
              </div>
              <span className="status-pill good">Review-ready</span>
            </div>
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={velocity}>
                <defs>
                  <linearGradient id="fixed" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#2563eb" stopOpacity={0.28} />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#d8e1ea" vertical={false} />
                <XAxis dataKey="phase" tickLine={false} axisLine={false} />
                <YAxis tickLine={false} axisLine={false} width={34} />
                <Tooltip />
                <Area type="monotone" dataKey="reviewed" stroke="#64748b" fill="transparent" strokeWidth={2} />
                <Area type="monotone" dataKey="shipped" stroke="#2563eb" fill="url(#fixed)" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </section>

          <section className="panel feature-panel">
            <div className="panel-header">
              <div>
                <span className="section-label">Feature queue</span>
                <h2>Pages and maintenance I can ship</h2>
              </div>
              <span className="status-pill">4 scoped items</span>
            </div>
            <div className="feature-list">
              {features.map((feature) => (
                <button
                  className={selectedFeature === feature.name ? 'feature-row selected' : 'feature-row'}
                  key={feature.name}
                  onClick={() => setSelectedFeature(feature.name)}
                >
                  <CircleDot size={16} />
                  <span>
                    <strong>{feature.name}</strong>
                    <small>{feature.type} - {feature.owner}</small>
                  </span>
                  <em>{feature.status}</em>
                </button>
              ))}
            </div>
          </section>

          <section className="panel backend-panel">
            <div className="panel-header">
              <div>
                <span className="section-label">Backend readiness</span>
                <h2>Site stack awareness</h2>
              </div>
              <span className="status-pill good">Scoped</span>
            </div>
            <div className="service-list">
              <div><Code2 size={18} /><strong>Frontend</strong><span>React, Next.js, responsive components</span></div>
              <div><Database size={18} /><strong>Data</strong><span>Firebase, Firestore, API contracts</span></div>
              <div><Activity size={18} /><strong>AWS</strong><span>S3, CloudFront, Lambda awareness</span></div>
              <div><Sparkles size={18} /><strong>SEO + UX</strong><span>Metadata, speed, polished journeys</span></div>
            </div>
            <ResponsiveContainer width="100%" height={154}>
              <BarChart data={performance}>
                <CartesianGrid stroke="#d8e1ea" vertical={false} />
                <XAxis dataKey="name" tickLine={false} axisLine={false} />
                <YAxis hide />
                <Tooltip />
                <Bar dataKey="score" fill="#f97316" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </section>
        </section>

        <section className="delivery-band">
          <GitPullRequestArrow size={20} />
          <div>
            <strong>How I would start your project</strong>
            <p>Clone the repositories, run the sites locally, document routes and shared components, implement the first approved Figma page, then continue with small PRs that include screenshots, notes, and clear rollback points.</p>
          </div>
        </section>
      </section>
    </main>
  )
}
