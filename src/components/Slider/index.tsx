import { UseFormRegisterReturn } from "react-hook-form";
import { SliderStyled } from "./styles";

interface iSliderProps {
  register: UseFormRegisterReturn;
  disabled?: boolean;
  value?: number;
  min: number;
  max: number;
}

export const Slider = ({register, disabled, value, min, max}: iSliderProps) => {
  return (
    <SliderStyled type="range" disabled={disabled} value={value} min={min} max={max} {...register} />
  );
} 