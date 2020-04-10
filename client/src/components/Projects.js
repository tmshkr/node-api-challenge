import React from "react";
import Project from "./Project";

function Projects(props) {
  const { projects } = props;
  return (
    <div className="projects">
      {projects.map((p) => (
        <Project key={p.id} project={p} />
      ))}
    </div>
  );
}

export default Projects;
