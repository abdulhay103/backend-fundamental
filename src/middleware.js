export function middleware(req, res) {
  console.log("I am Middleware");
}
export const config = {
  matcher: ["/api/:path*", "/about"],
};
