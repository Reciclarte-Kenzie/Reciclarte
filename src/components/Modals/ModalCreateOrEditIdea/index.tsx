import { ModalBase } from "../ModalBase";
import { ModalBody } from "./ModalBody";

export interface iModalCreateOrEditIdeaProps {
  hideModal: () => void;
  editedIdeaId?: number;
}

export const ModalCreateOrEditIdea = ({
  hideModal,
  editedIdeaId,
}: iModalCreateOrEditIdeaProps) => {
  return (
    <ModalBase
      modalTitle={editedIdeaId ? "Editar ideia" : "Criar ideia"}
      hideModal={hideModal}
      ModalBody={() => (
        <ModalBody
          hideModal={hideModal}
          editedIdeaId={editedIdeaId}
        />
      )}
    />
  );
};
