"use client";

// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Countries",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <html lang="en" className={`${darkMode && "dark"}`}>
      <body className={inter.className}>
        <header
          className="flex items-center justify-between h-20 container px-14 shadow-lg dark:bg-gray-700
        "
        >
          <div>
            <h1 className="font-extrabold text-2xl dark:text-white">
              Where in the world ?
            </h1>
          </div>
          <div className="flex items-center justify-center">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5532 10.815C7.66857 10.815 4.51929 7.92783 4.51929 4.36821C4.51929 3.0253 4.96679 1.78158 5.73143 0.75C2.69036 1.69515 0.5 4.33122 0.5 7.43807C0.5 11.3385 3.94929 14.5 8.20357 14.5C11.5929 14.5 14.4696 12.4932 15.5 9.70452C14.375 10.4048 13.0161 10.815 11.5532 10.815Z"
                    fill="white"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="cursor-pointer"
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
              )}
            </button>
            <h3 className="font-semibold text-base mx-2 dark:text-white">
              Dark Mode
            </h3>
          </div>
        </header>
        <main className="container px-14 dark:bg-gray-800">{children}</main>
      </body>
    </html>
  );
}
