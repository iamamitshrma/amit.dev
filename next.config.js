/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "firebasestorage.googleapis.com"
            }
        ],
        formats: ["image/webp"]
    }
}

module.exports = nextConfig
