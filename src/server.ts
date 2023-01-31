require("dotenv").config();
import express from "express";
import statusRoute from "./routes/status.routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(userRoutes);
app.use(statusRoute);

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server is running on port ${process.env.PORT}!`);
});
