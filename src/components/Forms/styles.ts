import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  position: relative;

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
