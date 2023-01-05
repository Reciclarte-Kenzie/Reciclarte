import styled from "styled-components";

export const StyleCards = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  li {
    height: 324px;
    border: 1px solid var(--color-grey-60);
    border-radius: var(--radius-1);
    padding: 1rem;
    background-color: var(--color-white);
    display: flex;
    flex-direction: column;
    gap: 1.875rem;

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
      gap: 0.625rem;

      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: var(--font-size-18);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 1rem;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      p {
        color: var(--color-grey-100);
        font-weight: 400;
        font-size: var(--font-size-16);
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-height: 1rem;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      div {
        height: 30px;
        margin: 0 auto;
        flex-direction: row;

        button {
          padding: 0.313rem 1.25rem;
          color: var(--color-white);
          font-weight: 600;
          font-size: var(--font-size-16);
          line-height: 1.25rem;
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

  @media (min-width: 700px) {
    

    li {
      height: 213px;
      flex-direction: row;

      img {
        width: 147px;
        height: 100%;
      }
    }
  }

  @media (min-width: 1000px) {
    max-width: 41.625rem;
  }
`;
