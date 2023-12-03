import React from "react";
import { Metadata, Viewport } from "next";

import { AppLayout } from "@/components/ui/app-layout";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Alpha",
  description: "Alpha",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="layout">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
