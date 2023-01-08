import { Field } from "./Field";
import { iFieldProps } from "./Field/iField";
import { FieldStyled } from "./Field/styles";
import { FieldsetStyled } from "./Fieldset/styles";
import { LabelStyled } from "./Label/styles";

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
    <FieldsetStyled>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <FieldStyled
        type={type}
        placeholder={placeholder}
        label={label}
        id={id}
        aria-label={placeholder}
        register={register}
        disabled={disabled}
        textarea={textarea}
      />
    </FieldsetStyled>
  );
};
