import { StyledIdeasList } from "./styles";
import { iIdeaData } from "../../providers/IdeasProvider";
import { IdeaCard } from "./IdeaCard";

interface iIdeasListProps {
  ideasList: iIdeaData[];
}

export const IdeasList = ({ ideasList }: iIdeasListProps) => {
  return (
    <StyledIdeasList>
      {ideasList.map((idea) => {
        return (
          <IdeaCard img={idea.imgs[0]} title={idea.title} description={idea.description} />
        );
      })}
    </StyledIdeasList>
  );
};
