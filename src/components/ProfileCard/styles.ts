import styled from "styled-components";

export const ProfileCard = styled.div`
  background: var(--color-white);
  box-shadow: 0px 0px 5px rgba(78, 32, 150, 0.25);

  @media screen and (min-width: 968px) {
    max-width: 600px;
    margin: 40px auto;
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 33px;
`;

export const ContentInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const ContentActions = styled.div`
  display: flex;
  justify-content: space-between;

  @media (min-width: 580px) {
    align-self: center;
    gap: 50px;
  }

  @media screen and (min-width: 968px) {
    justify-content: center;
    gap: 16px;

    button {
      width: 170px;
    }
  }
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 100%;
  border: none;
`;

export const Name = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: var(--font-size-16);
  line-height: 20px;
  color: var(--color-green-100);
`;

export const Bio = styled.span`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: var(--font-size-16);
  line-height: 20px;
  color: var(--color-grey-100);
`;

export const Button = styled.button`
  background: var(--color-green-80);
  border-radius: var(--radius-1);
  padding: 10px 16px;
  /* Text */
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: var(--font-size-16);
  line-height: 20px;
  color: var(--color-white);
`;
