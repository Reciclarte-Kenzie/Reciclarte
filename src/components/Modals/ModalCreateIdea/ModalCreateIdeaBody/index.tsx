import { useContext, useState, useEffect } from "react";
import { IdeasContext } from "../../../../providers/IdeasProvider";
import { Button } from "../../../Button";
import { FilterLabelList } from "../../../FilterLabelList";
import { Input } from "../../../Input";
import { FieldsetStyled } from "../../../Input/Fieldset/styles";
import { LabelStyled } from "../../../Input/Label/styles";
import { Select } from "../../../Input/Select";
import { Slider } from "../../../Slider";
import { ModalCreateIdeaBodyStyled } from "./styles";

interface iSelectOption {
  value: string;
  text: string;
}

export const ModalCreateIdeaBody = () => {
  const { getIdeasMaterials, getIdeasCategories } = useContext(IdeasContext);

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
      } else if (targetFormElement.name === "images") {
        setAddedImages([...addedImages, targetFormElement.value]);
      }
    };

    document.addEventListener("input", addSelectedValueIntoList);

    return () => {
      document.removeEventListener("input", addSelectedValueIntoList);
    };
  }, [selectedMaterials, selectedCategories]);

  return (
    <ModalCreateIdeaBodyStyled>
      <article>
        <section>
          <Input
            placeholder="Insira o título da ideia"
            label="Título"
            id="title"
          />
          <Input
            placeholder="Insira o passo a passo"
            label="Passo a passo"
            id="steps"
            textarea
          />
          <Slider defaultValue={2} min={1} max={5} />
          <Input
            type="number"
            placeholder="R$ 0.00"
            label="Custo estimado"
            id="estimatedCost"
          />
        </section>
        <section>
          <FieldsetStyled>
            <LabelStyled>Materiais</LabelStyled>
            <Select
              options={materialsList}
              placeholder="Selecione um material"
              id="materials"
            />
            <FilterLabelList
              labelList={selectedMaterials}
              setLabelList={setSelectedMaterials}
            />
          </FieldsetStyled>
          <FieldsetStyled>
            <LabelStyled>Categorias</LabelStyled>
            <Select
              options={categoriesList}
              placeholder="Selecione uma categoria"
              id="categories"
            />
            <FilterLabelList
              labelList={selectedCategories}
              setLabelList={setSelectedCategories}
            />
          </FieldsetStyled>
          <article className="added-images">
            <Input
              type="url"
              placeholder="Insira a URL da foto"
              label="Foto"
              id="img"
            />
            {addedImages.map((addedImage) => (
              <img className="added-image" src={addedImage} alt="" />
            ))}
          </article>
        </section>
      </article>
      <Button text="Criar" label="Criar ideia" />
    </ModalCreateIdeaBodyStyled>
  );
};
