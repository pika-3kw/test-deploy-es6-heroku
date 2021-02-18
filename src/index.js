import express from "express";
import dotenv from "dotenv";

import homeRoutes from "./routes/home.routes";
import adminRoutes from "./routes/admin.routes";

const PORT = process.env.PORT || 80;
const NODE_ENV = process.env.NODE_ENV || "development";

dotenv.config();

const app = express();

app.use(homeRoutes);
app.use(adminRoutes);

app.listen(PORT, () => {
  if (NODE_ENV === "development") {
    console.log(`Server is running at ${PORT}`);
  }
});
