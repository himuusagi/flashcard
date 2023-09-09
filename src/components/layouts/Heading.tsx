import { type FC } from "react";

type Props = {
  title: string;
};

const Heading: FC<Props> = ({ title }) => {
  return (
    <div className="flex justify-center">
      <div className="relative min-w-[280px] text-center px-[40px] py-[8px]">
        <h1>
          <span className="text-primary text-2xl">{title}</span>
        </h1>
        <div className=" border border-transparent border-t-primary border-l-primary absolute left-0 top-0 h-[10px] w-[10px] " />
        <div className=" border border-transparent border-b-primary border-l-primary absolute left-0 bottom-0 h-[10px] w-[10px] " />
        <div className=" border border-transparent border-t-primary border-r-primary absolute right-0 top-0 h-[10px] w-[10px] " />
        <div className=" border border-transparent border-b-primary border-r-primary absolute right-0 bottom-0 h-[10px] w-[10px] " />
      </div>
      <div />
    </div>
  );
};

export default Heading;
