const express = require("express")
const app = express();
const cors = require("cors")
const PORT = 3000;

app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
  })
);

app.get("/data", (req, res) => {
  res.json({name: "hoge", age: 20});
});

app.listen(PORT, ()=> console.log("server is running"))