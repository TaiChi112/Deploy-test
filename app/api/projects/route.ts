import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name') || 'Guest';

  return NextResponse.json({ message: `Hello, ${name}!` });
}
