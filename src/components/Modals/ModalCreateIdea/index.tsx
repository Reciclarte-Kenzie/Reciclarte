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
        
      </section>
      <section>

      </section>
    </ModalCreateIdeaBodyStyled>
  );
}