import { StyledButton } from "../../Button/styles";
import { StyledContentButton, StyleIdeaCard } from "./styles";

interface iIdeaCardProps {
  img: string;
  title: string;
  steps: string;
}

export const IdeaCard = ({ img, title, steps }: iIdeaCardProps) => {
  return (
    <StyleIdeaCard>
      <img src={img} alt="ideia" />
      <div>
        <h3>{title}</h3>
        <p>{steps}</p>

        {window.location.href.includes("profile") ? (
          <StyledContentButton>
            <StyledButton padding="0" width="135.5px">
              Editar ideia
            </StyledButton>
            <StyledButton buttonType="grey" padding="0" width="135.5px">
              Excluir ideia
            </StyledButton>
          </StyledContentButton>
        ) : (
          <StyledButton padding="0.313rem 1.25rem" width="135.5px">
            Ver ideia
          </StyledButton>
        )}
      </div>
    </StyleIdeaCard>
  );
};
