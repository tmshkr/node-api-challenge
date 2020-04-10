const express = require("express");
const Actions = require("../data/helpers/actionModel");
const Projects = require("../data/helpers/projectModel");
const router = express.Router();

router.get("/", (req, res, next) => {
  Actions.get()
    .then((actions) => res.json(actions))
    .catch((err) => {
      console.error(err);
      next({ code: 500, msg: "There was a problem retrieving the actions" });
    });
});

router.get("/:id", validateActionID, (req, res) => res.json(req.action));

router.post("/", validateProjectID, (req, res, next) => {
  const { project_id, description, notes } = req.body;
  const action = { project_id, description, notes };
  if (!(project_id && description && notes))
    return next({ code: 400, msg: "Please provide all required data" });
  Actions.insert(action)
    .then((action) => res.status(201).json(action))
    .catch((err) => {
      console.error(err);
      next({ code: 500, msg: "There was a problem creating the action" });
    });
});

router.put("/:id", validateActionID, validateProjectID, (req, res, next) => {
  const { project_id, description, notes, completed } = req.body;
  const changes = { project_id, description, notes, completed };
  if (!(project_id && description && notes))
    return next({ code: 400, msg: "Please provide all required data" });
  Actions.update(req.params.id, changes)
    .then((action) => res.json(action))
    .catch((err) => {
      console.error(err);
      next({ code: 500, msg: "There was a problem creating the action" });
    });
});

module.exports = router;

async function validateActionID(req, res, next) {
  try {
    const action = await Actions.get(req.params.id);
    if (!action) return next({ code: 404, msg: "Action not found" });
    req.action = action;
    next();
  } catch (err) {
    console.error(err);
    next({ code: 500, msg: "There was a problem finding that action" });
  }
}

async function validateProjectID(req, res, next) {
  const { project_id } = req.body;
  try {
    const project = await Projects.get(project_id);
    if (!project) return next({ code: 404, msg: "Project not found" });
    next();
  } catch (err) {
    console.error(err);
    next({ code: 500, msg: "There was a problem finding that project" });
  }
}
