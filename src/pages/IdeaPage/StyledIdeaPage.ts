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

  section > a {
    display: flex;
  }

  .images {
    display: flex;
    flex-direction: column;
    gap: 10px;

    img {
      border-radius: var(--radius-1);
      width: 280px;
      min-width: 200px;
      height: 400px;
      object-fit: cover;
    }
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
      color: var(--color-orange-80);
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

    li {
      font-size: var(--font-size-18);
      font-weight: 400;
      color: var(--color-grey-100);
      line-height: 26px;
    }

    li + li {
      margin-top: 0.625rem;
    }
  }
`;
