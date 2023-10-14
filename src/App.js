import React from "react";

const App = () => {
  const portfolioData = {
    name: "Harsh Dubey",
    reg:"21BCY10217",
    place: "Ankleshwar, Gujarat| India",
    skills: ["Cloud Practitioner","Proficient in Java & C++", "Novice in Web Development(Mern)", "Intermediate in Database(mySQL & MongoDB)"],
    projects: [
      {
        title: "Bank Surveillance False Tampering Detection System | BOB Hackathon Project",
        description: "If any false activity/wrong activity is done in bank then this system raise an alarm and shows Tampering Detection.",
      },
      {
        title: "Harsh Dubey| Portfolio Website",
        description: "Explore my portfolio website, a dynamic showcase of my work powered by HTML, CSS, and JavaScript with the flexibility of Flexbox.",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2><u>Registration no:</u> {portfolioData.reg}</h2>
          <h2><u>Postal Location:</u> {portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>Description about me:</u></h3>
            <p>Hey! I am Prayush, 19 Years of age and currently pursuing my B.Tech Degree from VIT-BPL in CSE- Specilization in Cybersecurity and Digital Forensics. I have been since the beginning of my time here on earth, fascinated by these machines<br/>that we call computers, and from understanding what the internet is and how it works to now learning to make my own websites is a great journey so far but<br/>there is so much I still don't know which makes me excited...</p>
          </div>
          <div className="skills">
            <h3><u>Skills:</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>Some Personal Projects: </u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;