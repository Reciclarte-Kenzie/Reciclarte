import styled from "styled-components";

export const StyleIdeaCard = styled.li`
  height: 324px;
  border: 1px solid var(--color-grey-60);
  border-radius: var(--radius-1);
  padding: 1rem;
  background-color: var(--color-white);
  display: flex;
  flex-direction: column;
  gap: 2rem;

  img {
    width: 100%;
    height: 45%;
    object-fit: cover;
    border-radius: var(--radius-1);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;

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
  }

  @media (min-width: 700px) {
    height: 213px;
    flex-direction: row;

    img {
      width: 147px;
      height: 100%;
    }
    
    div {
      gap: 1.3rem;
    }
  }
`;
