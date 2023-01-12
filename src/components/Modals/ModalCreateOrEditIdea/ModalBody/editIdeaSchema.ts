import * as yup from "yup";

export const editIdeaSchema = yup.object().shape({
  title: yup.string(),
  steps: yup.string(),
  difficultyLevel: yup.number(),
  estimatedCost: yup
    .number()
    .positive("O valor deve ser positivo")
    .typeError("Insira um número válido"),
  materials: yup.string(),
  categories: yup.string(),
  imgs: yup
    .string()
    .test(
      "test-image",
      "A URL deve terminar em: .png, .jpg ou .gif",
      (value) =>
        value?.endsWith(".png") ||
        value?.endsWith(".jpg") ||
        value?.endsWith(".gif") ||
        value === ""
    ),
});
