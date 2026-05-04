import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "კოტეჯი — თქვენი სახლი ზღვასთან ქობულეთში",
  description: "სასტუმრო კოტეჯი ქობულეთში. კომფორტული ოთახები, ზღვასთან ახლოს, კეთილმოწყობილი ტერიტორია.",
  keywords: "სასტუმრო ქობულეთში, guest house ქობულეთი, კოტეჯი, ქობულეთი, აჭარა",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
