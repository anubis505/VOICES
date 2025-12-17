const fs = require('fs');
const path = require('path');

const indexPath = path.resolve(__dirname, '..', 'dist', 'index.html');
if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html not found. Did the build run?');
  process.exit(2);
}

const content = fs.readFileSync(indexPath, 'utf8');
const checks = ["./assets/", "./index.css"];
const missing = checks.filter(s => !content.includes(s));
if (missing.length) {
  console.error('Smoke check failed. Missing patterns in dist/index.html:', missing);
  process.exit(1);
}

console.log('Smoke check passed: relative asset paths present in dist/index.html');
process.exit(0);
