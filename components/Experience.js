// Months are 1-indexed. `end: null` means the role is ongoing.
const timeline = [
  { name: 'BuySimply', kind: 'work', start: [2026, 5], end: null },
  { name: 'TinyRocket Labs', kind: 'work', start: [2025, 10], end: null },
  { name: 'Edubaloo', kind: 'work', start: [2022, 5], end: [2026, 4] },
  { name: 'GDSC Lead', kind: 'community', start: [2021, 8], end: [2022, 7] },
  { name: 'Hult Prize', kind: 'community', start: [2020, 8], end: [2021, 7] },
  { name: 'Zercom', kind: 'work', start: [2020, 8], end: [2021, 1] },
  { name: 'Flux Africa', kind: 'work', start: [2020, 6], end: [2020, 8] },
  { name: 'HNG Internship', kind: 'work', start: [2020, 4], end: [2020, 5] },
  { name: 'Repotecc', kind: 'community', start: [2019, 12], end: [2025, 10] },
  { name: 'Glimpsegist', kind: 'work', start: [2017, 2], end: [2020, 7] },
];

const AXIS_START = 2017;
const AXIS_END = 2027;
const years = Array.from({ length: AXIS_END - AXIS_START }, (_, i) => AXIS_START + i);
const toPercent = ([year, month]) =>
  ((year + (month - 1) / 12 - AXIS_START) / (AXIS_END - AXIS_START)) * 100;
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formatDate = (date) => (date ? `${months[date[1] - 1]} ${date[0]}` : 'Present');

const experiences = [
  {
    company: 'BuySimply',
    role: 'Software Engineer · Contract',
    date: 'May 2026 – Present',
    description:
      'Building API-driven financial workflows for government-facing platforms: payments, budgeting, approvals, and tenant-specific configurations for distinct local-government entities.',
  },
  {
    company: 'TinyRocket Labs',
    role: 'Full Stack & AI Engineer',
    date: 'Oct 2025 – Present',
    description:
      'Building VectorLint across frontend, backend services, and CLI tooling. Work includes the GitHub App, AI workflow automation with n8n and Langflow, deployment pipelines, and infrastructure operations.',
  },
  {
    company: 'Edubaloo',
    role: 'Backend Developer',
    date: 'May 2022 – Apr 2026',
    description:
      'Built real-time assessment infrastructure, LLM content pipelines, payment integrations, and backend testing. Owned performance improvements across APIs and data access.',
  },
];

const earlier = [
  {
    company: 'Zercom',
    role: 'Full Stack Developer (Contract)',
    date: 'Aug 2020 – Jan 2021',
    summary: 'Employee data management software; cut WordPress page load from 4.2s to 1.8s.',
  },
  {
    company: 'Flux Africa',
    role: 'Full Stack Developer',
    date: 'Jun 2020 – Aug 2020',
    summary:
      'PHP and MySQL CRM with Twilio SMS automation; custom WordPress site for a tech podcast.',
  },
  {
    company: 'HNG Internship',
    role: 'Backend Intern',
    date: 'Apr 2020 – May 2020',
    summary: 'Built APIs for financial tools with a remote, cross-functional team.',
  },
  {
    company: 'Glimpsegist',
    role: 'Full Stack Developer',
    date: 'Feb 2017 – Jul 2020',
    summary: 'Built and ran a high-traffic entertainment blog and voting platform on my own.',
  },
];

function Waterfall() {
  return (
    <figure className="waterfall">
      <figcaption>
        <span className="mono-label">Career trace, 2017 – now</span>
        <span className="legend" aria-hidden="true">
          <span className="legend-work">Engineering</span>
          <span className="legend-community">Community</span>
        </span>
      </figcaption>
      <div className="waterfall-axis" aria-hidden="true">
        {years.map((year) => (
          <span key={year} style={{ left: `${toPercent([year, 1])}%` }}>
            {String(year).slice(2)}
          </span>
        ))}
      </div>
      <ol>
        {timeline.map(({ name, kind, start, end }) => {
          const left = toPercent(start);
          const right = end ? toPercent(end) : 100;
          return (
            <li key={name} className={`span span--${kind}${end ? '' : ' span--open'}`}>
              <span className="span-name">{name}</span>
              <span className="span-track">
                <span
                  className="span-bar"
                  style={{ left: `${left}%`, width: `max(${right - left}%, 4px)` }}
                />
              </span>
              <span className="span-dates">
                {formatDate(start)} – {formatDate(end)}
              </span>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

export default function Experience() {
  return (
    <section className="container section" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <p className="mono-label">Experience</p>
        <h2 id="experience-title">Since 2017, often more than one thing at a time.</h2>
      </div>
      <Waterfall />
      <div className="experience-list">
        {experiences.map(({ company, role, date, description }) => (
          <article className="experience-row" key={company}>
            <div>
              <h3>{company}</h3>
              <p className="date">{date}</p>
            </div>
            <div>
              <h4>{role}</h4>
              <p>{description}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="earlier">
        <h3>Earlier</h3>
        <ul>
          {earlier.map(({ company, role, date, summary }) => (
            <li key={company}>
              <p className="earlier-title">
                <strong>{company}</strong> · {role}
              </p>
              <p className="date">{date}</p>
              <p>{summary}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
