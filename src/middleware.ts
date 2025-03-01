export { auth as middleware } from "@/auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { auth, BASE_PATH } from "./auth";

// export async function middleware(request: NextRequest) {
//   const reqUrl = new URL(request.url);
//   const session = await auth();

//   if (!session && reqUrl?.pathname !== "/") {
//     return NextResponse.redirect(
//       new URL(
//         `${BASE_PATH}/signin?callbackUrl=${encodeURIComponent(reqUrl?.pathname)}`,
//         request.url,
//       ),
//     );
//   }
// }

// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico, sitemap.xml, robots.txt (metadata files)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
//   ],
// };
