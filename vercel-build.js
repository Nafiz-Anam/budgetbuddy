// vercel-build.js
const { execSync } = require("child_process");

// Run prisma generate during the build process
execSync("prisma generate");
