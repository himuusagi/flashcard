import { type FC } from "react";

type Props = {
  type: "success" | "error";
  text: string | undefined;
};

const Message: FC<Props> = ({ type, text }) => {
  if (!text) {
    return null;
  }

  return (
    <p className={`mt-2 text-sm ${type === "success" ? "text-primary" : "text-accent"}`}>{text}</p>
  );
};

export default Message;
