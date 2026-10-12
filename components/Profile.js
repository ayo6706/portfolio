import { useEffect, useState } from 'react';

function LocalTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
      }).format(new Date());
    setTime(format());
    const timer = setInterval(() => setTime(format()), 30000);
    return () => clearInterval(timer);
  }, []);

  return <span>{time ? `${time} in Nigeria` : 'Nigeria'}</span>;
}

const now = [
  { org: 'TinyRocket Labs', work: 'VectorLint: docs quality checks in CI' },
  { org: 'BuySimply', work: 'Financial workflows for government platforms' },
];

export default function Profile() {
  return (
    <section className="container hero" id="profile">
      <div className="hero-copy">
        <p className="eyebrow">Ayomide Onibokun · Software engineer</p>
        <h1>
          I build the backend parts that have to <em>keep working</em>.
        </h1>
        <p className="intro">
          APIs, real-time services, payments, and AI workflows. Most of my attention goes to the
          things that break in production: webhooks, timeouts, retries, and edge cases.
        </p>
        <div className="actions">
          <a className="button" href="#projects">
            See selected work
          </a>
          <a className="text-link" href="mailto:ayo6706@gmail.com">
            ayo6706@gmail.com
          </a>
        </div>
        <dl className="now">
          <dt className="mono-label">Currently</dt>
          {now.map(({ org, work }) => (
            <dd key={org}>
              <span className="status-dot" aria-hidden="true" />
              <strong>{org}</strong>
              <span>{work}</span>
            </dd>
          ))}
        </dl>
      </div>
      <figure className="portrait">
        <img
          src="/assets/img/me.jpg"
          alt="Ayomide Onibokun"
          width="440"
          height="500"
          fetchPriority="high"
        />
        <figcaption>
          <span>That's me, Ayomide.</span>
          <span className="mono-label">
            <LocalTime /> · WAT
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
