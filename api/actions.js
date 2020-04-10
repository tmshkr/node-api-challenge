const express = require("express");
const Actions = require("../data/helpers/actionModel");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ api: "/api/actions" });
});

module.exports = router;
