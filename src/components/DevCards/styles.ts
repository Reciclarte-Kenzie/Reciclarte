import styled from "styled-components";

export const DevCardStyled = styled.li`
  gap: 1.25rem;
  
  &, section {
    display: flex;
    flex-direction: column;
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
`