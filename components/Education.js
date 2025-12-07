import styles from '../styles/Experience.module.css';

const education = [
    {
        course: "BEng. Computer Engineering",
        school: "Oduduwa University Ipetumodu, Nigeria",
        date: "Nov 2016 - June 2021",
        description: ""
    }
];

function Education() {
    return (
        <section className={styles.section} id="education" style={{ background: 'var(--bg-primary)' }}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Education</h2>
                </div>

                <div className={styles.list}>
                    {education.map((edu, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.itemHeader}>
                                <span className={styles.role}>{edu.course}</span>
                                <span className={styles.company}>@ {edu.school}</span>
                                <span className={styles.date}>{edu.date}</span>
                            </div>
                            {edu.description && <p className={styles.description}>{edu.description}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
