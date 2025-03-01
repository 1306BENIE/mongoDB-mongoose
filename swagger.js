const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Gestion d'Utilisateurs",
      version: "1.0.0",
      description: "Documentation de l'API utilisant Swagger et Mongoose",
    },
    servers: [
      {
        url: "http://localhost:3000", // URL de base de l'API
      },
    ],
  },
  apis: ["./routes/*.js"], // Chemin vers les fichiers contenant la doc
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = { swaggerDocs, swaggerUi };
