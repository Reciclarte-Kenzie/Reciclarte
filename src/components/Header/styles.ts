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
