import styled from "styled-components";

export const FilterLabelStyled = styled.article`
  align-items: center;
  background-color: var(--color-grey-90);
  border-radius: var(--radius-1);
  display: flex;
  gap: 0.625rem;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
  transition: 0.5s;
  width: fit-content;

  &:hover {
    background-color: var(--color-grey-70);
  }

  p {
    font-size: var(--font-size-12);
  }

  p,
  button {
    color: var(--color-white);
  }
`;
