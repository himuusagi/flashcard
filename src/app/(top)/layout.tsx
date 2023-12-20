import { type ReactNode } from "react";
import { type NextPage, type Metadata } from "next";
import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";
import Inner from "@/components/layouts/Inner";

export const metadata: Metadata = {
  title: "flashcard",
};

type Props = { children: ReactNode };

const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <Header />

        <Inner width="wide">
          <Main hasHeader={true}>{children}</Main>
        </Inner>
      </body>
    </html>
  );
};

export default RootLayout;
