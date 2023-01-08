import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { iModalCreateIdeaProps } from "..";
import { IdeasContext, iIdeaData } from "../../../../providers/IdeasProvider";
import { Button } from "../../../Button";
import { FilterLabelList } from "../../../FilterLabelList";
import { IdeaImage } from "../../../IdeaImage";
import { Input } from "../../../Input";
import { Select } from "../../../Input/Select";
import { Slider } from "../../../Slider";
import { createIdeaSchema } from "./createIdeaSchema";
import { ModalCreateIdeaBodyStyled } from "./styles";

interface iSelectOption {
  value: string;
  text: string;
}

export interface iCreateIdeaFormFields {
  title: string;
  imgs: string[];
  description: string;
  steps: string;
  materials: string[];
  categories: string[];
  estimatedCost: string;
  difficultyLevel: string;
  userId: string;
}

export const ModalCreateIdeaBody = ({ hideModal }: iModalCreateIdeaProps) => {
  const { createIdea, getIdeasMaterials, getIdeasCategories } =
    useContext(IdeasContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<iIdeaData>({
    mode: "onBlur",
    resolver: yupResolver(createIdeaSchema),
  });

  const [materialsList, setMaterialsList] = useState([] as iSelectOption[]);
  const [categoriesList, setCategoriesList] = useState([] as iSelectOption[]);
  const [selectedMaterials, setSelectedMaterials] = useState([] as string[]);
  const [selectedCategories, setSelectedCategories] = useState([] as string[]);
  const [addedImages, setAddedImages] = useState([] as string[]);

  useEffect(() => {
    const getIdeasMaterialsResponse = async () => {
      const materialsListResponse = (await getIdeasMaterials())?.data;
      const materialsTreated = materialsListResponse?.map((material) => {
        return { value: material, text: material };
      });

      setMaterialsList(materialsTreated || []);
    };

    const getIdeasCategoriesResponse = async () => {
      const categoriesListResponse = (await getIdeasCategories())?.data;
      const categoriesTreated = categoriesListResponse?.map((category) => {
        return { value: category, text: category };
      });

      setCategoriesList(categoriesTreated || []);
    };

    getIdeasMaterialsResponse();
    getIdeasCategoriesResponse();
  }, []);

  useEffect(() => {
    const addSelectedValueIntoList = (event: Event) => {
      const targetFormElement = event.target as
        | HTMLSelectElement
        | HTMLInputElement;
      const selectedValue = targetFormElement.value;

      if (targetFormElement.name === "materials") {
        const materialWasSelected = selectedMaterials.find(
          (selectedMaterial) => selectedValue === selectedMaterial
        );

        if (!materialWasSelected) {
          setSelectedMaterials([...selectedMaterials, selectedValue]);
        }
      } else if (targetFormElement.name === "categories") {
        const categoryWasSelected = selectedCategories.find(
          (selectedCategory) => selectedValue === selectedCategory
        );

        if (!categoryWasSelected) {
          setSelectedCategories([...selectedCategories, selectedValue]);
        }
      } else if (targetFormElement.name === "imgs") {
        setAddedImages([...addedImages, targetFormElement.value]);
      }
    };

    document.addEventListener("input", addSelectedValueIntoList);

    return () => {
      document.removeEventListener("input", addSelectedValueIntoList);
    };
  }, [selectedMaterials, selectedCategories]);

  return (
    <ModalCreateIdeaBodyStyled
      onSubmit={handleSubmit(async (data) => {
        console.log(data);
        //await createIdea(data, hideModal);
      })}
    >
      <article>
        <section>
          <Input
            placeholder="Insira o título da ideia"
            label="Título"
            id="title"
            register={register("title")}
            error={errors.title?.message}
          />
          <Input
            placeholder="Insira o passo a passo"
            label="Passo a passo"
            id="steps"
            register={register("steps")}
            textarea
            error={errors.steps?.message}
          />
          <Slider defaultValue={2} min={1} max={5} />
          <Input
            type="number"
            placeholder="R$ 0.00"
            label="Custo estimado"
            id="estimatedCost"
            register={register("estimatedCost")}
            error={errors.estimatedCost?.message}
          />
        </section>
        <section>
          <div className="select-group">
            <Select
              options={materialsList}
              placeholder="Selecione um material"
              id="materials"
              register={register("materials")}
              label="Materiais"
              error={errors.materials?.message || ""}
            />
            <FilterLabelList
              labelList={selectedMaterials}
              setLabelList={setSelectedMaterials}
            />
          </div>
          <div className="select-group">
            <Select
              options={categoriesList}
              placeholder="Selecione uma categoria"
              id="categories"
              register={register("categories")}
              label="Categorias"
              error={errors.categories?.message || ""}
            />
            <FilterLabelList
              labelList={selectedCategories}
              setLabelList={setSelectedCategories}
            />
          </div>
          <article className="added-images">
            <Input
              type="url"
              placeholder="Insira a URL da foto"
              label="Foto"
              id="img"
              register={register("imgs")}
              error={errors.imgs?.message}
            />
            <ul>
              {addedImages.map((addedImage) => (
                <IdeaImage addedImage={addedImage} />
              ))}
            </ul>
          </article>
        </section>
      </article>
      <Button text="Criar" label="Criar ideia" />
    </ModalCreateIdeaBodyStyled>
  );
};
