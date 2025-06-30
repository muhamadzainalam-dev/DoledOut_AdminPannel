"use client";
import { SideBarDemo } from "./components/customs/Sidebar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SideBarDemo>{children}</SideBarDemo>
      </body>
    </html>
  );
}
