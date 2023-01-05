import { ModalBaseStyled } from "./styles";
import closeIcon from "../../../assets/imgs/close-icon.svg";

interface iModalBaseProps {
  modalTitle: string;
  hideModal: () => void;
}

export const ModalBase = ({ modalTitle, hideModal }: iModalBaseProps) => {
  return (
    <ModalBaseStyled>
      <article>
        <header>
          <h2>{modalTitle}</h2>
          <button aria-label="fechar modal" onClick={() => hideModal()}>
            <img src={closeIcon} alt="ícone branco com um 'x' no meio" />
          </button>
        </header>
        <main>
          
        </main>
      </article>
    </ModalBaseStyled>
  );
};
