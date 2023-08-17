import { Link } from "react-router-dom"

function NavBar(){
  
    return(
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand logo" href="#">Promise Magoga.</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active ">
              <a className="nav-link" href="#"><Link to="/" className="link">Home </Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/Resume" className="link">Resume</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/Projects" className="link">Projects</Link></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><Link to="/ContactMe" className="link">Contact</Link></a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default NavBar