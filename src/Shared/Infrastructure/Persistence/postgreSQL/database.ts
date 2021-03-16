import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
    user: String(process.env.DB_USER),
    host: String(process.env.DB_HOST),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_DATABASE),
    port: 5444,
});