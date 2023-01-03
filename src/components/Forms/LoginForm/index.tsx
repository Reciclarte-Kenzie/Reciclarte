import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../styles";

export const LoginForm = () => {
  return (
    <StyledForm>
      <Input
        type="email"
        placeholder="Insira seu email"
        id="email"
        label="E-mail"
      />

      <Input
        type="password"
        placeholder="Insira sua senha"
        id="password"
        label="Senha"
      />

      <Button
        text="Logar"
        action={() => console.log("action")}
        label="Botão de login"
      />
    </StyledForm>
  );
};
