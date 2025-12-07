import Image from "next/image";
import styles from '../styles/Stack.module.css';

import Repotecc from "../public/assets/img/repotecc.png"
import HultPrize from "../public/assets/img/hult-prize.png"
import GDSCOUI from "../public/assets/img/gdscoui.png"

const communities = [
    {
        name: "Repotecc",
        role: "Lead, Repotecc",
        description: "Repotecc is a tech community that provides a platform for enthusiasts and entry developers to learn technology, with guided mentorship.",
        image: Repotecc,
        socials: [
            { name: "Twitter", url: "https://twitter.com/repotecc", icon: "bi-twitter" },
            { name: "Instagram", url: "https://www.instagram.com/repotecc/", icon: "bi-instagram" }
        ]
    },
    {
        name: "Hult Prize",
        role: "Co-Lead/ Team Coordinator (2020-2021)",
        description: "The Hult Prize is an annual, year-long competition that crowd-sources ideas from university level students after challenging them to solve a pressing social issue.",
        image: HultPrize,
        socials: [
            { name: "Twitter", url: "https://twitter.com/HultPrizeOui", icon: "bi-twitter" },
            { name: "Instagram", url: "https://www.instagram.com/hultprizeoui", icon: "bi-instagram" }
        ]
    },
    {
        name: "GDSC OUI",
        role: "Chapter Lead (2021-2022)",
        description: "Led Google Developer Student Clubs at Oduduwa University, organizing events to spread knowledge about technology and share experiences in building user-centered solutions.",
        image: GDSCOUI,
        socials: [
            { name: "Twitter", url: "https://twitter.com/gdscoui", icon: "bi-twitter" },
            { name: "Instagram", url: "https://www.instagram.com/gdscoui/", icon: "bi-instagram" }
        ]
    }
];

function Community() {
    return (
        <section className={styles.communitySection} id="communities">
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Communities</h2>
                </div>

                <div className={styles.communityGrid}>
                    {communities.map((comm, index) => (
                        <div key={index} className={styles.communityCard}>
                            <div style={{ width: '100%', height: '150px', position: 'relative', marginBottom: '1rem' }}>
                                <Image
                                    src={comm.image}
                                    alt={comm.name}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    className={styles.communityLogo}
                                />
                            </div>
                            <span className={styles.communityRole}>{comm.role}</span>
                            <p className={styles.communityDesc}>{comm.description}</p>
                            <div className={styles.socials}>
                                {comm.socials.map((social, i) => (
                                    <a key={i} href={social.url} target="_blank" rel="noreferrer" className={styles.socialLink} title={social.name}>
                                        <i className={`bi ${social.icon}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Community;
