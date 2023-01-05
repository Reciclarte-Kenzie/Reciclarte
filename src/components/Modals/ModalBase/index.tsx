import { ModalBaseStyled } from "./styles";
import closeIcon from "../../../assets/imgs/close-icon.svg";

interface iModalBaseProps {
  modalTitle: string;
}

export const ModalBase = ({ modalTitle }: iModalBaseProps) => {
  return (
    <ModalBaseStyled>
      <article>
        <header>
          <h2>{modalTitle}</h2>
          <button aria-label="fechar modal">
            <img src={closeIcon} alt="ícone branco com um 'x' no meio" />
          </button>
        </header>
      </article>
    </ModalBaseStyled>
  );
};
