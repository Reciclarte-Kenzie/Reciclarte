import styled from "styled-components";

export const StyledIdeasList = styled.ul`
  width: 90%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  @media (min-width: 980px) {
    max-width: 608px;
    margin: 0;
  }
`;
