import type { NextConfig } from "next";
import { env } from "process";

const allowedDevOrigins = process.env.REPLIT_DOMAINS
? [process.env.REPLIT_DOMAINS.split(",")[0]]
: [];

const nextConfig: NextConfig = {
  allowedDevOrigins: allowedDevOrigins,
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
