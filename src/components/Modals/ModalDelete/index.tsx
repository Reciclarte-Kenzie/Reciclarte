import { ModalBase } from "../ModalBase";
import { BodyModalDelete } from "./BodyDeleteModal";

export interface iDeleteBody {
  hideModal: () => void;
  user: boolean;
  id: number;
}

export const ModalDelete = ({ hideModal, user, id }: iDeleteBody) => {
  return (
    <ModalBase
      modalTitle={`Excluir ${user ? "usuário" : "ideia"}`}
      hideModal={hideModal}
      ModalBody={() => (
        <BodyModalDelete hideModal={hideModal} user={user} id={id} />
      )}
    />
  );
};
