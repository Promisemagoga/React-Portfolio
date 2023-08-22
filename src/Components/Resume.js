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
          <ExperienceCards />
          <EducationCards />
          <Skills />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Resume;
