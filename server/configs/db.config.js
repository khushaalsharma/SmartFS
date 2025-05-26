import {Client} from"pg";
import { configDotenv } from "dotenv";

configDotenv();

const client = new Client({
    connectionString: process.env.DB_URL,
    user: process.envDB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: 5432,
    database: process.env.DB_NAME,
    ssl:{
        rejectUnauthorized: false
    }
});

export default client;