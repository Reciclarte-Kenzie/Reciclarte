import { Input } from "../../Input";
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
        <Input type="text" placeholder="Insira o título da ideia" label="Título" id="title" />
      </section>
      <section>

      </section>
    </ModalCreateIdeaBodyStyled>
  );
}