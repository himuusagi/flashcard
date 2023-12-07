"use client";

import { type FC } from "react";
import { QA } from "@/types/data";
import { useTestQAndAContext } from "@/contexts/TestQAndAContext";
import AnswerTestQAndAForm from "./AnswerQAndAForm";
import CheckTestQAndAForm from "./CheckQAndAForm";
import TestResult from "./TestResult";

type Props = {
  qas: QA[];
};

const TestQAndAContent: FC<Props> = ({ qas }) => {
  const { contentType } = useTestQAndAContext();

  return (
    <div>
      {contentType === "answer" && <AnswerTestQAndAForm qas={qas} />}
      {contentType === "check" && <CheckTestQAndAForm qas={qas} />}
      {contentType === "result" && <TestResult qas={qas} />}
    </div>
  );
};

export default TestQAndAContent;
