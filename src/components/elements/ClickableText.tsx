import { useSubmissionMessageContext } from "@/contexts/SubmissionMessageContext";
import { useEffect, type FC, type MouseEventHandler } from "react";
import { useFormStatus } from "react-dom";

type Props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  formAction?: string | ((formData: FormData) => void);
  className?: string;
};

const ClickableText: FC<Props> = ({ text, onClick, formAction, className }) => {
  const { setIsShowing, type, setType, setMessage } = useSubmissionMessageContext();

  const { pending } = useFormStatus();

  useEffect(() => {
    if (pending) {
      setIsShowing(true);
      setType("pending");
      setMessage("処理中");
    } else {
      setIsShowing(false);
      setType(undefined);
      setMessage(undefined);
    }
  }, [pending, setIsShowing, setType, setMessage]);

  return (
    <button
      type="submit"
      onClick={onClick}
      formAction={formAction}
      disabled={type === "pending"}
      className={`relative cursor-pointer leading-[19px] text-primary before:absolute before:bottom-0 before:left-0 before:block before:h-[1px] before:w-full  before:bg-transparent before:duration-100 hover:before:bg-primary focus:outline-primary-light disabled:pointer-events-none disabled:text-primary-light ${className}`}
    >
      {text}
    </button>
  );
};

export default ClickableText;
