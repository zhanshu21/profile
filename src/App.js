import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <section id="welcome-section">
          <h1 className="welcome-title">Hey I am Zhan</h1>
          <p>a web developer</p>
        </section>
        <section id="projects" className="projects-section">
          <h1 className="project-tile">These are some of my projects</h1>
          <div className="projects-grid">
            <a
              href="https://github.com/zhanshu21/Responsive-Web-Design/tree/main/project1-surveyForm"
              target="_blank"
              className="project"
            >
              <img
                className="project-image"
                src="https://plus.unsplash.com/premium_photo-1679920911003-25995bf42ead?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                Survey Form
                <span className="code">/&gt;</span>
              </p>
            </a>
            <a
              href="https://github.com/zhanshu21/Responsive-Web-Design/tree/main/project2-tributePage"
              target="_blank"
              className="project"
            >
              <img
                className="project-image"
                src="https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute.jpg"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                Tribute Page
                <span className="code">/&gt;</span>
              </p>
            </a>
            <a
              href="https://github.com/zhanshu21/Responsive-Web-Design/tree/main/project2-tributePage"
              target="_blank"
              className="project"
            >
              <img
                className="project-image"
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                Technical Document
                <span className="code">/&gt;</span>
              </p>
            </a>
            <a
              href="https://github.com/zhanshu21/Responsive-Web-Design/tree/main/project2-tributePage"
              target="_blank"
              className="project"
            >
              <img
                className="project-image"
                src="https://plus.unsplash.com/premium_photo-1661297461253-ae1968b5d46c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="project"
              />
              <p className="project-title">
                <span className="code">&lt;</span>
                Product Landing Page
                <span className="code">/&gt;</span>
              </p>
            </a>
          </div>
          <a
            href="https://www.freecodecamp.org/zhanshu/"
            className="btn"
            id="profile-link"
            target="_blank"
          >
            View Certification
            <FontAwesomeIcon icon={faAnglesRight} />
          </a>
        </section>
        <section id="contact" className="contact-section">
          <h1 className="contact-title">Let's work together...</h1>
          <p className="contact-subtitle">How do you take your coffee?</p>
          <div className="contact-grid">
            <a
              href="https://github.com/zhanshu21/Responsive-Web-Design"
              target="_blank"
              className="contact-details"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> Github
            </a>
            <a
              href="https://www.linkedin.com/in/shu-zhan-6734a229a/"
              target="_blank"
              className="contact-details"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a
              href="mailto:zhanshu21@gmail.com"
              target="_blank"
              className="contact-details"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Send a mail
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
