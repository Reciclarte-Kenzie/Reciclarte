// import { Link } from "react-router-dom";
import { useState } from "react";
import { LoginForm } from "../../components/Forms/LoginForm";
import { BlackNameLogo } from "../../components/Logo";
import { ModalBase } from "../../components/Modals/ModalBase";
import { StyledLoginContainer, StyledLoginPage } from "./styles";

export const LoginPage = () => {
  const [modalVisibility, setModalVisibility] = useState(true);

  return (
    <>
      {modalVisibility && <ModalBase modalTitle="Criar ideia" hideModal={() => setModalVisibility(false)} />}
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
            {/* <Link to={HomePage}/> */}

            <h3>Não quer usar sua conta?</h3>
            <a href="https://linktr.ee/reciclarteg1" className="homePage">
              Voltar para a home
            </a>
          </section>
        </StyledLoginPage>
      </StyledLoginContainer>
    </>
  );
};
