import React from "react";
import Project from "./Project";

function ProjectList(props) {
  const { projects } = props;
  return (
    <div className="project-list">
      {projects.map((p) => (
        <Project key={p.id} project={p} />
      ))}
    </div>
  );
}

export default ProjectList;
