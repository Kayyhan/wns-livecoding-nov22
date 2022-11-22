const express = require("express");
const dataSource = require("./utils").dataSource;
const wilderController = require("./controller/wilder");
const skillsController = require("./controller/skills");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

//Wilders
app.post("/api/wilder", wilderController.create);
app.get("/api/wilder", wilderController.read);
app.patch("/api/wilder/:id", wilderController.update);
app.delete("/api/wilder/:id", wilderController.delete);

//Skills
app.post("/skills", skillsController.create);
app.get("/skills", skillsController.read);
app.patch("/skills/:id", skillsController.update);
app.delete("/skills/:id", skillsController.delete);

//Start Server
async function start() {
  await dataSource.initialize();
  app.listen(3000, () => {
    console.log("server ready");
  });
}
start();
