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
  onChange?: () => void;
}
export const Select = ({
  options,
  placeholder,
  id,
  width,
  register,
  disabled,
  onChange,
}: iSelect) => {
  return (
    <StyledSelect
      name={id}
      id={id}
      width={width}
      {...register}
      disabled={disabled}
      onBlur={onChange}
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
