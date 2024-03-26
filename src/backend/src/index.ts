import express from "express";
import cors from "cors";
import { Sequelize } from "sequelize";
import dataRoutes from "./routes/dataRoutes";

const app = express();

// Allow all CORS requests (not recommended for production)
app.use(cors());

// Connect to PostgreSQL database
const sequelize = new Sequelize(
  process.env.DB_NAME || "cwa_cloud_installer",
  process.env.DB_USERNAME || "postgres",
  process.env.DB_PASSWORD || "docker",
  {
    dialect: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: parseInt(process.env.DB_PORT) || 5432,
  }
);

// Test the database connection
async function testDatabaseConnection() {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection to the database has been established successfully."
    );
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

testDatabaseConnection();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

app.use("/api", dataRoutes);

// ts-node src/backend/src/index.ts
