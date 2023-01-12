import { iIdeaData } from "../../../providers/IdeasProvider";
import { ModalBase } from "../ModalBase";
import { ModalBody } from "./ModalBody";

export interface iModalCreateOrEditIdeaProps {
  hideModal: () => void;
  setUpdateIdeas?: React.Dispatch<React.SetStateAction<boolean>>;
  editedIdeaData?: iIdeaData;
}

export const ModalCreateOrEditIdea = ({
  hideModal,
  setUpdateIdeas,
  editedIdeaData,
}: iModalCreateOrEditIdeaProps) => {
  return (
    <ModalBase
      modalTitle={editedIdeaData ? "Editar ideia" : "Criar ideia"}
      hideModal={hideModal}
      ModalBody={() => (
        <ModalBody
          hideModal={hideModal}
          editedIdeaData={editedIdeaData}
          setUpdateIdeas={setUpdateIdeas}
        />
      )}
    />
  );
};
