var express = require("express");
let router = express.Router();

// import model
let modelBurger = require("../models/burger.js");

router.get("/", function (req, res) {
  modelBurger.all(function (data) {
    let hbsObject = {
      burgers: data,
    };

    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger/", (req, res) => {
  console.log(req.body)
  console.log("to controller")
  modelBurger.create(req.body, (result) => {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burger/:id", (req, res) => {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  modelBurger.update(
    {
      devoured: true,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

module.exports = router
