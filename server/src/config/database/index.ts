import { Pool } from "pg";
import { logger } from "@utils/logger";

let db: Pool | null = null;

/**
 * Initialize the database pool
 */
export const initDb = async () => {
  if (db) return db;

  db = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME,
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
