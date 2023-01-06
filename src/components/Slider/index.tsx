import { UseFormRegisterReturn } from "react-hook-form";
import { SliderStyled } from "./styles";

interface iSliderProps {
  register: UseFormRegisterReturn;
  disabled?: boolean;
  value?: number;
}

export const Slider = ({register, disabled, value}: iSliderProps) => {
  return (
    <SliderStyled type="range" disabled={disabled} value={value} {...register} />
  );
} 