import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const db = {
  query: async <T = unknown>(sql: string, params?: unknown[]): Promise<T[]> => {
    const [rows] = await pool.query(sql, params);
    return rows as T[];
  },
  execute: async (sql: string, params?: any[]) => {
    const [result] = await pool.execute(sql, params);
    return result;
  },
};
