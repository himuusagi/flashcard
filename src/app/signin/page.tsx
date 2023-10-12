import { type NextPage } from "next";
import SigninButton from "@/components/elements/SigninButton";
import Heading1 from "@/components/elements/Heading1";
import Main from "@/components/layouts/Main";

const Page: NextPage = () => {
  return (
    <Main>
      <Heading1 title="サインイン" />

      <div className="mt-[40px] py-[40px] text-center">
        <SigninButton />
      </div>
    </Main>
  );
};

export default Page;
