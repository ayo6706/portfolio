import styles from '../styles/Profile.module.css';

function Profile() {
        return (
                <section className={styles.profile} id="profile">
                        <div className={styles.container}>
                                <div className={styles.content}>
                                        <span className={styles.greeting}>Hello, I'm</span>
                                        <h1 className={styles.name}>Ayomide Onibokun</h1>
                                        <h2 className={styles.role}>Senior Software Engineer</h2>
                                        <p className={styles.bio}>
                                                I architect scalable backend systems and AI-powered solutions.
                                                Passionate about LLMs, real-time systems, and community building.
                                        </p>

                                        <div className={styles.actions}>
                                                <a href="#projects" className={styles.btnPrimary}>View Work</a>
                                                <a href="mailto:ayo6706@gmail.com" className={styles.btnSecondary}>Contact Me</a>
                                        </div>

                                        <div className={styles.socials}>
                                                <a href="https://github.com/ayo6706" target="_blank" rel="noreferrer" className={styles.socialLink}>
                                                        <i className="bi bi-github"></i>
                                                </a>
                                                <a href="https://twitter.com/ayo_onibokun" target="_blank" rel="noreferrer" className={styles.socialLink}>
                                                        <i className="bi bi-twitter"></i>
                                                </a>
                                                <a href="https://linkedin.com/in/ayomide-onibokun" target="_blank" rel="noreferrer" className={styles.socialLink}>
                                                        <i className="bi bi-linkedin"></i>
                                                </a>
                                        </div>
                                </div>

                                <div className={styles.imageWrapper}>
                                        <img
                                                src="/assets/img/me.jpg"
                                                alt="Ayomide Onibokun"
                                                className={styles.profileImage}
                                        />
                                </div>
                        </div>
                </section>
        );
}

export default Profile;