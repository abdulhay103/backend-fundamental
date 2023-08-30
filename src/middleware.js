export default async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/about")) {
    console.log("I'm about from Middleware");
  } else if (req.nextUrl.pathname.startsWith("/profile")) {
    console.log("I'm from profile middleware");
  }
}
