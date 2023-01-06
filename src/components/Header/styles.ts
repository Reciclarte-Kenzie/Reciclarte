import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--color-orange-80);
  min-height: 67px;
  max-height: 140px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 13px 16px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 968px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: space-between;

  & > img {
    height: 38px;
  }

  button {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 968px) {
    button {
      display: none;
    }
  }
`;

interface IActionsProps {
  toggle: boolean;
}

export const Actions = styled.div<IActionsProps>`
  display: ${(props) => (props.toggle ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  gap: 25px;

  button {
    width: 100%;
  }

  img {
    width: 30px;
  }
`;

export const LoginButton = styled.button`
  border: 2px solid #ffffff;
  background: #ffffff;
  border-radius: 8px;
  padding: 9px 25px;
  /* text-2 */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #f7941d;

  @media screen and (min-width: 968px) {
    border: none;
  }
`;

export const RegisterButton = styled.button`
  border: 2px solid #ffffff;
  border-radius: 8px;
  padding: 9px 25px;
  /* text-2 */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;
