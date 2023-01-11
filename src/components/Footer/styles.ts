import styled from "styled-components";
import { ContainerStyled } from "../../styles/Container/styles";

export const StyledFooter = styled.footer`
  background-color: var(--color-grey-50);
  border-top: 1px solid var(--color-grey-50);
  margin-top: 3rem;
  padding: 1.5rem 0 1.8rem;

  ${ContainerStyled} {
    margin: 0 auto;
    width: fit-content;
    display: flex;
    flex-direction: column;
    gap: 1vh;
    padding: 0.25rem;
    max-width: 90%;

    @media (min-width: 700px) {
      padding: 0;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
  }

  img {
    width: clamp(75px, 285px, 300px);
    height: 75px;
    filter: invert(68%) sepia(94%) saturate(2241%) hue-rotate(347deg)
      brightness(100%) contrast(94%);
  }
  
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.625rem;

    border-radius: 0;
    padding: 1rem 0.25rem 0;
    width: 100%;
  }

  .footerHeader {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 0 0.625rem;
    
    border-bottom: 1px solid var(--color-green-100);
    color: var(--color-green-90);
    text-transform: uppercase;
    
    @media (min-width: 1030px) {
      flex-direction: row;
      justify-content: space-between;
    }

    section {
      border: none;
      display: flex;
      flex-direction: row;
      gap: 2.3vw;
      padding: 0;
    }

    .active {
      color: var(--color-orange-80);
      font-weight: 800;
    }

    @media (min-width: 700px) {
      justify-content: space-between;
      width: 100%;

      section {
        width: fit-content;
      }
    }
  }

  .presentation {
    display: flex;
    flex-direction: column;
    gap: 1rem 4.375rem;
    justify-content: space-between;
    width: 100%;

    section {
      width: 100%;
    }
    
    @media (min-width: 700px) {
      flex-direction: row;
      
      section {
        justify-content: flex-start;
        width: 50%;
      }
    }
  }

  p,
  a,
  span {
    color: var(--color-green-100);
    font-size: var(--font-size-16);
    font-weight: 400;
    text-decoration: none;
    text-align: justify;
    text-justify: inter-word;
  }

  a {
    color: var(--color-green-70);
    font-weight: 600;
    text-transform: uppercase;
  }

  .links {
    flex-wrap: wrap;

    a {
      color: var(--color-grey-90);
    }
  }
  
  h4 {
    color: var(--color-green-90);
    font-size: var(--font-size-16);
    font-weight: 600;
    text-transform: uppercase;
  }
`;
