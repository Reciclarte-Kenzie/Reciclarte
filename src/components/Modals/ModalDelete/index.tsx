import { ModalBase } from "../ModalBase";
import { BodyModalDelete } from "./BodyDeleteModal";

export interface iDeleteBody {
  hideModal: () => void;
  user: boolean;
  id: number;
  setUpdateIdeas?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalDelete = ({
  hideModal,
  user,
  id,
  setUpdateIdeas,
}: iDeleteBody) => {
  return (
    <ModalBase
      modalTitle={`Excluir ${user ? "usuário" : "ideia"}`}
      hideModal={hideModal}
      ModalBody={() => (
        <BodyModalDelete
          hideModal={hideModal}
          user={user}
          id={id}
          setUpdateIdeas={setUpdateIdeas}
        />
      )}
    />
  );
};
