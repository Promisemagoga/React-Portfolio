import EducationCards from "./EducationCards";
import ExperienceCards from "./ExperienceCards";
import Footer from "./Footer";
import Languages from "./Languages";
import NavBar from "./NavBar";
import Skills from "./Skills";

function Resume() {
  return (
    <main >
      <NavBar />
      <div className="Resumemain">
      <div className="resume">
        <h1>Resume</h1>
        <div className="experience">
          <h2>Expirience</h2>
          <button><i class="fa fa-download" aria-hidden="true"></i>Download Resume</button>
        </div>
        <ExperienceCards/>
        <h2 className="edu-heading">Education</h2>
        <EducationCards/>
        {/* <div className="skills"> */}
          {/* <h1> <i class="fa fa-wrench" aria-hidden="true"></i>Professional Skills</h1> */}
          <Skills/>
          {/* <h1> <i class="fa fa-wrench" aria-hidden="true"></i>Languages</h1> */}
          {/* <Languages/> */}
        {/* </div> */}
      </div>
      </div>
      <Footer/>
    </main>
  );
}

export default Resume;
