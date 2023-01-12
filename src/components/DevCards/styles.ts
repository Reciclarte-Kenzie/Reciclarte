import styled from "styled-components";

export const DevCardStyled = styled.li`
  max-width: 185px;
  gap: 1.25rem;
  
  &, section {
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  img {
    max-width: 150px;
    border-radius: 100%;
    width: 100%;
  }

  .info, .links {
    gap: 0.625rem;
  }

  a {
    color: inherit;
  }

  button, a {
    width: 100%;
  }
`