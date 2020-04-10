import React, { useEffect, useState } from "react";
import axios from "./utils/axios";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.scss";

import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([]);
  const getProjects = () => {
    return axios
      .get("/api/projects")
      .then(({ data }) => setProjects(data))
      .catch((err) => console.dir(err));
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Router>
      <main className="App">
        <Switch>
          <Route
            exact
            path="/projects"
            render={(props) => (
              <ProjectList
                {...props}
                projects={projects}
                getProjects={getProjects}
              />
            )}
          />
          <Redirect to="/projects" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
