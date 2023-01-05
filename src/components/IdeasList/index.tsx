import { StyleCards } from "./styles";
import imgTest from "../../assets/imgs/img-teste.png";

import { iIdeaData } from "../../providers/IdeasProvider";
import { IdeaCard } from "./IdeaCard";

interface iIdeasListProps {
  ideasList: iIdeaData[];
}

export const IdeasList = ({ ideasList }: iIdeasListProps) => {
  return (
    <StyleCards>
      {ideasList.map((idea) => {
        console.log(idea);

        return <IdeaCard img={idea.imgs[0]} title={idea.title} steps= {idea.steps}/>;
      })}
    </StyleCards>
  );
};

