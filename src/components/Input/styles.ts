import styled from "styled-components";

export const FieldsetStyled = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  gap: 2vh;
  width: 100%;

  input,
  textarea {
    border: 1px solid var(--color-grey-90);
    border-radius: var(--radius-1);
    font-weight: 400;
    font-size: var(--font-size-16);
    outline: none;
    padding: 0.9rem 1rem;
    resize: none;

    ::placeholder {
      color: var(--font-color-grey-100);
    }

    :focus {
      border: 1px solid var(--color-green-100);
      outline: none;
    }
  }

  label {
    font-weight: 400;
    font-size: var(--font-size-18);
    color: var(--font-color-green-100);
  }
`;
