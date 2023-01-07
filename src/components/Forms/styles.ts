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

  button {
    width: 100%;
  }
`;
