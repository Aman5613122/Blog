var visited = [];

module.exports = (app) => {
  app.get("/", function (req, res) {
    res.render("index", { visited: visited });
  });

  app.get("/add", function (req, res) {
    res.render("blog", { err: "" });
  });

  app.get("/about", function (req, res) {
    res.render("about");
  });

  app.post("/add", function (req, res) {
    var hdg = req.body.heading;
    var blg = req.body.textblog;
    var newj = { hdg: hdg, blg: blg };
    visited.push(newj);
    res.render("blog", { err: "1" });
  });
};
