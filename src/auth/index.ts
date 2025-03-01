import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
// import Credentials from "next-auth/providers/credentials";

// export const BASE_PATH = "/api/auth";

// export interface User {
//   id?: string;
//   username?: string;
//   password?: string;
//   avatar?: string;
//   email?: string;
// }

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

const USERS = [
  { name: "Jiayi Zhan", email: "jiayizhan2005@gmail.com", password: "pwd" },
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
});
