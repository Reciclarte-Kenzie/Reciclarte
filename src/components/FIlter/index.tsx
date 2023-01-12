import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IdeasContext } from "../../providers/IdeasProvider";
import { Button } from "../Button";
import { StyledForm } from "../Forms/styles";
import { Input } from "../Input";
import { Select } from "../Input/Select";
import { Slider } from "../Slider";
import { filterSchema } from "./filterSchema";
import { StyledFilter } from "./styles";

interface iFilter {
  titleFilter: string;
  categoriesFilter: string;
  materialsFilter: string;
  difficultySelector: string;
  costFilter: string;
}

export const FilterBox = () => {
  const { searchIdeas, loading, ideasMaterials, ideasCategories } =
    useContext(IdeasContext);

  const [selMaterials, setSelMaterials] = useState([] as string[]);
  const [selCategories, setSelCategories] = useState([] as string[]);

  useEffect(() => {
    document.addEventListener("input", (event) => {
      const eventTargetElement = event.target as HTMLSelectElement;

      if (eventTargetElement.name === "categoriesFilter") {
        let value = eventTargetElement.value;
        return value !== "" &&
          !selCategories.includes(value) &&
          !value.includes("Não")
          ? setSelCategories([...selCategories, value])
          : setSelCategories([...selCategories]);
      } else if (eventTargetElement.name === "materialsFilter") {
        let value = eventTargetElement.value;
        return value !== "" &&
          !selMaterials.includes(value) &&
          !value.includes("Não")
          ? setSelMaterials([...selMaterials, value])
          : setSelMaterials([...selMaterials]);
      }
    });
  }, [selCategories, selMaterials]);

  const { register, handleSubmit } = useForm<iFilter>({
    mode: "onBlur",
    resolver: yupResolver(filterSchema),
    defaultValues: {
      difficultySelector: "",
    },
  });

  let categoriesTreated = ideasCategories.map((mat) => {
    return { value: mat, text: mat };
  });

  let materialsTreated = ideasMaterials.map((mat) => {
    return { value: mat, text: mat };
  });

  const onSubmit: SubmitHandler<iFilter> = (data) => {
    let catParams = selCategories.map((cat) => `categories=${cat}`).join("&");
    let matParams = selMaterials.map((mat) => `materials=${mat}`).join("&");
    let body = [
      `${data.titleFilter ? `title=${data.titleFilter}` : ""}`,
      `${selCategories ? catParams.replaceAll(" ", "%20") : ""}`,
      `${selMaterials ? matParams.replaceAll(" ", "%20") : ""}`,
      `${
        data.difficultySelector
          ? `difficultyLevel=${data.difficultySelector}`
          : ""
      }`,
      `${data.costFilter ? `maximumCost=${data.costFilter}` : ""}`,
    ];
    searchIdeas(body);
  };

  return (
    <StyledFilter catList={selCategories} matList={selMaterials}>
      <h3>Buscar ideias</h3>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Título"
          label="Título da ideia"
          id="titleFilter"
          register={register("titleFilter")}
          disabled={loading}
        />
        <section className="select">
          {
            <section>
              <Select
                id="categoriesFilter"
                placeholder="Categorias"
                options={categoriesTreated}
                register={register("categoriesFilter")}
                disabled={loading}
                className="categories"
                label="Seleção de categorias"
                selOptions={selCategories}
                setSelOptions={setSelCategories}
              />
            </section>
          }
          {
            <section>
              <Select
                id="materialsFilter"
                placeholder="Materiais"
                options={materialsTreated}
                register={register("materialsFilter")}
                disabled={loading}
                className="materials"
                label="Seleção de materiais"
                selOptions={selMaterials}
                setSelOptions={setSelMaterials}
              />
            </section>
          }
        </section>
        <Slider
          min={1}
          max={5}
          register={register("difficultySelector")}
          disabled={loading}
          defaultValue={3}
        />
        <Input
          type="number"
          placeholder="Custo estimado (R$)"
          label="Custo estimado em reais"
          id="costFilter"
          register={register("costFilter")}
          disabled={loading}
        />
        <Button text="Pesquisar" label="Pesquisar" />
      </StyledForm>
    </StyledFilter>
  );
};
