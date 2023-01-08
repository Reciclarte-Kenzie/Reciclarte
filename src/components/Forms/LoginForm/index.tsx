import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Button";
import { Input } from "../../Input/index";
import { StyledForm } from "../styles";
import { loginSchema } from "./loginSchema";
import { iLoginData, UserContext } from "../../../providers/UserProvider";
import { useContext } from "react";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });
  const { loginSubmit, loading } = useContext(UserContext);
  const onSubmit: SubmitHandler<iLoginData> = (data) => loginSubmit(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder="Insira seu email"
        id="email"
        label="E-mail"
        disabled={loading}
        register={register("email")}
        error={errors["email"]}
      />
      {errors.email?.message && <p>{errors.email.message}</p>}
      <Input
        type="password"
        placeholder="Insira sua senha"
        id="password"
        label="Senha"
        disabled={loading}
        register={register("password")}
        error={errors["password"]}
      />
      {errors.password?.message && <p>{errors.password.message}</p>}
      <Button text="Logar" label="Botão de login" disabled={loading} />
    </StyledForm>
  );
};
