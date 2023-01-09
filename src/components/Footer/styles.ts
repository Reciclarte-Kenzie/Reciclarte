import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #feac4838;
  padding: 4px;
  border-top: 1px solid var(--color-orange-80);

  display: flex;
  flex-direction: column;
  gap: 1vh;
  @media (min-width: 700px) {
    padding: 8px;
    gap: 5vw;
    flex-direction: row;
  }
  /* position: fixed;
  bottom: 0;

  height: 100px; */

  hr {
    border: none;
    border-left: 2px solid var(--color-orange-80);
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    hr {
      border: none;
      border-top: 2px solid var(--color-orange-80);
      width: 80%;
    }
  }

  p,
  a,
  span {
    color: var(--color-orange-80);
    font-size: var(--font-size-12);
    font-weight: 400;
    text-decoration: none;
    text-align: center;
  }

  a {
    color: var(--color-green-80);
  }

  h4 {
    color: var(--color-green-90);
    font-size: var(--font-size-14);
    font-weight: 600;
    text-align: center;
  }
`;
