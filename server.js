// Requiring express mongoose dependencies
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Will use port 3001
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Requiring routes -- 
app.use(require("./routes"));
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network",
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
mongoose.set("debug", true);

// Setting App to listen on port 3001 - and console logging message Connected on localhost for connection 
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));