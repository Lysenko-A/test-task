import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';

import { connectMongo } from '@/db/connect';
import { Users } from '@/db/model/Schema';

const handler = NextAuth({
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        void (await connectMongo());

        const result = await Users.findOne({ email: credentials!.email });

        if (!result) {
          throw new Error(
            JSON.stringify({
              errors: {
                email: 'No user found with this email',
              },
            }),
          );
        }

        const checkPassword = await compare(credentials!.password, result.password);

        if (!checkPassword) {
          throw new Error(
            JSON.stringify({
              errors: {
                password: "Password doesn't match",
              },
            }),
          );
        }

        return result;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
