require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRouter = require("./routes/UserRoute");
const ErrorHandling = require("./middlewares/ErrorHandling");

const app = express();
const port = process.env.PORT_NUMBER || 8000;
const dbUrl = process.env.DATABASE_URL;

// Connect to MongoDB
mongoose.connect(dbUrl);
const database = mongoose.connection;

database.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

database.once("open", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/realstate/user", UserRouter);

//error handleing route 

app.use(ErrorHandling);


// Start server
app.listen(port, () => {
  console.log(`Server is running at port number ${port}!`);
});

