import express from "express"
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


import "./config/db.js";
  



import leaveRoutes from "./routes/leaveRoutes.js"
import employeeRoutes from "./routes/employeeRoutes.js"


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("views"));

app.use("/employees", employeeRoutes);
app.use("/leaves", leaveRoutes);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
