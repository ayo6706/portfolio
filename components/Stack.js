const principles = [
  {
    title: 'Start with the workflow',
    text: 'Understand the problem, the people doing the work, and where a better system can help.',
  },
  {
    title: 'Account for failure',
    text: 'Retries, validation, observability, and recovery belong in the design, alongside the happy path.',
  },
];

const toolGroups = [
  { label: 'Building backends', tools: ['TypeScript', 'Node.js', 'NestJS', 'Python', 'Go'] },
  { label: 'Moving money', tools: ['Paystack', 'Flutterwave', 'Webhooks', 'Reconciliation'] },
  { label: 'Keeping it real-time', tools: ['WebSockets', 'Redis', 'Queues', 'FCM'] },
  { label: 'Storing state', tools: ['PostgreSQL', 'MongoDB', 'MySQL', 'pgvector'] },
  { label: 'Wiring in AI', tools: ['LangChain', 'LangGraph', 'n8n', 'Langflow', 'RAG'] },
  { label: 'Shipping and operating', tools: ['AWS', 'Docker', 'GitHub Actions', 'Jest'] },
];

export default function Stack() {
  return (
    <section className="approach" id="tech-stack">
      <div className="container approach-grid">
        <div>
          <p className="mono-label">How I work</p>
          <h2>
            Think through the system.
            <br />
            Stay with the details.
          </h2>
          {principles.map(({ title, text }) => (
            <div className="principle" key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
        <dl className="tool-groups">
          {toolGroups.map(({ label, tools }) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>
                <ul className="tools">
                  {tools.map((tool) => (
                    <li key={tool}>{tool}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
