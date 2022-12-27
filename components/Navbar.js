
function Navbar() {
  return (



<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Ayomide Onibokun</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
          <a className="nav-link" id="stack-anchor" href="#tech-stack">Tech Stack</a>
          <a  className="nav-link" id="comm-anchor" href="#communities">Communities</a>
          <a className="nav-link" id="edu-anchor" href="#education">Education</a>
          <a className="nav-link" id="exp-anchor" href="#experience">Experience</a>
          <a className="nav-link" id="proj-anchor" href="#projects">Projects</a>
      </div>
    </div>
  </div>
</nav>



    
  );
}

export default Navbar;