import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 1000px) {
    width: 95%;
    max-width: 1240px;
    flex-direction: row;
    justify-content: space-around;
  }

  @media (min-width: 1400px) {
    justify-content: space-between;
  }
`;
