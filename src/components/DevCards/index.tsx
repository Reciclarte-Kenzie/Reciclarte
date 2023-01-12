import { StyledButton } from "../Button/styles";
import { DevCardStyled } from "./styles";

interface iDevCard {
  dev: {
    avatar_url: string;
    name: string;
    login: string;
    html_url: string;
    company?: string;
    bio?: string;
    location?: string;
    blog?: string;
    position: string;
  };
}

export const DevCard = ({ dev }: iDevCard) => {
  return (
    <DevCardStyled>
      <figure>
        <img src={dev.avatar_url} alt={dev.name} />
        <figcaption style={{ display: "none" }}>Foto de perfil</figcaption>
      </figure>
      <section className="info">
        <h3>
          {dev.name}
        </h3>
        <p>{dev.position}</p>
      </section>
      <section className="links">
        <StyledButton>
          <a href={dev.html_url} rel="noopener noreferer" target="blank">
            Github
          </a>
        </StyledButton>
        <StyledButton buttonType="grey">
          <a href={dev.blog} rel="noopener noreferer" target="blank">
            Linkedin
          </a>
        </StyledButton>
      </section>
    </DevCardStyled>
  );
};
