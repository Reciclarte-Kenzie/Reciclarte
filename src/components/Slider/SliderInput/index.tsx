import { FormEvent, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { SliderStyled } from "./styles";

interface iSliderProps {
  register?: UseFormRegisterReturn;
  disabled?: boolean;
  value?: number;
  min: number;
  max: number;
}

export const Slider = ({
  register,
  disabled,
  value,
  min,
  max,
}: iSliderProps) => {
  const [valueCssVariable, setvalueCssVariable] = useState((value || max / 2) + "");

  const updateValueCssVariable = (event: FormEvent<HTMLInputElement>) => {
    const inputSlider: HTMLInputElement = event.target as HTMLInputElement;
    const inputSliderValue = inputSlider.value;

    setvalueCssVariable(inputSliderValue);
  };

  return (
    <SliderStyled
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
