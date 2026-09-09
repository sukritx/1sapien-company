import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.afterquery.com"),
  title: "Expert Data for Frontier AI",
  applicationName: "1Sapien",
  description:
    "1Sapien captures how experts reason and turns real-world professional work into high-quality training data for frontier foundation models.",
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
    title: "Expert Data for Frontier AI - 1Sapien",
    description:
      "1Sapien captures how experts reason and turns real-world professional work into high-quality training data for frontier foundation models.",
    url: "https://www.afterquery.com",
    siteName: "1Sapien",
    images: ["/sites/afterquery-com-7e0a74f7/shared/seo/og-default.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Data for Frontier AI - 1Sapien",
    description:
      "1Sapien captures how experts reason and turns real-world professional work into high-quality training data for frontier foundation models.",
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
