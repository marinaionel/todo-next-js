import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen">
        <header className="bg-blue-600 text-white py-4 mb-8 shadow-md">
          <h1 className="text-center text-2xl font-bold">Next.js To-Do App</h1>
        </header>
        <main className="container mx-auto px-6">{children}</main>
      </body>
    </html>
  );
}
