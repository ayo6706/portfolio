import Image from "next/image";
import Repotecc from "../public/assets/img/repotecc.png"
import HultPrize from "../public/assets/img/hult-prize.png"
import GDSCOUI from "../public/assets/img/gdscoui.png"


function Community() {
    return (
  
      
        <div className="communities" id="communities">
        <h2>Communities</h2><span></span>

        <div className="communities-details">
            <div  className="row">
                <div className="details repotecc-logo col-md-4">
                    <Image src={Repotecc} alt="Repotecc" className="logos" width="auto" height="auto" />
                    <span className="role">Lead, Repotecc</span>
                    <p className="description">
                        Repotecc is a tech community that provides a platform for enthusiasts and entry developers to learn technology , with guided mentorship. </p> 
                <div className="socials">
                        <i className="bi bi-twitter" aria-hidden="true"><a href="https://twitter.com/repotecc"
                                target="_blank" rel="noreferrer">Twitter</a></i>
                        <i className="bi bi-instagram" aria-hidden="true"><a
                                href="https://www.instagram.com/repotecc/" target="_blank"
                                rel="noreferrer">Instagram</a></i>

                    </div>
                </div>
                <div className="details abnrbi col-md-4">
                    <Image src={HultPrize} alt="" className="logos" width="160" height="160" />
                    <span className="role">Co-Lead/ Team Coordinator & Hult Prize - Oduduwa University Ipetumodu</span>
                    <p className="description">The Hult Prize is an annual, year-long competition that crowd-sources ideas from university level students after challenging them to solve a pressing social issue around topics such as food security, water access, energy, and education.</p>
                    <div className="socials">
                        <i className="bi bi-twitter" aria-hidden="true"><a href="https://twitter.com/HultPrizeOui" target="_blank"
                                rel="noreferrer">Twitter</a></i>
                        <i className="bi bi-instagram" aria-hidden="true"><a href="https://www.instagram.com/hultprizeoui"
                                target="_blank" rel="noreferrer">Instagram</a></i>
                    </div>

                </div>

                <div className="details gdgnrbi col-md-4">
                    <Image src={GDSCOUI} alt="" className="logos" width="auto" height="auto" />
                    <span className="role">Ex Lead, Google Developer Student Clubs</span>
                    <p className="description">Organize and create events in Oduduwa University Ipetumodu, with the aim of spreading knowledge
                        about technology and
                        sharing experiences in building user-centered solutions using Google technologies.</p>
                    <div className="socials">
                        <i className="bi bi-twitter" aria-hidden="true"><a href="https://twitter.com/gdscoui"
                                target="_blank" rel="noreferrer">Twitter</a></i>
                        <i className="bi bi-instagram" aria-hidden="true"><a href="https://www.instagram.com/gdscoui/"
                                target="_blank" rel="noreferrer">Instagram</a></i>
                    </div>

                </div>
            </div>
          
        </div>
    </div>
  
      
    );
  }
  
  export default Community;
