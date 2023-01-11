import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import { IdeasList } from "../../components/IdeasList";
import { StyledContainer } from "./styles";
import { IdeasContext } from "../../providers/IdeasProvider";
import { FilterBox } from "../../components/FIlter";
import { ModalEditUser } from "../../components/Modals/ModalEditUser";

export const Home = () => {
  const { foundIdeas, searchIdeas } = useContext(IdeasContext);

  useEffect(() => {
    searchIdeas([]);
  }, []);

  return (
    <div>
      <ModalEditUser/>
      <Header />
      <StyledContainer>
        <section>
          {foundIdeas.length > 0 ? (
            <IdeasList ideasList={foundIdeas} />
          ) : (
            <p>Nenhuma ideia encontrada</p>
          )}
        </section>
        <FilterBox />
      </StyledContainer>
    </div>
  );
};
