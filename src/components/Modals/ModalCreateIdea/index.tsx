import { useContext, useEffect, useState } from "react";
import { IdeasContext } from "../../../providers/IdeasProvider";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { Select } from "../../Input/Select";
import { Slider } from "../../Slider";
import { ModalBase } from "../ModalBase";
import { ModalCreateIdeaBodyStyled } from "./styles";

interface iSelectOption {
  value: string;
  text: string;
}

export const ModalCreateIdea = () => {
  return (
    <ModalBase
      modalTitle="Criar ideia"
      hideModal={() => undefined}
      ModalBody={ModalCreateIdeaBody}
    />
  );
};

const ModalCreateIdeaBody = () => {
  const { getIdeasMaterials, getIdeasCategories } = useContext(IdeasContext);

  const [materialsList, setMaterialsList] = useState([] as iSelectOption[]);
  const [categoriesList, setCategoriesList] = useState([] as iSelectOption[]);

  useEffect(() => {}, []);

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
          <Select
            options={}
            placeholder="Selecione um material"
            label="Materiais"
            id="materials"
          />
          <Input
            placeholder="Insira o título da ideia"
            label="Título"
            id="title"
          />
          <Input
            type="url"
            placeholder="Insira a URL da foto"
            label="Foto"
            id="img"
          />
        </section>
      </article>
      <Button text="Criar" label="Criar ideia" />
    </ModalCreateIdeaBodyStyled>
  );
};
