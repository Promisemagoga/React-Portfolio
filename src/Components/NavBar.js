import { Link } from "react-router-dom"

function NavBar() {

  return (
    <div className="m-10">
    <nav className="navbar navbar-expand-lg navbar-light navItems">
        <div className="container-fluid nav-container">
            <h1 className="logo">PEPE<span>CHAIN</span></h1>
            {/* <a href="#" className="navbar-brand logo"><img src="./logo.jpeg"/></a> */}
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon navBar-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                    <a href="#home" className="nav-item nav-link ">HOME</a>
                    <a href="#about" className="nav-item nav-link">ABOUT</a>
                    <div className="navbar--button">
                    <button className="twitterBtn"><i className="fab fa-twitter"></i>TWITWER</button>
                    <button className="telegramBtn"><i className="fab fa-telegram-plane"></i>TELEGRAM</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </nav>
</div>
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