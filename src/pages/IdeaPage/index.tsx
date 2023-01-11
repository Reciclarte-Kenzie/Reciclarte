import { useContext, useEffect, useState } from "react";
import { IdeasContext, iIdeaData } from "../../providers/IdeasProvider";
import { ContainerStyled } from "../../styles/Container/styles";
import { StyledIdeaContainer, StyledIdeaPage } from "./StyledIdeaPage";
import Header from "../../components/Header";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { EmbeddedVideo } from "../../components/EmbeddedVideo";

export const IdeaPage = () => {
  const [idea, setIdea] = useState<iIdeaData>({} as iIdeaData);
  const { getSpecificIdea } = useContext(IdeasContext);

  useEffect(() => {
    let idPostLocalStorage = 0;
    if (localStorage.getItem("@reciclarte:id")) {
      idPostLocalStorage = Number(localStorage.getItem("@reciclarte:id"));
    }

    const getIdea = async () => {
      const idea = await getSpecificIdea(idPostLocalStorage);

      setIdea(idea || ({} as iIdeaData));
    };

    getIdea();
  }, []);

  return (
    <>
      <Header />
      <StyledIdeaContainer>
        <ContainerStyled>
          <StyledIdeaPage>
            <section>
              <div className="images">
                {(idea.imgs as string[])?.map((element) => (
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
                  <dd>R${idea?.estimatedCost}</dd>
                  <dt>Nível de dificuldade:</dt>
                  <dd>{idea?.difficultyLevel}/5</dd>
                  <dt>Materiais:</dt>
                  <dd>{idea?.materials?.join(", ")}</dd>
                </dl>
              </article>
              {/* {
                idea?.video && <EmbeddedVideo
                url={idea?.video}
              />
              } */}
              <EmbeddedVideo
                url={"https://www.youtube.com/embed/Ka7gMFUfTNI"}
              />
              <article className="steps">
                <h3>Passo a passo</h3>
                <ul>
                  {idea?.steps?.split("\n").map((step) => (
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
