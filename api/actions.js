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

module.exports = router;
