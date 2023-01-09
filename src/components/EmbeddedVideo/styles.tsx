import styled from "styled-components";

export const StyledVideoBox = styled.section`
  width: fit-content;

  iframe {
    width: clamp(280px, 50vw, 450px);
    height: 250px;
    border-radius: var(--radius-1);
    border: none;

    @media (min-width: 700px) {
      width: clamp(300px, 50vw, 800px);
      height: 40vh;
    }
  }
`;
