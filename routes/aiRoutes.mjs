import express from "express";
import { getAnswer, getAnswer2 } from "../controllers/calloutController.mjs";

// invoking express router
const router = express.Router();

// routes to user controller
router.post("/qna", getAnswer2);

// exporting router
export default router;
