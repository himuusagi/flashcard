import { type FC, type ReactNode } from "react";

type Props = {
  title: string;
};

const Heading1: FC<Props> = ({ title }) => {
  const lineBrokenTexts: ReactNode[] = [];

  title.split(/\n/).forEach((text, index) => {
    if (index !== 0) {
      lineBrokenTexts.push(<br key={index} />);
    }
    lineBrokenTexts.push(text);
  });

  return (
    <div className="mb-[40px] flex justify-center">
      <div className="relative min-w-[280px] px-[40px] py-[8px] text-center">
        <h1 className="text-2xl text-primary">{lineBrokenTexts}</h1>
        <div className=" absolute left-0 top-0 h-[10px] w-[10px] border border-transparent border-l-primary border-t-primary " />
        <div className=" absolute bottom-0 left-0 h-[10px] w-[10px] border border-transparent border-b-primary border-l-primary " />
        <div className=" absolute right-0 top-0 h-[10px] w-[10px] border border-transparent border-r-primary border-t-primary " />
        <div className=" absolute bottom-0 right-0 h-[10px] w-[10px] border border-transparent border-b-primary border-r-primary " />
      </div>
      <div />
    </div>
  );
};

export default Heading1;
