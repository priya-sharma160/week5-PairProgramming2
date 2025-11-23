const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');
router.use(auth);

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require("../tourHandlers.js");

// GET /api/tours
router.get("/", getAllTours);

// POST /api/tours
router.post("/", createTour);

// GET /api/tours/:tourId
router.get("/:tourId", getTourById);

// PUT /api/tours/:tourId
router.put("/:tourId", updateTour);

// DELETE /api/tours/:tourId
router.delete("/:tourId", deleteTour);

module.exports = router;