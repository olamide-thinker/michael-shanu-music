

import "./globals.css";
import React from "react";



export default function RootLayout({
  children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body >
     
        {children}
    
        </body>
    </html>
  );
}
