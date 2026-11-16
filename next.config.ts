import path from "node:path";
import type { NextConfig } from "next";

// Static export: the whole landing page ships as plain HTML, CSS and one client bundle.
// Pin the Turbopack root to this project so a parent folder's lockfile is not picked up.
const nextConfig: NextConfig = {
  output: "export",
  turbopack: {
    root: path.resolve("."),
  },
};

export default nextConfig;
