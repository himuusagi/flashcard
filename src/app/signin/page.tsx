import { type NextPage } from "next";
import { redirect } from "next/navigation";
import { getUserId } from "@/utils/get-user-id";
import SigninButton from "@/components/elements/SigninButton";
import Heading1 from "@/components/elements/Heading1";
import Main from "@/components/layouts/Main";

const Page: NextPage = async () => {
  const userId = await getUserId();
  if (userId) {
    redirect("/");
  }

  return (
    <Main hasHeader={false}>
      <Heading1 title="サインイン" />

      <div className="mt-[40px] py-[40px] text-center">
        <SigninButton />
      </div>
    </Main>
  );
};

export default Page;
