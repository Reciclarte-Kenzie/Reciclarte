import { useContext, useEffect, useState } from "react";
import { IdeasContext, iIdeaData } from "../../providers/IdeasProvider";
import { ContainerStyled } from "../../styles/Container/styles";
import { StyledIdeaContainer, StyledIdeaPage } from "./StyledIdeaPage";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Button } from "../../components/Button";

export const IdeaPage = () => {
  const [idea, setIdea] = useState<iIdeaData | null>(null);
  const { getSpecificIdea } = useContext(IdeasContext);
  const navigate = useNavigate();

  const backToHome = () => {
    localStorage.setItem("@reciclarte:id", "");
    navigate("/");
  };

  useEffect(() => {
    const idPostLocalStorage = localStorage.getItem("@reciclarte:id");

    // getSpecificIdea(+idPostLocalStorage);
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

  return (
    <>
      <Header />
      <StyledIdeaContainer>
        <ContainerStyled>
          <StyledIdeaPage>
            <section>
              <div className="images">
                {idea?.imgs.map((element) => (
                  <img
                    key={element}
                    className="imagePost"
                    src={element}
                    alt="Imagem do Post"
                  />
                ))}
              </div>
              <article className="headerPost">
                <h2>{idea?.title}</h2>
                <dl>
                  <dt>Categoria:</dt>
                  <dd>{idea?.categories?.join(", ")}</dd>
                  <dt>Custo estimado:</dt>
                  <dd>R${idea?.estimated_cost}</dd>
                  <dt>Nível de dificuldade:</dt>
                  <dd>{idea?.difficulty_level}/5</dd>
                  <dt>Materiais:</dt>
                  <dd>{idea?.materials.join(", ")}</dd>
                </dl>
              </article>
              <article className="steps">
                <h3>Passo a passo</h3>
                <p>{idea?.steps}</p>
              </article>
              <Button
                text="Voltar para a Home"
                label="Home"
                onClick={backToHome}
              />
            </section>
          </StyledIdeaPage>
        </ContainerStyled>
      </StyledIdeaContainer>
    </>
  );
};
