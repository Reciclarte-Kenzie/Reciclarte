import deleteButton from "../../assets/imgs/delete-button.svg";
import { IdeaImageStyled } from "./styles";

interface iIdeaImageProps {
  addedImage: string;
}

export const IdeaImage = ({ addedImage }: iIdeaImageProps) => {
  return (
    <IdeaImageStyled>
      <button aria-label="Excluir imagem">
        <img src={deleteButton} alt="Ícone de exclusão" />
      </button>
      <img src={addedImage} alt="" />
    </IdeaImageStyled>
  );
};
