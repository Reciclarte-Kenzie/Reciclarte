import styled from "styled-components";

export const StyledHome = styled.div`
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
        gap: 20px;
      }
    }
  }

  main {
    width: 90%;
    margin: 16px auto;

    section {
      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
            display: flex;
           img {
            width: 80px;
            height: 72px;
           }
        }
      }
    }
  }
`;
