import { type ReactNode } from "react";
import { type Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "flashcard",
  description: "",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
