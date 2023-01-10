import styled from "styled-components";
import { ContainerStyled } from "../../styles/Container/styles";

export const StyledIdeaContainer = styled(ContainerStyled)`
  margin: 0 auto;
`;

export const StyledIdeaPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  margin-bottom: 40px;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    width: 90%;
    border: 1px solid var(--color-grey-60);
    border-radius: var(--radius-1);
    padding: 24px 20px;
  }

  .embedVideo {
    gap: 0;
    width: 90%;
    border: none;
    border-radius: var(--radius-1);
    padding: 0;
    height: 50vh;
  }

  .images {
    display: flex;
    gap: 10px;
  }

  .imagePost {
    width: 300px;
    min-width: 5%;
    max-width: 100%;
    height: 300px;
    max-height: 100%;
    border-radius: var(--radius-1);
    object-fit: cover;
  }

  .headerPost {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
    h2 {
      text-align: center;
      font-size: var(--font-size-25);
      font-weight: 600;
      color: #bc5c2c;
    }

    dl {
      display: flex;
      flex-direction: column;
      gap: 0px;
    }

    dt {
      font-size: var(--font-size-18);
      font-weight: 400;
      color: var(--color-green-100);
    }

    dd {
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
      color: var(--color-grey-100);
      line-height: 26px;
    }
  }

  article > button {
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
