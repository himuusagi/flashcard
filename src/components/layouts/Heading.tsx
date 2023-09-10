import { type FC } from "react";

type Props = {
  title: string;
};

const Heading: FC<Props> = ({ title }) => {
  const lineBrokenTitle = (
    <>
      {title.split("  ").map((text, index) => {
        return (
          <span key={index} className="block">
            {text}
          </span>
        );
      })}
    </>
  );

  return (
    <div className="flex justify-center">
      <div className="relative min-w-[280px] px-[40px] py-[8px] text-center">
        <h1 className="text-2xl text-primary">{lineBrokenTitle}</h1>
        <div className=" absolute left-0 top-0 h-[10px] w-[10px] border border-transparent border-l-primary border-t-primary " />
        <div className=" absolute bottom-0 left-0 h-[10px] w-[10px] border border-transparent border-b-primary border-l-primary " />
        <div className=" absolute right-0 top-0 h-[10px] w-[10px] border border-transparent border-r-primary border-t-primary " />
        <div className=" absolute bottom-0 right-0 h-[10px] w-[10px] border border-transparent border-b-primary border-r-primary " />
      </div>
      <div />
    </div>
  );
};

export default Heading;
