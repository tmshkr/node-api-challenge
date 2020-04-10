import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardText, CardBody, Button } from "reactstrap";
import axios from "../utils/axios";
import "./Project.scss";

function Project(props) {
  const { id, description, name } = props.project;
  const deleteProject = (id) => {
    axios.delete(`/api/projects/${id}`).then(() => props.getProjects());
  };
  return (
    <Card className="project">
      <CardBody>
        <h2>{name}</h2>
        <CardText>{description}</CardText>
        <Button color="danger" onClick={() => deleteProject(id)}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
}

export default Project;
