import "@config/env";

import { initDb } from "@config/database";
import { logger } from "@utils/logger";

import app from "./app";

const startServer = async () => {
  try {
    await initDb();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
  } catch (err) {
    logger.error("Server failed to start", err);
    process.exit(1);
  }
};

startServer();
