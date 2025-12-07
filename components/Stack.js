import styles from '../styles/Stack.module.css';

function Stack() {
    const coreSkills = [
        "TypeScript", "Node.js", "Express", "NestJS", "Redis", "MongoDB", "PostgreSQL", "Microservices", "AWS"
    ];

    const additionalSkills = [
        "Python", "Django", "Golang", "Docker", "CI/CD", "MySQL", "Azure", "React", "Next.js", "Tailwind CSS"
    ];

    return (
        <section className={styles.section} id="tech-stack">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Tech Stack</h2>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Core Expertise</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {coreSkills.map(skill => (
                            <span key={skill} style={{
                                background: 'rgba(88, 166, 255, 0.15)',
                                color: 'var(--accent-primary)',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                fontSize: '0.95rem',
                                border: '1px solid rgba(88, 166, 255, 0.3)',
                                fontWeight: '500'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Additional Skills</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {additionalSkills.map(skill => (
                            <span key={skill} style={{
                                background: 'rgba(255, 255, 255, 0.05)',
                                color: 'var(--text-secondary)',
                                padding: '10px 20px',
                                borderRadius: '25px',
                                fontSize: '0.95rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}>
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stack;
