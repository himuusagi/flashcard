import { type FC } from "react";

type Props = {
  text: string;
};

const Heading2: FC<Props> = ({ text }) => {
  return <h2 className="mb-[20px] text-center text-2xl text-primary">{text}</h2>;
};

export default Heading2;
