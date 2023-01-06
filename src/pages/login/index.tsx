import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm";
import { BlackNameLogo } from "../../components/Logo";
import { StyledLoginContainer, StyledLoginPage } from "./styles";

export const LoginPage = () => {
  return (
    <StyledLoginContainer>
      <StyledLoginPage>
        <section>
          <BlackNameLogo />
          <h2>Login</h2>
        </section>
        <LoginForm />
        <section className="referRegister">
          <h3>Novo por aqui?</h3>
          <Link to="/register">Cadastre-se</Link>
          <h3>Não quer usar sua conta?</h3>
          <Link className="homePage" to="/">Voltar para a home</Link>
        </section>
      </StyledLoginPage>
    </StyledLoginContainer>
  );
};
