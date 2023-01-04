import styled from "styled-components";
import { ContainerStyled } from "../styles/Container/styles";

export const StyledLoginContainer = styled(ContainerStyled)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledLoginPage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4vh;

  padding-bottom: 2%;

  width: clamp(280px, 90%, 400px);

  @media (min-width: 700px) {
    flex-direction: row;
  }

  section:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: clamp(280px, 90%, 400px);
  }

  h2 {
    font-weight: 600;
    font-size: var(--font-size-40);
    color: var(--color-green-100);
  }

  p {
    position: relative;
    top: -85px;
    left: clamp(-75px, 20%, -80px);
    height: 0px;
    font-weight: 400;
    font-size: var(--font-size-12);
    color: var(--color-orange-80);
  }

  .referRegister {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    justify-content: center;
    align-items: center;
    width: clamp(280px, 90%, 400px);

    h3 {
      font-weight: 400;
      font-size: var(--font-size-16);
      color: var(--color-green-100);
    }

    a {
      font-weight: 400;
      font-size: var(--font-size-24);
      color: var(--color-white);
      text-align: center;
      background-color: var(--color-orange-80);
      border: 1px solid var(--color-orange-80);
      border-radius: calc(3 * var(--radius-1));
      padding: 0.5rem 1.5rem;
      width: clamp(281px, 100%, 300px);

      :hover {
        border: 1px solid var(--color-green-100);
        background-color: var(--color-green-100);
      }
    }
  }
`;
