import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: var(--color-orange-70);
  padding: 4px;
  border-top: 1px solid var(--color-orange-70);

  display: flex;
  flex-direction: column;
  gap: 1vh;
  @media (min-width: 700px) {
    padding: 8px;
    /* gap: 5vw;   */
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  img {
    width: clamp(75px, 100px, 275px);
    height: clamp(75px, 100px, 250px);
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-bottom: 1px solid var(--color-green-80);
    border-radius: 0;
    padding: 0.25rem;

    hr {
      border: none;
      border-top: 2px solid var(--color-orange-80);
      width: 80%;
    }

    @media (min-width: 700px) {
      justify-content: space-between;
      width: 45%;
    }
  }

  .footerHeader {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-transform: uppercase;
    color: var(--color-green-90);

    section {
      border: none;
      display: flex;
      flex-direction: row;
      gap: 2.3vw;
    }

    @media (min-width: 700px) {
      justify-content: space-between;
      width: 100%;

      section {
        width: 30%;
      }
    }
  }

  .presentation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .objective {
      border: 1px transparent;
      width: 60%;
      text-align: justify;
      text-justify: inter-word;
      padding: 0;
      height: fit-content;
    }

    @media (min-width: 700px) {
      flex-direction: row-reverse;
    }
  }

  p,
  a,
  span {
    color: var(--color-green-80);
    font-size: var(--font-size-12);
    font-weight: 400;
    text-decoration: none;
    text-align: justify;
    text-justify: inter-word;
  }

  a {
    color: var(--color-green-70);
    text-transform: uppercase;
  }

  span {
    font-size: calc(var(--font-size-16) * 0.5);
  }

  h4 {
    color: var(--color-green-90);
    font-size: var(--font-size-14);
    font-weight: 600;
    text-align: center;
    text-transform: uppercase;
  }
`;
