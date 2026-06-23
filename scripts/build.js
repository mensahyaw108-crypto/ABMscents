const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const entries = ["index.html", "styles.css", "app.js", "images", "vendor"];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(dist, { recursive: true });

for (const entry of entries) {
  const from = path.join(root, entry);
  const to = path.join(dist, entry);
  fs.cpSync(from, to, { recursive: true });
}

console.log("Built static site in dist/");
