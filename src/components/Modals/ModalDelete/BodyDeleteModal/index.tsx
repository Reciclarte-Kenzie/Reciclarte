import { useContext } from "react";
import { useForm } from "react-hook-form";
import { iDeleteBody } from "..";
import { IdeasContext } from "../../../../providers/IdeasProvider";
import { UserContext } from "../../../../providers/UserProvider";
import { Button } from "../../../Button";
import { StyledDeleteSection } from "./style";

export const BodyModalDelete = ({ hideModal, user, id }: iDeleteBody) => {
  const { deleteIdea } = useContext(IdeasContext);
  const { deleteUser } = useContext(UserContext);
  const { handleSubmit } = useForm();

  const onSubmit = async () => {
    user ? await deleteUser(id) : await deleteIdea(id, hideModal);
  };
  return (
    <StyledDeleteSection>
      <h3>{`Você quer excluir ${user ? "este usuário" : "esta ideia"}?`}</h3>
      <p>
        Essa ação não poderá ser desfeita, então pedimos que tenha cautela antes
        de concluir
      </p>
      <form className="buttons" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Button
          type="reset"
          text="Cancelar"
          label="Cancelar"
          buttonType="grey"
          width="100%"
          action={hideModal}
        />
        <Button
          text={`Sim, excluir ${user ? "este usuário" : "esta ideia"}`}
          label="Confirma exclusão"
          width="100%"
        />
      </form>
    </StyledDeleteSection>
  );
};
