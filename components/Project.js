import styles from '../styles/Projects.module.css';

const projects = [
    {
        title: "Custraxx",
        description: "An AI-powered customer support platform designed to automate interactions. Features omnichannel support, autonomous browser actions, and self-learning capabilities.",
        url: "https://custraxx.com/",
        tags: ["Next.js", "AI/LLM", "Node.js", "AWS"],
        image: "https://placehold.co/600x400?text=Custraxx"
    },
    {
        title: "Customers Relations Management",
        description: "A comprehensive CRM system for managing customer interactions and data.",
        url: "https://github.com/ayo6706/fluxcrm",
        tags: ["PHP", "HTML", "CSS", "Bootstrap"],
        image: "https://placehold.co/600x400?text=CRM"
    },
    {
        title: "Hacker News Clone",
        description: "A Django-based clone that syncs news via scheduled jobs using Celery and Redis.",
        url: "https://github.com/ayo6706/django-celery-redis-docker",
        tags: ["Django", "Docker", "Redis", "Celery"],
        image: "https://placehold.co/600x400?text=HN+Clone"
    },
    {
        title: "Love Calculator",
        description: "A fun application that calculates relationship chances using a custom algorithm.",
        url: "https://github.com/ayo6706/Love-Calculator",
        tags: ["Django", "Python"],
        image: "https://placehold.co/600x400?text=Love+Calc"
    },
    {
        title: "Repotecc",
        description: "The official website for Repotecc, built with Next.js for high performance.",
        url: "https://github.com/ayo6706/website",
        tags: ["Next.js", "React"],
        image: "https://placehold.co/600x400?text=Repotecc"
    },
    {
        title: "Computer Based Test",
        description: "An online examination platform for conducting computer-based tests.",
        url: "https://github.com/ayo6706/cbtexam",
        tags: ["PHP", "JavaScript", "MySQL"],
        image: "https://placehold.co/600x400?text=CBT"
    }
];

function Project() {
    return (
        <section className={styles.section} id="projects">
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.subtitle}>My Work</span>
                    <h2 className={styles.title}>Notable Projects</h2>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageContainer}>
                                {/* Using a placeholder div if image fails or for effect, but trying img tag first */}
                                <img src={project.image} alt={project.title} className={styles.image} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.description}>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className={styles.links}>
                                    <a href={project.url} target="_blank" rel="noreferrer" className={styles.link}>
                                        View Code <i className="bi bi-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Project;