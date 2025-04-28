import "@/public/css/lux-bootstrap.min.css";
import "@/public/css/whatsapp-floating.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import type { Metadata } from "next";

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
