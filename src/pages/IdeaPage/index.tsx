import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { iIdeaData } from "../../providers/IdeasProvider";
import { api } from "../../services/api";
import { ContainerStyled } from "../../styles/Container/styles";
import { StyledIdeaPage } from "./StyledIdeaPage";


export const IdeaPage = () => {
  const [idea, setIdea] = useState<iIdeaData | null>(null);

  useEffect(() => {
    const idPostLocalStorage = localStorage.getItem("@reciclarte:id");
    console.log(idPostLocalStorage);
    const getIdeaById = async (ideaId: string | null) => {
      try {
        const response = await api.get(`/ideas/${ideaId}`);
        setIdea(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getIdeaById(idPostLocalStorage);
  }, []);
  console.log(idea);

  return (
    <div>
      <h2>HEADER</h2>
      <ContainerStyled>
        <StyledIdeaPage>
          <article>
            <figure className="imgWrapper">
              <img src={idea?.imgs[1]} alt="Imagem da API" />
            </figure>
            <div className="headerPost">
              <h2>{idea?.title}</h2>
              <div>
                <p>
                  Categoria: <span>{idea?.categories}</span>
                </p>
                <p>
                  Custo estimado: R$<span>{idea?.estimated_cost}</span>
                </p>
                <p>
                  Nível de dificuldade: <span>{idea?.difficulty_level}/5</span>
                </p>
                <p>
                  Materiais: {idea?.materials}
                </p>
              </div>
            </div>
            <div className="steps">
              <h3>Passo a passo</h3>
              <p>{idea?.steps}</p>
            </div>
            <Link to="/">Voltar para a Home</Link>
          </article>
        </StyledIdeaPage>
      </ContainerStyled>
    </div>
  );
};
