import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createConnection({
  host: process.env.MYSQL2_DB_HOST,
  user: process.env.MYSQL2_DB_USER,
  password: process.env.MYSQL2_DB_PASS,
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

export default connection;
