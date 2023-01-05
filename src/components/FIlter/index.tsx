import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IdeasContext } from "../../providers/IdeasProvider";
import { Button } from "../Button";
import { StyledForm } from "../Forms/styles";
import { Input } from "../Input";
import { Select } from "../Input/Select";
import { filterSchema } from "./filterSchema";
import { StyledFilter } from "./styles";

export const FilterBox = () => {
  const { getIdeasMaterials, getIdeasCategories } = useContext(IdeasContext);
  //   let categoriesGroup;
  //   let materialsGroup;
  //   useEffect(() => {
  //     materialsGroup = getIdeasMaterials();
  //     categoriesGroup = getIdeasCategories();

  //     console.log(materialsGroup);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);
  interface iFilter {
    titleFilter: string;
    categoriesFilter: string;
    materialsFilter: string;
    difficultySelector: string;
    costFilter: string;
  }
  const { register, handleSubmit } = useForm<iFilter>({
    mode: "onBlur",
    resolver: yupResolver(filterSchema),
    defaultValues: {
      difficultySelector: "",
    },
  });
  let materialsTreated = [
    "Móveis",
    "Rústico",
    "Bolsa",
    "Reciclagem",
    "Roupa",
    "Jarro",
    "Fofo",
  ].map((mat) => {
    return { value: mat, text: mat };
  });

  const onSubmit: SubmitHandler<iFilter> = (data) => console.log(data);

  return (
    <StyledFilter>
      <h3>Buscar ideias</h3>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Título"
          label=""
          id="titleFilter"
          register={register("titleFilter")}
        />
        <section className="select">
          {
            <Select
              id="categoriesFilter"
              placeholder="Categorias"
              options={materialsTreated}
              register={register("categoriesFilter")}
              width="45%"
            />
          }
          {
            <Select
              id="materialsFilter"
              placeholder="Materiais"
              options={materialsTreated}
              register={register("materialsFilter")}
              width="45%"
            />
          }
        </section>
        <Input
          type="range"
          id="difficultySelector"
          label="Nível de dificuldade"
          placeholder=""
          range={{ min: 1, max: 5, step: 1 }}
          register={register("difficultySelector")}
        />
        <Input
          type="number"
          placeholder="Custo estimado (R$)"
          label="Custo estimado em reais"
          id="costFilter"
          register={register("costFilter")}
        />
        <Button text="Pesquisar" label="Pesquisar" />
      </StyledForm>
    </StyledFilter>
  );
};
