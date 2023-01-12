import { iUserData } from "../../../providers/UserProvider";
import { ModalBase } from "../ModalBase";
import { BodyModalEditUser } from "./BodyEditUser";

export interface iEditUser {
  hideModal: () => void;
  user: iUserData | null;
}

export const ModalEditUser = ({ hideModal, user }: iEditUser) => {
  return (
    <ModalBase
      modalTitle={"Editar perfil"}
      hideModal={hideModal}
      ModalBody={() => <BodyModalEditUser user={user} />}
    />
  );
};
