import express from "express";
import marcasRouter from "./routes/marcas.js";

global.filePath = "./json/car-list.json";
const app = express();

app.use(express.json());

app.use("/marcas", marcasRouter);

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'", "https://cars-api-8edp.onrender.com"],
      fontSrc: ["'self'", "https://cars-api-8edp.onrender.com"],
      scriptSrc: ["'self'", "https://cars-api-8edp.onrender.com"],
      styleSrc: [
        "'self'",
        "'unsafe-inline'",
        "https://cars-api-8edp.onrender.com",
      ],
      imgSrc: ["'self'", "data:", "https://cars-api-8edp.onrender.com"],
      connectSrc: ["'self'", "https://cars-api-8edp.onrender.com"],
    },
  })
);

app.listen(3000, async () => {
  try {
    console.log("API Started!");
  } catch (err) {
    console.log(err);
  }
});
