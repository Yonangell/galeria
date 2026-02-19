"use client";
import "@/globals.css";

import Header from "@/components/organism/Header";  
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>App Galeria</title>
      </head>
      <ThemeProvider>
        <BodyWithTheme>
          <Header />
          {children}
        </BodyWithTheme>
      </ThemeProvider>
    </html>
  );
}

function BodyWithTheme({ children }) {
  const { theme } = useTheme();
  return (
    <body
      className={
        theme === "dark" ? "dark bg-gray-900 text-white" : "bg-white text-black"
      }
    >
      {children}
    </body>
  );
}
