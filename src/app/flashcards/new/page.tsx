import { type Metadata, type NextPage } from "next";
import { getUserId } from "@/utils/get-user-id";
import SubmissionMessageProvider from "@/contexts/SubmissionMessageContext";
import AddFlashcardForm from "@/components/layouts/AddFlashcardForm";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import Heading1 from "@/components/elements/Heading1";
import Inner from "@/components/layouts/Inner";
import Main from "@/components/layouts/Main";

export const metadata: Metadata = {
  title: "単語帳の追加",
};

const Page: NextPage = async () => {
  const userId = await getUserId();
  if (!userId) {
    throw new Error("認証が必要なため、リクエストが拒否されました");
  }

  return (
    <Main>
      <Heading1 title="単語帳の追加" />

      <Inner width="narrow">
        <ContentWrapper>
          <SubmissionMessageProvider>
            <AddFlashcardForm />
          </SubmissionMessageProvider>
        </ContentWrapper>
      </Inner>
    </Main>
  );
};

export default Page;
