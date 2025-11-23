const tour = require("../models/tourModel");

// GET /tours
const getAlltours = (req, res) => {
  const tours = tour.getAll();
  res.json(tours);
};

// POST /tours
const createtour = (req, res) => {
  const newtour = tour.addOne({ ...req.body }); // Spread the req.body object

  if (newtour) {
    res.status(201).json(newTour); // 201 Created
  } else {
    // Handle error (e.g., failed to create tour)
    res.status(500).json({ message: "Failed to create tour" });
  }
};

// GET /tours/:tourId
const gettourById = (req, res) => {
  const tourId = req.params.tourId;
  const tour = tour.findById(tourId);
  if (tour) {
    res.json(tour);
  } else {
    res.status(404).json({ message: "tour not found" });
  }
};

// PUT /tours/:tourId
const updatetour = (req, res) => {
  const tourId = req.params.tourId;
  const updatedtour = tour.updateOneById(tourId, { ...req.body }); // Spread the req.body object

  if (updatedtour) {
    res.json(updatedtour);
  } else {
    // Handle update failure (e.g., tour not found)
    res.status(404).json({ message: "tour not found" });
  }
};

// DELETE /tours/:tourId
const deletetour = (req, res) => {
  const tourId = req.params.tourId;
  const isDeleted = tour.deleteOneById(tourId);

  if (isDeleted) {
    res.status(204).send(); // 204 No Content
  } else {
    // Handle deletion failure (e.g., tour not found)
    res.status(404).json({ message: "tour not found" });
  }
};

module.exports = {
  getAlltours,
  gettourById,
  createtour,
  updatetour,
  deletetour,
};