"use client";

import { type FC } from "react";
import { signIn } from "next-auth/react";
import Button from "./Button";

const SigninButton: FC = () => {
  return (
    <Button
      type="button"
      text="Googleでサインイン"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={() => signIn("google", { callbackUrl: "/" })}
    />
  );
};

export default SigninButton;
