import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput, StyledLabel } from "./styles";

interface iInput extends React.HTMLProps<HTMLInputElement> {
  type: string;
  placeholder: string;
  label: string;
  id: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
  range?: {
    min: number;
    max: number;
    step?: number;
  };
}

export const Input = ({
  type = "text",
  placeholder,
  label,
  id,
  register,
  disabled,
  range,
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
        min={range?.min}
        max={range?.max}
        step={range?.step}
      />
    </fieldset>
  );
};
