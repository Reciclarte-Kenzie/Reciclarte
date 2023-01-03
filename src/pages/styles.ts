import styled from "styled-components";

export const StyledLoginPage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5vh;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: -50px 0 0 -50px;

  width: fit-content;

  a {
    font-weight: 400;
    font-size: 24px;
    color: white;
    text-align: center;
    background-color: #f7941d;
    border: 1px solid #f7941d;
    border-radius: 24px;
    padding: 0.5rem 1.5rem;

    :hover {
      border: 1px solid #011b0c;
      background-color: #011b0c;
    }
  }
`;
