import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Section from "./Components/Section";
import ProjectCard from "./Components/ProjectCard";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
import chirperImg from "./assets/chirper.png";
import justChatImg from "./assets/just-chat.png";
import onHandImg from "./assets/on-hand.png";
import spellscribeImg from "./assets/spellscribe.png";
import css from "./assets/css.png";
import firebase from "./assets/firebase.png";
import git from "./assets/git.png";
import html from "./assets/html.png";
import js from "./assets/js.png";
import ts from "./assets/ts.png";
import mongodb from "./assets/mongodb.png";
import node from "./assets/node.jpg";
import npm from "./assets/npm.png";
import react from "./assets/react.png";
import sass from "./assets/sass.png";
import jest from "./assets/jest.png";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <NavBar scrollToSection={scrollToSection} />
      <header>
        <h1>Josh Reitz</h1>
        <p>Front-end Web Developer</p>
      </header>
      <main>
        <Section id="about" title="About Me">
          <p>
            Hi! I'm Josh Reitz, a highly motivated web developer. I specialize
            in front-end development, but enjoy challenging myself and
            constantly learning new technologies. When I'm not immersed in the
            world of coding, I enjoy hiking, cooking, and engaging in epic
            Dungeons & Dragons adventures. I'm all about blending creativity and
            problem-solving to bring users accessible and enjoyable experiences.
          </p>
          <div>
            <a
              href="https://github.com/jreitz2/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="about-icons" />
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-reitz-643796276/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="about-icons" />
            </a>
          </div>
        </Section>
        <Tooltip id="my-tooltip" />
        <Section id="skills" title="Skills">
          <ul className="skills-list">
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="HTML5"
            >
              <img src={html} alt="html" />
            </li>
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="CSS3"
            >
              <img src={css} alt="css" />
            </li>
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="Sass"
            >
              <img src={sass} alt="sass" />
            </li>
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="JavaScript"
            >
              <img src={js} alt="js" />
            </li>
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="TypeScript"
            >
              <img src={ts} alt="ts" />
            </li>
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="React.js"
            >
              <img src={react} alt="react" />
            </li>
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="Firebase"
            >
              <img src={firebase} alt="firebase" />
            </li>
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="Node.js & Express"
            >
              <img src={node} alt="node" />
            </li>
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="MongoDB"
            >
              <img src={mongodb} alt="mongodb" />
            </li>
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="npm"
            >
              <img src={npm} alt="npm" />
            </li>
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="git"
            >
              <img src={git} alt="git" />
            </li>
            <li
              data-tooltip-id="my-tooltip"
              data-tooltip-place="bottom"
              data-tooltip-content="Jest"
            >
              <img src={jest} alt="jest" />
            </li>
          </ul>
        </Section>
        <Section id="projects" title="Projects">
          <ul className="project-list">
            <ProjectCard
              imageSrc={spellscribeImg}
              title="SpellScribe"
              description="Full-stack MERN CRUD app for creating DND5e characters with spellbooks. Spell information obtained from the D&D 5e API. Session authentication using email/password."
              liveLink="https://spellscribe.onrender.com/"
              codeLink="https://github.com/jreitz2/spellscribe"
              technologies={["React", "CSS", "Node.js", "MongoDB"]}
            />
            <ProjectCard
              imageSrc={chirperImg}
              title="Chirper"
              description="Social media app complete with Google authentication, cloud storage, and emojis."
              liveLink="http://chirper-7b053.web.app"
              codeLink="https://github.com/jreitz2/chirper"
              technologies={["React", "Firebase", "CSS"]}
            />
            <ProjectCard
              imageSrc={justChatImg}
              title="Just Chat"
              description="Real-time chat app including Google authentication. Engage in group chat, or direct message with other users."
              liveLink="http://just-chat-496c6.web.app"
              codeLink="https://github.com/jreitz2/just-chat"
              technologies={["React", "Firebase", "CSS"]}
            />
            <ProjectCard
              imageSrc={onHandImg}
              title="On-hand Cuisine"
              description="Search ingredients you already have to recieve recipes from the Spoonacular API."
              liveLink="https://jreitz2.github.io/on-hand-cuisine/"
              codeLink="https://github.com/jreitz2/on-hand-cuisine"
              technologies={["React", "TypeScript", "CSS"]}
            />
          </ul>
        </Section>
        <Section id="contact" title="Contact">
          <p>
            <b>Email:</b>{" "}
            <a href="mailto:jreitz2@gmail.com">Jreitz2@gmail.com</a>
            <br />
            <br />
            <b>Phone:</b> (706)442-3754
            <br />
            <br />
            <object
              data={require("./assets/JoshuaReitz_Resume.docx")}
              type="application/msword"
            >
              <a href={require("./assets/JoshuaReitz_Resume.docx")}>
                My Resume
              </a>
            </object>
          </p>
        </Section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Josh Reitz</p>
      </footer>
    </div>
  );
}

export default App;
