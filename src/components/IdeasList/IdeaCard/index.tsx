import { Link } from "react-router-dom";
import { iIdeaData } from "../../../providers/IdeasProvider";
import { StyledButton } from "../../Button/styles";
import { StyledContentButton, StyleIdeaCard } from "./styles";

interface iIdeaCardProps {
  idea?: iIdeaData;
  img: string;
  title: string;
  description: string;
  id: number;
  setIdea?: React.Dispatch<React.SetStateAction<iIdeaData>>
  toggleShowEditIdeaModal?: () => void;
  toggleShowDeleteIdeaModal?: () => void;
}

export const IdeaCard = ({
  idea,
  img,
  title,
  description,
  id,
  setIdea,
  toggleShowEditIdeaModal,
  toggleShowDeleteIdeaModal,
}: iIdeaCardProps) => {
  const toggleShowEditModal = (idea: iIdeaData) => {
    if (setIdea && toggleShowEditIdeaModal) {
      setIdea(idea);
      toggleShowEditIdeaModal();
    }
  };
  const toggleShowDeleteModal = (idea: iIdeaData) => {
    if (setIdea && toggleShowDeleteIdeaModal) {
      setIdea(idea);
      toggleShowDeleteIdeaModal();
    }
  };

  return (
    <StyleIdeaCard>
      <img src={img} alt="ideia" />
      <div>
        <h3>{title}</h3>
        <span>{description}</span>

        {window.location.href.includes("profile") ? (
          <StyledContentButton>
            <StyledButton
              padding="0"
              width="135.5px"
              onClick={() => toggleShowEditModal(idea || {} as iIdeaData)}
            >
              Editar ideia
            </StyledButton>
            <StyledButton
              buttonType="grey"
              padding="0"
              width="135.5px"
              onClick={() => toggleShowDeleteModal(idea || {} as iIdeaData)}
            >
              Excluir ideia
            </StyledButton>
          </StyledContentButton>
        ) : (
          <StyledButton
          padding="0.313rem 1.25rem"
          width="135.5px"
          onClick={() => localStorage.setItem("@reciclarte:id", `${id}`)}
        >
          <Link to="/idea">Ver ideia</Link>
        </StyledButton>
        )}
      </div>
    </StyleIdeaCard>
  );
};
