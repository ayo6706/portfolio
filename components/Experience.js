import styles from '../styles/Experience.module.css';

const experiences = [
    {
        role: "Backend Developer",
        company: "Edubaloo",
        date: "May 2022 - Present",
        tech: "TypeScript, Node.js, Python, MongoDB, Redis, AWS",
        description: "Leading backend architecture and AI implementations. Designed an LLM-powered review tool reducing manual effort by 60% and engineered real-time features optimized for high availability and massive scale."
    },
    {
        role: "Full Stack Developer (Contract)",
        company: "Zercom",
        date: "Aug 2020 - Jan 2021",
        tech: "PHP, WordPress, Python",
        description: "Developed internal tools for employee management, streamlining administrative tasks by 45%. Optimized WordPress sites to improve load times by over 50%."
    },
    {
        role: "Full Stack Developer",
        company: "Flux Africa",
        date: "June 2020 - Aug 2020",
        tech: "PHP, MySQL, Twilio",
        description: "Revamped a legacy CRM, integrating SMS automation which reduced customer churn by 20% and slashed order resolution times."
    },
    {
        role: "Backend Intern",
        company: "HNG INTERNSHIP",
        date: "April 2020 - May 2020",
        tech: "PHP, Laravel, Python, Django",
        description: "Collaborated in a remote, fast-paced environment to build APIs for financial tools and coordinated a cross-functional team."
    },
    {
        role: "Full Stack Developer",
        company: "Glimpsegist",
        date: "Feb 2017 - July 2020",
        tech: "PHP, HTML, CSS, JavaScript, WordPress",
        description: "Independently built and maintained a high-traffic entertainment blog and voting platform handling millions of users."
    }
];

function Experience() {
    return (
        <section className={styles.section} id="experience">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Experience</h2>
                </div>

                <div className={styles.list}>
                    {experiences.map((exp, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.itemHeader}>
                                <span className={styles.role}>{exp.role}</span>
                                <span className={styles.company}>@ {exp.company}</span>
                                <span className={styles.date}>{exp.date}</span>
                            </div>

                            <div className={styles.description}>
                                <p>{exp.description}</p>
                                {exp.points && (
                                    <ul>
                                        {exp.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--accent-primary)' }}>
                                    <strong>Tech:</strong> {exp.tech}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
