import { StyledContentMain, StyledHeader } from "./styles";
import { IdeasList } from "../../components/IdeasList";
import { useContext, useEffect } from "react";
import { IdeasContext, iIdeaData } from "../../providers/IdeasProvider";
import { ContainerStyled } from "../../styles/Container/styles";
import { FilterBox } from "../../components/FIlter";
import { EmbeddedVIdeo } from "../../components/EmbeddedVideo";

export const Home = () => {
  const { searchIdeas, foundIdeas } = useContext(IdeasContext);
  useEffect(() => {
    searchIdeas([]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <StyledHeader>
        <div>
          <img src="" alt="Logo" />
          <div>
            <button>
              <img src="" alt="pesquisar" />
            </button>
            <button>
              <img src="" alt="menu" />
            </button>
          </div>
        </div>
      </StyledHeader>
      <ContainerStyled>
        <StyledContentMain>
          <IdeasList ideasList={foundIdeas} />
        </StyledContentMain>
      </ContainerStyled>
      <FilterBox />
      <EmbeddedVIdeo url="https://www.youtube.com/embed/BSvYe9-I6kQ" />
    </div>
  );
};
