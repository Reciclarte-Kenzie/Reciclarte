import * as yup from "yup";

export const filterSchema = yup.object().shape({
  titleFilter: yup.string(),
  categoriesFilter: yup.string(),
  materialsFilter: yup.string(),
  difficultySelector: yup.string(),
  costFilter: yup.string(),
});
