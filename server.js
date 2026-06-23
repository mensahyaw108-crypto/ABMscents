const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

const rootArg = process.argv[2] || ".";
const root = path.resolve(__dirname, rootArg);
const port = Number(process.env.PORT || 5500);
const host = process.env.HOST || "127.0.0.1";

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml"
};

function send(res, status, body, type = "text/plain; charset=utf-8") {
  res.writeHead(status, { "Content-Type": type });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const urlPath = decodeURIComponent(new URL(req.url, `http://${host}:${port}`).pathname);
  const relativePath = urlPath === "/" ? "index.html" : urlPath.slice(1);
  const filePath = path.resolve(root, relativePath);

  if (!filePath.startsWith(root)) {
    send(res, 403, "Forbidden");
    return;
  }

  fs.readFile(filePath, (error, body) => {
    if (error) {
      send(res, 404, "Not found");
      return;
    }
    send(res, 200, body, types[path.extname(filePath).toLowerCase()] || "application/octet-stream");
  });
});

server.listen(port, host, () => {
  console.log(`ABMscents running at http://${host}:${port}`);
});
