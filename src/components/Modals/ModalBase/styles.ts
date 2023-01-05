import styled from "styled-components";

export const ModalBaseStyled = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.76);
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  z-index: 1;
  width: 100%;

  article {
    background-color: var(--color-white);
    border-radius: var(--radius-1);
    max-width: 798px;
    margin: 20px;
    min-height: 318px;
    width: 100%;
  }

  header {
    align-items: center;
    background-color: var(--color-orange-80);
    border-radius: var(--radius-1) var(--radius-1) 0 0;
    display: flex;
    justify-content: space-between;
    padding: 1.25rem;
    width: 100%;

    h2 {
      color: var(--color-white);
      font-size: var(--font-size-25);
      font-weight: 600;
    }
  }
`