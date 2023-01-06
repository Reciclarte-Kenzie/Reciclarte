import { FormEvent, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { SliderInputStyled } from "./styles";

export interface iSliderInputProps {
  register?: UseFormRegisterReturn;
  disabled?: boolean;
  value?: number;
  min: number;
  max: number;
  valueCssVariable: string;
  setvalueCssVariable: React.Dispatch<React.SetStateAction<string>>;
}

export const SliderInput = ({
  register,
  disabled,
  value,
  min,
  max,
  valueCssVariable,
  setvalueCssVariable,
}: iSliderInputProps) => {
  const updateValueCssVariable = (event: FormEvent<HTMLInputElement>) => {
    const inputSlider: HTMLInputElement = event.target as HTMLInputElement;
    const inputSliderValue = inputSlider.value;

    setvalueCssVariable(inputSliderValue);
  };

  return (
    <SliderInputStyled
      type="range"
      disabled={disabled}
      value={value}
      min={min}
      max={max}
      valueCssVariable={valueCssVariable}
      {...register}
      onInput={updateValueCssVariable}
    />
  );
};
