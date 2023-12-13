import { type ReactNode } from "react";
import { type NextPage, type Metadata } from "next";
import Header from "@/components/layouts/Header";
import Main from "@/components/layouts/Main";

export const metadata: Metadata = {
  title: "flashcard",
};

type Props = { children: ReactNode };

const RootLayout: NextPage<Props> = ({ children }) => {
  return (
    <html>
      <body>
        <Header />
        <Main hasHeader={true}>{children}</Main>
      </body>
    </html>
  );
};

export default RootLayout;
