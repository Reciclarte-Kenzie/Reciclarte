import styled from "styled-components";

interface iStyledBox {
  width?: string;
}

export const FieldsetStyled = styled.fieldset<iStyledBox>`
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

    width: ${({ width }) => (width ? width : "100%")};

    ::placeholder {
      color: var(--color-grey-100);
    }
    :focus {
      border: 1px solid var(--color-green-100);
      outline: none;
    }

    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    &[type="number"]::-ms-inner-spin-button {
      -webkit-appearance: none;
    }

    &[type="number"] {
      -moz-appearance: textfield;
    }
  }

  label {
    font-weight: 400;
    font-size: var(--font-size-18);
    color: var(--color-green-100);
  }
`;
