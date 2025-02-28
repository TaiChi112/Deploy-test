import connection from '@/lib/mysql';
import { NextResponse } from 'next/server';

export async function GET() {
  return new Promise<NextResponse>((resolve, reject) => {
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error querying MySQL:', err);
        return reject(NextResponse.json({ error: 'Failed to fetch data from MySQL' }, { status: 500 }));
      }
      resolve(NextResponse.json({ data: results })); 
    });
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 });
    }

    await new Promise<void>((resolve, reject) => {
      connection.query(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [body.name, body.email],
        (err) => {
          if (err) {
            console.error('Error inserting data into MySQL:', err);
            return reject(new Error('Failed to post data to MySQL'));
          }
          resolve();
        }
      );
    });

    return NextResponse.json({ message: 'Data inserted successfully' });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

