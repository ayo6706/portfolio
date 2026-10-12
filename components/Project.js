const projects = [
  {
    name: 'VectorLint',
    repository: 'https://github.com/TRocket-Labs/vectorlint',
    company: 'TinyRocket Labs',
    oneLiner: 'VectorLint, a documentation linter that runs on every pull request',
    kind: 'GitHub App · CLI · TypeScript',
    image: {
      src: 'https://raw.githubusercontent.com/TRocket-Labs/vectorlint/main/assets/VectorLint_screenshot.jpeg',
      alt: 'VectorLint CLI reviewing a Markdown article and reporting a score for each rule',
      width: 1024,
      height: 350,
    },
    title: 'Documentation checks built into the pull request.',
    description:
      'VectorLint is an open-source tool that reviews content against rules written in Markdown and reports findings grounded in the source. I contributed across the frontend, backend, and CLI, and led the GitHub App integration that brings documentation quality checks into CI/CD.',
    decision:
      'Content hashes identify unchanged Markdown files so the pipeline can reuse earlier evaluations instead of repeating LLM calls.',
    result:
      'Documentation standards enforced in the development workflow, with cached evaluations for unchanged content.',
    stack: 'TypeScript, GitHub Apps, webhooks, LLM evaluation',
    steps: ['Pull request', 'Content hash', 'Reuse or evaluate', 'Quality check'],
  },
  {
    name: 'Real-time assessments',
    company: 'Edubaloo',
    oneLiner: 'Live quizzes and exams for students taking them at the same time',
    kind: 'WebSocket backend · Node.js · Redis',
    title: 'Keeping exam sessions responsive under load.',
    description:
      'I architected a WebSocket backend for synchronized quizzes and assessments using Node.js, Redis, and AWS.',
    decision:
      'Redis handled active session state and cross-instance messaging, with persistence at checkpoints to reduce pressure on the database.',
    result:
      '20,000+ concurrent connections with p95 response times under 50ms in load-tested conditions.',
    stack: 'Node.js, Redis, WebSockets, AWS',
    steps: [
      'Student session',
      'WebSocket service',
      'Redis session state',
      'Persistence checkpoint',
    ],
  },
  {
    name: 'Payment reliability',
    company: 'Edubaloo',
    oneLiner: 'Flutterwave and Paystack checkouts that finish more often',
    kind: 'Payments · Webhooks · Reconciliation',
    title: 'Making more checkouts reach completion.',
    description:
      'I worked on Flutterwave and Paystack integrations, tracing recurring checkout failures through payment handling and reconciliation.',
    decision:
      'Reworked payment handling and webhook reconciliation around gateway failures and timeout mismatches.',
    result:
      'Transaction success increased from 72% to 90%, with a 40% reduction in processing latency.',
    stack: 'Payment integrations, webhooks, backend services',
    steps: ['Checkout', 'Payment gateway', 'Webhook reconciliation', 'Payment state'],
  },
];

const smallerWins = [
  {
    label: 'LLM content pipeline',
    detail: 'LangChain and Python drafting structured learning content.',
    result: '60% less manual review',
  },
  {
    label: 'MongoDB access patterns',
    detail: 'Redesigned queries and indexes behind the main APIs.',
    result: '800ms → 300ms',
  },
  {
    label: 'Backend testing standard',
    detail: 'Jest and Supertest suites running in CI on every change.',
    result: '95% coverage',
  },
];

const otherProjects = [
  {
    name: 'Custraxx',
    url: 'https://custraxx.com/',
    description:
      'An AI customer-support product I built to automate support conversations. Building it showed me that most businesses need automation shaped around how they already work, which is the thinking behind Vadton.',
    stack: 'Next.js, Node.js, LLMs, AWS',
  },
  {
    name: 'Abuja After Hours',
    url: 'https://play.abujagame.workers.dev/',
    description:
      'A browser driving game set in Abuja. You pick up passengers at real bus stops and race three rival taxis from Jabi Lake to Wuse Market, with a leaderboard for ranked shifts.',
    stack: 'Browser game, Cloudflare Workers',
  },
  {
    name: 'Hacker News sync',
    url: 'https://github.com/ayo6706/django-celery-redis-docker',
    description:
      'A Django clone of Hacker News that pulls stories on a schedule with Celery workers and Redis.',
    stack: 'Django, Celery, Redis, Docker',
  },
  {
    name: 'Computer-based test platform',
    url: 'https://github.com/ayo6706/cbtexam',
    description: 'An online exam platform for running computer-based tests.',
    stack: 'PHP, JavaScript, MySQL',
  },
  {
    name: 'Repotecc website',
    url: 'https://github.com/ayo6706/website',
    description: 'The website for Repotecc, the tech community I co-founded.',
    stack: 'Next.js, React',
  },
];

function Trace({ name, steps }) {
  return (
    <figure className="trace">
      <figcaption className="mono-label">Simplified request path</figcaption>
      <ol aria-label={`${name} simplified workflow`}>
        {steps.map((step, index) => (
          <li key={step} style={{ '--offset': index, '--count': steps.length }}>
            <span className="trace-bar" aria-hidden="true" />
            <span className="trace-label">{step}</span>
          </li>
        ))}
      </ol>
    </figure>
  );
}

export default function Project() {
  return (
    <section className="container section" id="projects" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="mono-label">Selected work</p>
        <h2 id="work-title">Systems I've helped build, and the decisions behind them.</h2>
      </div>
      {projects.map((project) => (
        <article className="project" key={project.name}>
          <header className="project-head">
            <p className="mono-label">
              {project.company} / {project.kind}
            </p>
            <h3>{project.title}</h3>
            <p className="one-liner">{project.oneLiner}.</p>
          </header>
          {project.image && (
            <figure className="project-shot">
              <img
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                loading="lazy"
              />
            </figure>
          )}
          <div className="project-body">
            <div className="project-copy">
              <p>{project.description}</p>
              <h4>The decision</h4>
              <p>{project.decision}</p>
              <p className="project-stack">{project.stack}</p>
              {project.repository && (
                <a className="text-link" href={project.repository}>
                  View {project.name} on GitHub
                </a>
              )}
            </div>
            <div className="project-side">
              <Trace name={project.name} steps={project.steps} />
              <div className="result">
                <p className="mono-label">Result</p>
                <p>{project.result}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
      <div className="wins">
        <h3>Also at Edubaloo</h3>
        <ul>
          {smallerWins.map(({ label, detail, result }) => (
            <li key={label}>
              <p className="win-result">{result}</p>
              <h4>{label}</h4>
              <p>{detail}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="other-projects">
        <h3>Other things I've built</h3>
        <table>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">What it is</th>
              <th scope="col">Stack</th>
            </tr>
          </thead>
          <tbody>
            {otherProjects.map((project) => (
              <tr key={project.name}>
                <th scope="row">
                  <a href={project.url}>{project.name}</a>
                </th>
                <td>{project.description}</td>
                <td className="project-stack">{project.stack}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a className="text-link" href="https://github.com/ayo6706">
          More projects on GitHub
        </a>
      </div>
    </section>
  );
}
