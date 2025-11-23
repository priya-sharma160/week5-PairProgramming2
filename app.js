// Import dependencies
const express = require("express");
const app = express();
const morgan = require('morgan');


// Import routers
const userRouter = require("./routes/userRouter");
const tourRouter = require("./routes/tourRouter"); // <-- new router

// Middleware to parse JSON
app.use(express.json());
app.use(morgan('tiny'));
//dd
// ROUTES
// Mount routers under /api
app.use("/api/users", userRouter);
app.use("/api/tours", tourRouter);

// Start the server
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});