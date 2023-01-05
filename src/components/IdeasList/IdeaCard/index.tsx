import { StyledButton } from "../../Button/styles";
import { StyleIdeaCard } from "./styles";

interface iIdeaCardProps {
    img: string;
    title: string;
    steps: string;
}

export const IdeaCard = ({ img, title, steps } : iIdeaCardProps) => {
  return (
    <StyleIdeaCard>
      <img src={img} alt="ideia" />
      <div>
        <h3>{title}</h3>
        <p>{steps}</p>
        <div>
          <StyledButton padding="0.313rem 1.25rem" width="135.5px">Ver ideia</StyledButton>
        </div>
      </div>
    </StyleIdeaCard>
  );
};
