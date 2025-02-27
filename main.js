require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./dbConnection/mongoDBConnexion");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
connectToDatabase();

// userRoutes
app.use("/users", userRoutes);

app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));












