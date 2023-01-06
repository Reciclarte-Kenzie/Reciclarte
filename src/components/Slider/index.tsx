import { useState } from "react";
import { SliderInput, iSliderInputProps } from "./SliderInput";
import { SliderStyled } from "./styles";

export const Slider = ({
  register,
  disabled,
  value,
  min,
  max,
}: iSliderInputProps) => {
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
