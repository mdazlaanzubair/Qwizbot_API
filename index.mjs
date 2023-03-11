import express, { json } from "express";
import cors from "cors";
import aiRoutes from "./routes/aiRoutes.mjs";

const app = express();

// setting port for the server to run on
const port = process.env.PORT || 3000;

// middleware(s)
app.use(cors());
app.use(json());

// routes
app.use("/api/extend/open_ai", aiRoutes);

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
