import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

function NavBar() {

  return (

    <Navbar collapseOnSelect expand="lg"  variant="light" className="navbar">
    <Navbar.Brand href="/">Promise Magoga.</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Nav.Link href="/Resume" className="link">Resume</Nav.Link>
        <Nav.Link href="/Projects" className="link">Projects</Nav.Link>
        <Nav.Link href="/ContactMe" className="link">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    
    // <nav className="navbar navbar-expand-lg navbar-light ">
    //   <a className="navbar-brand logo" href="/">Promise Magoga.</a>
    //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className="collapse navbar-collapse" id="navbarNav">
    //     <ul className="navbar-nav ml-auto">
    //       <li className="nav-item active ">
    //         <a className="nav-link link" href="/">Home </a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link link" href="/Resume">Resume</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link link" href="/Projects" >Projects</a>
    //       </li>
    //       <li className="nav-item">
    //         <a className="nav-link link" href="/ContactMe" >Contact</a>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  )
}

export default NavBar