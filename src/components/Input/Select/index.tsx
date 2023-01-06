import { UseFormRegisterReturn } from "react-hook-form";
import { StyledSelect } from "./style";

interface iSelect {
  options: {
    value: string;
    text: string;
  }[];
  placeholder: string;
  id: string;
  width?: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
}
export const Select = ({
  options,
  placeholder,
  id,
  width,
  register,
  disabled,
}: iSelect) => {
  return (
    <StyledSelect
      name={id}
      id={id}
      width={width}
      {...register}
      disabled={disabled}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => {
        return (
          <option value={opt.value} key={opt.value}>
            {opt.text}
          </option>
        );
      })}
    </StyledSelect>
  );
};
