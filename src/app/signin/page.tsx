import { type NextPage } from "next";
import SigninButton from "@/components/elements/SigninButton";
import Heading1 from "@/components/elements/Heading1";
import Inner from "@/components/layouts/Inner";
import Main from "@/components/layouts/Main";

const Page: NextPage = () => {
  return (
    <Main>
      <Heading1 title="サインイン" />

      <Inner width="narrow">
        <div className="mt-[40px] py-[40px] text-center">
          <SigninButton />
        </div>
      </Inner>
    </Main>
  );
};

export default Page;
