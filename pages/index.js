import Head from 'next/head';
import Community from '../components/Community';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Project from '../components/Project';
import Stack from '../components/Stack';
import Story from '../components/Story';
import Writing from '../components/Writing';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayomide Onibokun | Software Engineer</title>
        <meta
          name="description"
          content="Ayomide Onibokun builds backend systems, AI workflows, and developer tools. Explore selected engineering work, experience, and writing."
        />
        <link rel="canonical" href="https://ayomideonibokun.netlify.app/" />
      </Head>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Profile />
        <Project />
        <Stack />
        <Story />
        <Experience />
        <Community />
        <Writing />
        <Education />
        <section className="contact" id="contact">
          <div className="container">
            <p className="mono-label">Contact</p>
            <h2>Tell me what you're building, and what keeps breaking.</h2>
            <p>
              For engineering roles, contract work, or a second opinion on a system.
            </p>
            <a className="contact-email" href="mailto:ayo6706@gmail.com">
              ayo6706@gmail.com
            </a>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <p>Ayomide Onibokun</p>
        <div>
          <a href="https://github.com/ayo6706">GitHub</a>
          <a href="https://linkedin.com/in/ayomide-onibokun">LinkedIn</a>
          <a href="https://medium.com/@ayomideonibokun">Medium</a>
        </div>
      </footer>
    </>
  );
}
