import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
  return NextResponse.json({ userId: id });
}
