import { UseFormRegisterReturn } from "react-hook-form";
import { iFieldProps } from "./Field/iField";
import { StyledInput, StyledLabel } from "./styles";

export const Input = ({
  type = "text",
  placeholder,
  label,
  id,
  register,
  disabled,
  textarea,
}: iFieldProps) => {
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
