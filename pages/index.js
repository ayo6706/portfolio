import Head from 'next/head'
import Community from '../components/Community'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Project from '../components/Project'
import Stack from '../components/Stack'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ayomide Onibokun - Portfolio</title>
        <meta name="description" content="Portfolio of Ayomide Onibokun, Software Engineer & Developer Advocate" />
      </Head>

      <Navbar />

      <main>
        <Profile />
        <Stack />
        <Community />
        <Experience />
        <Education />
        <Project />
      </main>

      <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
        <span>
          Done with &#10084; by <a href="https://github.com/ayo6706" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-primary)' }}>Ayomide Onibokun</a>
        </span>
      </footer>
    </>
  )
}
