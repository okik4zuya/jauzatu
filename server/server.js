const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const invitationRoutes = require("./routes/invitationRoutes");
const providerRoutes = require("./routes/providerRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
app.use(cors());
app.use(bodyParser.json());

dotenv.config();
connectDB();
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// app.get("/api/notes", (req, res) => {
//   res.json(notes);
// });

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/invitations", invitationRoutes);
app.use("/api/provider", providerRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(
  process.env.PORT,
  console.log(`Server started on port ${process.env.PORT}`)
);
