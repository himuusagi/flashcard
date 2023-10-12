"use client";

import { type FC } from "react";
import { signIn } from "next-auth/react";

const SigninButton: FC = () => {
  return (
    <button
      type="button"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={() => signIn("google", { callbackUrl: "/" })}
      className="min-w-[200px] rounded-[4px]  border border-primary px-[40px] py-[4px] text-center text-xl text-primary outline-none duration-100 hover:bg-primary hover:text-white focus:shadow focus:shadow-primary"
    >
      Googleでサインイン
    </button>
  );
};

export default SigninButton;
