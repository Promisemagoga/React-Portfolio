import { Link } from "react-router-dom"

function NavBar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <a className="navbar-brand logo" href="#">Promise Magoga.</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active ">
            <Link className="nav-link link" to="/">Home </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="/Resume">Resume</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="/Projects" >Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link link" to="/ContactMe" >Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar