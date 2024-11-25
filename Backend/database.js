const mongoose = require("mongoose");
require("dotenv").config();

// URI desde el archivo .env
const URI = process.env.MONGO_URI;

// Opciones de conexión recomendadas
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Manejo de conexiones moderno
    replicaSet: "myReplicaSet" // Asegúrate de que coincida con tu configuración
};

// Conexión a la base de datos
mongoose
  .connect(URI, options)
  .then(() => console.log("DB is connected to:", URI))
  .catch((err) => console.error("Error connecting to the database:", err));

// Exportar la conexión
module.exports = mongoose;


