import ProjectSingle from "./ProjectSingle";

function Project() {
    return (
  
      
        <div className="projects" id="projects">
        <h2>Notable Projects</h2><span></span>
        <div className="project-section">
            <div className="row">
                <ProjectSingle title="Customers Relations Management" description="" url="https://github.com/ayo6706/fluxcrm" language="php, html, css, bootstrap"/>
                <ProjectSingle 
                    title="CRUD Auth NodeJS Typescript" 
                    description="A CRUD api implementation with user authentication built with nodejs, expressjs, mognoose, typescript" 
                    url="https://github.com/ayo6706/crud-auth-node-typescript"
                    language="nodejs, typescript, mongodb." 
                />
                <ProjectSingle 
                    title="Hacker News Clone with Django" 
                    url="https://github.com/ayo6706/django-celery-redis-docker" 
                    description="simple hacker news clone that scheduled job to sync the published news to a DB every 5 minutes 
                    from hacker news." 
                    language="django, docker" 
                />
                <ProjectSingle 
                    title="Love Calculator" 
                    description="Calculates the chance on a successful relationship between two people." 
                    url="https://github.com/ayo6706/Love-Calculator" 
                    language="django, python" 
                />
                <ProjectSingle 
                    title="Repotecc" 
                    description="Official Repotecc site." 
                    url="https://github.com/ayo6706/website" 
                    language="next" 
                />
                <ProjectSingle 
                    title="Computer Based Test" 
                    description="" 
                    url="https://github.com/ayo6706/cbtexam" 
                    language="php, html, css, js, bootstrap" 
                />
            </div>

        </div>
    </div>
  
      
    );
  }
  
  export default Project;