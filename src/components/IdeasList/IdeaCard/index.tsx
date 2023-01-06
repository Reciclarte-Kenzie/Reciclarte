import { StyledButton } from "../../Button/styles";
import { StyledContentButton, StyleIdeaCard } from "./styles";

interface iIdeaCardProps {
  img: string;
  title: string;
  description: string;
}

export const IdeaCard = ({ img, title, description }: iIdeaCardProps) => {
  return (
    <StyleIdeaCard>
      <img src={img} alt="ideia" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>

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
