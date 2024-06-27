import { FC, ReactNode } from "react";

interface ButtonProps {
  variants?: "primary" | "secondary" | "outline";
  isFullSize?: boolean;
  children: ReactNode;
}
const Button: FC<ButtonProps> = ({
  variants = "primary",
  children,
  isFullSize,
}) => {
  return (
    <>
      <button
        className={`btn ${
          variants === "primary"
            ? "btn-primary"
            : variants === "outline"
            ? "btn-outline"
            : "btn-secondary"
        }`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
