import "@/public/css/lux-bootstrap.min.css";
import "@/public/css/whatsapp-floating.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Twese Mart",
  description: "Everything you need under one roof",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={``}>
        {children}
        <a
          href="https://wa.me/263786486522" // Replace with your business WhatsApp number
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </body>
    </html>
  );
}
