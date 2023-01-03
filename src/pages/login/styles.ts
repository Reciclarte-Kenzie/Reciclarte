import styled from "styled-components";

export const StyledLoginPage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5vh;

  position: absolute;
  top: 0;
  left: 0;
  transform: translate(0, 0);
  /* margin: -50px 0 0 -50px; */

  section {
    width: fit-content;
  }

  a {
    font-weight: 400;
    font-size: 24px;
    color: white;
    text-decoration: none;
    text-align: center;
    background-color: orange;
    border-radius: 24px;
    padding: 0.5rem 1.5rem;
  }
`;
