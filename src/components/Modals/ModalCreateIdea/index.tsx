import { useContext, useEffect, useState } from "react";
import { IdeasContext } from "../../../providers/IdeasProvider";
import { Button } from "../../Button";
import { ModalBase } from "../ModalBase";
import { ModalCreateIdeaBody } from "./ModalCreateIdeaBody";

export interface iModalCreateIdeaProps {
  hideModal: () => void;
}

export const ModalCreateIdea = ({ hideModal }: iModalCreateIdeaProps) => {
  return (
    <ModalBase
      modalTitle="Criar ideia"
      hideModal={hideModal}
      ModalBody={() => <ModalCreateIdeaBody hideModal={hideModal} />}
    />
  );
};
