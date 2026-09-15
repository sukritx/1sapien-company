import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.afterquery.com"),
  title: "5-Star Reviews & Local SEO for Local Businesses",
  applicationName: "1Sapien",
  description:
    "1Sapien turns every finished job into a 5-star Google review, ranks your business at the top of your service area, and builds websites that turn visitors into booked jobs — for local businesses across the US and Europe.",
  robots: { index: true, follow: true, "max-image-preview": "large" },
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/sites/afterquery-com-7e0a74f7/shared/seo/favicon.ico", sizes: "48x48" },
      { url: "/sites/afterquery-com-7e0a74f7/shared/seo/icon.png", sizes: "192x192" },
      { url: "/sites/afterquery-com-7e0a74f7/shared/seo/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/sites/afterquery-com-7e0a74f7/shared/seo/apple-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "5-Star Reviews & Local SEO for Local Businesses - 1Sapien",
    description:
      "1Sapien turns every finished job into a 5-star Google review, ranks your business at the top of your service area, and builds websites that turn visitors into booked jobs — for local businesses across the US and Europe.",
    url: "https://www.afterquery.com",
    siteName: "1Sapien",
    images: ["/sites/afterquery-com-7e0a74f7/shared/seo/og-default.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "5-Star Reviews & Local SEO for Local Businesses - 1Sapien",
    description:
      "1Sapien turns every finished job into a 5-star Google review, ranks your business at the top of your service area, and builds websites that turn visitors into booked jobs — for local businesses across the US and Europe.",
    images: ["/sites/afterquery-com-7e0a74f7/shared/seo/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-bg text-ink font-sans">{children}</body>
    </html>
  );
}
