import { SetStateAction } from "react";
import { FilterLabel } from "./FilterLabel";
import { FilterLabelListStyled } from "./styles";

export interface iFilterLabelListProps {
  labelList: string[];
  setLabelList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const FilterLabelList = ({
  labelList,
  setLabelList,
}: iFilterLabelListProps) => {
  return (
    <FilterLabelListStyled>
      {labelList.map((label, index) => (
        <FilterLabel
          title={label}
          addedLabelIndex={index}
          labelList={labelList}
          setLabelList={setLabelList}
        />
      ))}
    </FilterLabelListStyled>
  );
};
