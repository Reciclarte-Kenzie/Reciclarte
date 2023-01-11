import { useContext, useEffect, useState } from "react";
import { IdeasContext, iIdeaData } from "../../providers/IdeasProvider";
import { ContainerStyled } from "../../styles/Container/styles";
import { StyledIdeaContainer, StyledIdeaPage } from "./StyledIdeaPage";
import Header from "../../components/Header";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
              <Carousel
                className="images"
                autoPlay
                emulateTouch
                infiniteLoop
                width={500}
                showThumbs={false}
                showStatus={false}
              >
                {(idea.imgs as string[])?.map((image) => (
                  <div key={image}>
                    <img src={image} alt="imagem" />
                  </div>
                ))}
              </Carousel>
              
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
