import { StyledHome } from "./styles";
import { IdeasList } from "../../components/IdeasList";
import { useContext, useEffect, useState } from "react";
import { IdeasContext, iIdeaData } from "../../providers/IdeasProvider";

export const Home = () => {
  const { searchIdeas } = useContext(IdeasContext);
  const [allIdeasList, setAllIdeasList] = useState([] as iIdeaData[]);
  console.log(searchIdeas);
  useEffect(() => {
    const getAllIdeasList = async () => {
      const ideasListResponse = await searchIdeas([]);
      setAllIdeasList(ideasListResponse?.data || []);
    };
    getAllIdeasList();
  }, []);

  return (
    <StyledHome>
      <header>
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
      </header>
      <main>
        <section>
          <IdeasList ideasList={allIdeasList} />
        </section>
      </main>
    </StyledHome>
  );
};
