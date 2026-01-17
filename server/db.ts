import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

if (!process.env.DATABASE_URL) {
  console.warn("⚠️  DATABASE_URL not set - using demo mode (subscribers won't be saved)");
  // Temporary fallback for demo purposes
  process.env.DATABASE_URL = "postgresql://demo:demo@localhost:5432/demo";
}

export const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  // Don't fail if connection doesn't work in demo mode
  max: 1,
  connectionTimeoutMillis: 2000,
});

export const db = drizzle(pool, { schema });
