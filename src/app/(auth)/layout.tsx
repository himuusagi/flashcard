import { type ReactNode } from "react";
import { type NextPage, type Metadata } from "next";
import Main from "@/components/layouts/Main";

export const metadata: Metadata = {
  title: "flashcard",
};

type Props = { children: ReactNode };

const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <Main hasHeader={false}>{children}</Main>
      </body>
    </html>
  );
};

export default RootLayout;
