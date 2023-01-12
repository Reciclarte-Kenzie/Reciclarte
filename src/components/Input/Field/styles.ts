import styled from "styled-components";
import { Field } from ".";

interface iStyledField {
  width?: string;
}

export const FieldStyled = styled(Field)<iStyledField>`
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
`;
