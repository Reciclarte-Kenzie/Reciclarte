import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../styles";
import { loginSchema } from "./loginSchema";

type iLoginBody = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginBody>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<iLoginBody> = (data) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="email"
        placeholder="Insira seu email"
        id="email"
        label="E-mail"
      />
      {errors.email?.message && <p>{errors.email.message}</p>}
      <Input
        type="password"
        placeholder="Insira sua senha"
        id="password"
        label="Senha"
      />
      {errors.email?.message && <p>{errors.email.message}</p>}
      <Button text="Logar" label="Botão de login" />
    </StyledForm>
  );
};
