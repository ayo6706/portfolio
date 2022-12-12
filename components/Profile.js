import Image from "next/image";
import Me from "../public/assets/img/me.jpg"

function Profile() {
    return (
      
        <div className="profile">
        
                <Image src={Me} alt="Ayomide Onibokun" />
       
        
        <div className="bio-text">
            <h2>About Me</h2><span></span>
            <p>Software Engineer | Ex Lead @ Google Developer Student Clubs | Lead @ Repotecc</p>
            <p>software developer with experience in coding, testing, and establishing system improvements, excellent reputation for resolving  problems and improving customer satisfaction. organized and dependable candidate successful at managing multiple priorities with      
                </p>

            <div className="social-media">
                <i className="bi bi-linkedin" aria-hidden="true"><a href="https://www.linkedin.com/in/ayomide-onibokun"
                    target="_blank" rel="noreferrer">LinkedIn</a></i>
                <i className="bi bi-twitter" aria-hidden="true"><a href="https://twitter.com/ayomideonibokun" target="_blank"
                        rel="noreferrer">Twitter</a></i>
                <i className="bi bi-github" aria-hidden="true"><a href="https://github.com/ayo6706" target="_blank"
                        rel="noreferrer">GitHub</a></i>
                <i className="bi bi-download" aria-hidden="true"><a
                        href="../public/assets/resume/Resume+Ayomide+Onibokun.pdf" target="_blank"
                        rel="noreferrer">Résumé</a></i>
                <i className="bi bi-envelope" aria-hidden="true"><a href="mailto:ayo6706@gmail.com" target="_blank"
                        rel="noreferrer">Email Me</a></i>
            </div>
        </div>
    </div>
  
      
    );
  }
  
  export default Profile;