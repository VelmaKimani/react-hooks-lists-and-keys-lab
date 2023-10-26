import ProjectItem from "./ProjectItem";
import React from "react";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
      {projects.map((project) => (
          <ProjectItem
            key={project.id}
            name={project.name}
            about={project.about}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      
      </div>
    </div>
  );
}

export default ProjectList;
