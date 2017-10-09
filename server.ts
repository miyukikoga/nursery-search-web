import * as express from "express";
import * as path from "path";
import {Request, Response} from "express";

const app = express();
const port = 3000;

app.use("/dist", express.static("dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, (error: Error) => {
  if (error) {
    console.log(error);
  }
  console.log("server start at port 3000");
});
