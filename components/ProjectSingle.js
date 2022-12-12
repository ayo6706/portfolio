import  { useState } from "react";

function ProjectSingle(props) {
    const [title] = useState(props.title);
    const [description] = useState(props.description);
    const [language] = useState(props.language);
    const [url] = useState(props.url);
    return (
  
        <div className="col-md-4 mt-3">
        <div className="card">
            <div className="card-body">
                <div className="row">
                <div className="head-card mb-3">
                    <div className="float-start"></div>
                    <div className="float-end">
                        <i className="bi bi-github"></i>
                    </div>
                </div>
                </div>
                
       
{/* <div className="float-none">Don't float on all viewport sizes</div> */}
           
                <h3 className="card-title"> {title}</h3>
                <p className="card-text"> {description}</p>
                <a href={url} target="_blank" className="btn btn-secondary" rel="noreferrer">Check it out</a>
                
                <div className="mt-3">
                    <div className="float-start"><i className="bi bi-star-half"></i></div>
                    <div className="float-end"><small><em>{language}</em></small></div>
                </div>
               
            </div>
        </div>

    </div>
      
    );
  }
  
  export default ProjectSingle;