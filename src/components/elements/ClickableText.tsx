import { type FC, type MouseEventHandler } from "react";

type Props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  formAction?: string | ((formData: FormData) => void);
  className?: string;
};

const ClickableText: FC<Props> = ({ text, onClick, formAction, className }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      formAction={formAction}
      className={`relative cursor-pointer leading-[19px] text-primary before:absolute before:bottom-0 before:left-0 before:block  before:h-[1px] before:w-full before:bg-transparent before:duration-100 hover:before:bg-primary focus:outline-primary-light ${className}`}
    >
      {text}
    </button>
  );
};

export default ClickableText;
