import { FilterLabelStyled } from "./styles";
import closeIcon from "../../../assets/imgs/close-icon-nunito.svg";
import { iFilterLabelListProps } from "..";

interface iFilterLabelProps extends iFilterLabelListProps {
  title: string;
  addedLabelIndex: number;
}

export const FilterLabel = ({
  title,
  labelList,
  setLabelList,
  addedLabelIndex,
}: iFilterLabelProps) => {
  const removeFilterLabel = () => {
    const labelListWithoutRemovedLabel = labelList.filter(
      (_, index) => index !== addedLabelIndex
    );

    setLabelList([...labelListWithoutRemovedLabel]);
  };

  return (
    <>
      {
        <FilterLabelStyled>
          <p>{title}</p>
          <button aria-label="Remover" onClick={removeFilterLabel}>
            <img src={closeIcon} alt="ícone de 'x'" />
          </button>
        </FilterLabelStyled>
      }
    </>
  );
};
