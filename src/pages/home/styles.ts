import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;
  

  aside {
    width: 90%;
    margin: 25px auto;
    background-color: var(--color-white);
  }

  @media (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;

    aside {
      max-width: 401px;
    }
  }
`;
