import { StyledRegisterPage } from "./styles";
import { BlackNameLogo } from "../../components/Logo";
import { registerSchema } from "./registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { StyledForm } from "../../components/Forms/styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { iRegisterData } from "../../providers/UserProvider";

interface iRegister extends iRegisterData {
  confirmation: string;
}

export function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegister>({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  });
  const { registerSubmit, loading } = useContext(UserContext);

  const onSubmit: SubmitHandler<iRegister> = (data) => {
    const { confirmation, ...body } = data;
    registerSubmit(body);
  };
  return (
    <StyledRegisterPage>
      <BlackNameLogo />
      <div>
        <h1>Cadastro</h1>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/Login">
          <button> Voltar </button>
        </Link>
      </div>
      <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          type="name"
          placeholder="Insira seu nome"
          id="name"
          label="Nome"
          register={register("name")}
          error={errors.name?.message}
        />
        <Input
          type="email"
          placeholder="Insira sua email"
          id="email"
          label="E-mail"
          register={register("email")}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Insira sua senha"
          id="password"
          label="Senha"
          register={register("password")}
          error={errors.password?.message}
        />
        <Input
          type="password"
          placeholder="Insira sua senha"
          id="confirmation"
          label="Confirme sua senha"
          register={register("confirmation")}
          error={errors.confirmation?.message}
        />
        <Input
          type="profile_pic"
          placeholder="Insira seu avatar"
          id="profile_pic"
          label="Avatar"
          register={register("profile_pic")}
          error={errors.profile_pic?.message}
        />
        <Input
          type="bio"
          placeholder="Escreva sobre você"
          id="bio"
          label="Bio"
          register={register("bio")}
          error={errors.bio?.message}
        />
        <Button text="Cadastrar" label="Botão de login" disabled={loading} />
      </StyledForm>
    </StyledRegisterPage>
  );
}
