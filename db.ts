import { Pool } from 'pg';
import * as dotenv from 'dotenv';
dotenv.config();


const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE
};

const prodConfig: any = {
  connectionString: process.env.DATABASE_URL, // heroku addon
  ssl: {
    rejectUnauthorized: false
  }
}

const pool = new Pool(
  process.env.NODE_ENV === 'production' ? prodConfig : devConfig
);

export default pool;