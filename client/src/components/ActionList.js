import React, { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Button, Table, Spinner } from "reactstrap";
import "./ActionList.scss";

function ActionList(props) {
  const { history, match, projects } = props;
  const projectID = match.params.id;
  const projectName = projects.find((p) => p.id == projectID)?.name;

  const [actions, setActions] = useState([]);

  const deleteAction = (id) => {
    axios
      .delete(`/api/actions/${id}`)
      .then(() => {
        getProjectActions();
      })
      .catch((err) => console.dir(err));
  };

  const getProjectActions = (projectID) => {
    axios
      .get(`/api/projects/${projectID}/actions`)
      .then(({ data }) => setActions(data));
  };

  useEffect(() => {
    getProjectActions(projectID);
  }, []);

  if (!actions.length) return <Spinner color="primary" />;

  return (
    <div className="action-list">
      <header>
        <Button color="primary" onClick={() => history.push("/actions/add")}>
          Add Action
        </Button>
        <h2>{projectName}</h2>
      </header>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>Description</th>
            <th>Notes</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {actions.map((action) => (
            <tr className="action" key={action.id}>
              <td>
                <input type="checkbox" checked={action.completed} />
              </td>
              <td>{action.description}</td>
              <td>{action.notes}</td>
              <td>
                <Button
                  size="sm"
                  color="danger"
                  onClick={(e) => deleteAction(action.id)}
                >
                  delete
                </Button>
                <Button
                  size="sm"
                  onClick={(e) => history.push(`/actions/${action.id}/edit`)}
                >
                  edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ActionList;
