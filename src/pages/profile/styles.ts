import styled from "styled-components";

export const Profile = styled.div`
  main section {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;
    padding: 0 12px;

    & ul {
      display: flex;
      flex-direction: column;
      gap: 30px;
    }

    @media screen and (min-width: 968px) {
      align-items: center;

      & ul {
        display: grid;
        grid-template-columns: repeat(2, minmax(460px, 1fr));
        gap: 20px;
      }
    }
  }
`;
