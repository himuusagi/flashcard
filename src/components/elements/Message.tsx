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
    <span className={`inline-block text-sm ${type === "success" ? "text-primary" : "text-accent"}`}>
      {text}
    </span>
  );
};

export default Message;
