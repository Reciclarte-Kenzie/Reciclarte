import styled from "styled-components";

export const DevelopersListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 200px);
  gap: 3.75rem 2.5rem;
  margin: 0 auto;
  padding: 50px 20px;
  width: fit-content;

  @media (min-width: 472px) {
    grid-template-columns: repeat(2, 185px);
  }

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 185px);
  }
`