import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Home() {
  return (
    <main>
      <NavBar />

      <header className="home">
        <aside className="contentSide">
          <h3>Software Developer . Web Developer . Front-End Developer</h3>
          <p>Hello 🖐️ my name is </p>
          <h1>Promise Tshegofatso Magoga</h1>
          <p>
            I am a young, energetic, optimistic, and hardworking web developer with 2-3 years of
            experience in building user-friendly web applications using HTML5, CSS3, JavaScript, React.js, Bootstrap, Material UI.
            I am also proficient in other technologies and tools such as Figma, Webflow, and
            Firebase, etc. As an open-minded individual, I enjoy solving problems through technology. I am
            an active learner, and my educational hobby includes being a part-time reader for Fundza.
            In 2022, I was honored to be announced as the winner of the Fundza Cover Letter competition.
          </p>
          <div className="homeButton">
            <button className="resume-button"><Link to="/Resume" className="homeLink">Resume</Link></button>

            <button className="projectsBtn "><Link to="/Projects" className="homeLink">Projects</Link></button>
          </div>
        </aside>
        <img src={require("../assets/Me2.jpg")} alt="Me" className="imgSide" />
      </header>
      <div className="about">
        <h1>About Me</h1>
        <h3>Get to know a little more about me</h3>
        <p>
          As a versatile and dynamic professional, I am an experienced web developer, software developer,
          and frontend developer with a passion for creating innovative and user-friendly digital
          solutions. With a keen eye for detail and a deep understanding of programming languages and
          development frameworks, I have a proven track record of delivering high-quality, responsive,
          and visually appealing websites and applications. My expertise in front-end technologies,
          coupled with a strong foundation in software development, allows me to seamlessly integrate
          design and functionality, resulting in a seamless user experience. With a commitment to staying
          abreast of the latest industry trends and best practices, I strive to consistently push the
          boundaries of what is possible in the digital realm.


        </p>
        <div className="SocialLinks">
          <a href="https://www.linkedin.com/in/promise-tshegofatso">  <i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
          <a href="https://twitter.com/PromiseTshegof1/">  <i className="fa fa-twitter" aria-hidden="true"></i></a>
          <a href="https://www.github.com/Promisemagoga/"> <i class="fa fa-github" aria-hidden="true"></i></a>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Home;
