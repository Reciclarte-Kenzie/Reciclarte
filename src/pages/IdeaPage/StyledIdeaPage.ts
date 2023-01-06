import styled from "styled-components";

export const StyledIdeaPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 90%;
    border: 1px solid var(--color-grey-60);
    border-radius: var(--radius-1);
    padding: 24px 20px;
  }
  .imgwrapper {
    
    max-width: 100%;
    max-height: 142px;
    height: 100%;
    border-radius: var(--radius-1);
    width: 90%;

    img {
      object-fit: cover;
    }
  }

  .headerPost {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 90%;
    div > h2 {
      font-size: var(--font-size-25);
      font-weight: 600;
      color: var(--color-orange-80);
    }

    p {
      font-size: var(--font-size-18);
      font-weight: 400;
      color: var(--color-green-100);
    }

    span {
      font-size: var(--font-size-18);
      font-weight: 400;
      color: var(--color-grey-100);
    }
  }

  .steps {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    h3 {
      font-size: var(--font-size-25);
      font-weight: 600;
      color: var(--color-green-100);
    }

    p {
      font-size: var(--font-size-18);
      font-weight: 400;
      color: var(--color-green-100);
    }
  }

  article > a {
    padding: 12px 20px;
    max-width: 200px;
    background-color: var(--color-orange-80);
    border: 1px solid var(--color-orange-80);
    border-radius: 8px;
    color: var(--color-white);
    display: flex;
    justify-content: center;
  }
`;
