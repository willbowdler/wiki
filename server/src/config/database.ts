import { Pool } from "pg";
import { logger } from "@utils/logger";

let db: Pool | null = null;

/**
 * Initialize the database pool
 */
export const initDb = async () => {
  if (db) return db;

  db = new Pool({
    user: "your_username",
    password: "your_password",
    host: "localhost",
    port: 5432, // default Postgres port
    database: "your_database_name",
  });

  // Test connection
  try {
    await db.query("SELECT 1");
    logger.info("Database connection established");
    return db;
  } catch (err) {
    logger.error("Database connection failed", err);
    throw err;
  }
};

export { db };
