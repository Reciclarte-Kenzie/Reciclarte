import styled from "styled-components";

export const StyledForm = styled.form`
  border: none;

  display: flex;
  flex-direction: column;
  gap: 2vh;

  width: clamp(280px, 90%, 400px);

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 0px;
    margin: 0;
  }
`;
