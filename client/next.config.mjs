
import MillionLint from "@million/lint";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
   domains: ["img.freepik.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "culture-ui-document.s3.us-east-2.amazonaws.com",
        
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=()",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
        ],
      },
    ];
  },
};

export default MillionLint.next({
  enabled: true,
  rsc: true
})(nextConfig);

