import styled from "styled-components";

export const ModalCreateIdeaBodyStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  width: 100%;
  
  article {
    display: flex;
    gap: 1.875rem;
  }

  section {
    flex-grow: 1;
  }

  fieldset {
    border: none;
  }
  
  fieldset, section {
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
`