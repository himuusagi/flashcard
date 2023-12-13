import { type NextPage, type Metadata } from "next";
import { redirect } from "next/navigation";
import { getUserId } from "@/utils/get-user-id";
import SigninButton from "@/components/elements/SigninButton";
import Heading1 from "@/components/elements/Heading1";

export const metadata: Metadata = {
  title: "サインイン | flashcard",
};

const Page: NextPage = async () => {
  const userId = await getUserId();
  if (userId) {
    redirect("/");
  }

  return (
    <div>
      <Heading1 title="サインイン" />

      <div className="mt-[40px] py-[40px] text-center">
        <SigninButton />
      </div>
    </div>
  );
};

export default Page;
