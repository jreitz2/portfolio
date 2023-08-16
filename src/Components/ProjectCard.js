import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase";
import { SiMongodb } from "@react-icons/all-files/si/SiMongodb";

const ProjectCard = ({ imageSrc, title, description, liveLink, codeLink, technologies }) => {
    
    const renderTechnologyIcon = (technology) => {
        switch (technology) {
          case 'HTML':
            return <FaHtml5 />;
          case 'CSS':
            return <FaCss3 />;
          case 'JavaScript':
            return <FaJs />;
          case 'React':
            return <FaReact />;
          case 'Node.js':
            return <FaNodeJs />;
          case 'Database':
            return <FaDatabase />;
          case 'Firebase':
            return <SiFirebase />;
          case 'MongoDB':
            return <SiMongodb />;  
          default:
            return null;
        }
    }
    
    return ( 
        <li className="project-card">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                <div className="project-image">
                    <img src={imageSrc} alt={title} />
                </div>
            </a>
        <div className="project-details">
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="technologies">
                {technologies.map((technology, index) => (
                    <span key={index} className="technology-icon" data-tooltip-id="my-tooltip" data-tooltip-place="bottom" data-tooltip-content={technology}>
                        {renderTechnologyIcon(technology)}
                    </span>
                    ))}
            </div>
            <div className="project-links">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
                  Live link
              </a>
              <a href={codeLink} target="_blank" rel="noopener noreferrer">
                  View code
              </a>
            </div>
        </div>
    </li>
     );
}
 
export default ProjectCard;