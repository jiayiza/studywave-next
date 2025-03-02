import NextAuth, { type DefaultSession } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

// export const BASE_PATH = "/api/auth";

// const users = [
//   {
//     id: "test-id-1",
//     username: "test1",
//     name: "Test 1",
//     password: "pwd",
//     avatar: "",
//     email: "test1@dontreply.com",
//   },
// ];

// const authOptions: NextAuthConfig = {
//   providers: [
//     Credentials({
//       credentials: {
//         username: { label: "Username", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials): Promise<User | null> {
//         const user = users.find(
//           (user) =>
//             user.username === credentials.username &&
//             user.password === credentials.password,
//         );

//         return user
//           ? {
//               email: user.email,
//               avatar: user.avatar,
//               username: user.username,
//             }
//           : null;
//       },
//     }),
//   ],
//   basePath: BASE_PATH,
//   secret: process.env.NEXTAUTH_SECRET,
// };

declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      name?: string;
      email?: string;
      password?: string;
      image?: string;
      /**
       * By default, TypeScript merges new interface properties and overwrites existing ones.
       * In this case, the default session user properties will be overwritten,
       * with the new ones defined above. To keep the default session user properties,
       * you need to add them back into the newly declared interface.
       */
    } & DefaultSession["user"];
  }
}

const USERS = [
  { name: "Jiayi Zhan", email: "jiayizhan2005@gmail.com", password: "pwd" },
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google,
    Credentials({
      credentials: { email: {}, password: {} },
      authorize: async (credentials) => {
        const user = USERS.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password,
        );

        return user ? { email: user.email, name: user.name } : null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
