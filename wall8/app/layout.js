import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wall8",
  description: "Your Own Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        {children}
        {/* footer */}
        <footer className="bg-blue-50 py-12">
          <div className="container mx-auto text-center px-4 text-gray-600">
            <p> Made with ❤️ Prithxvhie44</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
