import { FormEvent } from "react";
import { iSliderProps } from "..";
import { SliderInputStyled } from "./styles";

export interface iSliderInputProps extends iSliderProps {
  valueCssVariable: number;
  setvalueCssVariable: React.Dispatch<React.SetStateAction<number>>;
}

export const SliderInput = ({
  register,
  disabled,
  defaultValue,
  min,
  max,
  valueCssVariable,
  setvalueCssVariable,
}: iSliderInputProps) => {
  const updateValueCssVariable = (event: FormEvent<HTMLInputElement>) => {
    const inputSlider: HTMLInputElement = event.target as HTMLInputElement;
    const inputSliderValue = inputSlider.value;

    setvalueCssVariable(parseInt(inputSliderValue));
  };

  return (
    <SliderInputStyled
      type="range"
      disabled={disabled}
      defaultValue={defaultValue}
      min={min}
      max={max}
      valueCssVariable={valueCssVariable}
      {...register}
      onInput={updateValueCssVariable}
    />
  );
};
