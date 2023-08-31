export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/about")) {
    console.log("about API Middle ware");
  } else if (req.nextUrl.pathname.startsWith("/about")) {
    console.log("about Middle ware");
  }
}
