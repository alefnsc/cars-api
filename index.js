import express from "express";
import marcasRouter from "./routes/marcas.js";

global.filePath = "./json/car-list.json";
const app = express();

app.use(express.json());

app.use("/marcas", marcasRouter);

app.listen(3000, async () => {
  try {
    console.log("API Started!");
  } catch (err) {
    console.log(err);
  }
});
