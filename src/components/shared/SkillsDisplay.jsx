import React from 'react';
import skillsData from '../../data/skillsData';
import '../../styles/components/skills.css';

/**
 * SkillsDisplay - A reusable component to display skills with customizable proficiency levels
 * 
 * @param {Object} props
 * @param {string} props.displayType - 'bars' or 'tags' to control how skills are displayed
 * @param {Array} props.categories - Optional array of categories to filter skills (shows all if not provided)
 * @param {number} props.limit - Optional limit for number of skills to show per category
 * @param {boolean} props.showTitle - Whether to show the section title (default: true)
 * @param {string} props.title - Custom title for the skills section (default: "My Skills")
 */

const SkillsDisplay = ({ 
  displayType = 'bars', 
  categories = [], 
  limit = 0,
  showTitle = true,
  title = "My Skills"
}) => {
  // Filter skills by categories if provided
  const filteredSkills = categories.length > 0
    ? skillsData.filter(group => categories.includes(group.category))
    : skillsData;

  // Render skills as bars (detailed view with proficiency)
  const renderSkillBars = () => (
    <div className="skills-container">
      {filteredSkills.map((skillGroup, index) => (
        <div className="skill-group" key={index}>
          <h3 className="skill-category">{skillGroup.category}</h3>
          <ul className="skill-list">
            {skillGroup.items
              .slice(0, limit > 0 ? limit : skillGroup.items.length)
              .map((skill, skillIndex) => (
                <li className="skill-item" key={skillIndex}>
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </div>
  );

  // Render skills as tags (compact view)
  const renderSkillTags = () => {
    // Flatten all skills from all categories into a single array
    const allSkills = filteredSkills.flatMap(group => 
      group.items.slice(0, limit > 0 ? limit : group.items.length)
    );
    
    return (
      <div className="skills-tags">
        {allSkills.map((skill, index) => (
          <span className="skill-tag" key={index}>{skill.name}</span>
        ))}
      </div>
    );
  };

  return (
    <>
      {showTitle && <h2 className="section-title">{title}</h2>}
      {displayType === 'bars' ? renderSkillBars() : renderSkillTags()}
    </>
  );
};

export default SkillsDisplay;
