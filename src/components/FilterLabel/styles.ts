import styled from "styled-components";

export const FilterLabelStyled = styled.article`
  align-items: center;
  background-color: var(--color-grey-90);
  border-radius: var(--radius-1);
  display: flex;
  gap: 10px;
  justify-content: space-between;
  width: fit-content;
  padding: 0.2rem 0.5rem;
  transition: 0.5s;

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
