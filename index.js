const express = require("express");
const cors = require("cors");
const server = express();

const actionsRouter = require("./api/actions");
const projectsRouter = require("./api/projects");

server.use(logger);
server.use(express.json());
server.use(cors());

server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.json({ api: "running..." });
});

server.use(errorHandler);

const port = 5000;
server.listen(port, () => {
  console.log(`listening on ${port}...`);
});

function logger(req, res, next) {
  console.log(
    `${new Date().toLocaleTimeString()}: ${req.method} ${req.originalUrl}`
  );
  next();
}

function errorHandler(err, req, res, next) {
  res.status(err.code).send(err.msg);
}
