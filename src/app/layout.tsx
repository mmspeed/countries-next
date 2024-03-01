import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Countries",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header
          className="flex items-center justify-between h-20 container px-14 shadow-lg
        "
        >
          <div>
            <h1 className="font-extrabold text-2xl">
              Where in the world ?
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.5532 13.815C9.66857 13.815 6.51929 10.9278 6.51929 7.36821C6.51929 6.0253 6.96679 4.78158 7.73143 3.75C4.69036 4.69515 2.5 7.33122 2.5 10.4381C2.5 14.3385 5.94929 17.5 10.2036 17.5C13.5929 17.5 16.4696 15.4932 17.5 12.7045C16.375 13.4048 15.0161 13.815 13.5532 13.815Z"
                fill="white"
                stroke="#111517"
                stroke-width="1.25"
              />
            </svg>
            <h3 className="font-semibold text-base mx-2">
              Dark Mode
            </h3>
          </div>
        </header>
        <main className="container px-14">{children}</main>
      </body>
    </html>
  );
}
