import styled from "styled-components";

export const ModalCreateIdeaBodyStyled = styled.form`
  display: flex;
  gap: 30px;
  width: 100%;

  section {
    flex-grow: 1;
  }

  fieldset {
    border: none;
  }
  
  fieldset, section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`