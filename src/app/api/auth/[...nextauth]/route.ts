import bcrypt from "bcrypt";
import prisma from "../../../libs/prismadb";

import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";



export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "text" },
                password: { label: "password", type: "password" },
              },
            
              async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                  throw new Error("Invalid credentials");
                }
        
                const user = await prisma.user.findUnique({
                  where: {
                    email: credentials.email,
                  },
                });
        
                if (!user || !user?.hashedPassword) {
                  throw new Error("Invalid credentials");
                }
        
                const isCorrectPassword = await bcrypt.compare(
                  credentials.password,
                  user.hashedPassword
                );
        
                if (!isCorrectPassword) {
                  throw new Error("Invalid credentials");
                }
        
                return user;
              },


        }),

    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/login",
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };