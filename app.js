const express = require("express");
const path = require("path");
const { request } = require("http");
const { response } = require("express");
//creating app
const app = express();
app.use(express.static("static"));

//set view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/static"));
const port = process.env.PORT || 5000;

//routes
app.get("/", (request, response) => {
  response.render("index");
});

//form post
app.post("/send", (request, response) => {
  response.send("form submitted");
  console.log(request.body);
});
app.use((request, response) => {
  response.status(404).send("Could not find the page");
});

app.listen(port, (req, res) => {
  console.log(`listening to server at port http://localhost:${port}`);
});
