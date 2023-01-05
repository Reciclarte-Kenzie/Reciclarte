import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2vh;

  position: relative;

  width: clamp(280px, 100%, 400px);

  @media (min-width: 700px) {
    width: clamp(200px, 100%, 365px);
    padding-bottom: 20px;
  }

  fieldset {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    padding: 0px;
    margin: 0;
    width: 100%;
  }

  button {
    width: 100%;
  }
`;
