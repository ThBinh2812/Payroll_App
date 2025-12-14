import express from "express";
import salaryRoutes from "./routes/salary.routes.js";

const app = express();
app.use(express.json());
app.use("/api/salary", salaryRoutes);

export default app;
