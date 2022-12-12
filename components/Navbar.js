
function Navbar() {
  return (


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Ayomide Onibokun</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li><a className="nav-link" id="stack-anchor" href="#tech-stack">Tech Stack</a></li>
                <li><a  className="nav-link" id="comm-anchor" href="#communities">Communities</a></li>
                <li><a className="nav-link" id="edu-anchor" href="#education">Education</a></li>
                <li><a className="nav-link" id="exp-anchor" href="#experience">Experience</a></li>
                <li><a className="nav-link" id="proj-anchor" href="#projects">Projects</a></li>
      </ul>
    </div>
  </div>
</nav>



    
  );
}

export default Navbar;