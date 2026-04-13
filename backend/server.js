import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import app from "./app.js";
import { logger } from "./utils/logger.js";

// Load env vars
dotenv.config();

const port = process.env.PORT || 5000;

// Connect to MongoDB
await connectDB();

const server = await new Promise((resolve) => {
  const srv = app.listen(port, () => {
    logger.info(
      `Server running in ${process.env.NODE_ENV} mode on port ${port}`,
    );
    resolve(srv);
  });
});

// Graceful shutdown
process.on("SIGTERM", () => {
  logger.info("SIGTERM received, shutting down gracefully");
  server.close(() => {
    logger.info("Process terminated");
  });
});

export default app;
