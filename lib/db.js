// lib/db.js
import mysql from 'mysql2';

// Create a connection pool using the environment variables
const db = mysql.createPool({
  host: process.env.DB_HOST,       // Use the DB_HOST from .env.local
  user: process.env.DB_USER,       // Use the DB_USER from .env.local
  password: process.env.DB_PASSWORD, // Use the DB_PASSWORD from .env.local
  database: process.env.DB_DATABASE, // Use the DB_DATABASE from .env.local
});

export default db;
