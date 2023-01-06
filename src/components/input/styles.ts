import styled from "styled-components";

export const StyledInput = styled.input`
  outline: none;
  border: 1px solid var(--color-grey-90);
  border-radius: var(--radius-1);
  padding: 0.9rem 1rem;
  height: 50px;

  ::placeholder {
    font-weight: 400;
    font-size: var(--font-size-16);
    color: var(--color-grey-100);
  }
  :focus {
    border: 1px solid var(--color-green-100);
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 400;
  font-size: var(--font-size-18);
  color: var(--color-green-100);
`;
