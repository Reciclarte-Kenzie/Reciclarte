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
      color: var(--color-grey-100);
    }

    :focus {
      border: 1px solid var(--color-green-100);
      outline: none;
    }
  }

  label {
    font-weight: 400;
    font-size: var(--font-size-18);
    color: var(--color-green-100);
  }

  p {
    position: relative;
    top: -12px;
    display: flex;
    align-self: baseline;
    height: 0px;
    font-weight: 400;
    font-size: var(--font-size-12);
    color: var(--color-orange-80);

    @media (min-width: 700px) {
      font-size: var(--font-size-14);
    }
  }
`;
