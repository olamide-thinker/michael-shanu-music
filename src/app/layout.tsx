"use client"

import "./globals.css";
import React from "react";



export default function RootLayout({
  children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sacramento&display=swap" />
      </head>
      <body className={`luzia LuziaBold`}>
     
        {children}
    
        </body>
    </html>
  );
}
