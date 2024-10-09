import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO_URI || "", {})
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
  });


export default mongoose;