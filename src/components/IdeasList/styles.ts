import styled from "styled-components";

export const StyledIdeasList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  @media (min-width: 980px) {
    max-width: 38rem;
  }
`;
