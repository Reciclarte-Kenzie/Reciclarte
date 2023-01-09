import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column-reverse;

  p {
    margin: 20px auto;
    text-align: center;
    height: 80px;
    font-size: var(--font-size-18);
  }

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
