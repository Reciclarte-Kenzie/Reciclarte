import { useEffect, useState } from "react";
import { iIdeaData } from "../../providers/IdeasProvider";
import { api } from "../../services/api";
import { ContainerStyled } from "../../styles/Container/styles";
import { StyledIdeaContainer, StyledIdeaPage } from "./StyledIdeaPage";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

export const IdeaPage = () => {
  const [idea, setIdea] = useState<iIdeaData | null>(null);
  const navigate = useNavigate();

  const backToHome = () => {
    localStorage.setItem("@reciclarte:id", "");
    navigate("/");
  };

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
    <StyledIdeaContainer>
      <Header />
      <ContainerStyled>
        <StyledIdeaPage>
          <article>
            <div className="images">
              <img
                className="imagePost"
                src={idea?.imgs[0]}
                alt="Imagem da API"
              />
              <img
                className="imagePost"
                src={idea?.imgs[1]}
                alt="Imagem da API"
              />
            </div>
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
                  Materiais: <span>{idea?.materials}</span>
                </p>
              </div>
            </div>
            <div className="steps">
              <h3>Passo a passo</h3>
              <p>{idea?.steps}</p>
            </div>
            <button onClick={backToHome}>Voltar para a Home</button>
          </article>
        </StyledIdeaPage>
      </ContainerStyled>
    </StyledIdeaContainer>
  );
};
