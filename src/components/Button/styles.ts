import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: var(--color-orange-80);
  border: 2px solid var(--color-orange-80);
  border-radius: var(--radius-1);
  color: var(--color-white);
  font-weight: 400;
  font-size: var(--font-size-24);
  padding: 1vh 0;
  width: clamp(250px, 100%, 300px);

  :hover {
    border: 2px solid var(--color-green-90);
    background-color: var(--color-green-90);
  }
`;
