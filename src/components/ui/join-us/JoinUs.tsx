import { HTMLProps } from "react";
import { Link } from "react-router-dom";

interface JoinUsProps extends HTMLProps<HTMLButtonElement> {}

export const JoinUs: React.FC<JoinUsProps> = ({
  children,
  className,
}) => {
  return (
    <Link to="auth"
    className={`${className} rounded-md border-[1px] border-transparent bg-[#1B1B1E] py-4 px-8 text-sm uppercase transition-all hover:border-white`}>
      {children}
    </Link>
  );
};
