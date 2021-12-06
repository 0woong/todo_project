var express = require("express");
const con = require("../modules/mysql");
var router = express.Router();

const todosRouter = require("./todos/index");

router.get("/", (req, res) => {
  res.json({
    message: "접속 완료~!!!",
  });
});

router.use("/todos", todosRouter);

module.exports = router;
