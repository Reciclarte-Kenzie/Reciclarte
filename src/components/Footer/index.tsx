import { StyledFooter } from "./styles";
import logo2 from "../../assets/imgs/logo2.svg";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <StyledFooter>
      <section className="footerHeader">
        <h3>Reciclarte</h3>
        <section className="links">
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Cadastro</Link>
        </section>
      </section>
      <section className="presentation">
        <img src={logo2} alt="Reciclarte" />
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
