import deleteButton from "../../assets/imgs/delete-button.svg";
import { IdeaImageStyled } from "./styles";

interface iIdeaImageProps {
  addedImage: string;
  addedImagesList: string[];
  setAddedImagesList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const IdeaImage = ({ addedImage, addedImagesList, setAddedImagesList }: iIdeaImageProps) => {
  const removeImageFromList = () => {
    const newAddedImages = addedImagesList.filter(image => image !== addedImage);

    setAddedImagesList(newAddedImages);
  }

  return (
    <IdeaImageStyled>
      <button type="button" onClick={removeImageFromList} aria-label="Excluir imagem">
        <img src={deleteButton} alt="Ícone de exclusão" />
      </button>
      <img src={addedImage} alt="" />
    </IdeaImageStyled>
  );
};
