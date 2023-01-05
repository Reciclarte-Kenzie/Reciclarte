import styled from "styled-components";

export const Header = styled.header`
  background-color: var(--color-orange-80);
  height: 67px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1240px;
  padding: 0 8px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 44px;

  img {
    width: 30px;
  }
`;

export const LoginButton = styled.button`
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
