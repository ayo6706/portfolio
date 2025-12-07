import { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          Ayomide <span>Onibokun</span>
        </a>

        <button className={styles.mobileToggle} onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? '✕' : '☰'}
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
          <a href="#tech-stack" className={styles.link} onClick={() => setIsOpen(false)}>Tech Stack</a>
          <a href="#communities" className={styles.link} onClick={() => setIsOpen(false)}>Communities</a>
          <a href="#education" className={styles.link} onClick={() => setIsOpen(false)}>Education</a>
          <a href="#experience" className={styles.link} onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#projects" className={styles.link} onClick={() => setIsOpen(false)}>Projects</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;