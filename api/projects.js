const express = require("express");
const Projects = require("../data/helpers/projectModel");
const router = express.Router();

router.get("/", (req, res, next) => {
  Projects.get()
    .then((projects) => res.json(projects))
    .catch((err) => {
      console.error(err);
      next({ code: 500, msg: "There was a problem retrieving the projects" });
    });
});

router.get("/:id", validateProjectID, (req, res) => res.json(req.project));

module.exports = router;

async function validateProjectID(req, res, next) {
  try {
    const project = await Projects.get(req.params.id);
    if (!project) return next({ code: 404, msg: "Project not found" });
    req.project = project;
    next();
  } catch (err) {
    console.error(err);
    next({ code: 500, msg: "There was a problem finding that project" });
  }
}
