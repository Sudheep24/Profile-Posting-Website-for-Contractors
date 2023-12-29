const router = require("express").Router();
const Category = require("../models/Category");

router.post("/", async (req, res) => {
  const newCompany = new Category(req.body);
  try {
    const savedCompnay = await newCompany.save();
    res.status(200).json(savedCompany);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
    try {
      const cats = await Category.find();
      res.status(200).json(companies);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;