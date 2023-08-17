import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div>
        <h3>Designer . Web Developer . Flutter Developer</h3>
        <p>Hello 👋🏽 my name is</p>
        <h1>Promise Tshegofatso Magoga</h1>
        <p>
          I am a web developer and a flutter developer with experience in
          building user-friendly web application using variety of technologies
          such as bootstrap, javaScript, react.js and flutter.
        </p>
        <div className="homeButton">
          <button className="resume-button"><Link to="/Resume" className="homeLink">Resume</Link></button>
          <button className="projectsBtn"><Link to="/Projects" className="homeLink">Projects</Link></button>
        </div>
      </div>
      <img src="./Me2.jpg" alt="Me"/>
    </div>
  );
}

export default Home;
