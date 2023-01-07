import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IdeasContext } from "../../providers/IdeasProvider";
import { Button } from "../Button";
import { FilterLabelList } from "../FilterLabelList";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      `${selCategories ? catParams.replaceAll(" ", "%20") : ""}`,
      `${selMaterials ? matParams.replaceAll(" ", "%20") : ""}`,
      `${
        data.difficultySelector
          ? `difficulty_level=${data.difficultySelector}`
          : ""
      }`,
      `${data.costFilter ? `maximum_cost=${data.costFilter}` : ""}`,
    ];
    console.log(body);
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
    <StyledFilter catList={selCategories} matList={selMaterials}>
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
            <section>
              <Select
                id="categoriesFilter"
                placeholder="Categorias"
                options={categoriesTreated}
                register={register("categoriesFilter")}
                disabled={loading}
                onChange={onChangeCat}
              />
              {selCategories.length > 0 && (
                <FilterLabelList
                  labelList={selCategories}
                  setLabelList={setSelCategories}
                />
              )}
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
                onChange={() => onChangeMat()}
              />

              {selMaterials.length > 0 && (
                <FilterLabelList
                  labelList={selMaterials}
                  setLabelList={setSelMaterials}
                />
              )}
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
