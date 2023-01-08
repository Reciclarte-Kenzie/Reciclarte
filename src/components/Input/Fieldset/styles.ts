import styled from "styled-components";

export const FieldsetStyled = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    margin-bottom: 2vh;
  }

  p {
    font-weight: 400;
    font-size: var(--font-size-12);
    color: var(--color-orange-80);
    margin-top: 0.375rem;

    @media (min-width: 700px) {
      font-size: var(--font-size-14);
    }
  }
`