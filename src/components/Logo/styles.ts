import styled from "styled-components";

export const StyledLogo = styled.figure`
  margin: 0;

  @media (min-height: 725px) {
    height: 280px;
    width: clamp(280px, 100%, 400px);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figcaption {
    display: none;
  }

  img {
    height: 100%;
  }
`;
