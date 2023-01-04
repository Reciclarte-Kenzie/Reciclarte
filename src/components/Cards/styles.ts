import styled from "styled-components";

export const StyleCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    height: 324px;
    border: 1px solid var(--color-grey-60);
    border-radius: var(--radius-1);
    padding: 15px;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    gap: 30px;

    img {
      width: 100%;
      height: 45%;
      object-fit: cover;
      border-radius: var(--radius-1);
    }

    div {
      height: 141px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;

      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 16px; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
      }

      p {
        color: var(--color-grey-100);
        font-weight: 400;
        font-size: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 16px; 
        -webkit-line-clamp: 2; 
        -webkit-box-orient: vertical;
      }

      div {
        height: 30px;
        margin: 0 auto;
        flex-direction: row;

        button {
          padding: 5px 20px;
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
`;
