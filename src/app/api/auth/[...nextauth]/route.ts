import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

/* eslint-disable*/
const handler = NextAuth(authOptions);
/* eslint-disable*/

export { handler as GET, handler as POST };
