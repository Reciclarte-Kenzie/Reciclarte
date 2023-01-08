import { useContext, useEffect, useState } from "react";
import { IdeasContext } from "../../../providers/IdeasProvider";
import { Button } from "../../Button";
import { ModalBase } from "../ModalBase";
import { ModalCreateIdeaBody } from "./ModalCreateIdeaBody";

export const ModalCreateIdea = () => {
  return (
    <ModalBase
      modalTitle="Criar ideia"
      hideModal={() => undefined}
      ModalBody={ModalCreateIdeaBody}
    />
  );
};