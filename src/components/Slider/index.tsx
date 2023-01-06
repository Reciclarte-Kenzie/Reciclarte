import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { SliderInput } from "./SliderInput";
import { SliderStyled } from "./styles";

export interface iSliderProps {
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
  const [valueCssVariable, setvalueCssVariable] = useState(
    (value || max / 2) + ""
  );

  return (
    <SliderStyled>
      <div>
        <label>Nível de dificuldade</label>
        <span>{valueCssVariable}</span>
      </div>
      <SliderInput
        disabled={disabled}
        value={value}
        min={min}
        max={max}
        register={register}
        valueCssVariable={valueCssVariable}
        setvalueCssVariable={setvalueCssVariable}
      />
    </SliderStyled>
  );
};
