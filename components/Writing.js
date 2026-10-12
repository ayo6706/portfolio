const articles = [
  {
    title: 'The Art of Agentic Rules: How to Architect a Project-Aware AI',
    date: 'Dec 2025',
    url: 'https://medium.com/@ayomideonibokun/the-art-of-agentic-rules-how-to-architect-a-project-aware-ai-da2863844219',
    tags: 'AI · Developer tooling',
  },
  {
    title: 'Build a REST API with Go 1.22 (Standard Library Only)',
    date: 'Dec 2025',
    url: 'https://medium.com/@ayomideonibokun/build-a-rest-api-with-go-1-22-standard-library-only-94771a02b892',
    tags: 'Go · APIs',
  },
  {
    title: 'Choosing the Right Storage for Application State: Databases, In-Memory Stores, and Redis',
    date: 'Dec 2023',
    url: 'https://medium.com/@ayomideonibokun/choosing-the-right-storage-for-application-state-databases-in-memory-stores-and-redis-eea4dcf078e6',
    tags: 'Redis · System design',
  },
  {
    title: 'Node.js Essentials: Everything You Need to Know as a Software Developer',
    date: 'Dec 2023',
    url: 'https://medium.com/@ayomideonibokun/node-js-essentials-everything-you-need-to-know-as-a-software-developer-4fa99b2f7ac7',
    tags: 'Node.js',
  },
];

export default function Writing() {
  return (
    <section className="container section writing" id="writing" aria-labelledby="writing-title">
      <div className="section-heading">
        <p className="mono-label">Writing</p>
        <h2 id="writing-title">Notes from building things.</h2>
      </div>
      <ul className="writing-list">
        {articles.map(({ title, date, url, tags }) => (
          <li key={url}>
            <a href={url}>
              <span className="writing-title">{title}</span>
              <span className="writing-meta">
                {tags} · {date}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <a className="text-link" href="https://medium.com/@ayomideonibokun">
        All articles on Medium
      </a>
    </section>
  );
}
