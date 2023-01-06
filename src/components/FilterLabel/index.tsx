import { FilterLabelStyled } from "./styles";
import closeIcon from "../../assets/imgs/close-icon-nunito.svg";
import { useState } from "react";

interface iFilterLabelProps {
  title: string;
}

export const FilterLabel = ({ title }: iFilterLabelProps) => {
  const [toggleFilterLabel, setToggleFilterLabel] = useState(true);

  return (
    <>
      {toggleFilterLabel && (
        <FilterLabelStyled>
          <p>{title}</p>
          <button aria-label="Remover">
            <img src={closeIcon} alt="ícone de 'x'" />
          </button>
        </FilterLabelStyled>
      )}
    </>
  );
};
