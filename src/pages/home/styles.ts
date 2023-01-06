import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-orange-80);

  div {
    width: 90%;
    height: 67px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      justify-content: end;
      gap: 1.25rem;
    }
  }
`;

export const StyledContentMain = styled.section`
  margin: 0 auto;
`;
