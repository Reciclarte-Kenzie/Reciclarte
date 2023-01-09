import { useContext, useEffect, useState } from "react";
import { IdeasContext } from "../../../providers/IdeasProvider";
import { Button } from "../../Button";
import { ModalBase } from "../ModalBase";
import { ModalCreateIdeaBody } from "./ModalIdeaBody";

export interface iModalCreateIdeaProps {
  hideModal: () => void;
  editedIdeaId?: number;
}

export const ModalCreateIdea = ({
  hideModal,
  editedIdeaId,
}: iModalCreateIdeaProps) => {
  return (
    <ModalBase
      modalTitle={editedIdeaId ? "Editar ideia" : "Criar ideia"}
      hideModal={hideModal}
      ModalBody={() => (
        <ModalCreateIdeaBody
          hideModal={hideModal}
          editedIdeaId={editedIdeaId}
        />
      )}
    />
  );
};
