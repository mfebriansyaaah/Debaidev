/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mengaktifkan Strict Mode untuk mendeteksi potensi bug dan side-effects pada komponen React sejak dini
  reactStrictMode: true,

  // Optimasi Kompilator Berbasis Rust (SWC)
  compiler: {
    // Otomatis menghapus seluruh console.log pada build production untuk mencegah kebocoran data
    // Tetap mempertahankan console.error dan console.warn sesuai dengan aturan ESLint kita
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  // Optimasi Gambar Komprehensif untuk mendongkrak skor Largest Contentful Paint (LCP)
  images: {
    // Mengutamakan format AVIF yang jauh lebih ringan daripada WebP untuk aset modern
    formats: ["image/avif", "image/webp"],
    // Mendaftarkan external domain dengan ketat jika kamu memuat gambar dari pihak ketiga (misal: GitHub/Unsplash)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },

  // Menyuntikkan Security Headers tingkat Enterprise untuk proteksi XSS dan Clickjacking
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
