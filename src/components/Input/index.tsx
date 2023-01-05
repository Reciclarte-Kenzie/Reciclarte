import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput, StyledLabel } from "./styles";

interface iInput {
  type: string;
  placeholder: string;
  label: string;
  id: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
}

export const Input = ({
  type = "text",
  placeholder,
  label,
  id,
  register,
  disabled,
}: iInput) => {
  return (
    <fieldset>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        id={id}
        name={id}
        aria-label={placeholder}
        {...register}
        disabled={disabled}
      />
    </fieldset>
  );
};
