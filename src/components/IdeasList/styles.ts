import styled from "styled-components";

export const StyledIdeasList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  @media (min-width: 1000px) {
    max-width: 41.625rem;
  }
`;
