import { StyledInput, StyledLabel } from "./styles";

interface iInput {
  type: string;
  placeholder: string;
  label: string;
  id: string;
}

export const Input = ({ type = "text", placeholder, label, id }: iInput) => {
  return (
    <fieldset>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        type={type}
        placeholder={placeholder}
        id={id}
        aria-label={placeholder}
      />
    </fieldset>
  );
};
