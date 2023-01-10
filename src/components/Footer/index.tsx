import { StyledFooter } from "./styles";
import headerLogoGrey from "../../assets/imgs/headerLogoGrey.svg";
import { Link, useLocation } from "react-router-dom";
export const Footer = () => {
  const activePage = useLocation().pathname;
  return (
    <StyledFooter>
      <section className="footerHeader">
        <img src={headerLogoGrey} alt="Reciclarte" />
        {/* <h3>Reciclarte</h3> */}
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
        </section>
      </section>
      <section className="presentation">
        <section className="objective">
          <p>
            Descartamos, diariamente, materiais que poderiam ser reaproveitados.
            <br />
            Propomos uma maneira buscar ideias de projetos DIY (Do It Yourself)
            a partir desses materiais e diminuir o descarte de lixo.
          </p>
        </section>
      </section>
      <section className="founders">
        <h4>Quem somos?</h4>
        <p>
          Um grupo criado para a conclusão do módulo de frontend da Kenzie
          Academy Brasil, pensamos numa maneira de conectar e contribuir com a
          criatividade das pessoas
        </p>
        <span>
          <a href="https://linktr.ee/reciclarteg1">
            Conheça mais sobre nosso projeto
          </a>
        </span>
        <hr />
        <span>Desde 2023 mudando o planeta um projeto de cada vez.</span>
      </section>
    </StyledFooter>
  );
};
