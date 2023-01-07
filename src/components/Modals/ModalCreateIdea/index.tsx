import { Input } from "../../Input";
import { Slider } from "../../Slider";
import { ModalBase } from "../ModalBase";
import { ModalCreateIdeaBodyStyled } from "./styles";

export const ModalCreateIdea = () => {
  return (
    <ModalBase modalTitle="Criar ideia" hideModal={() => undefined} ModalBody={ModalCreateIdeaBody} />
  );
}

const ModalCreateIdeaBody = () => {
  return (
    <ModalCreateIdeaBodyStyled>
      <section>
        <Input placeholder="Insira o título da ideia" label="Título" id="title" />
        <Input placeholder="Insira o passo a passo" label="Passo a passo" id="steps" textarea />
        <Slider defaultValue={2} min={1} max={5} />
        <Input type="number" placeholder="R$ 0.00" label="Custo estimado" id="estimatedCost" />
      </section>
      <section>
        <Input placeholder="Selecione um material" label="Materiais" id="materials" />
        <Input placeholder="Insira o título da ideia" label="Título" id="title" />
        <Input type="url" placeholder="Insira a URL da foto" label="Foto" id="img" />
      </section>
    </ModalCreateIdeaBodyStyled>
  );
}