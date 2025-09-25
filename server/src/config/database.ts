import mysql, { Pool } from "mysql2/promise";
import { logger } from "utils/logger";

let pool: Pool | null = null;

/**
 * Initialize the database pool
 */
export const initDb = async () => {
  if (pool) return pool;

  pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });

  // Test connection
  try {
    await pool.query("SELECT 1");
    logger.info("Database connection established");
    return pool;
  } catch (err) {
    logger.error("Database connection failed", err);
    throw err;
  }
};

export const query = async <T = unknown>(
  sql: string,
  params?: unknown[]
): Promise<T[]> => {
  if (!pool) await initDb();
  const [rows] = await pool!.query(sql, params);
  return rows as T[];
};

/**
 * Execute helper
 */
export const execute = async (sql: string, params?: unknown[]) => {
  if (!pool) await initDb();
  const [result] = await pool!.execute(sql, params);
  return result;
};
