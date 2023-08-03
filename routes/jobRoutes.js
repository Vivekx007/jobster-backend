import express from "express";
import {
  createJob,
  deleteJob,
  getAllJobs,
  showStats,
  updateJob,
} from "../controllers/jobsController.js";
const router = express.Router();

router.post("/", createJob).get("/", getAllJobs);
router.get("/stats", showStats);
router.delete("/:id", deleteJob).patch("/:id", updateJob);

export default router;
