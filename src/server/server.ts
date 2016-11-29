
import svgModel from "../db/svg";

let express = require("express");
let app = express();


app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});

let router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.route("/svg")
      .post(
          (req, res) => {
              console.log("svg-post");
              svgModel.create({
                  id : req.body.text,
                  name : req.body.name,
                  body : req.body.body
              }, (err, obj) => {
                  if (err)
                    res.send(err);

                  res.json(obj);
              });
            })
      .get(
          (req, res) => {
              svgModel.find((err, obj) => {
                if (err)
                    res.send(err);
                res.json(obj);
              });
          });

app.use("/api", router);