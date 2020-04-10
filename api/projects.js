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

module.exports = router;
