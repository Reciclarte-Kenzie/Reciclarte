import styled from "styled-components";

export const StyledDeleteSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 550px) {
    gap: 2.5rem;
  }

  @media (min-width: 840px) {
    gap: 3.5rem;
  }

  h3 {
    color: var(--color-green-100);
    font-size: var(--font-size-18);
    font-weight: 500;
  }

  p {
    color: var(--color-grey-100);
    font-size: var(--font-size-16);
    font-weight: 400;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    @media (min-width: 550px) {
      flex-direction: row;
    }
  }
`;
