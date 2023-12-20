import { type Metadata, type NextPage } from "next";
import { redirect } from "next/navigation";
import { getUserId } from "@/utils/get-user-id";
import SubmissionMessageProvider from "@/contexts/SubmissionMessageContext";
import AddFlashcardForm from "@/components/layouts/AddFlashcardForm";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import Heading1 from "@/components/elements/Heading1";

export const metadata: Metadata = {
  title: "単語帳の追加",
};

const Page: NextPage = async () => {
  const userId = await getUserId();
  if (!userId) {
    redirect("/signin");
  }

  return (
    <div>
      <Heading1 title="単語帳の追加" />

      <ContentWrapper>
        <SubmissionMessageProvider>
          <AddFlashcardForm />
        </SubmissionMessageProvider>
      </ContentWrapper>
    </div>
  );
};

export default Page;
