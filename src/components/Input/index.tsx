import { Field } from "./Field";
import { iFieldProps } from "./Field/iField";
import { FieldsetStyled } from "./styles";

export const Input = ({
  type = "text",
  placeholder,
  label,
  id,
  register,
  disabled,
  textarea,
  error,
}: iFieldProps) => {
  return (
    <FieldsetStyled>
      <label htmlFor={id}>{label}</label>
      <Field
        type={type}
        placeholder={placeholder}
        label={label}
        id={id}
        aria-label={placeholder}
        register={register}
        disabled={disabled}
        textarea={textarea}
      />
      {error && <p>{error}</p>}
    </FieldsetStyled>
  );
};
