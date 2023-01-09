import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { iModalCreateIdeaProps } from "..";
import { IdeasContext, iIdeaData } from "../../../../providers/IdeasProvider";
import { UserContext } from "../../../../providers/UserProvider";
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

export const ModalCreateIdeaBody = ({
  hideModal,
  editedIdeaId,
}: iModalCreateIdeaProps) => {
  const {
    createIdea,
    editIdea,
    getSpecificIdea,
    getIdeasMaterials,
    getIdeasCategories,
  } = useContext(IdeasContext);
  const { user } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm<iIdeaData>({
    mode: "onBlur",
    resolver: yupResolver(createIdeaSchema),
  });

  const [materialsList, setMaterialsList] = useState([] as iSelectOption[]);
  const [categoriesList, setCategoriesList] = useState([] as iSelectOption[]);
  const [selectedMaterials, setSelectedMaterials] = useState([] as string[]);
  const [selectedCategories, setSelectedCategories] = useState([] as string[]);
  const [addedImagesList, setAddedImagesList] = useState([] as string[]);
  const [editedIdea, setEditedIdea] = useState({} as iIdeaData);

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
      const targetFormElement = event.target as HTMLSelectElement;
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
      }
    };

    document.addEventListener("input", addSelectedValueIntoList);

    return () => {
      document.removeEventListener("input", addSelectedValueIntoList);
    };
  }, [selectedMaterials, selectedCategories]);

  useEffect(() => {
    if (editedIdeaId) {
      const getEditedIdea = async () => {
        const editedIdeaResponse = await getSpecificIdea(editedIdeaId);

        setEditedIdea(editedIdeaResponse || ({} as iIdeaData));
        setAddedImagesList([...(editedIdea.imgs as string[])]);
        setSelectedMaterials([...editedIdea.materials]);
        setSelectedCategories([...editedIdea.categories]);

        reset({
          title: editedIdea.title,
          description: editedIdea.description,
          steps: editedIdea.steps,
          estimatedCost: editedIdea.estimatedCost,
          difficultyLevel: editedIdea.difficultyLevel,
        });
      };

      getEditedIdea();
    }
  }, []);

  const addImageIntoList = async () => {
    const insertedImage = getValues().imgs.toString();
    const insertedImageIsValid = await createIdeaSchema.validateAt("imgs", {
      imgs: insertedImage,
    });

    if (insertedImageIsValid && insertedImage !== "") {
      setAddedImagesList([...addedImagesList, insertedImage]);
      reset({ imgs: "" });
    }
  };

  return (
    <ModalCreateIdeaBodyStyled
      noValidate
      onSubmit={handleSubmit(async (data) => {
        data = {
          ...data,
          imgs: [...addedImagesList],
          categories: [...selectedCategories],
          materials: [...selectedMaterials],
          userId: user?.user.id,
        };

        if (editedIdeaId) {
          await editIdea(editedIdeaId, data, hideModal);
        } else {
          await createIdea(data, hideModal);
        }
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
            className="steps"
            placeholder="Insira o passo a passo"
            label="Passo a passo"
            id="steps"
            register={register("steps")}
            textarea
            error={errors.steps?.message}
          />
          <Slider
            register={register("difficultyLevel")}
            defaultValue={2}
            min={1}
            max={5}
          />
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
            {selectedMaterials.length !== 0 && (
              <FilterLabelList
                labelList={selectedMaterials}
                setLabelList={setSelectedMaterials}
              />
            )}
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
            {selectedCategories.length !== 0 && (
              <FilterLabelList
                labelList={selectedCategories}
                setLabelList={setSelectedCategories}
              />
            )}
          </div>
          <Input
            className="description"
            placeholder="Insira a descrição"
            label="Descrição"
            id="description"
            register={register("description")}
            error={errors.description?.message}
            textarea
          />
          <article className="added-images">
            <div>
              <Input
                type="url"
                placeholder="Insira a URL da foto"
                label="Foto"
                id="img"
                register={register("imgs")}
                error={errors.imgs?.message}
              />
              <Button
                type="button"
                action={addImageIntoList}
                text="+"
                label="adicionar imagem"
                disabled={!!errors.imgs?.message}
              />
            </div>
            {addedImagesList.length !== 0 && (
              <ul>
                {addedImagesList.map((addedImage, index) => (
                  <IdeaImage
                    key={index}
                    addedImage={addedImage}
                    addedImagesList={addedImagesList}
                    setAddedImagesList={setAddedImagesList}
                  />
                ))}
              </ul>
            )}
          </article>
        </section>
      </article>
      <Button text="Criar" label="Criar ideia" />
    </ModalCreateIdeaBodyStyled>
  );
};
