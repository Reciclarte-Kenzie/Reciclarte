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
<<<<<<< HEAD
=======
  disabled?: boolean;
>>>>>>> 6ccd3d3e2f36b836adad08c60d884ee30bbb3cc6
}

export function Button({
  text,
  action,
  type = "submit",
  className,
  label,
  disabled,
}: iButtonProps) {
  return (
    <StyledButton
      aria-label={`${label}`}
      type={type}
      onClick={action}
      className={className}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
}
