import styled from "styled-components";

export const StyledHome = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--color-grey-50);

  header {
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
  }

  main {
    width: 90%;
    margin: 1rem auto;
  }
`;
