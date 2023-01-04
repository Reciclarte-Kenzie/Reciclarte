import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
<<<<<<< HEAD
  gap: 1rem;
=======
  align-items: center;
  gap: 2vh;
>>>>>>> 6ccd3d3e2f36b836adad08c60d884ee30bbb3cc6

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
