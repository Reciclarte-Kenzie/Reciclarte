import styled from "styled-components";

export const ModalCreateIdeaBodyStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  width: 100%;

  article {
    display: flex;
    flex-direction: column;
    gap: 0.625rem 1.875rem;

    @media (min-width: 600px) {
      flex-direction: row;
    }
  }

  section {
    flex-grow: 1;
  }

  fieldset {
    border: none;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
  }

  textarea {
    height: 115px;
    resize: none;
  }

  button {
    margin: 0 auto;
  }
`;
