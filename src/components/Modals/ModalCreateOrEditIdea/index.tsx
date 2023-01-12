import { ModalBase } from "../ModalBase";
import { ModalBody } from "./ModalBody";

export interface iModalCreateOrEditIdeaProps {
  hideModal: () => void;
  setUpdateIdeas?: React.Dispatch<React.SetStateAction<boolean>>;
  editedIdeaId?: number;
}

export const ModalCreateOrEditIdea = ({
  hideModal,
  setUpdateIdeas,
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
          setUpdateIdeas={setUpdateIdeas}
        />
      )}
    />
  );
};
