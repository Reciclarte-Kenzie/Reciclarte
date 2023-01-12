import { Link } from "react-router-dom";
import { StyledButton } from "../../Button/styles";
import { StyledContentButton, StyleIdeaCard } from "./styles";

interface iIdeaCardProps {
  img: string;
  title: string;
  description: string;
  id: number;
  setIdeaId?: React.Dispatch<React.SetStateAction<number>>;
  toggleShowEditIdeaModal?: () => void;
  toggleShowDeleteIdeaModal?: () => void;
}

export const IdeaCard = ({
  img,
  title,
  description,
  id,
  setIdeaId,
  toggleShowEditIdeaModal,
  toggleShowDeleteIdeaModal,
}: iIdeaCardProps) => {
  const toggleShowEditModal = (id: number) => {
    if (setIdeaId && toggleShowEditIdeaModal) {
      setIdeaId(id);
      toggleShowEditIdeaModal();
    }
  };
  const toggleShowDeleteModal = (id: number) => {
    if (setIdeaId && toggleShowDeleteIdeaModal) {
      setIdeaId(id);
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
              onClick={() => toggleShowEditModal(id)}
            >
              Editar ideia
            </StyledButton>
            <StyledButton
              buttonType="grey"
              padding="0"
              width="135.5px"
              onClick={() => toggleShowDeleteModal(id)}
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
