import React from "react";
import Project from "./Project";

function ProjectList(props) {
  const { projects, history, getProjects } = props;
  return (
    <div className="project-list">
      {projects.map((p) => (
        <Project
          key={p.id}
          project={p}
          history={history}
          getProjects={getProjects}
        />
      ))}
    </div>
  );
}

export default ProjectList;
