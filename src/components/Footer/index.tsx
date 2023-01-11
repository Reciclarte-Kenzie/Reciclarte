import { StyledFooter } from "./styles";
import headerLogoGrey from "../../assets/imgs/headerLogoGrey.svg";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { ContainerStyled } from "../../styles/Container/styles";
export const Footer = () => {
  const { user } = useContext(UserContext);
  const activePage = useLocation().pathname;
  return (
    <StyledFooter>
      <ContainerStyled>
        <section className="footerHeader">
          <img src={headerLogoGrey} alt="Reciclarte" />
          <section className="links">
            <Link to={"/"} className={activePage === "/" ? "active" : ""}>
              Home
            </Link>
            <Link
              to={"/login"}
              className={activePage === "/login" ? "active" : ""}
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className={activePage === "/register" ? "active" : ""}
            >
              Cadastro
            </Link>
            <Link
              to={"/register"}
              className={activePage === "/register" ? "active" : ""}
            >
              Desenvolvedores
            </Link>
            {user && (
              <Link
                to={"/profile"}
                className={activePage === "/profile" ? "active" : ""}
              >
                Perfil
              </Link>
            )}
          </section>
        </section>
        <section className="presentation">
          <section className="objective">
            <h4>Nosso objetivo</h4>
            <p>
              Descartamos, diariamente, materiais que poderiam ser
              reaproveitados. Propomos uma maneira buscar ideias de projetos DIY (Do It
              Yourself) a partir desses materiais e diminuir o descarte de lixo.
            </p>
          </section>
        <section className="founders">
          <h4>Quem somos?</h4>
          <p>
            Um grupo criado para a conclusão do módulo de frontend da Kenzie
            Academy Brasil, pensamos numa maneira de conectar e contribuir com a
            criatividade das pessoas
          </p>
        </section>
        </section>
      </ContainerStyled>
    </StyledFooter>
  );
};
