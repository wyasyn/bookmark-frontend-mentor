import { ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { useState } from "react";

export default function QuestionItem({
  question,
  answer,
  position,
}: {
  question: string;
  answer: string;
  position: number;
}) {
  const [active, setActive] = useState(0);
  const closeAnswer = () => {
    setActive(0);
  };
  const openAnswer = () => {
    setActive(position);
  };
  return (
    <div>
      <h3
        className={`py-2 cursor-pointer hover:text-destructive duration-300 ease-in-out border-b border-foreground-muted/60 font-medium flex items-center justify-between pr-4 ${
          position === 1 && "border-t"
        }`}
      >
        {question}{" "}
        {position === active ? (
          <span
            className={`text-destructive p-1 flex items-center`}
            onClick={closeAnswer}
          >
            <ArrowUpIcon size={16} />
          </span>
        ) : (
          <span
            className={`text-primary p-1 flex items-center`}
            onClick={openAnswer}
          >
            <ArrowDownIcon size={16} />
          </span>
        )}
      </h3>
      <p
        className={` pt-4 text-pretty overflow-hidden h-0 duration-300 ease-in-out ${
          position === active ? "h-auto" : "h-0"
        }`}
      >
        {answer}
      </p>
    </div>
  );
}
