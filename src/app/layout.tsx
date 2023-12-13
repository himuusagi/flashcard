import "./globals.css";
import { type ReactNode } from "react";
import { NextPage, type Metadata } from "next";
import Header from "@/components/layouts/Header";

export const metadata: Metadata = {
  title: "flashcard",
  description: "",
};

type Props = { children: ReactNode };

const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
