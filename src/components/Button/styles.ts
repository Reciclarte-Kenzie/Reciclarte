import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--color-orange-80);
  border: 2px solid var(--color-orange-80);
  border-radius: var(--radius-1);
  color: var(--color-white);
  font-weight: 400;
  font-size: var(--font-size-18);
  padding: 1vh 0;
  width: clamp(250px, 100%, 300px);
  transition: 300ms;

  :hover,
  :focus {
    border: 2px solid var(--color-orange-70);
    background-color: var(--color-orange-70);
  }

  :disabled {
    background-color: var(--color-grey-40);
    border: 2px solid var(--color-grey-100);
    color: var(--color-grey-100);
  }
`;
