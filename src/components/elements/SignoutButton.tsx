"use client";

import { type FC } from "react";
import { signOut } from "next-auth/react";
import Button from "./Button";

const SignoutButton: FC = () => {
  return (
    <Button
      type="button"
      size="small"
      text="サインアウト"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={() => signOut({ callbackUrl: "/signin" })}
    />
  );
};

export default SignoutButton;
