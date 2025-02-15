import connection from '@/lib/mysql';
import { NextResponse } from 'next/server';

export async function GET() {
  return new Promise<NextResponse>((resolve, reject) => {
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error querying MySQL:', err);
        return reject(NextResponse.json({ error: 'Failed to fetch data from MySQL' }, { status: 500 }));
      }
      resolve(NextResponse.json(results));
    });
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  return new Promise<NextResponse>((resolve, reject) => {
    connection.query(
      'INSERT INTO users (name, email) VALUES (?, ?)',
      [body.name, body.email],
      (err, _results) => {
        if (err) {
          console.error('Error inserting data into MySQL:', err);
          return reject(NextResponse.json({ error: 'Failed to post data to MySQL' }, { status: 500 }));
        }
        resolve(NextResponse.json({ message: 'Data inserted successfully' }));
      }
    );
  });
}
