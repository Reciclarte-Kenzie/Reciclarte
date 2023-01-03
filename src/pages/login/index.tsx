import { Link } from "react-router-dom";
import { LoginForm } from "../../components/Forms/LoginForm";
import { StyledLoginPage } from "./styles";

export const LoginPage = () => {
  return (
    <StyledLoginPage>
      <section>
        <img
          src="../../assets/imgs/reciclarte-negOk-blackName.svg"
          alt="Não aguento mais"
        />
      </section>
      <LoginForm />
      <section className="referRegister">
        <h3>Novo por aqui?</h3>
        {/* <Link to={Register}/> */}
        <a href="#">Cadastre-se</a>
      </section>
    </StyledLoginPage>
  );
};
