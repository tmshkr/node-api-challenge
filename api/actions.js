const express = require("express");
const Actions = require("../data/helpers/actionModel");
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
