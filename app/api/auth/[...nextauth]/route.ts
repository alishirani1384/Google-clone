import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }