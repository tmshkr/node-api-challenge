import React from "react";
import { Card, CardText, CardBody, Button } from "reactstrap";
import axios from "../utils/axios";
import "./Project.scss";

function Project(props) {
  const { id, description, name } = props.project;
  const deleteProject = (e, id) => {
    e.stopPropagation();
    axios.delete(`/api/projects/${id}`).then(() => props.getProjects());
  };
  return (
    <Card
      className="project"
      onClick={() => props.history.push(`/projects/${id}`)}
    >
      <CardBody>
        <h2>{name}</h2>
        <CardText>{description}</CardText>
        <Button color="danger" onClick={(e) => deleteProject(e, id)}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
}

export default Project;
