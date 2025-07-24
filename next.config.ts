import type { NextConfig } from "next";
import { env } from "process";

const nextConfig: NextConfig = {
  // Only define allowedDevOrigins if REPLIT_DOMAINS is present
  ...(env.REPLIT_DOMAINS && {
    allowedDevOrigins: [env.REPLIT_DOMAINS.split(",")[0]],
  }),
};

module.exports = nextConfig;