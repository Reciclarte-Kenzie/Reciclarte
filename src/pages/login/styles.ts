import styled from "styled-components";
import { ContainerStyled } from "../../styles/Container/styles";

export const StyledLoginContainer = styled(ContainerStyled)`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-50);

  @media (min-width: 700px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-white);
  }
`;

export const StyledLoginPage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4vh;
  justify-content: center;
  align-items: center;

  padding-bottom: 2%;
  width: 90%;
  transition: 300ms;

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 1fr 1fr;
    place-items: center;
    gap: 0;

    width: 95vw;
    height: 95vh;

    padding-bottom: 0;

    border-radius: var(--radius-1);
    background-color: var(--color-grey-50);

    form {
      grid-row: 2;
      grid-column: 1;
      grid-column: 1 / span 5;
    }
  }

  form {
    @media (min-height: 725px) {
      align-self: center;
      padding-bottom: 25px;
    }
  }

  section:first-of-type {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: clamp(280px, 100%, 400px);

    @media (min-width: 700px) {
      width: clamp(200px, 210px, 300px);
      grid-column: 1 / span 5;
    }

    @media (min-height: 725px) {
      align-self: center;
    }
  }

  figure {
    @media (min-height: 725px) {
      height: 280px;
      width: clamp(280px, 100%, 400px);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  img {
    height: 100%;
  }

  h2 {
    font-weight: 600;
    font-size: var(--font-size-25);
    color: var(--color-green-100);

    @media (min-height: 725px) {
      font-size: var(--font-size-36);
    }
  }

  p {
    position: relative;
    top: -12px;
    display: flex;
    align-self: baseline;
    height: 0px;
    font-weight: 400;
    font-size: var(--font-size-12);
    color: var(--color-orange-80);

    @media (min-width: 700px) {
      font-size: var(--font-size-14);
    }
  }

  .referRegister {
    display: flex;
    flex-direction: column;
    gap: 3vh;
    justify-content: center;
    align-items: center;
    width: clamp(280px, 100%, 400px);

    h3 {
      font-weight: 400;
      font-size: var(--font-size-16);
      color: var(--color-green-100);
    }

    a {
      font-weight: 400;
      font-size: var(--font-size-18);
      color: var(--color-white);
      text-align: center;
      background-color: var(--color-orange-80);
      border: 1px solid var(--color-orange-80);
      border-radius: calc(3 * var(--radius-1));
      padding: 0.5rem 1.5rem;
      width: clamp(288px, 100%, 300px);
      transition: 300ms;

      :hover {
        border: 1px solid var(--color-orange-70);
        background-color: var(--color-orange-70);
      }
    }

    @media (min-width: 700px) {
      height: 100%;
      grid-row: 1 / span 2;
      grid-column: 6 / span 3;
      background-image: url("https://i.imgur.com/Fx12mnR.png");
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 0 var(--radius-1) var(--radius-1) 0;
      width: 100%;

      h3 {
        font-size: var(--font-size-25);
        color: var(--color-white);
      }

      a {
        font-size: var(--font-size-16);
        width: clamp(200px, 210px, 300px);
      }
    }
  }
`;
