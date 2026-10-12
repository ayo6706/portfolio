import { useEffect, useState } from 'react';

const links = [
  { id: 'projects', label: 'Work' },
  { id: 'story', label: 'Story' },
  { id: 'experience', label: 'Experience' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const sections = links.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className="container navigation" aria-label="Main navigation">
        <a className="wordmark" href="#profile">
          Ayomide Onibokun
        </a>
        <div className="nav-links">
          {links.map(({ id, label }) => (
            <a key={id} href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
