import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm";
import { BlackNameLogo } from "../../components/Logo";
<<<<<<< HEAD
import { StyledLoginPage } from "./styles";
=======
import { StyledLoginContainer, StyledLoginPage } from "../styles";
>>>>>>> 6ccd3d3e2f36b836adad08c60d884ee30bbb3cc6

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
          {/* <Link to={Register}/> */}
          <a href="https://linktr.ee/reciclarteg1">Cadastre-se</a>
        </section>
      </StyledLoginPage>
    </StyledLoginContainer>
  );
};
