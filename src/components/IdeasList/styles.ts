import styled from "styled-components";

export const StyledIdeasList = styled.ul`
  width: 90%;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  @media (min-width: 1000px) {
    max-width: 41.625rem;
  }
`;
