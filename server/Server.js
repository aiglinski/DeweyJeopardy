const express = require("express");
const connectDB = require("./config/db");
const auth = require("./middleware/auth");

const app = express();

// Connect Database by calling simple function in external connectDB file brought in above
connectDB();

// INIT middleware to parse body
app.use(express.json({ extended: false }));

// // DEFINE ROUTES
app.use("/users", require("./routes/Users"));
app.use("/auth", require("./routes/Auth"));
app.use("/questions", require("./routes/Questions"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Successfully started on port ${PORT}`));
