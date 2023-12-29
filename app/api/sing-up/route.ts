import { NextResponse } from 'next/server';
import { hash } from 'bcryptjs';

import { Users } from '@/db/model/Schema';
import { connectMongo } from '@/db/connect';

export async function POST(request: Request) {
  try {
    await connectMongo();

    const { email, password, ...rest } = await request.json();

    const existUser = await Users.findOne({ email });

    if (existUser) {
      return NextResponse.json({ email: 'User already exists' }, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    await Users.create({
      email,
      password: hashedPassword,
      ...rest,
    });
  } catch (e) {}

  return NextResponse.json({ message: 'success' });
}
