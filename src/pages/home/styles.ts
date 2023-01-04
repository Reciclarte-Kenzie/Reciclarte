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
          border: 1px solid var(--color-grey-60);
          border-radius: var(--radius-1);
          padding: 15px;
          background-color: var(--color-white);
          display: flex;
          gap: 10px;

          img {
            width: 80px;
            height: 72px;
          }

          div {
            display: flex;
            flex-direction: column;
            gap: 21px;

            h3 {
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 20px;
            }

            p {
              color: var(--color-grey-100);
              font-weight: 400;
              font-size: 16px;
              line-height: 20px;
            }

            button {
              padding: 5px 10px;
              color: var(--color-white);
              font-weight: 600;
              font-size: 16px;
              line-height: 20px;
              background-color: var(--color-orange-80);
              transition: 300ms;
              border-radius: var(--radius-1);

              :hover {
                background-color: var(--color-orange-70);
              }
            }
          }
        }
      }
    }
  }
`;
