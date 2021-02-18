import express from "express";

const router = express.Router();

router.use(/^\/$/, (req, res) => {
  res.json({ message: "Homepage" });
});

export default router;
