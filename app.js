const express = require("express");
const data = require("./controller/data");

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/akteri", data.getAkteri);
app.get("/filmovi", data.getFilmovi);

app.post("/akteri", data.postNewAkter);
app.post("/filmovi", data.postNewFilm);

app.listen(10000, (err) => {
  if (err) return console.log("Error");
  console.log("Server started successfully on port 10000");
});
