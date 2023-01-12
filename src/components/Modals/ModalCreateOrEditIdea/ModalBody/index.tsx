import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { iModalCreateOrEditIdeaProps } from "..";
import { IdeasContext, iIdeaData } from "../../../../providers/IdeasProvider";
import { Button } from "../../../Button";
import { IdeaImage } from "../../../IdeaImage";
import { Input } from "../../../Input";
import { Select } from "../../../Input/Select";
import { Slider } from "../../../Slider";
import { createIdeaSchema } from "./createIdeaSchema";
import { editIdeaSchema } from "./editIdeaSchema";
import { ModalBodyStyled } from "./styles";

interface iSelectOption {
  value: string;
  text: string;
  setUpdateIdeas?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalBody = ({
  hideModal,
  editedIdeaData,
  setUpdateIdeas,
}: iModalCreateOrEditIdeaProps) => {
  const usedSchema = editedIdeaData ? editIdeaSchema : createIdeaSchema;

  const { createIdea, editIdea, ideasCategories, ideasMaterials } =
    useContext(IdeasContext);

  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm<iIdeaData>({
    mode: "onBlur",
    resolver: yupResolver(usedSchema),
  });

  const [selectedMaterials, setSelectedMaterials] = useState([] as string[]);
  const [selectedCategories, setSelectedCategories] = useState([] as string[]);
  const [addedImagesList, setAddedImagesList] = useState([] as string[]);

  const materialsTreated = ideasMaterials.map((material) => {
    return { value: material, text: material };
  });
  const categoriesTreated = ideasCategories.map((category) => {
    return { value: category, text: category };
  });

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
    if (editedIdeaData) {
      const getEditedIdea = async () => {
        setAddedImagesList([...(editedIdeaData.imgs as string[])]);
        setSelectedMaterials([...editedIdeaData.materials]);
        setSelectedCategories([...editedIdeaData.categories]);

        reset({
          title: editedIdeaData.title,
          description: editedIdeaData.description,
          steps: editedIdeaData.steps,
          estimatedCost: editedIdeaData.estimatedCost,
        });
      };

      getEditedIdea();
    }
  }, []);

  const addImageIntoList = async () => {
    const insertedImage = getValues().imgs.toString();
    const insertedImageIsValid = await usedSchema.validateAt("imgs", {
      imgs: insertedImage,
    });

    if (insertedImageIsValid && insertedImage !== "") {
      setAddedImagesList([...addedImagesList, insertedImage]);
      reset({ imgs: "" });
    }
  };

  return (
    <ModalBodyStyled
      noValidate
      onSubmit={handleSubmit(async (data) => {
        data = {
          ...data,
          imgs: [...addedImagesList],
          categories: [...selectedCategories],
          materials: [...selectedMaterials],
          userId: Number(localStorage.getItem("@USERID")),
        };

        if (editedIdeaData) {
          await editIdea(editedIdeaData.id, data, hideModal);
        } else {
          await createIdea(data, hideModal);
        }
        if (setUpdateIdeas) {
          setUpdateIdeas(true);
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
            defaultValue={editedIdeaData ? editedIdeaData.difficultyLevel : 2}
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
              options={materialsTreated}
              placeholder="Selecione um material"
              id="materials"
              register={register("materials")}
              label="Materiais"
              error={errors.materials?.message || ""}
              selOptions={selectedMaterials}
              setSelOptions={setSelectedMaterials}
            />
          </div>
          <div className="select-group">
            <Select
              options={categoriesTreated}
              placeholder="Selecione uma categoria"
              id="categories"
              register={register("categories")}
              label="Categorias"
              error={errors.categories?.message || ""}
              selOptions={selectedCategories}
              setSelOptions={setSelectedCategories}
            />
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
      <Button text={editedIdeaData ? "Editar" : "Criar"} label="Criar ideia" />
    </ModalBodyStyled>
  );
};
