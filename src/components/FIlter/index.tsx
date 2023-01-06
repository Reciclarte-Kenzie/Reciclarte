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
  const { getIdeasMaterials, getIdeasCategories, searchIdeas, loading } =
    useContext(IdeasContext);

  const [ideasMaterials, setIdeasMaterials] = useState([] as string[]);
  const [ideasCategories, setIdeasCategories] = useState([] as string[]);
  const [selMaterials, setSelMaterials] = useState([] as string[]);
  const [selCategories, setSelCategories] = useState([] as string[]);

  useEffect(() => {
    const getIdeasMaterialsResponse = async () => {
      const ideasMaterialsResponse = await getIdeasMaterials();
      setIdeasMaterials(
        ideasMaterialsResponse?.data || [
          "Não foi possível recuperar os materiais",
        ]
      );
    };

    const getIdeasCategoriesResponse = async () => {
      const ideasCategoriesResponse = await getIdeasCategories();
      setIdeasCategories(
        ideasCategoriesResponse?.data || [
          "Não foi possível recuperar as categorias",
        ]
      );
    };

    getIdeasMaterialsResponse();
    getIdeasCategoriesResponse();
  }, []);

  const { register, handleSubmit, getValues } = useForm<iFilter>({
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
      `${selCategories ? catParams : ""}`,
      `${selMaterials ? matParams : ""}`,
      `${
        data.difficultySelector
          ? `difficulty_level=${data.difficultySelector}`
          : ""
      }`,
      `${data.costFilter ? `maximum_cost=${data.costFilter}` : ""}`,
    ];
    searchIdeas(body);
  };

  const onChangeMat = () => {
    let value = getValues("materialsFilter");
    if (value !== "" && !selMaterials.includes(value)) {
      setSelMaterials([...selMaterials, value]);
    }
  };

  const onChangeCat = () => {
    let value = getValues("categoriesFilter");
    if (value !== "" && !selCategories.includes(value)) {
      setSelCategories([...selCategories, value]);
    }
  };
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
          disabled={loading}
        />
        <section className="select">
          {
            <Select
              id="categoriesFilter"
              placeholder="Categorias"
              options={categoriesTreated}
              register={register("categoriesFilter")}
              width="48%"
              disabled={loading}
              onChange={() => onChangeCat()}
            />
          }
          {
            <Select
              id="materialsFilter"
              placeholder="Materiais"
              options={materialsTreated}
              register={register("materialsFilter")}
              width="48%"
              disabled={loading}
              onChange={() => onChangeMat()}
            />
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
