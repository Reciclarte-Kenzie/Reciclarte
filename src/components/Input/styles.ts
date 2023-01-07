import styled from "styled-components";
import { Field } from "./Field";

export const FieldsetStyled = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  ${styled(Field)`
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
  `}

  label {
    font-weight: 400;
    font-size: var(--font-size-18);
    color: var(--color-green-100);
  }
`;
