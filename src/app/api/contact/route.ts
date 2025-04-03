import { NextResponse } from "next/server";
//import mysql from "mysql2/promise";
import db from '../../../../lib/db'

// Simulated database (Replace this with actual DB queries)
// const contactData = [
//   {
//     id: 1,
//     title: "Linkedin",
//     website: "MyName.linkedin.com",
//   },
// ];
// export async function GET() {
//   return NextResponse.json(contactData);
// }

// Create a MySQL connection
// const db = mysql.createPool({
//   host: "localhost", // use the container name for docker
//   user: "root",      // Change this if your username is different
//   password: "password",  // Replace with your actual password
//   database: "my_sampledata", // Change this to your actual database name
// });

//for directly fetching form local if config is stored in code
// export async function GET() {
//   try {
//     const [rows] = await db.query("SELECT * FROM links"); // Fetch data from MySQL

//     return NextResponse.json(rows);
//   } catch (error) {
//     console.error("Database error:", error);
//     return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
//   }
// }

//use this get data if using env files
export async function GET() {
  try {
    const [rows] = await db.promise().query("SELECT * FROM links"); // .promise() gives a promise-based API

    return NextResponse.json(rows); // Only use `rows`, which is the first element of the result
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}


