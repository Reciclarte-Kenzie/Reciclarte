import { FilterLabelStyled } from "./styles";
import { useState } from "react";
import closeIcon from "../../assets/imgs/close-icon-nunito.svg";

interface iFilterLabelProps {
  title: string;
  labelList: string[];
  setLabelList: React.Dispatch<React.SetStateAction<string[]>>;
  addedLabelIndex: number;
}

export const FilterLabel = ({
  title,
  labelList,
  setLabelList,
  addedLabelIndex,
}: iFilterLabelProps) => {
  const [toggleFilterLabel, setToggleFilterLabel] = useState(true);

  const removeFilterLabel = () => {
    setToggleFilterLabel(false);

    const labelListWithoutRemovedLabel = labelList.filter(
      (_, index) => index !== addedLabelIndex
    );

    setLabelList(labelListWithoutRemovedLabel);
  };

  return (
    <>
      {toggleFilterLabel && (
        <FilterLabelStyled>
          <p>{title}</p>
          <button aria-label="Remover" onClick={removeFilterLabel}>
            <img src={closeIcon} alt="ícone de 'x'" />
          </button>
        </FilterLabelStyled>
      )}
    </>
  );
};
