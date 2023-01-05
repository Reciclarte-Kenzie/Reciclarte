import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { StyledButton } from "./styles";

interface iButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string | React.ReactNode;
  type?: "submit" | "button" | "reset" | undefined;
  className?: string;
  label: string;
  action?: () => void;
  disabled?: boolean;
  buttonType?: string;
}

export function Button({
  text,
  action,
  type = "submit",
  className,
  label,
  disabled,
  buttonType,
}: iButtonProps) {
  return (
    <StyledButton
      aria-label={`${label}`}
      type={type}
      onClick={action}
      className={className}
      disabled={disabled}
      buttonType={buttonType}
    >
      {text}
    </StyledButton>
  );
}
