import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';


// GET สำหรับ Prisma
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching data from Prisma:", error);
    return NextResponse.json({ error: 'Failed to fetch data from Prisma' }, { status: 500 });
  }
}

// POST สำหรับ Prisma
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {
    console.error("Error posting data to Prisma:", error);
    return NextResponse.json({ error: 'Failed to post data to Prisma' }, { status: 500 });
  }
}
