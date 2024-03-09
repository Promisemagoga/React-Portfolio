import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import education from "../Data/education";
import experience from "../Data/experience";

import cv from '../files/Promise-Magoga-SoftwareDev.pdf'

function Resume() {
  const handleDownload = () => {
    fetch(cv)
      .then(res => res.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Promise-Magoga-SoftwareDev.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      });
  }
  return (
    <main >
      <NavBar />
      <div className="Resumemain">
        <div className="resume">
          <h1>Resume</h1>
          <div className="experience">
            <h2>Experience</h2>
            <button onClick={handleDownload}><i class="fa fa-download" aria-hidden="true"></i>Download Resume</button>
          </div>
          <div className="cardMain">
            {experience.map((data, index) => (
              <div class="cards" key={index}>
                <div class="row no-gutters">
                  <div class="card-info">
                    <p class="card-text"><small class="text-muted date">{data.date}</small></p>
                    <h5 class="card-title designation">{data.designation}</h5>
                    <p className="location">{data.location}</p>

                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      {data.description.map((pointers, index) => (
                        <ul key={index}>
                          <li>{pointers}</li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cardMain">
            <h2 className="edu-heading">Education</h2>
            {education.map((data) => (
              <div class="card  cards">
                <div class="row no-gutters">
                  <div class=" card-info">
                    <p class="card-text"><small class="text-muted edu-date">{data.date}</small></p>
                    <h5 class="card-title designation">{data.institution}</h5>
                    <p className="location">{data.location}</p>
                    <p className="location">{data.course}</p>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text description">{data.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
          <div class="cardMain ">
            <div className="card cards">
              {/* <div>
                <h4 className="skillHeading"> <i class="fa fa-wrench" aria-hidden="true"></i>Professional Skills</h4>
                <div className="skillCard">
                  <h3>Web Developer</h3>
                  <h3>Software Developer</h3>
                  <h3>Front-Developer</h3>
                </div>
              </div>
              <br />
              <br /> */}
              <div>
                <h1 className="skillHeading"> <i class="fa fa-code" aria-hidden="true"></i>Skills</h1>
                <div className="skillCard">
                  <h3>HTML5</h3>
                  <h3>CSS3</h3>
                  <h3>JavaScript</h3>
                </div>
                <div className="skillCard">
                  <h3>React</h3>
                  <h3>React Native</h3>
                  <h3>Material Ui</h3>
                </div>
                <div className="skillCard">
                  <h3>Node.js</h3>
                  <h3>BootStrap</h3>
                  <h3>Responsive Designs</h3>
                </div>
                <div className="skillCard">
                  <h3>Git</h3>
                  <h3>Github</h3>
                  <h3>Restful APIs</h3>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default Resume;
