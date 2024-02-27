import express from "express";
import { promises as fs } from "fs";

const { readFile, writeFile } = fs;
const router = express.Router();

router.get("/maisModelos", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(filePath));
    let count = 0;
    let moreModels = [];

    for (const item of data) {
      const { brand, models } = item;
      const modelCount = models.length;

      if (modelCount > count) {
        count = modelCount;
        moreModels = [brand];
      } else if (modelCount === count) {
        moreModels.push(brand);
      }
    }
    res.send(moreModels);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/menosModelos", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(filePath));
    let count = 99999;
    let lessModels = [];

    for (const item of data) {
      const { brand, models } = item;
      const modelCount = models.length;

      if (modelCount < count) {
        count = modelCount;
        lessModels = [brand];
      } else if (modelCount === count) {
        lessModels.push(brand);
      }
    }
    res.send(lessModels);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/listaMaisModelos/:x", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(filePath));
    let x = req.params.x;
    const brandModelCount = {};

    for (const item of data) {
      const { brand, models } = item;
      brandModelCount[brand] = (brandModelCount[brand] || 0) + models.length;
    }
    const sortedBrandModelCount = Object.entries(brandModelCount)
      .sort((a, b) => {
        if (a[1] !== b[1]) {
          return b[1] - a[1];
        } else {
          return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
        }
      })
      .slice(0, x)
      .map(([brand, count]) => `${brand} - ${count}`);

    res.send(sortedBrandModelCount);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/listaMenosModelos/:x", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(filePath));
    let x = req.params.x;
    const brandModelCount = {};

    for (const item of data) {
      const { brand, models } = item;
      brandModelCount[brand] = (brandModelCount[brand] || 0) + models.length;
    }
    const sortedBrandModelCount = Object.entries(brandModelCount)
      .sort((a, b) => {
        if (a[1] !== b[1]) {
          return a[1] - b[1];
        } else {
          return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
        }
      })
      .slice(0, x)
      .map(([brand, count]) => `${brand} - ${count}`);

    res.send(sortedBrandModelCount);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.get("/listaMenosModelos/:x", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(filePath));
    let x = req.params.x;
    const brandModelCount = {};

    for (const item of data) {
      const { brand, models } = item;
      brandModelCount[brand] = (brandModelCount[brand] || 0) + models.length;
    }
    const sortedBrandModelCount = Object.entries(brandModelCount)
      .sort((a, b) => {
        if (a[1] !== b[1]) {
          return a[1] - b[1];
        } else {
          return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
        }
      })
      .slice(0, x)
      .map(([brand, count]) => `${brand} - ${count}`);

    res.send(sortedBrandModelCount);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post("/listaModelos/", async (req, res) => {
  try {
    const data = JSON.parse(await readFile(filePath));
    const { nomeMarca } = req.body;

    if (!nomeMarca) {
      return res
        .status(400)
        .send({
          error:
            "O campo 'nomeMarca' deve ser fornecido no corpo da requisição.",
        });
    }
    const lowerCaseNomeMarca = nomeMarca.toLowerCase();
    const result = data
      .filter((item) => item.brand.toLowerCase() === lowerCaseNomeMarca)
      .flatMap((item) => item.models);

    res.send(result);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

export default router;
