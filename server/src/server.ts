import app from "./app";
import { initDb } from "config/database";
import { logger } from "utils/logger";

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await initDb();
    app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
  } catch (err) {
    logger.error("Server failed to start", err);
    process.exit(1);
  }
};

startServer();
