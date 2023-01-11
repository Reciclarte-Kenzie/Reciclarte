import { useContext, useEffect, useState } from "react";
import { IdeasContext, iIdeaData } from "../../providers/IdeasProvider";
import { ContainerStyled } from "../../styles/Container/styles";
import { StyledIdeaContainer, StyledIdeaPage } from "./StyledIdeaPage";
import Header from "../../components/Header";
import { api } from "../../services/api";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { EmbeddedVideo } from "../../components/EmbeddedVideo";

export const IdeaPage = () => {
  const [idea, setIdea] = useState<iIdeaData | null>(null);
  // const { getSpecificIdea } = useContext(IdeasContext);

  useEffect(() => {
    // let idPostLocalStorage = 0;
    // if (localStorage.getItem("@reciclarte:id")) {
    //   idPostLocalStorage = Number(localStorage.getItem("@reciclarte:id"));
    // }
    //   console.log(getSpecificIdea(idPostLocalStorage));

    const idPostLocalStorage = localStorage.getItem("@reciclarte:id");
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
                {idea?.imgs.map((element: string) => (
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
              <EmbeddedVideo
                url={"https://www.youtube.com/embed/Ka7gMFUfTNI"}
              />
              <article className="steps">
                <h3>Passo a passo</h3>
                <ul>
                  {idea?.steps.split("\n").map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </article>
              <Link to="/">
                <Button text="Voltar para a Home" label="Home"></Button>
              </Link>
            </section>
          </StyledIdeaPage>
        </ContainerStyled>
      </StyledIdeaContainer>
    </>
  );
};
