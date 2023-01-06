import { useState } from "react";
import { Link } from "react-router-dom";
import { ContainerStyled } from "../../styles/Container/styles";
import { StyledIdeaPage } from "./StyledIdeaPage";

export const IdeaPage = () => {
    const [idea, setIdea] = useState({});
    
  return (
    <div>
      <h2>HEADER</h2>
      <ContainerStyled>
        <StyledIdeaPage>
          <article>
            <figure className="imgWrapper">
              <img src="" alt="Imagem da API" />
            </figure>
            <div className="headerPost">
              <h2>Título da API</h2>
              <div>
                <p>
                  Categoria: <span>textoDaAPI</span>
                </p>
                <p>
                  Custo estimado: R$<span>textoDaAPI</span>
                </p>
                <p>
                  Nível de dificuldade: <span>textoDaAPI</span>
                </p>
                <p>
                  Materiais: <span>textoDaAPI</span>
                </p>
              </div>
            </div>
            <div className="steps">
              <h3>Passo a passo</h3>
              <p>Texto do passo a passo</p>
            </div>
            <Link to="/">Voltar para a Home</Link>
          </article>
        </StyledIdeaPage>
      </ContainerStyled>
    </div>
  );
};
