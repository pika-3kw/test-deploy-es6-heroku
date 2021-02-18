import express from "express";

const router = express.Router();

router.get("/admin", (req, res) => {
  res.json({ message: "protection" });
});

export default router;
