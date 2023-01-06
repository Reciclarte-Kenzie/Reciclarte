import { FilterLabelStyled } from "./styles";
import closeIcon from "../../assets/imgs/close-icon-nunito.svg"

export const FilterLabel = () => {
  return (
    <FilterLabelStyled>
      <p>Label</p>
      <button aria-label="Remover">
        <img src={closeIcon} alt="ícone de 'x'" />
      </button>
    </FilterLabelStyled>
  );
}