import { iFieldProps } from "./iField";

export const Field = ({
  type = "text",
  placeholder,
  id,
  register,
  disabled,
  textarea,
}: iFieldProps) => {
  return (
    <>
      {textarea ? (
        <textarea
          placeholder={placeholder}
          id={id}
          name={id}
          aria-label={placeholder}
          {...register}
          disabled={disabled}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          name={id}
          aria-label={placeholder}
          {...register}
          disabled={disabled}
        />
      )}
    </>
  );
};
