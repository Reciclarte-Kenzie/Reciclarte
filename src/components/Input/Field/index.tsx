import { iFieldProps } from "./iField";

export const Field = ({
  type = "text",
  placeholder,
  id,
  register,
  disabled,
  textarea,
  className,
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
          className={className}
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
          className={className}
        />
      )}
    </>
  );
};
