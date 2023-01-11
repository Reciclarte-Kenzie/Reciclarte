import styled from "styled-components";

export const ModalBodyStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      min-width: 100%;
    }

    @media (min-width: 700px) {
      width: 100%;
      display: flex;
      flex-direction: row;
    }
    
    div {
      min-width: 50%;

      fieldset {
       width: 100%;
      }
    }
  }

  button {
    margin: 0 auto;
  }
`;
