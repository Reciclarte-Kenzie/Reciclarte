import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface iFieldProps {
  type?: string;
  placeholder: string;
  label: string;
  id: string;
  register?: UseFormRegisterReturn;
  disabled?: boolean;
  textarea?: boolean;
  className?: string;
  error?: FieldError;
}
