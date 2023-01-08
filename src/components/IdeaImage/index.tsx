import deleteButton from "../../../../assets/imgs/delete-button.svg";

interface iIdeaImageProps {
  addedImage: string;
}

export const IdeaImage = ({ addedImage }: iIdeaImageProps) => {
  return (
    <li>
      <button aria-label="Excluir imagem">
        <img src={deleteButton} alt="Ícone de exclusão" />
      </button>
      <img src={addedImage} alt="" />
    </li>
  );
};
