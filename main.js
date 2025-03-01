require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./dbConnection/mongoDBConnexion");
const userRoutes = require("./routes/productRoutes");
const { swaggerDocs, swaggerUi } = require("./swagger");


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
connectToDatabase();

// userRoutes
app.use("/products", userRoutes);

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`)
  console.log(`Swagger UI accessible à l'adresse http://localhost:${PORT}/api-docs`)
});
