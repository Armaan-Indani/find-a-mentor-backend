const express = require("express");
const cors = require("cors");
const login = require("./routes/login");
const signup = require("./routes/signup");
const profile = require("./routes/profile");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

//Connect to database

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/signup", signup);
app.use("/login", login);
app.use("/profile", profile);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
