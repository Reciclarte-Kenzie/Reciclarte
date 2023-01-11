import { ModalBase } from "../ModalBase";
import { BodyModalEditUser } from "./BodyEditUser";

export interface iEditUser {
    hideModal: () => void;
  }

  export const ModalEditUser = ({ hideModal }: iEditUser) => {
    return (
      <ModalBase
        modalTitle={"Editar perfil"}
        hideModal={hideModal}
        ModalBody={() => (
          <BodyModalEditUser />
        )}
      />
    );
  };