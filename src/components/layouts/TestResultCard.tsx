"use client";

import { useState, type FC } from "react";
import { useTestResultContext } from "@/contexts/TestResultContext";
import Arrow from "../elements/Arrow";
import BoxWithoutTitle from "./BoxWithoutTitle";
import Label from "../elements/Label";
import TestResultAccordion from "./TestResultAccordion";

const TestResultCard: FC = () => {
  const { correction } = useTestResultContext();

  const [isOpen, setIsOpen] = useState(!correction);

  return (
    <BoxWithoutTitle borderColor={correction ? "primary" : "gray"}>
      <div className="flex items-start justify-between">
        <TestResultAccordion isOpen={isOpen} setIsOpen={setIsOpen} />

        <div className="ml-[8px]">
          <div className="flex items-center">
            <Label text={correction ? "正解" : "不正解"} color={correction ? "primary" : "gray"} />
            <Arrow
              direction={isOpen ? "up" : "down"}
              color={correction ? "primary" : "gray"}
              className="ml-[8px]"
            />
          </div>
        </div>
      </div>
    </BoxWithoutTitle>
  );
};

export default TestResultCard;
