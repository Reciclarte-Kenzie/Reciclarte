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
}
export const Select = ({
  options,
  placeholder,
  id,
  width,
  register,
}: iSelect) => {
  return (
    <StyledSelect name={id} id={id} width={width} {...register}>
      <option value="">{placeholder}</option>
      {options.map((opt) => {
        return <option value={opt.value}>{opt.text}</option>;
      })}
    </StyledSelect>
  );
};
