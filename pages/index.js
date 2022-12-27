import Head from 'next/head'
import Image from 'next/image'
import Community from '../components/Community'
import Education from '../components/Education'
import Experience from '../components/Experience'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'
import Project from '../components/Project'
import Stack from '../components/Stack'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Ayomide Onibokun - Portfolio</title>
    </Head>
      <Navbar />
      <div className="container">
        <Profile />
        <div className="featured">
        </div>
        <Stack />
        <div className="container">
          <Community />
        </div>
        
        <Education />
        <Experience />
        <Project />
      </div>
     
      <footer>
        <span className="footer_desc">Done with &#10084; by <a className="git_link" href="https://github.com/ayo6706"
                target="_blank" rel="noreferrer">Ayomide Onibokun</a>
        </span>
      </footer>

    </>
  )
}
